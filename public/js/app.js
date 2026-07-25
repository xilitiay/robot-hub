/* ===== RobotHub shared frontend (i18n + API + components) ===== */
const I18N = {
  en: {
    nav_home:'Home', nav_catalog:'Catalog', nav_brands:'Brands', nav_compare:'Compare', nav_admin:'Admin',
    site_tag:'The Global Robot Directory',
    hero_title:'Discover, compare & research every robot on Earth',
    hero_sub:'The world\'s most comprehensive robot product database — industrial arms, cobots, humanoids, AMRs, medical & service robots by specs, price and autonomy.',
    hero_search:'Search robots, brands or models…', search:'Search',
    stat_robots:'Robots', stat_brands:'Brands', stat_cats:'Categories', stat_countries:'Countries',
    cats_title:'Browse by Category', cats_sub:'Explore 11 major robot categories', view_all:'View all',
    featured_title:'Featured Robots', featured_sub:'Hand-picked flagship models across categories',
    latest_title:'Latest Additions', latest_sub:'Newest models in the database',
    filters:'Filters', f_category:'Category', f_brand:'Brand', f_country:'Country', f_autonomy:'Autonomy', reset:'Reset filters',
    sort_by:'Sort by', sort_featured:'Featured', sort_year:'Newest', sort_payload:'Payload', sort_price:'Price', sort_views:'Popular', sort_name:'Name', sort_models:'Model count', sort_country:'Country', group_by:'Group by', group_letter:'By letter', group_country:'By country', search_robots:'Search robots by brand or model…', all_categories:'All categories', all_countries:'All countries', search_rfq:'Search leads by name, company, email…',
    rfq_status:'Status', status_pending:'Pending', status_done:'Processed', mark_done:'Mark processed', mark_pending:'Mark pending', filter_status:'Status', all_status:'All statuses', prev:'Prev', next:'Next', per_page:'Per page', page_info:'Page {p} of {n}', export_csv:'Export CSV', exp_robots:'Export robots', exp_rfq:'Export RFQ', exp_brands:'Export brands',
    theme_light:'Light', theme_dark:'Dark', search_ph:'Search robots, brands or models…',
    results:'results', all:'All',
    compare:'Compare', compare_now:'Compare now', clear:'Clear', request_quote:'Request Quote', view_detail:'View details',
    spec_payload:'Payload', spec_reach:'Reach', spec_dof:'DOF', spec_weight:'Weight', spec_year:'Year', spec_speed:'Speed', spec_country:'Origin', spec_autonomy:'Autonomy', spec_category:'Category', spec_brand:'Brand', spec_price:'Price',
    applications:'Applications', related:'Related robots', back:'Back',
    rfq_title:'Request a Quote', rfq_sub:'Send an enquiry directly to the supplier. No checkout, no commission.',
    rfq_name:'Your name', rfq_company:'Company', rfq_email:'Email', rfq_phone:'Phone', rfq_msg:'Message', submit:'Submit', cancel:'Cancel', rfq_ok:'Enquiry sent! The supplier will contact you.',
    cmp_title:'Compare Robots', cmp_empty:'No robots selected. Add robots from the catalog to compare.', cmp_export:'Export CSV', share_link:'Copy link', copied:'Link copied', diff_only:'Differences only', cmp_add:'Add robot', cmp_select_first:'Select robots to share', cmp_max:'You can compare up to 4 robots', cmp_radar:'Radar chart', drag_sort:'Drag to reorder',
    brands_title:'All Brands', brands_sub:'Leading robotics manufacturers worldwide', models:'models',
    admin_title:'Admin Console', admin_sub:'Manage the robot database & view RFQ enquiries',
    admin_robots:'Robots', admin_rfq:'RFQ Enquiries', add_robot:'+ Add Robot', edit:'Edit', del:'Delete',
    admin_login:'Enter admin token to manage data', token:'Admin token', login:'Unlock',
    empty_title:'No robots found', empty_sub:'Try adjusting your filters or search.',
    custom_title:'Don\'t see what you need?', custom_sub:'Spec a robot to your exact requirements. We match you with verified manufacturers.',
    foot_about:'RobotHub is the definitive global directory of robots — discover, compare and source robots from every major brand and category.',
    foot_explore:'Explore', foot_company:'Company', foot_legal:'Legal', foot_rights:'RobotHub · Global Robot Product Database · For demonstration purposes.'
  },
  zh: {
    nav_home:'首页', nav_catalog:'产品库', nav_brands:'品牌', nav_compare:'对比', nav_admin:'管理台',
    site_tag:'全球机器人产品库',
    hero_title:'发现、对比与研究全球每一款机器人',
    hero_sub:'全球最全面的机器人产品数据库——工业机械臂、协作机器人、人形机器人、移动机器人、医疗与服务机器人，按参数、价格与自主度检索。',
    hero_search:'搜索机器人、品牌或型号…', search:'搜索',
    stat_robots:'款机器人', stat_brands:'个品牌', stat_cats:'大类目', stat_countries:'个国家/地区',
    cats_title:'按类目浏览', cats_sub:'探索 11 大机器人类目', view_all:'查看全部',
    featured_title:'精选机器人', featured_sub:'跨类目精选旗舰型号',
    latest_title:'最新收录', latest_sub:'数据库中的最新型号',
    filters:'筛选', f_category:'类目', f_brand:'品牌', f_country:'国家/地区', f_autonomy:'自主度', reset:'重置筛选',
    sort_by:'排序', sort_featured:'精选优先', sort_year:'最新', sort_payload:'负载', sort_price:'价格', sort_views:'热门', sort_name:'名称', sort_models:'型号数', sort_country:'国家/地区', group_by:'分组', group_letter:'按字母', group_country:'按国家', search_robots:'按品牌或型号搜索…', all_categories:'全部分类', all_countries:'全部国家', search_rfq:'按姓名/公司/邮箱搜索询盘…',
    rfq_status:'状态', status_pending:'待处理', status_done:'已处理', mark_done:'标记已处理', mark_pending:'标记待处理', filter_status:'状态', all_status:'全部状态', prev:'上一页', next:'下一页', per_page:'每页', page_info:'第 {p} / {n} 页', export_csv:'导出 CSV', exp_robots:'导出机器人', exp_rfq:'导出询盘', exp_brands:'导出品牌',
    theme_light:'浅色', theme_dark:'深色', search_ph:'搜索机器人、品牌或型号…',
    results:'个结果', all:'全部',
    compare:'对比', compare_now:'立即对比', clear:'清空', request_quote:'询价', view_detail:'查看详情',
    spec_payload:'负载', spec_reach:'臂展', spec_dof:'自由度', spec_weight:'重量', spec_year:'年份', spec_speed:'速度', spec_country:'产地', spec_autonomy:'自主度', spec_category:'类目', spec_brand:'品牌', spec_price:'价格',
    applications:'应用场景', related:'相关机器人', back:'返回',
    rfq_title:'发起询价', rfq_sub:'直接向供应商发送需求。无需下单，零佣金。',
    rfq_name:'您的姓名', rfq_company:'公司', rfq_email:'邮箱', rfq_phone:'电话', rfq_msg:'留言', submit:'提交', cancel:'取消', rfq_ok:'询价已发送！供应商将与您联系。',
    cmp_title:'机器人对比', cmp_empty:'尚未选择机器人。请从产品库中添加机器人进行对比。', cmp_export:'导出 CSV', share_link:'复制链接', copied:'链接已复制', diff_only:'只看差异', cmp_add:'添加机器人', cmp_select_first:'请先选择机器人', cmp_max:'最多对比 4 款机器人', cmp_radar:'雷达图', drag_sort:'拖拽排序',
    brands_title:'全部品牌', brands_sub:'全球领先的机器人制造商', models:'款型号',
    admin_title:'管理控制台', admin_sub:'管理机器人数据库并查看询价记录',
    admin_robots:'机器人', admin_rfq:'询价记录', add_robot:'+ 新增机器人', edit:'编辑', del:'删除',
    admin_login:'输入管理令牌以管理数据', token:'管理令牌', login:'解锁',
    empty_title:'未找到机器人', empty_sub:'请调整筛选条件或搜索关键词。',
    custom_title:'没有找到需要的型号？', custom_sub:'按您的精确需求定制机器人，我们为您匹配认证制造商。',
    foot_about:'RobotHub 是权威的全球机器人目录——发现、对比并采购来自各大品牌与类目的机器人。',
    foot_explore:'探索', foot_company:'公司', foot_legal:'法律', foot_rights:'RobotHub · 全球机器人产品库 · 仅用于演示。'
  }
};

let LANG = localStorage.getItem('lang') || 'zh';
const t = (k) => (I18N[LANG] && I18N[LANG][k]) || (I18N.en[k]) || k;
const EMOJI = { industrial:'🦾', cobot:'🤝', amr:'🛞', humanoid:'🧍', quadruped:'🐕', medical:'🏥', service:'🛎️', consumer:'🏠', agricultural:'🌾', special:'🚁', logistics:'📦' };

let META = null;
const STATIC_MODE = !!window.ROBOTHUB_STATIC;   // set by static-bundle.js in the static build

// 通用防抖工具（用于搜索、筛选等高频输入）
function debounce(fn, wait){ let t; return function(...a){ clearTimeout(t); t=setTimeout(()=>fn.apply(this, a), wait||200); }; }

async function loadMeta(){ if(META) return META; META = await api('/api/meta'); return META; }
// API 封装：静态模式读预渲染包；动态模式 fetch，失败兜底返回空结构，避免整页白屏
const api = (path, opts)=> STATIC_MODE ? staticApi(path, opts) : fetch(path, opts)
  .then(r=>{ if(!r.ok) throw new Error('HTTP '+r.status); return r.json(); })
  .catch(err=>{ console.error('[api] '+path, err); return { error:String(err.message||err), items:[], total:0, page:1, totalPages:1 }; });

/* ---- Static-mode admin store (localStorage overlay) ----
   让管理台在只读静态托管上也能工作：增删改写入本浏览器 localStorage，
   并同步反映到产品库 / 品牌 / 对比页（它们都读同一覆盖层）。 */
const ADMIN_OV_KEY = 'rh_admin_overlay';     // 机器人工作集（覆盖层）
const ADMIN_RFQ_KEY = 'rh_admin_rfq';         // 询价记录
const ADMIN_BASE_KEY = 'rh_admin_base_len';   // 基准数据条数（用于重建后同步）
function _staticRobots(){
  try {
    const raw = localStorage.getItem(ADMIN_OV_KEY);
    const base = localStorage.getItem(ADMIN_BASE_KEY);
    if (raw && base && Number(base) === (window.ROBOTHUB_ROBOTS||[]).length) return JSON.parse(raw);
  } catch(e){}
  const seed = (window.ROBOTHUB_ROBOTS||[]).map(r=>({...r}));   // 首次使用，从打包数据初始化
  try { localStorage.setItem(ADMIN_OV_KEY, JSON.stringify(seed)); localStorage.setItem(ADMIN_BASE_KEY, String(seed.length)); } catch(e){}
  return seed;
}
function _saveStaticRobots(arr){ try { localStorage.setItem(ADMIN_OV_KEY, JSON.stringify(arr)); } catch(e){} }
function _staticBrands(){
  const M = window.ROBOTHUB_META || {};
  const by = {};
  _staticRobots().forEach(r=>{
    if(!by[r.brand]) by[r.brand] = { brand:r.brand, brandZh:r.brandZh, country:r.country, c:0, cats:new Set() };
    by[r.brand].c++; by[r.brand].cats.add(r.category);
  });
  return Object.values(by).map(b=>({ ...b, cats:[...b.cats], countryInfo:(M.countries&&M.countries[b.country])||null }))
    .sort((a,b)=>b.c-a.c);
}
function _robotFromBody(body, id){
  const M = window.ROBOTHUB_META || {};
  const rid = id || (body.brand+'-'+body.model).toLowerCase().replace(/[^a-z0-9]+/g,'-');
  return {
    id: rid, brand: body.brand||'', brandZh: body.brandZh||'', model: body.model||'',
    category: body.category||'', autonomy: body.autonomy||'', country: body.country||'',
    payload: (body.payload===''||body.payload==null)?null:Number(body.payload),
    reach: (body.reach===''||body.reach==null)?null:Number(body.reach),
    dof: (body.dof===''||body.dof==null)?null:Number(body.dof),
    weight: (body.weight===''||body.weight==null)?null:Number(body.weight),
    price: (body.price===''||body.price==null)?null:Number(body.price),
    priceText: body.priceText||'', year: (body.year===''||body.year==null)?null:Number(body.year),
    descEn: body.descEn||'', descZh: body.descZh||'',
    apps: Array.isArray(body.apps)?body.apps:(body.apps?String(body.apps).split(',').map(s=>s.trim()).filter(Boolean):[]),
    featured: !!body.featured, views: 0,
    countryInfo: (M.countries&&M.countries[body.country])||null
  };
}
function staticAdminApi(path, opts={}){
  const u = new URL(path, location.href);
  const p = u.pathname;
  const method = (opts.method||'GET').toUpperCase();
  const body = opts.body ? JSON.parse(opts.body) : {};
  if (p === '/api/admin/rfq' && method === 'GET') {
    try { return Promise.resolve(JSON.parse(localStorage.getItem(ADMIN_RFQ_KEY)||'[]')); } catch(e){ return Promise.resolve([]); }
  }
  const ru = p.match(/^\/api\/admin\/rfq\/(.+)$/);
  if (ru) {
    const id = Number(decodeURIComponent(ru[1]));
    if (method === 'PATCH') {
      return staticRfqUpdate(id, body);
    }
  }
  if (p === '/api/admin/robots' && method === 'POST') {
    const robot = _robotFromBody(body, null);
    const arr = _staticRobots(); arr.push(robot); _saveStaticRobots(arr);
    return Promise.resolve({ ok:true, id: robot.id });
  }
  const mu = p.match(/^\/api\/admin\/robots\/(.+)$/);
  if (mu) {
    const id = decodeURIComponent(mu[1]);
    const arr = _staticRobots();
    if (method === 'PUT') {
      const robot = _robotFromBody(body, id);
      const i = arr.findIndex(r=>r.id===id);
      if (i<0) return Promise.resolve({ ok:false, error:'not found' });
      arr[i] = robot; _saveStaticRobots(arr); return Promise.resolve({ ok:true, id });
    }
    if (method === 'DELETE') {
      _saveStaticRobots(arr.filter(r=>r.id!==id));
      return Promise.resolve({ ok:true });
    }
  }
  return Promise.resolve({ ok:false, error:'unknown' });
}
function staticRfqSubmit(body){
  let list=[]; try { list=JSON.parse(localStorage.getItem(ADMIN_RFQ_KEY)||'[]'); } catch(e){}
  const item = { id: (list.length?Math.max(0,...list.map(x=>x.id||0)):0)+1, ...body,
    status: body.status || 'pending', createdAt: body.createdAt || new Date().toISOString() };
  list.push(item); try { localStorage.setItem(ADMIN_RFQ_KEY, JSON.stringify(list)); } catch(e){}
  return Promise.resolve({ ok:true, id:item.id });
}
// 更新单条询价（用于标记已处理/状态流转），静态模式落本地 localStorage
function staticRfqUpdate(id, patch){
  let list=[]; try { list=JSON.parse(localStorage.getItem(ADMIN_RFQ_KEY)||'[]'); } catch(e){}
  const i = list.findIndex(r=>r.id===id);
  if(i<0) return Promise.resolve({ ok:false, error:'not found' });
  list[i] = { ...list[i], ...patch };
  try { localStorage.setItem(ADMIN_RFQ_KEY, JSON.stringify(list)); } catch(e){}
  return Promise.resolve({ ok:true });
}

/* ---- Static (pre-rendered) mode: serve from bundled data instead of /api ---- */
function staticApi(path, opts){
  const u = new URL(path, location.href);
  const q = Object.fromEntries(u.searchParams.entries());
  const p = u.pathname;
  const method = ((opts&&opts.method)||'GET').toUpperCase();
  const body = (opts&&opts.body) ? JSON.parse(opts.body) : {};
  if (p === '/api/meta') return Promise.resolve(window.ROBOTHUB_META || {});
  if (p === '/api/rfq' && method === 'POST') return staticRfqSubmit(body);
  const m = p.match(/^\/api\/robots\/(.+)$/);
  if (m) {
    const id = decodeURIComponent(m[1]);
    const r = _staticRobots().find(x => x.id === id);
    if (!r) return Promise.resolve({ error: 'not found' });
    const related = _staticRobots().filter(x => x.category === r.category && x.id !== id).slice(0, 3);
    return Promise.resolve({ robot: r, related });
  }
  if (p === '/api/robots') {
    let arr = _staticRobots().slice();
    if (q.category) arr = arr.filter(r => r.category === q.category);
    if (q.brand) arr = arr.filter(r => r.brand === q.brand);
    if (q.country) arr = arr.filter(r => r.country === q.country);
    if (q.autonomy) arr = arr.filter(r => r.autonomy === q.autonomy);
    if (q.featured) arr = arr.filter(r => r.featured);
    if (q.q) { const s = String(q.q).toLowerCase(); arr = arr.filter(r => (r.brand+' '+r.model+' '+(r.brandZh||'')+' '+(r.descEn||'')).toLowerCase().includes(s)); }
    const total = arr.length;
    const sort = q.sort || '';
    arr.sort((a, b) => {
      if (sort === 'payload') return (b.payload||0) - (a.payload||0);
      if (sort === 'year') return (b.year||0) - (a.year||0);
      if (sort === 'price') return (a.price||1e12) - (b.price||1e12);
      if (sort === 'name') return (a.brand + a.model).localeCompare(b.brand + b.model);
      if (sort === 'views') return (b.views||0) - (a.views||0);
      if (!!b.featured !== !!a.featured) return (b.featured?1:0) - (a.featured?1:0);
      return (b.year||0) - (a.year||0);
    });
    const page = parseInt(q.page || '1', 10);
    const limit = parseInt(q.limit || '24', 10);
    const start = (page - 1) * limit;
    const items = arr.slice(start, start + limit);
    const totalPages = Math.max(1, Math.ceil(total / limit));
    return Promise.resolve({ items, total, page, totalPages });
  }
  if (p === '/api/brands') return Promise.resolve(_staticBrands());
  if (p === '/api/compare') {
    const ids = (q.ids || '').split(',').filter(Boolean);
    const items = _staticRobots().filter(r => ids.includes(r.id));
    return Promise.resolve({ items });
  }
  return Promise.resolve({ error: 'unknown api' });
}

/* ---- Compare store ---- */
const CMP_KEY='cmp_ids';
const getCmp=()=>JSON.parse(localStorage.getItem(CMP_KEY)||'[]');
const setCmp=(a)=>{localStorage.setItem(CMP_KEY,JSON.stringify(a.slice(0,4)));renderTray();};
function toggleCmp(id){
  let a=getCmp();
  if(a.includes(id)){
    a=a.filter(x=>x!==id);
    setCmp(a);
    toast(LANG==='zh'?'已移出对比':'Removed from compare','ok');
  } else {
    if(a.length>=4){ toast(t('cmp_max'),'err'); return; }
    a.push(id);
    setCmp(a);
    toast(LANG==='zh'?'已加入对比':'Added to compare','ok');
  }
  document.querySelectorAll(`.cmp input[data-id="${id}"]`).forEach(c=>c.checked=getCmp().includes(id));
}

/* ---- Language ---- */
function setLang(l){ LANG=l; localStorage.setItem('lang',l); document.documentElement.lang=l==='zh'?'zh-CN':'en'; applyI18n(); document.dispatchEvent(new Event('langchange')); }
function applyI18n(){
  document.querySelectorAll('[data-i]').forEach(el=>{ el.textContent=t(el.dataset.i); });
  document.querySelectorAll('[data-ph]').forEach(el=>{ el.placeholder=t(el.dataset.ph); });
  document.querySelectorAll('.lang-toggle button').forEach(b=>b.classList.toggle('on',b.dataset.l===LANG));
}

/* ---- Theme (light / dark) ---- */
const THEME_KEY='theme';
function getTheme(){ return localStorage.getItem(THEME_KEY) || 'light'; }
function setTheme(v){ localStorage.setItem(THEME_KEY, v); document.documentElement.setAttribute('data-theme', v); updateThemeBtn(); }
function toggleTheme(){ setTheme(getTheme()==='dark' ? 'light' : 'dark'); }
function updateThemeBtn(){ document.querySelectorAll('.theme-toggle').forEach(b=>{ b.textContent = getTheme()==='dark' ? '☀️' : '🌙'; }); }
// apply early so there is no flash
document.documentElement.setAttribute('data-theme', getTheme());

/* ---- Live search suggestions ---- */
function setupSearch(input, box){
  if(!input||!box) return;
  const render = async ()=>{
    const v = input.value.trim();
    if(v.length < 1){ box.style.display='none'; return; }
    const d = await api('/api/robots?q='+encodeURIComponent(v)+'&limit=6');
    if(!d.items || !d.items.length){ box.style.display='none'; return; }
    box.innerHTML = d.items.map(r=>`<a class="sug" href="/detail.html?id=${r.id}">
      <span class="si">${EMOJI[r.category]||'🤖'}</span>
      <span class="st"><b>${r.brand} ${r.model}</b><i>${r.countryInfo?r.countryInfo.flag+' ':''}${(META?.categories||[]).find(c=>c.id===r.category)?(LANG==='zh'?(META.categories.find(c=>c.id===r.category).zh):(META.categories.find(c=>c.id===r.category).en)):r.category}</i></span>
    </a>`).join('');
    box.style.display='block';
  };
  const onType = debounce(render, 200);
  input.addEventListener('input', onType);
  input.addEventListener('focus', onType);
  input.addEventListener('keydown', e=>{ if(e.key==='Enter' && input.value.trim()){ location.href='/catalog.html?q='+encodeURIComponent(input.value.trim()); } });
  input.addEventListener('blur', ()=> setTimeout(()=>box.style.display='none', 180));
  box.addEventListener('mousedown', e=> e.preventDefault());
}

/* ---- Header / Footer ---- */
function renderChrome(active){
  const adminLink = STATIC_MODE ? '' : `<a href="/admin.html" data-i="nav_admin" class="${active==='admin'?'active':''}"></a>`;
  const header=`<header class="site-header"><div class="container"><nav class="nav">
    <a class="logo" href="/"><span class="mark">🤖</span><span>Robot<b>Hub</b></span></a>
    <div class="nav-links">
      <a href="/" data-i="nav_home" class="${active==='home'?'active':''}"></a>
      <a href="/catalog.html" data-i="nav_catalog" class="${active==='catalog'?'active':''}"></a>
      <a href="/brands.html" data-i="nav_brands" class="${active==='brands'?'active':''}"></a>
      <a href="/compare.html" data-i="nav_compare" class="${active==='compare'?'active':''}"></a>
      ${adminLink}
    </div>
    <div class="nav-right">
      <button class="theme-toggle" onclick="toggleTheme()" title="Theme">🌙</button>
      <div class="lang-toggle"><button data-l="zh" onclick="setLang('zh')">中</button><button data-l="en" onclick="setLang('en')">EN</button></div>
      <a class="btn btn-primary" href="/catalog.html" data-i="nav_catalog"></a>
    </div></nav></div></header>`;
  const foot=`<footer class="site-footer"><div class="container"><div class="footer-grid">
    <div class="footer-brand"><div class="logo"><span class="mark">🤖</span><span>Robot<b style="color:#818cf8">Hub</b></span></div><p data-i="foot_about"></p></div>
    <div><h4 data-i="foot_explore"></h4><a href="/catalog.html" data-i="nav_catalog"></a><a href="/brands.html" data-i="nav_brands"></a><a href="/compare.html" data-i="nav_compare"></a></div>
    <div><h4 data-i="foot_company"></h4><a href="#">About</a><a href="#">Blog</a><a href="#">Contact</a></div>
    <div><h4 data-i="foot_legal"></h4><a href="#">Privacy</a><a href="#">Terms</a></div>
    </div><div class="footer-bottom">© 2026 <span data-i="foot_rights"></span></div></div></footer>
    <div class="compare-tray" id="cmpTray"><div class="inner">
      <span class="lbl" data-i="compare"></span><div class="items" id="cmpItems"></div>
      <button class="btn btn-ghost" onclick="setCmp([])" data-i="clear"></button>
      <a class="btn btn-primary" href="/compare.html" data-i="compare_now"></a>
    </div></div>`;
  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',foot);
  updateThemeBtn();
  injectExtras();
}
function renderTray(){
  const ids=getCmp(), tray=document.getElementById('cmpTray'); if(!tray) return;
  tray.classList.toggle('show',ids.length>0);
  const box=document.getElementById('cmpItems');
  Promise.all(ids.map(id=>api('/api/robots/'+id).then(d=>d.robot).catch(()=>null))).then(list=>{
    box.innerHTML=list.filter(Boolean).map(r=>`<span class="ci"><span>${EMOJI[r.category]}</span>${r.brand} ${r.model}<span class="x" onclick="toggleCmp('${r.id}')">×</span></span>`).join('');
  });
}

/* ---- Robot card ---- */
function brandInitials(brand){
  if(!brand) return '?';
  const parts = brand.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/);
  if(parts.length>=2) return (parts[0][0]+parts[1][0]).toUpperCase();
  return brand.slice(0,2).toUpperCase();
}
function robotCard(r){
  const cmp=getCmp().includes(r.id);
  const specs=[];
  if(r.payload!=null) specs.push(`${t('spec_payload')} ${r.payload}kg`);
  if(r.reach!=null) specs.push(`${t('spec_reach')} ${r.reach}mm`);
  if(r.dof!=null) specs.push(`${r.dof} ${t('spec_dof')}`);
  const autoLabel=(META?.autonomyLevels||[]).find(a=>a.id===r.autonomy);
  const catLabel=(META?.categories||[]).find(c=>c.id===r.category);
  return `<div class="rcard cat-${r.category}">
    <a class="thumb" href="/detail.html?id=${r.id}">
      <span class="watermark">${brandInitials(r.brand)}</span>
      <span class="emoji">${EMOJI[r.category]||'🤖'}</span>
      ${r.featured?`<span class="feat">★ ${LANG==='zh'?'精选':'FEATURED'}</span>`:''}
      <span class="flag">${r.countryInfo?r.countryInfo.flag:''}</span>
    </a>
    <div class="body">
      <div class="tags">
        <span class="tag cat">${catLabel?(LANG==='zh'?catLabel.zh:catLabel.en):r.category}</span>
        <span class="tag auto">${autoLabel?(LANG==='zh'?autoLabel.zh:autoLabel.en):r.autonomy}</span>
      </div>
      <div class="brand">${LANG==='zh'?(r.brandZh||r.brand):r.brand}</div>
      <h3><a href="/detail.html?id=${r.id}">${r.model}</a></h3>
      <div class="specs">${specs.map(s=>`<span class="spec">${s}</span>`).join('')}</div>
      <div class="foot">
        <span class="price">${r.priceText||'—'}</span>
        <label class="cmp"><input type="checkbox" data-id="${r.id}" ${cmp?'checked':''} onchange="toggleCmp('${r.id}')"> <span data-i="compare">${t('compare')}</span></label>
      </div>
    </div></div>`;
}

/* ---- CSV export (UTF-8 BOM so Excel reads Chinese correctly) ---- */
function exportCsv(filename, header, rows){
  const esc = v => {
    if (v == null) return '';
    let s = String(v);
    if (/[",\n\r]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  };
  const lines = [header.map(esc).join(',')].concat(rows.map(r => r.map(esc).join(',')));
  const csv = '﻿' + lines.join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast(t('export_csv') + ': ' + filename, 'ok');
}

document.addEventListener('DOMContentLoaded',()=>{ document.documentElement.lang=LANG==='zh'?'zh-CN':'en'; });

/* ---- Toast notifications ---- */
function toast(msg, type){
  let box=document.getElementById('toastBox');
  if(!box){ box=document.createElement('div'); box.id='toastBox'; box.className='toast-box'; document.body.appendChild(box); }
  const el=document.createElement('div'); el.className='toast '+(type||'');
  const ic=type==='ok'?'✓':type==='err'?'!':'ℹ';
  el.innerHTML='<span class="ti">'+ic+'</span><span>'+msg+'</span>';
  box.appendChild(el);
  setTimeout(()=>{ el.style.animation='toastOut .3s ease forwards'; setTimeout(()=>el.remove(),300); },2600);
}

/* ---- Count-up animation ---- */
function animateCount(el, target, dur){
  dur=dur||1100; const start=performance.now();
  function step(now){ const p=Math.min(1,(now-start)/dur); const e=1-Math.pow(1-p,3); el.textContent=Math.round(target*e).toLocaleString(); if(p<1) requestAnimationFrame(step); else el.textContent=target.toLocaleString(); }
  requestAnimationFrame(step);
}

/* ---- Chrome extras (back-to-top) ---- */
function injectExtras(){
  if(document.getElementById('toTop')) return;
  const b=document.createElement('button'); b.id='toTop'; b.className='to-top'; b.innerHTML='&#8593;'; b.title='Back to top';
  b.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  document.body.appendChild(b);
  window.addEventListener('scroll',()=>{ b.classList.toggle('show', window.scrollY>400); },{passive:true});
}
