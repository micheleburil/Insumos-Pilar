const cfg = window.PORTAL_CONFIG;
const menu = document.getElementById('menu');
const frame = document.getElementById('powerbiFrame');
const placeholder = document.getElementById('placeholder');
let activeId = localStorage.getItem('portal-page') || cfg.pages[0].id;

function drawMenu(){
  menu.innerHTML = cfg.pages.map(p => `<button class="nav-item ${p.id===activeId?'active':''}" data-id="${p.id}"><span>${p.icon}</span>${p.title}</button>`).join('');
  document.querySelectorAll('.nav-item').forEach(b => b.onclick = () => loadPage(b.dataset.id));
}
function loadPage(id){
  const p = cfg.pages.find(x => x.id === id) || cfg.pages[0];
  activeId = p.id; localStorage.setItem('portal-page', activeId);
  document.getElementById('pageTitle').textContent = p.title;
  document.getElementById('pageSubtitle').textContent = p.subtitle;
  document.getElementById('reportTitle').textContent = p.reportTitle;
  document.getElementById('openReport').href = p.url || '#';
  document.getElementById('openReport').classList.toggle('disabled', !p.url);
  if(p.url){ frame.src=p.url; frame.style.display='block'; placeholder.style.display='none'; }
  else { frame.removeAttribute('src'); frame.style.display='none'; placeholder.style.display='flex'; }
  drawCards(p.id); drawMenu(); document.getElementById('sidebar').classList.remove('open');
}
function drawCards(id){
  const labels = id==='diesel' ? ['Total de litros','Valor total','Pedidos da semana','Última atualização'] :
    id==='geral' ? ['Pedidos da semana','Valor total','Categorias acompanhadas','Semana selecionada'] :
    ['Itens solicitados','Valor total','Pedidos da semana','Última atualização'];
  document.getElementById('cards').innerHTML = labels.map((label,i)=>`<article class="card"><span>${label}</span><strong>${i===3?'No Power BI':'--'}</strong><small>Dados exibidos no relatório</small></article>`).join('');
}
document.getElementById('refreshButton').onclick = () => { if(frame.src) frame.src = frame.src; };
document.getElementById('mobileMenu').onclick = () => document.getElementById('sidebar').classList.toggle('open');
document.getElementById('today').textContent = new Intl.DateTimeFormat('pt-BR',{dateStyle:'long'}).format(new Date());
loadPage(activeId);
