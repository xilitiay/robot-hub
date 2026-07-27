const fs=require('fs');
const { JSDOM }=require('jsdom');
const DIST='F:/workbuddy/机器人类目产品型号分类大全/robot-hub/dist';
const bundle=fs.readFileSync(DIST+'/static-bundle.js','utf8');
const app=fs.readFileSync(DIST+'/js/app.js','utf8');
let html=fs.readFileSync(DIST+'/favorites.html','utf8');
html=html.replace(/<script src="[^"]+"><\/script>/g,'');
const inline=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const dom=new JSDOM(html,{runScripts:'outside-only',url:'https://x.test/'});
const {window}=dom;
window.HTMLCanvasElement.prototype.getContext=()=>({});
window.fetch=()=>Promise.resolve({json:()=>Promise.resolve({robot:{id:'x',brand:'B',model:'M',category:'c'}})});
const ls={store:{},getItem:k=>k in ls.store?ls.store[k]:null,setItem:(k,v)=>{ls.store[k]=String(v);},removeItem:k=>{delete ls.store[k];}};
Object.defineProperty(window,'localStorage',{value:ls});
let fails=0;
function assert(c,m){ if(!c){ fails++; console.log('  ✗ '+m); } else console.log('  ✓ '+m); }
window.addEventListener('error',e=>{ fails++; console.log('  ✗ WINERR',e.error&&e.error.message); });
window.eval(bundle+'\n;\n'+app+'\n;\n'+inline);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const tagsOf=id=>{ const m=JSON.parse(ls.getItem('rh_fav_tags')||'{}'); return m[id]||[]; };
const colors=()=>JSON.parse(ls.getItem('rh_fav_tag_colors')||'{}');

(async()=>{
  const ids=window.ROBOTHUB_ROBOTS.slice(0,3).map(r=>r.id);
  const [a,b,c]=ids;

  // ---- MERGE Alpha -> Beta ----
  ls.setItem('rh_favs',JSON.stringify([a,b,c]));
  ls.setItem('rh_fav_tags',JSON.stringify({[a]:['Alpha','Beta'],[b]:['Alpha'],[c]:['Beta']}));
  ls.setItem('rh_fav_tag_colors',JSON.stringify({Alpha:'#111111',Beta:'#222222'}));
  await window.renderFav();

  window.openTagEditor('Alpha');
  const sel=window.document.getElementById('mergeTarget');
  assert([...sel.options].some(o=>o.value==='Beta'),'merge target lists other tags (Beta)');
  sel.value='Beta';
  window.mergeTagInto();
  await wait(40);
  assert(!tagsOf(a).includes('Alpha') && tagsOf(a).includes('Beta'),'a: Alpha removed, Beta present');
  assert(!tagsOf(b).includes('Alpha') && tagsOf(b).includes('Beta'),'b: Alpha->Beta merged');
  assert(tagsOf(c).includes('Beta') && !tagsOf(c).includes('Alpha'),'c: unchanged except no Alpha');
  const cm=colors();
  assert(!('Alpha' in cm) && cm.Beta==='#111111','color moved Alpha->Beta: '+JSON.stringify(cm));
  assert(!window.document.getElementById('tagOverview').innerHTML.includes('Alpha'),'overview no longer shows Alpha');

  // ---- BATCH TAG SELECTED ----
  ls.setItem('rh_fav_tags',JSON.stringify({[a]:['X'],[b]:['X'],[c]:['X']}));
  await window.renderFav();
  window.toggleSelectMode();
  assert(window.document.body.classList.contains('selecting'),'select mode on (body.selecting)');
  const cards=[...window.document.getElementById('favGrid').querySelectorAll('.rcard')];
  assert(cards.length===3,'3 fav cards present');
  // click first two cards to select
  cards[0].dispatchEvent(new window.MouseEvent('click',{bubbles:true}));
  cards[1].dispatchEvent(new window.MouseEvent('click',{bubbles:true}));
  assert(cards[0].classList.contains('sel') && cards[1].classList.contains('sel'),'two cards marked .sel');
  const bar=window.document.getElementById('batchBar');
  assert(bar.style.display==='flex' && window.document.getElementById('batchCount').textContent==='2','batch bar shows 2 selected');
  window.document.getElementById('batchTag').value='Bulk';
  window.applyTagToSelected();
  await wait(40);
  const selIds=[cards[0].dataset.id,cards[1].dataset.id];
  assert(selIds.every(id=>tagsOf(id).includes('Bulk')),'selected robots got "Bulk" tag');
  assert(!tagsOf(cards[2].dataset.id).includes('Bulk'),'unselected robot did NOT get "Bulk"');
  assert(bar.style.display==='none','batch bar hidden after apply (selection cleared)');
  assert(!window.document.body.classList.contains('selecting') || window.document.querySelectorAll('.rcard.sel').length===0,'selection cleared');

  // select all
  window.toggleSelectMode(); // turn off (clears)
  window.toggleSelectMode(); // on again
  window.selectAll();
  assert(window.document.querySelectorAll('.rcard.sel').length===3,'selectAll selects all 3');

  console.log(fails?('\nFAILURES: '+fails):'\nALL GREEN');
  process.exit(fails?1:0);
})();
