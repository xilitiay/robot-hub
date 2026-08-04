// RobotHub 全栈服务器 (零依赖: node:http + node:sqlite)
// RobotHub full-stack server (zero-dependency)
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { initDb, categories, autonomyLevels, countries, continents } = require('./db/schema.js');

const db = initDb();

// 基础安全响应头（演示级别；生产可加 CSP / HSTS）
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'robothub-admin-2026';

const MIME = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.js':'application/javascript; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon',
  '.woff2':'font/woff2'
};

function send(res, code, data, type='application/json; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type, 'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type,X-Admin-Token',
    ...SECURITY_HEADERS });
  res.end(typeof data === 'string' ? data : JSON.stringify(data));
}

function parseRobot(r) {
  return { ...r, apps: r.apps ? JSON.parse(r.apps) : [],
    featured: !!r.featured,
    countryInfo: countries[r.country] || null };
}

function readBody(req) {
  return new Promise((resolve) => {
    let b = '';
    req.on('data', c => b += c);
    req.on('end', () => { try { resolve(b ? JSON.parse(b) : {}); } catch { resolve({}); } });
  });
}

// ---------- API handlers ----------
function apiMeta(res) {
  const total = db.prepare('SELECT COUNT(*) c FROM robots').get().c;
  const brandCount = db.prepare('SELECT COUNT(DISTINCT brand) c FROM robots').get().c;
  const catCounts = {};
  db.prepare('SELECT category, COUNT(*) c FROM robots GROUP BY category').all()
    .forEach(row => catCounts[row.category] = row.c);
  const countryCounts = {};
  db.prepare('SELECT country, COUNT(*) c FROM robots GROUP BY country').all()
    .forEach(row => countryCounts[row.country] = row.c);
  send(res, 200, { categories, autonomyLevels, countries, continents,
    stats: { total, brandCount, catCounts, countryCounts, categoryCount: categories.length } });
}

// 1~2 个 ASCII 字符视为短词（与前端 _isShortTok 一致）
function isShortTok(s) { return /^[\x20-\x7e]{1,2}$/.test(s); }

// 相关性打分（与前端 app.js relevanceScore 保持一致的权重口径）
function relevanceScoreRow(r, q) {
  const toks = String(q || '').trim().toLowerCase().split(/\s+/).filter(Boolean).slice(0, 6);
  if (!toks.length) return 0;
  const model = (r.model || '').toLowerCase(), brand = (r.brand || '').toLowerCase(), bzh = (r.brandZh || '').toLowerCase();
  const full = (brand + ' ' + model).trim();
  const desc = ((r.descEn || '') + ' ' + (r.descZh || '')).toLowerCase();
  const apps = String(r.apps || '').toLowerCase();
  let sc = 0;
  for (const s of toks) {
    let hit = 0;
    if (model === s || full === s) hit = 120;
    else if (model.startsWith(s)) hit = 95;
    else if (brand.startsWith(s) || (bzh && bzh.startsWith(s))) hit = 85;
    else if (full.startsWith(s)) hit = 80;
    else if (model.includes(s)) hit = 60;
    else if (brand.includes(s) || (bzh && bzh.includes(s))) hit = 50;
    else if (isShortTok(s)) hit = 0;
    else if (apps.includes(s)) hit = 22;
    else if (desc.includes(s)) hit = 14;
    sc += hit;
  }
  if (!sc) return 0;
  if (toks.length > 1) sc += 10;
  if (r.featured) sc += 8;
  if (r.year) sc += Math.max(0, Math.min(6, (r.year - 2015) * 0.6));
  sc += Math.min(6, (r.views || 0) / 60);
  return sc;
}

function apiRobots(res, q) {
  const where = [], args = [];
  if (q.category) { where.push('category = ?'); args.push(q.category); }
  if (q.brand) {
    const bs = String(q.brand).split(',').filter(Boolean);
    if (bs.length === 1) { where.push('brand = ?'); args.push(bs[0]); }
    else { where.push('brand IN (' + bs.map(() => '?').join(',') + ')'); args.push(...bs); }
  }
  if (q.country) { where.push('country = ?'); args.push(q.country); }
  if (q.autonomy) { where.push('autonomy = ?'); args.push(q.autonomy); }
  if (q.featured) { where.push('featured = 1'); }
  if (q.q) {
    // 多词 AND；1~2 个 ASCII 字符的短词只查品牌/型号，避免被简介子串大量误命中
    const toks = String(q.q).trim().toLowerCase().split(/\s+/).filter(Boolean).slice(0, 6);
    for (const s of toks) {
      const t = '%' + s + '%';
      if (isShortTok(s)) {
        where.push('(LOWER(brand) LIKE ? OR LOWER(brandZh) LIKE ? OR LOWER(model) LIKE ?)');
        args.push(t, t, t);
      } else {
        where.push('(LOWER(brand) LIKE ? OR LOWER(brandZh) LIKE ? OR LOWER(model) LIKE ? OR LOWER(descEn) LIKE ? OR LOWER(descZh) LIKE ? OR LOWER(apps) LIKE ?)');
        args.push(t, t, t, t, t, t);
      }
    }
  }
  const wsql = where.length ? 'WHERE ' + where.join(' AND ') : '';
  let order = 'ORDER BY featured DESC, year DESC';
  if (q.sort === 'payload') order = 'ORDER BY payload DESC NULLS LAST';
  else if (q.sort === 'year') order = 'ORDER BY year DESC';
  else if (q.sort === 'price') order = 'ORDER BY price ASC NULLS LAST';
  else if (q.sort === 'views') order = 'ORDER BY views DESC';
  else if (q.sort === 'name') order = 'ORDER BY brand ASC, model ASC';

  const total = db.prepare(`SELECT COUNT(*) c FROM robots ${wsql}`).get(...args).c;
  const page = Math.max(1, parseInt(q.page) || 1);
  const limit = Math.min(500, Math.max(1, parseInt(q.limit) || 24));
  const offset = (page - 1) * limit;
  let rows;
  if (q.sort === 'relevance' && q.q) {
    // 相关性排序：SQL 难以表达权重，取全部命中行后在 JS 里打分再分页
    const all = db.prepare(`SELECT * FROM robots ${wsql}`).all(...args);
    const sc = new Map(all.map(r => [r, relevanceScoreRow(r, q.q)]));
    all.sort((a, b) => (sc.get(b) - sc.get(a))
      || ((b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      || ((b.year || 0) - (a.year || 0)));
    rows = all.slice(offset, offset + limit);
  } else {
    rows = db.prepare(`SELECT * FROM robots ${wsql} ${order} LIMIT ? OFFSET ?`)
      .all(...args, limit, offset);
  }
  send(res, 200, { items: rows.map(parseRobot), total, page,
    pages: Math.ceil(total / limit), limit });
}

function apiRobotDetail(res, id) {
  const r = db.prepare('SELECT * FROM robots WHERE id = ?').get(id);
  if (!r) return send(res, 404, { error: 'Not found' });
  db.prepare('UPDATE robots SET views = views + 1 WHERE id = ?').run(id);
  const related = db.prepare('SELECT * FROM robots WHERE category = ? AND id != ? ORDER BY featured DESC LIMIT 4')
    .all(r.category, id).map(parseRobot);
  send(res, 200, { robot: parseRobot(r), related });
}

function apiBrands(res) {
  const rows = db.prepare(`SELECT brand, brandZh, country, COUNT(*) c,
    GROUP_CONCAT(DISTINCT category) cats FROM robots GROUP BY brand ORDER BY c DESC, brand ASC`).all();
  send(res, 200, rows.map(r => ({ ...r, cats: r.cats ? r.cats.split(',') : [],
    countryInfo: countries[r.country] || null })));
}

function apiCompare(res, ids) {
  if (!ids) return send(res, 200, { items: [] });
  const list = ids.split(',').slice(0, 4);
  const items = list.map(id => db.prepare('SELECT * FROM robots WHERE id = ?').get(id))
    .filter(Boolean).map(parseRobot);
  send(res, 200, { items });
}

async function apiRfq(req, res) {
  const b = await readBody(req);
  if (!b.name || !b.email) return send(res, 400, { error: 'name & email required' });
  const info = db.prepare(`INSERT INTO rfq (robotId,name,company,email,phone,message,createdAt,status)
    VALUES (?,?,?,?,?,?,?,?)`).run(b.robotId||'', b.name, b.company||'', b.email,
    b.phone||'', b.message||'', new Date().toISOString(), 'pending');
  send(res, 200, { ok: true, id: Number(info.lastInsertRowid) });
}

// ---------- Admin (token protected) ----------
function checkAdmin(req) { return req.headers['x-admin-token'] === ADMIN_TOKEN; }

async function adminUpsert(req, res, id) {
  if (!checkAdmin(req)) return send(res, 401, { error: 'unauthorized' });
  const b = await readBody(req);
  const fields = ['brand','brandZh','model','category','autonomy','country','payload','reach','dof','weight','price','priceText','year','descEn','descZh'];
  if (id) {
    const exist = db.prepare('SELECT id FROM robots WHERE id = ?').get(id);
    if (!exist) return send(res, 404, { error: 'not found' });
    const sets = fields.map(f => `${f} = ?`).join(', ');
    db.prepare(`UPDATE robots SET ${sets}, apps = ?, featured = ? WHERE id = ?`)
      .run(...fields.map(f => b[f] ?? null), JSON.stringify(b.apps||[]), b.featured?1:0, id);
    return send(res, 200, { ok: true, id });
  } else {
    const newId = b.id || (b.brand+'-'+b.model).toLowerCase().replace(/[^a-z0-9]+/g,'-');
    const cols = ['id',...fields,'apps','featured'];
    const vals = [newId, ...fields.map(f => b[f] ?? null), JSON.stringify(b.apps||[]), b.featured?1:0];
    db.prepare(`INSERT OR REPLACE INTO robots (${cols.join(',')}) VALUES (${cols.map(()=>'?').join(',')})`).run(...vals);
    return send(res, 200, { ok: true, id: newId });
  }
}

function adminDelete(req, res, id) {
  if (!checkAdmin(req)) return send(res, 401, { error: 'unauthorized' });
  db.prepare('DELETE FROM robots WHERE id = ?').run(id);
  send(res, 200, { ok: true });
}

function adminRfqList(req, res) {
  if (!checkAdmin(req)) return send(res, 401, { error: 'unauthorized' });
  send(res, 200, db.prepare('SELECT * FROM rfq ORDER BY id DESC').all());
}

async function adminRfqUpdate(req, res, id) {
  if (!checkAdmin(req)) return send(res, 401, { error: 'unauthorized' });
  const b = await readBody(req);
  const allowed = ['status', 'note'];
  const sets = [], args = [];
  for (const k of allowed) { if (b[k] != null) { sets.push(`${k} = ?`); args.push(b[k]); } }
  if (!sets.length) return send(res, 200, { ok: true, id });
  args.push(id);
  db.prepare(`UPDATE rfq SET ${sets.join(', ')} WHERE id = ?`).run(...args);
  return send(res, 200, { ok: true, id });
}

// ---------- Static ----------
function serveStatic(req, res, pathname) {
  let file = path.join(PUBLIC, pathname === '/' ? 'index.html' : pathname);
  if (!file.startsWith(PUBLIC)) return send(res, 403, 'Forbidden', 'text/plain');
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      // SPA-ish fallback for clean routes without extension
      if (!path.extname(pathname)) {
        const html = path.join(PUBLIC, pathname + '.html');
        if (fs.existsSync(html)) return streamFile(res, html);
      }
      return send(res, 404, 'Not Found', 'text/plain');
    }
    streamFile(res, file);
  });
}
function streamFile(res, file) {
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream',
    'Cache-Control': 'public, max-age=3600', ...SECURITY_HEADERS });
  fs.createReadStream(file).pipe(res);
}

// ---------- Router ----------
const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const p = parsed.pathname, q = parsed.query;
  if (req.method === 'OPTIONS') return send(res, 204, '');

  try {
    if (p === '/api/health') return send(res, 200, { status: 'ok', ts: Date.now() });
    if (p === '/api/meta') return apiMeta(res);
    if (p === '/api/robots' && req.method === 'GET') return apiRobots(res, q);
    if (p.startsWith('/api/robots/') && req.method === 'GET')
      return apiRobotDetail(res, decodeURIComponent(p.split('/')[3]));
    if (p === '/api/brands') return apiBrands(res);
    if (p === '/api/compare') return apiCompare(res, q.ids);
    if (p === '/api/rfq' && req.method === 'POST') return apiRfq(req, res);

    if (p === '/api/admin/robots' && req.method === 'POST') return adminUpsert(req, res, null);
    if (p.startsWith('/api/admin/robots/') && req.method === 'PUT')
      return adminUpsert(req, res, decodeURIComponent(p.split('/')[4]));
    if (p.startsWith('/api/admin/robots/') && req.method === 'DELETE')
      return adminDelete(req, res, decodeURIComponent(p.split('/')[4]));
    if (p === '/api/admin/rfq' && req.method === 'GET') return adminRfqList(req, res);
    if (p.startsWith('/api/admin/rfq/') && req.method === 'PATCH')
      return adminRfqUpdate(req, res, decodeURIComponent(p.split('/')[4]));

    if (p.startsWith('/api/')) return send(res, 404, { error: 'unknown api' });
    return serveStatic(req, res, p);
  } catch (e) {
    console.error(e);
    send(res, 500, { error: String(e.message || e) });
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') console.error(`✗ Port ${PORT} is already in use. Set PORT env or free the port, then retry.`);
  else console.error('Server error:', e);
  process.exit(1);
});
server.listen(PORT, () => console.log(`✓ RobotHub running at http://localhost:${PORT}`));
