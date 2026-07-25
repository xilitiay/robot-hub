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
    sort_by:'Sort by', sort_featured:'Featured', sort_year:'Newest', sort_payload:'Payload', sort_price:'Price', sort_views:'Popular', sort_name:'Name', sort_models:'Model count', sort_country:'Country', group_by:'Group by', group_letter:'By letter', group_country:'By country',
    theme_light:'Light', theme_dark:'Dark', search_ph:'Search robots, brands or models…',
    results:'results', all:'All',
    compare:'Compare', compare_now:'Compare now', clear:'Clear', request_quote:'Request Quote', view_detail:'View details',
    spec_payload:'Payload', spec_reach:'Reach', spec_dof:'DOF', spec_weight:'Weight', spec_year:'Year', spec_speed:'Speed', spec_country:'Origin', spec_autonomy:'Autonomy', spec_category:'Category', spec_brand:'Brand', spec_price:'Price',
    applications:'Applications', related:'Related robots', back:'Back',
    rfq_title:'Request a Quote', rfq_sub:'Send an enquiry directly to the supplier. No checkout, no commission.',
    rfq_name:'Your name', rfq_company:'Company', rfq_email:'Email', rfq_phone:'Phone', rfq_msg:'Message', submit:'Submit', cancel:'Cancel', rfq_ok:'Enquiry sent! The supplier will contact you.',
    cmp_title:'Compare Robots', cmp_empty:'No robots selected. Add robots from the catalog to compare.', cmp_export:'Export CSV',
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
    sort_by:'排序', sort_featured:'精选优先', sort_year:'最新', sort_payload:'负载', sort_price:'价格', sort_views:'热门', sort_name:'名称', sort_models:'型号数', sort_country:'国家/地区', group_by:'分组', group_letter:'按字母', group_country:'按国家',
    theme_light:'浅色', theme_dark:'深色', search_ph:'搜索机器人、品牌或型号…',
    results:'个结果', all:'全部',
    compare:'对比', compare_now:'立即对比', clear:'清空', request_quote:'询价', view_detail:'查看详情',
    spec_payload:'负载', spec_reach:'臂展', spec_dof:'自由度', spec_weight:'重量', spec_year:'年份', spec_speed:'速度', spec_country:'产地', spec_autonomy:'自主度', spec_category:'类目', spec_brand:'品牌', spec_price:'价格',
    applications:'应用场景', related:'相关机器人', back:'返回',
    rfq_title:'发起询价', rfq_sub:'直接向供应商发送需求。无需下单，零佣金。',
    rfq_name:'您的姓名', rfq_company:'公司', rfq_email:'邮箱', rfq_phone:'电话', rfq_msg:'留言', submit:'提交', cancel:'取消', rfq_ok:'询价已发送！供应商将与您联系。',
    cmp_title:'机器人对比', cmp_empty:'尚未选择机器人。请从产品库中添加机器人进行对比。', cmp_export:'导出 CSV',
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
async function loadMeta(){ if(META) return META; META = await api('/api/meta'); return META; }
const api = (path)=> STATIC_MODE ? staticApi(path) : fetch(path).then(r=>r.json());

/* ---- Static (pre-rendered) mode: serve from bundled data instead of /api ---- */
function staticApi(path){
  const u = new URL(path, location.href);
  const q = Object.fromEntries(u.searchParams.entries());
  const p = u.pathname;
  if (p === '/api/meta') return Promise.resolve(window.ROBOTHUB_META || {});
  const m = p.match(/^\/api\/robots\/(.+)$/);
  if (m) {
    const id = decodeURIComponent(m[1]);
    const r = (window.ROBOTHUB_ROBOTS||[]).find(x => x.id === id);
    if (!r) return Promise.resolve({ error: 'not found' });
    const related = (window.ROBOTHUB_ROBOTS||[]).filter(x => x.category === r.category && x.id !== id).slice(0, 3);
    return Promise.resolve({ robot: r, related });
  }
  if (p === '/api/robots') {
    let arr = (window.ROBOTHUB_ROBOTS||[]).slice();
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
  if (p === '/api/brands') return Promise.resolve(window.ROBOTHUB_BRANDS || []);
  if (p === '/api/compare') {
    const ids = (q.ids || '').split(',').filter(Boolean);
    const items = (window.ROBOTHUB_ROBOTS||[]).filter(r => ids.includes(r.id));
    return Promise.resolve({ items });
  }
  return Promise.resolve({ error: 'unknown api' });
}

/* ---- Compare store ---- */
const CMP_KEY='cmp_ids';
const getCmp=()=>JSON.parse(localStorage.getItem(CMP_KEY)||'[]');
const setCmp=(a)=>{localStorage.setItem(CMP_KEY,JSON.stringify(a.slice(0,4)));renderTray();};
function toggleCmp(id){ let a=getCmp(); a.includes(id)?a=a.filter(x=>x!==id):(a.length<4&&a.push(id)); setCmp(a); document.querySelectorAll(`.cmp input[data-id="${id}"]`).forEach(c=>c.checked=getCmp().includes(id)); }

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
  input.addEventListener('input', render);
  input.addEventListener('focus', render);
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
