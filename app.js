// ===================== DATA (banco TACO — idêntico ao desktop) =====================
const DEFAULT_FOODS = [
  // Genéricos originais
  {name:'Ovos',            cal:146, carb:0.6,  prot:13.3, fat:9.5,   unit:'g',     calcMode:'per100'},
  {name:'Ovo (unidade)',   cal:146, carb:0.6,  prot:13.3, fat:9.5,   unit:'un',    calcMode:'wpu', wpu:50},
  {name:'Pão fatiado',     cal:253, carb:46.5, prot:7.9,  fat:3.4,   unit:'fatia', calcMode:'wpu', wpu:25},
  {name:'Queijo mussarela',cal:308, carb:2.2,  prot:22.7, fat:23.5,  unit:'g',     calcMode:'per100'},
  {name:'Mamão',           cal:45,  carb:11.4, prot:0.8,  fat:0.1,   unit:'g',     calcMode:'per100'},
  {name:'Arroz branco cozido', cal:128, carb:28.1, prot:2.5, fat:0.2, unit:'g',   calcMode:'per100'},
  {name:'Patinho moído cru',   cal:221, carb:0.0,  prot:18.7, fat:16.1, unit:'g', calcMode:'per100'},
  {name:'Azeite de oliva', cal:884, carb:0.0,  prot:0.0,  fat:100.0, unit:'ml',   calcMode:'per100'},
  {name:'Frango peito cozido', cal:163, carb:0.0,  prot:32.1, fat:2.8, unit:'g',  calcMode:'per100'},
  {name:'Macarrão cozido', cal:150, carb:30.1, prot:4.7,  fat:0.9,   unit:'g',    calcMode:'per100'},
  {name:'Whey Protein',    cal:370, carb:7.0,  prot:74.0, fat:5.0,   unit:'scoop',calcMode:'wpu', wpu:30},
  {name:'Aveia em flocos', cal:394, carb:67.5, prot:13.9, fat:8.5,   unit:'g',    calcMode:'per100'},

  // TACO — Cereais e derivados
  {name:'Arroz integral cozido',  cal:124, carb:25.8, prot:2.6,  fat:1.0,   unit:'g', calcMode:'per100', taco:true},
  {name:'Tapioca (goma)',         cal:347, carb:85.0, prot:0.3,  fat:0.2,   unit:'g', calcMode:'per100', taco:true},
  {name:'Pão francês',            cal:300, carb:58.6, prot:9.4,  fat:3.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Granola',                cal:404, carb:65.8, prot:9.2,  fat:12.7,  unit:'g', calcMode:'per100', taco:true},
  {name:'Cuscuz de milho cozido', cal:85,  carb:18.5, prot:1.6,  fat:0.5,   unit:'g', calcMode:'per100', taco:true},
  {name:'Farinha de mandioca',    cal:361, carb:87.7, prot:1.6,  fat:0.4,   unit:'g', calcMode:'per100', taco:true},
  {name:'Pipoca (sem gordura)',   cal:380, carb:78.0, prot:9.4,  fat:4.3,   unit:'g', calcMode:'per100', taco:true},

  // TACO — Tubérculos
  {name:'Batata-doce cozida',     cal:77,  carb:18.4, prot:0.7,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Batata inglesa cozida',  cal:52,  carb:11.9, prot:1.2,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Mandioca cozida',        cal:123, carb:30.1, prot:0.6,  fat:0.3,   unit:'g', calcMode:'per100', taco:true},
  {name:'Inhame cozido',          cal:94,  carb:22.5, prot:1.1,  fat:0.2,   unit:'g', calcMode:'per100', taco:true},

  // TACO — Leguminosas
  {name:'Feijão preto cozido',    cal:77,  carb:14.0, prot:4.5,  fat:0.5,   unit:'g', calcMode:'per100', taco:true},
  {name:'Feijão carioca cozido',  cal:76,  carb:13.6, prot:4.8,  fat:0.5,   unit:'g', calcMode:'per100', taco:true},
  {name:'Lentilha cozida',        cal:93,  carb:15.9, prot:7.8,  fat:0.5,   unit:'g', calcMode:'per100', taco:true},
  {name:'Grão-de-bico cozido',    cal:164, carb:27.4, prot:9.0,  fat:2.6,   unit:'g', calcMode:'per100', taco:true},
  {name:'Ervilha cozida',         cal:95,  carb:14.0, prot:5.7,  fat:1.0,   unit:'g', calcMode:'per100', taco:true},

  // TACO — Carnes bovinas
  {name:'Alcatra grelhada',       cal:195, carb:0.0,  prot:30.0, fat:7.8,   unit:'g', calcMode:'per100', taco:true},
  {name:'Contrafilé grelhado',    cal:219, carb:0.0,  prot:27.1, fat:11.8,  unit:'g', calcMode:'per100', taco:true},
  {name:'Músculo cozido',         cal:212, carb:0.0,  prot:31.7, fat:8.9,   unit:'g', calcMode:'per100', taco:true},
  {name:'Carne seca cozida',      cal:270, carb:0.0,  prot:43.0, fat:10.4,  unit:'g', calcMode:'per100', taco:true},

  // TACO — Aves
  {name:'Frango coxa s/pele cozida', cal:152, carb:0.0, prot:20.1, fat:7.4, unit:'g', calcMode:'per100', taco:true},
  {name:'Peru peito s/pele cozido',  cal:159, carb:0.0, prot:28.6, fat:4.5, unit:'g', calcMode:'per100', taco:true},

  // TACO — Peixes e frutos do mar
  {name:'Salmão grelhado',        cal:183, carb:0.0,  prot:23.4, fat:9.3,   unit:'g', calcMode:'per100', taco:true},
  {name:'Atum em água (escorrido)',cal:119, carb:0.0,  prot:26.6, fat:1.0,  unit:'g', calcMode:'per100', taco:true},
  {name:'Tilápia grelhada',       cal:101, carb:0.0,  prot:21.0, fat:1.7,   unit:'g', calcMode:'per100', taco:true},
  {name:'Sardinha em óleo',       cal:215, carb:0.0,  prot:27.5, fat:11.6,  unit:'g', calcMode:'per100', taco:true},
  {name:'Camarão cozido',         cal:90,  carb:0.0,  prot:18.7, fat:1.7,   unit:'g', calcMode:'per100', taco:true},

  // TACO — Ovos e derivados
  {name:'Clara de ovo cozida',    cal:49,  carb:0.7,  prot:10.8, fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Gema de ovo cozida',     cal:338, carb:1.1,  prot:15.9, fat:29.5,  unit:'g', calcMode:'per100', taco:true},

  // TACO — Laticínios
  {name:'Leite integral',         cal:61,  carb:4.7,  prot:3.2,  fat:3.3,   unit:'ml', calcMode:'per100', taco:true},
  {name:'Leite desnatado',        cal:35,  carb:5.0,  prot:3.4,  fat:0.2,   unit:'ml', calcMode:'per100', taco:true},
  {name:'Iogurte natural integral',cal:61, carb:4.4,  prot:3.5,  fat:3.3,   unit:'g',  calcMode:'per100', taco:true},
  {name:'Iogurte natural desnatado',cal:37,carb:5.2,  prot:3.5,  fat:0.2,   unit:'g',  calcMode:'per100', taco:true},
  {name:'Queijo cottage',         cal:96,  carb:3.0,  prot:12.5, fat:4.0,   unit:'g',  calcMode:'per100', taco:true},
  {name:'Requeijão cremoso',      cal:268, carb:2.8,  prot:10.3, fat:24.3,  unit:'g',  calcMode:'per100', taco:true},

  // TACO — Frutas
  {name:'Banana prata',           cal:98,  carb:26.0, prot:1.3,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Banana nanica',          cal:92,  carb:23.8, prot:1.4,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Maçã fuji',              cal:56,  carb:15.2, prot:0.3,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Laranja pera',           cal:37,  carb:8.9,  prot:1.0,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Abacate',                cal:96,  carb:6.0,  prot:1.2,  fat:8.4,   unit:'g', calcMode:'per100', taco:true},
  {name:'Morango',                cal:30,  carb:7.1,  prot:0.8,  fat:0.3,   unit:'g', calcMode:'per100', taco:true},
  {name:'Melancia',               cal:33,  carb:7.5,  prot:0.9,  fat:0.5,   unit:'g', calcMode:'per100', taco:true},
  {name:'Manga',                  cal:64,  carb:15.7, prot:0.6,  fat:0.3,   unit:'g', calcMode:'per100', taco:true},
  {name:'Uva itália',             cal:69,  carb:17.5, prot:0.7,  fat:0.3,   unit:'g', calcMode:'per100', taco:true},
  {name:'Abacaxi',                cal:48,  carb:12.3, prot:0.9,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},

  // TACO — Hortaliças
  {name:'Brócolis cozido',        cal:25,  carb:2.3,  prot:3.0,  fat:0.4,   unit:'g', calcMode:'per100', taco:true},
  {name:'Espinafre cozido',       cal:20,  carb:1.4,  prot:2.9,  fat:0.4,   unit:'g', calcMode:'per100', taco:true},
  {name:'Abobrinha cozida',       cal:18,  carb:2.3,  prot:1.3,  fat:0.2,   unit:'g', calcMode:'per100', taco:true},
  {name:'Cenoura cozida',         cal:33,  carb:7.7,  prot:0.7,  fat:0.1,   unit:'g', calcMode:'per100', taco:true},
  {name:'Couve-flor cozida',      cal:19,  carb:2.1,  prot:2.0,  fat:0.3,   unit:'g', calcMode:'per100', taco:true},
  {name:'Couve manteiga cozida',  cal:18,  carb:2.2,  prot:1.6,  fat:0.5,   unit:'g', calcMode:'per100', taco:true},
  {name:'Tomate',                 cal:15,  carb:3.1,  prot:1.1,  fat:0.2,   unit:'g', calcMode:'per100', taco:true},

  // TACO — Oleaginosas
  {name:'Amendoim torrado',       cal:570, carb:20.7, prot:24.4, fat:43.9,  unit:'g', calcMode:'per100', taco:true},
  {name:'Castanha-do-pará',       cal:656, carb:15.1, prot:14.3, fat:63.5,  unit:'g', calcMode:'per100', taco:true},
  {name:'Castanha de caju torrada',cal:570,carb:29.1, prot:18.5, fat:44.4,  unit:'g', calcMode:'per100', taco:true},
  {name:'Amêndoa',                cal:579, carb:21.6, prot:18.6, fat:47.7,  unit:'g', calcMode:'per100', taco:true},

  // TACO — Óleos e gorduras
  {name:'Óleo de soja',           cal:884, carb:0.0,  prot:0.0,  fat:100.0, unit:'ml', calcMode:'per100', taco:true},
  {name:'Óleo de coco',           cal:899, carb:0.0,  prot:0.0,  fat:99.9,  unit:'ml', calcMode:'per100', taco:true},
  {name:'Manteiga',               cal:726, carb:0.0,  prot:0.9,  fat:83.2,  unit:'g',  calcMode:'per100', taco:true},
];

// ---- localStorage com fallback seguro (namespace independente da versão desktop) ----
function lsGet(key){ try{ return localStorage.getItem(key); }catch(e){ return null; } }
function lsSet(key,val){ try{ localStorage.setItem(key,val); }catch(e){} }

let _logoMemory = '';

let foods = JSON.parse(lsGet('td_mobile_foods') || 'null') || JSON.parse(JSON.stringify(DEFAULT_FOODS));

function syncDefaultFoods(){
  const byName = Object.fromEntries(foods.map((f,i)=>[f.name,i]));
  let changed = false;
  DEFAULT_FOODS.forEach(df=>{
    if(byName[df.name] === undefined){
      foods.push({...df}); changed = true;
    } else if(df.wpu && !foods[byName[df.name]].wpu){
      Object.assign(foods[byName[df.name]], {wpu:df.wpu, calcMode:df.calcMode, cal:df.cal, carb:df.carb, prot:df.prot, fat:df.fat});
      changed = true;
    }
  });
  if(changed) saveFoods();
}
syncDefaultFoods();
let meals = [];
let mealIdCtr = 0;
let compCtr = 0;
let ergoCtr = 0;
let chart = null;

// ===================== ÁGUA & REFEIÇÕES LIVRES =====================
const DAY_ORDER = [1,2,3,4,5,6,0]; // Seg..Dom (ordem de exibição dos chips)
const DAY_ABBR  = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const DAY_FULL  = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
let freeDays = [];

function updateWater(){
  const v = parseFloat(document.getElementById('sWater').value);
  document.getElementById('waterLiters').textContent = (v>0) ? '('+(v/1000).toFixed(1)+' L)' : '';
}
function toggleFreeDay(day){
  const idx = freeDays.indexOf(day);
  if(idx>-1) freeDays.splice(idx,1); else freeDays.push(day);
  renderFreeDaysUI();
}
function renderFreeDaysUI(){
  document.querySelectorAll('.day-chip').forEach(btn=>{
    btn.classList.toggle('active', freeDays.includes(parseInt(btn.dataset.day)));
  });
  const c = document.getElementById('freeDaysCount');
  c.textContent = freeDays.length ? `(${freeDays.length})` : '';
}

// ===================== ALUNOS SALVOS (lista, pagamento, WhatsApp, histórico) =====================
let students = JSON.parse(lsGet('td_mobile_students') || '[]');
let currentStudentId = null;
let studentFilter = '';
const PAY_LABEL = {em_dia:'Em dia', a_vencer:'A vencer', inadimplente:'Inadimplente'};
const PAY_ORDER = {inadimplente:0, a_vencer:1, em_dia:2};

function saveStudentsToStorage(){ lsSet('td_mobile_students', JSON.stringify(students)); }
function genId(){ return 'std_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7); }

function updateStudentStatusLine(){
  const el = document.getElementById('studentStatusLine');
  if(!el) return;
  if(!currentStudentId){
    el.innerHTML = '🆕 Novo atendimento (não salvo)';
  } else {
    const st = students.find(s=>s.id===currentStudentId);
    el.innerHTML = st ? `✏️ Editando: <b>${st.name}</b>` : '🆕 Novo atendimento (não salvo)';
  }
}

function newAtendimento(){
  clearAll();
  switchTab('aluno');
}

function saveStudent(){
  const name = document.getElementById('sName').value.trim();
  if(!name){ alert('Informe o nome do aluno antes de salvar.'); return; }

  const compRows = [], ergoRows = [];
  document.querySelectorAll('#compBody .entry-row').forEach(row=>{
    const ins = row.querySelectorAll('input');
    compRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
  });
  document.querySelectorAll('#ergoBody .entry-row').forEach(row=>{
    const ins = row.querySelectorAll('input');
    ergoRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
  });

  const record = {
    id: currentStudentId || genId(),
    name,
    age: document.getElementById('sAge').value,
    weight: document.getElementById('sWeight').value,
    height: document.getElementById('sHeight').value,
    gender: document.getElementById('sGender').value,
    activity: document.getElementById('sActivity').value,
    phone: document.getElementById('sPhone').value.trim(),
    payStatus: document.getElementById('sPayStatus').value,
    dueDate: document.getElementById('sDueDate').value,
    meals: JSON.parse(JSON.stringify(meals)),
    compounds: compRows,
    ergogenics: ergoRows,
    observations: document.getElementById('observations').value,
    water: document.getElementById('sWater').value,
    freeDays: [...freeDays],
    pdfHistory: [],
    updatedAt: Date.now()
  };

  const idx = students.findIndex(s=>s.id===record.id);
  if(idx>-1){ record.pdfHistory = students[idx].pdfHistory || []; students[idx] = record; }
  else students.push(record);

  currentStudentId = record.id;
  saveStudentsToStorage();
  updateStudentStatusLine();
  renderStudentsList();
  alert('Aluno salvo com sucesso!');
}

function openStudent(id){
  const st = students.find(s=>s.id===id);
  if(!st) return;

  document.getElementById('sName').value     = st.name || '';
  document.getElementById('sAge').value      = st.age || '';
  document.getElementById('sWeight').value   = st.weight || '';
  document.getElementById('sHeight').value   = st.height || '';
  document.getElementById('sGender').value   = st.gender || 'male';
  document.getElementById('sActivity').value = st.activity || '1.2';
  document.getElementById('sPhone').value    = st.phone || '';
  document.getElementById('sPayStatus').value= st.payStatus || 'em_dia';
  document.getElementById('sDueDate').value  = st.dueDate || '';
  calcTMB();

  meals = JSON.parse(JSON.stringify(st.meals || []));
  mealIdCtr = meals.reduce((max,m)=>Math.max(max,m.id||0),0);
  renderMeals();

  const compBody = document.getElementById('compBody');
  compBody.innerHTML = '<div id="compEmpty" class="empty-hint">Nenhum manipulado adicionado</div>';
  compCtr = 0;
  (st.compounds||[]).forEach(r=>{
    addCompound();
    const rows = compBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]||''; ins[1].value=r[1]||''; ins[2].value=r[2]||'';
  });

  const ergoBody = document.getElementById('ergoBody');
  ergoBody.innerHTML = '<div id="ergoEmpty" class="empty-hint">Nenhum ergogênico adicionado</div>';
  ergoCtr = 0;
  (st.ergogenics||[]).forEach(r=>{
    addErgogenic();
    const rows = ergoBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]||''; ins[1].value=r[1]||''; ins[2].value=r[2]||'';
  });

  document.getElementById('observations').value = st.observations || '';
  document.getElementById('sWater').value = st.water || '';
  updateWater();
  freeDays = [...(st.freeDays || [])];
  renderFreeDaysUI();

  currentStudentId = st.id;
  updateStudentStatusLine();
  switchTab('aluno');
}

function deleteStudent(id){
  const st = students.find(s=>s.id===id);
  if(!st) return;
  if(!confirm(`Excluir o aluno "${st.name}"?\n\nIsso apaga todos os dados salvos dele (dieta, contato, histórico de PDFs).`)) return;
  students = students.filter(s=>s.id!==id);
  saveStudentsToStorage();
  if(currentStudentId===id) newAtendimento();
  renderStudentsList();
}

function computeDueInfo(dueDate){
  if(!dueDate) return '';
  const due = new Date(dueDate+'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((due-today)/86400000);
  if(diff===0) return 'Vence hoje';
  if(diff>0) return `Vence em ${diff}d`;
  return `Venceu há ${Math.abs(diff)}d`;
}

function setStudentFilter(v){ studentFilter = v.toLowerCase(); renderStudentsList(); }

function renderStudentsList(){
  const el = document.getElementById('studentsList');
  if(!el) return;
  const filtered = students
    .filter(s => !studentFilter || s.name.toLowerCase().includes(studentFilter) || (s.phone||'').toLowerCase().includes(studentFilter))
    .sort((a,b)=> (PAY_ORDER[a.payStatus]??2) - (PAY_ORDER[b.payStatus]??2) || a.name.localeCompare(b.name));

  if(!filtered.length){
    el.innerHTML = `<div class="empty-hint">${students.length ? 'Nenhum aluno encontrado.' : 'Nenhum aluno salvo ainda. Toque em "+ Novo Atendimento" para começar.'}</div>`;
    return;
  }

  el.innerHTML = filtered.map(s=>{
    const dueInfo   = computeDueInfo(s.dueDate);
    const histCount = (s.pdfHistory||[]).length;
    const histHTML  = histCount ? `
      <details class="pdf-history">
        <summary>📄 Histórico (${histCount})</summary>
        <ul>${s.pdfHistory.slice().reverse().map(h=>`<li>${h.date}</li>`).join('')}</ul>
      </details>` : '';
    const fbHTML = s.nextFeedback ? `
      <div class="feedback-chip">
        <span>📅 Feedback: ${new Date(s.nextFeedback.date).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</span>
        <span><a href="${s.nextFeedback.htmlLink}" target="_blank" rel="noopener">ver</a> · <button onclick="cancelFeedbackEvent('${s.id}')" class="link-btn">cancelar</button></span>
      </div>` : '';
    return `<div class="student-card">
      <div class="student-card-hdr">
        <div>
          <div class="student-card-name">${s.name}</div>
          ${s.phone ? `<div class="student-card-phone">${s.phone}</div>` : ''}
        </div>
        <span class="pay-badge pay-${s.payStatus||'em_dia'}">${PAY_LABEL[s.payStatus]||'Em dia'}</span>
      </div>
      ${dueInfo ? `<div class="student-card-due">🗓 ${dueInfo}</div>` : ''}
      <div class="student-card-actions">
        <button onclick="openStudent('${s.id}')" class="btn btn-outline">Abrir</button>
        ${s.phone ? `<button onclick="sendCobranca('${s.id}')" class="btn btn-whatsapp">💬 Cobrança</button>` : ''}
        <button onclick="openFeedbackModal('${s.id}')" class="btn btn-blue">📅 Feedback</button>
        <button onclick="deleteStudent('${s.id}')" class="btn btn-red btn-icon-only">✕</button>
      </div>
      ${fbHTML}
      ${histHTML}
    </div>`;
  }).join('');
}

function formatPhoneForWa(phone){
  let digits = (phone||'').replace(/\D/g,'');
  if(!digits) return '';
  if(digits.length<=11) digits = '55'+digits; // assume Brasil quando não há código de país
  return digits;
}

function buildCobrancaMessage(st){
  const firstName = (st.name||'').trim().split(' ')[0] || '';
  const dueInfo = computeDueInfo(st.dueDate);
  let situacao;
  if(st.payStatus==='inadimplente'){
    situacao = dueInfo ? `sua mensalidade da consultoria está em atraso (${dueInfo.toLowerCase()})` : 'sua mensalidade da consultoria está em atraso';
  } else if(dueInfo === 'Vence hoje'){
    situacao = 'sua mensalidade da consultoria vence hoje';
  } else if(dueInfo){
    situacao = `sua mensalidade da consultoria ${dueInfo.toLowerCase()}`;
  } else {
    situacao = 'sua mensalidade da consultoria está próxima do vencimento';
  }
  return `Fala ${firstName}, tudo bem? Passando para avisar que ${situacao}. Qualquer dúvida, me chama por aqui! 💪`;
}

function sendCobranca(id){
  const st = students.find(s=>s.id===id);
  if(!st) return;
  const digits = formatPhoneForWa(st.phone);
  if(!digits){ alert('Este aluno não tem telefone cadastrado.'); return; }
  const msg = buildCobrancaMessage(st);
  window.open(`https://wa.me/${digits}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===================== GOOGLE AGENDA (OAuth client-side, sem backend) =====================
const GCAL_SCOPE = 'https://www.googleapis.com/auth/calendar.events';
let gcalClientId    = lsGet('td_mobile_gcal_client_id') || '';
let gcalTokenClient = null;
let gcalAccessToken = null;
let gcalTokenExpiry = 0;
let feedbackModalStudentId = null;

function updateGcalStatus(text){
  const el = document.getElementById('gcalStatusText');
  if(el) el.textContent = text;
}

function initGcalTokenClient(){
  if(!gcalClientId || typeof google==='undefined' || !google.accounts || !google.accounts.oauth2) return false;
  gcalTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: gcalClientId,
    scope: GCAL_SCOPE,
    callback: ()=>{} // sobrescrito a cada chamada em ensureGcalToken()
  });
  return true;
}

function saveGcalClientId(){
  const v = document.getElementById('gcalClientId').value.trim();
  if(!v){ alert('Cole o Client ID gerado no Google Cloud Console.'); return; }
  gcalClientId = v;
  lsSet('td_mobile_gcal_client_id', v);
  gcalTokenClient = null; gcalAccessToken = null; gcalTokenExpiry = 0;
  const ok = initGcalTokenClient();
  updateGcalStatus(ok ? 'desconectado (toque em Conectar)' : 'Client ID salvo — aguardando biblioteca do Google carregar');
  alert('Client ID salvo! Agora toque em "Conectar Google Agenda".');
}

function connectGoogleCalendar(){
  if(!gcalClientId){ alert('Primeiro cole e salve o Client ID do Google Cloud Console.'); return; }
  if(!gcalTokenClient && !initGcalTokenClient()){
    alert('A biblioteca do Google ainda não carregou (ou o app foi aberto como arquivo local — o login do Google só funciona servido via http/https). Verifique sua conexão e tente novamente.');
    return;
  }
  gcalTokenClient.callback = (resp)=>{
    if(resp.error){ updateGcalStatus('erro: '+resp.error); alert('Falha ao conectar: '+resp.error); return; }
    gcalAccessToken = resp.access_token;
    gcalTokenExpiry = Date.now() + (resp.expires_in*1000);
    updateGcalStatus('conectado ✓');
  };
  gcalTokenClient.requestAccessToken({prompt:'consent'});
}

function ensureGcalToken(cb){
  if(gcalAccessToken && Date.now() < gcalTokenExpiry - 5000){ cb(); return; }
  if(!gcalTokenClient && !initGcalTokenClient()){
    alert('Configure e conecte sua Google Agenda primeiro (aba Alunos → Google Agenda).');
    return;
  }
  gcalTokenClient.callback = (resp)=>{
    if(resp.error){ alert('Falha ao autenticar com o Google: '+resp.error); return; }
    gcalAccessToken = resp.access_token;
    gcalTokenExpiry = Date.now() + (resp.expires_in*1000);
    updateGcalStatus('conectado ✓');
    cb();
  };
  gcalTokenClient.requestAccessToken({prompt:''});
}

function openFeedbackModal(studentId){
  const st = students.find(s=>s.id===studentId);
  if(!st) return;
  feedbackModalStudentId = studentId;
  document.getElementById('feedbackModalStudentName').textContent = st.name;
  document.getElementById('feedbackModalStatus').textContent = '';
  const d = new Date(Date.now()+24*3600*1000);
  document.getElementById('fbDate').value = d.toISOString().slice(0,10);
  document.getElementById('fbTime').value = '10:00';
  document.getElementById('fbDuration').value = '30';
  document.getElementById('modalFeedback').classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function closeFeedbackModal(){
  document.getElementById('modalFeedback').classList.add('hidden');
  document.body.classList.remove('modal-open');
  feedbackModalStudentId = null;
}

function createFeedbackEvent(){
  const st = students.find(s=>s.id===feedbackModalStudentId);
  if(!st) return;
  const date = document.getElementById('fbDate').value;
  const time = document.getElementById('fbTime').value;
  if(!date || !time){ alert('Escolha data e horário.'); return; }
  const dur = parseInt(document.getElementById('fbDuration').value);
  const statusEl = document.getElementById('feedbackModalStatus');
  const btn = document.getElementById('fbCreateBtn');

  ensureGcalToken(()=>{
    const start = new Date(`${date}T${time}:00`);
    const end = new Date(start.getTime() + dur*60000);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    statusEl.innerHTML = '<span style="color:#00aaff;">⏳ Criando evento...</span>';
    btn.disabled = true;

    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer '+gcalAccessToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        summary: `Feedback - ${st.name}`,
        description: `Feedback de acompanhamento — TEAM DECA${st.phone ? '\nTelefone: '+st.phone : ''}`,
        start: { dateTime: start.toISOString(), timeZone: tz },
        end:   { dateTime: end.toISOString(), timeZone: tz }
      })
    })
    .then(r => r.ok ? r.json() : r.json().then(e=>Promise.reject(e)))
    .then(ev => {
      st.nextFeedback = { date: start.toISOString(), eventId: ev.id, htmlLink: ev.htmlLink };
      saveStudentsToStorage();
      renderStudentsList();
      statusEl.innerHTML = '<span style="color:#00cc66;">✅ Evento criado na sua Google Agenda!</span>';
      setTimeout(closeFeedbackModal, 1200);
    })
    .catch(err => {
      console.error('Erro Google Calendar:', err);
      statusEl.innerHTML = '<span style="color:#ff6b6b;">❌ Erro: '+(err?.error?.message || 'falha ao criar evento')+'</span>';
    })
    .finally(() => { btn.disabled = false; });
  });
}

function cancelFeedbackEvent(id){
  const st = students.find(s=>s.id===id);
  if(!st || !st.nextFeedback) return;
  if(!confirm('Cancelar este feedback agendado?\n\nIsso também remove o evento da sua Google Agenda.')) return;
  ensureGcalToken(()=>{
    fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${st.nextFeedback.eventId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer '+gcalAccessToken }
    })
    .then(r => { if(!r.ok && r.status!==410) return Promise.reject(r); })
    .then(() => {
      st.nextFeedback = null;
      saveStudentsToStorage();
      renderStudentsList();
    })
    .catch(err => { console.error('Erro ao cancelar evento:', err); alert('Não foi possível cancelar o evento na Google Agenda. Tente novamente.'); });
  });
}

function saveFoods(){ lsSet('td_mobile_foods', JSON.stringify(foods)); }

// ===================== TABS =====================
function switchTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.toggle('active', p.id==='tab-'+tab));
  window.scrollTo({top:0, behavior:'smooth'});
}

// ===================== LOGO =====================
function uploadLogo(input){
  const f = input.files[0];
  if(!f) return;
  const r = new FileReader();
  r.onload = e => { _logoMemory = e.target.result; lsSet('td_mobile_logo', e.target.result); applyLogo(e.target.result); };
  r.readAsDataURL(f);
}
function applyLogo(src){
  const img = document.getElementById('logoPreview');
  if(img){ img.src = src; img.style.display='none'; } // usado apenas no PDF
}
(()=>{ const s = lsGet('td_mobile_logo'); if(s){ _logoMemory = s; applyLogo(s); } })();

// ===================== CLEAR =====================
function confirmClear(){
  if(!confirm('Limpar todos os campos do atendimento atual?\n\n(Alimentos cadastrados e logo não serão apagados)')) return;
  clearAll();
}
function clearAll(){
  ['sName','sAge','sWeight','sHeight'].forEach(id => document.getElementById(id).value='');
  document.getElementById('sGender').value='male';
  document.getElementById('sActivity').value='1.2';
  document.getElementById('tmbResult').textContent='—';
  document.getElementById('getResult').textContent='—';
  meals=[]; mealIdCtr=0;
  renderMeals();
  document.getElementById('compBody').innerHTML='<div id="compEmpty" class="empty-hint">Nenhum manipulado adicionado</div>';
  document.getElementById('ergoBody').innerHTML='<div id="ergoEmpty" class="empty-hint">Nenhum ergogênico adicionado</div>';
  document.getElementById('observations').value='';
  compCtr=0; ergoCtr=0;
  document.getElementById('sWater').value='';
  updateWater();
  freeDays=[];
  renderFreeDaysUI();
  document.getElementById('sPhone').value='';
  document.getElementById('sPayStatus').value='em_dia';
  document.getElementById('sDueDate').value='';
  currentStudentId=null;
  updateStudentStatusLine();
}

// ===================== TMB =====================
function calcTMB(){
  const age    = parseFloat(document.getElementById('sAge').value);
  const weight = parseFloat(document.getElementById('sWeight').value);
  const height = parseFloat(document.getElementById('sHeight').value);
  const gender = document.getElementById('sGender').value;
  const act    = parseFloat(document.getElementById('sActivity').value);
  if(!age||!weight||!height){
    document.getElementById('tmbResult').textContent='—';
    document.getElementById('getResult').textContent='—';
    return;
  }
  const tmb = gender==='male'
    ? 88.362 + (13.397*weight) + (4.799*height) - (5.677*age)
    : 447.593 + (9.247*weight) + (3.098*height) - (4.330*age);
  document.getElementById('tmbResult').textContent = Math.round(tmb).toLocaleString('pt-BR');
  document.getElementById('getResult').textContent  = Math.round(tmb*act).toLocaleString('pt-BR');
}

// ===================== FOOD MODAL =====================
function openModal(){
  document.getElementById('modalFood').classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderFoodBank();
}
function closeModal(){
  document.getElementById('modalFood').classList.add('hidden');
  document.body.classList.remove('modal-open');
  ['fName','fCal','fCarb','fProt','fFat','fWpu'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('fUnit').value='g';
  document.getElementById('fCalcMode').value='per100';
  updateCalcHint();
}
function updateCalcHint(){
  const mode = document.getElementById('fCalcMode').value;
  const hint = document.getElementById('calcHint');
  const lbl  = document.getElementById('fCalLbl');
  const wpuW = document.getElementById('wpuWrap');
  if(mode==='wpu'){
    wpuW.style.display='';
    hint.innerHTML='Macros por <strong>100g</strong>. Informe o <strong>peso médio por unidade</strong> acima. Na dieta, informe o nº de unidades — o app calcula automaticamente.';
    lbl.textContent='Calorias (por 100g)';
  } else if(mode==='perUnit'){
    wpuW.style.display='none';
    hint.innerHTML='Macros referentes a <strong>1 unidade</strong> do alimento. Na dieta, informe a <strong>quantidade de unidades</strong>.';
    lbl.textContent='Calorias (por 1 unidade)';
  } else {
    wpuW.style.display='none';
    hint.innerHTML='Macros referentes a <strong>100g / 100ml</strong>. Na dieta, informe a quantidade em gramas ou ml.';
    lbl.textContent='Calorias (por 100g/ml)';
  }
}
function saveFood(){
  const name = document.getElementById('fName').value.trim();
  const cal  = parseFloat(document.getElementById('fCal').value)||0;
  if(!name){ alert('Informe o nome do alimento.'); return; }
  const calcMode = document.getElementById('fCalcMode').value||'per100';
  const wpu = calcMode==='wpu' ? (parseFloat(document.getElementById('fWpu').value)||0) : undefined;
  const entry = {name, cal,
    carb:     parseFloat(document.getElementById('fCarb').value)||0,
    prot:     parseFloat(document.getElementById('fProt').value)||0,
    fat:      parseFloat(document.getElementById('fFat').value)||0,
    unit:     document.getElementById('fUnit').value||'g',
    calcMode};
  if(wpu) entry.wpu = wpu;
  foods.push(entry);
  saveFoods(); renderFoodBank(); renderMeals();
  ['fName','fCal','fCarb','fProt','fFat','fWpu'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('fUnit').value='g';
  document.getElementById('fCalcMode').value='per100';
  updateCalcHint();
}
function deleteFood(i){
  if(!confirm(`Remover "${foods[i].name}"?`)) return;
  foods.splice(i,1); saveFoods(); renderFoodBank(); renderMeals();
}

let foodFilter = '';
function setFoodFilter(v){ foodFilter=v.toLowerCase(); renderFoodBank(); }

function renderFoodBank(){
  const filtered = foods.map((f,i)=>({f,i}))
    .filter(({f})=> !foodFilter || f.name.toLowerCase().includes(foodFilter));

  const tacoTag  = `<span class="tag tag-taco">TACO</span>`;
  const unitTag  = f => `<span class="tag tag-unit">${f.unit||'g'}</span>`;
  const modeTag = f => {
    if(f.wpu || f.calcMode==='wpu')
      return `<span class="tag tag-mode">por ${f.unit||'un'} · ${f.wpu}g</span>`;
    if(f.calcMode==='perUnit')
      return `<span class="tag tag-mode">por un.</span>`;
    return '';
  };

  document.getElementById('foodBankList').innerHTML = !filtered.length
    ? '<div class="empty-hint">Nenhum alimento encontrado.</div>'
    : filtered.map(({f,i})=>`
      <div class="food-bank-row">
        <div class="fb-info">
          <span class="fb-name">${f.name}</span>${f.taco?tacoTag:''}${unitTag(f)}${modeTag(f)}
          <div class="fb-macros">${f.cal} kcal | C:${f.carb}g P:${f.prot}g G:${f.fat}g</div>
        </div>
        <button onclick="deleteFood(${i})" class="btn btn-red btn-icon-only">✕</button>
      </div>`).join('');
}

// ===================== MEALS =====================
function foodOptions(sel){
  return foods.map((f,i)=>{
    let tag;
    if(f.wpu || f.calcMode==='wpu') tag=`por ${f.unit||'un'} (${f.wpu}g)`;
    else if(f.calcMode==='perUnit') tag=`por ${f.unit||'un'}`;
    else tag=`por 100${f.unit==='ml'?'ml':'g'}`;
    return `<option value="${i}"${i===sel?' selected':''}>${f.name} [${tag}]</option>`;
  }).join('');
}
function addMeal(){
  mealIdCtr++;
  meals.push({id:mealIdCtr, name:`Refeição ${mealIdCtr}`, items:[]});
  renderMeals();
}
function removeMeal(id){ meals=meals.filter(m=>m.id!==id); renderMeals(); }
function setMealName(id,v){ const m=meals.find(m=>m.id===id); if(m) m.name=v; }
function addItem(mealId){ const m=meals.find(m=>m.id===mealId); if(m){ m.items.push({fi:0,qty:100}); renderMeals(); } }
function removeItem(mealId,idx){ const m=meals.find(m=>m.id===mealId); if(m){ m.items.splice(idx,1); renderMeals(); } }
function setItem(mealId,idx,field,val){
  const m=meals.find(m=>m.id===mealId); if(!m) return;
  m.items[idx][field] = field==='fi' ? parseInt(val) : (parseFloat(val)||0);
  renderMeals();
}
function setItemFood(mealId,idx,val){
  const m=meals.find(m=>m.id===mealId); if(!m) return;
  const fi = parseInt(val);
  m.items[idx].fi = fi;
  const f = foods[fi];
  if(f) m.items[idx].qty = (f.calcMode==='perUnit'||f.calcMode==='wpu'||f.wpu) ? 1 : 100;
  renderMeals();
}
function calcItem(item){
  const f=foods[item.fi]; if(!f) return {cal:0,carb:0,prot:0,fat:0};
  if(f.wpu || f.calcMode==='wpu'){
    const r = (item.qty * (f.wpu||0)) / 100;
    return {cal:f.cal*r, carb:f.carb*r, prot:f.prot*r, fat:f.fat*r};
  }
  if(f.calcMode==='perUnit'){
    return {cal:f.cal*item.qty, carb:f.carb*item.qty, prot:f.prot*item.qty, fat:f.fat*item.qty};
  }
  const r=item.qty/100;
  return {cal:f.cal*r, carb:f.carb*r, prot:f.prot*r, fat:f.fat*r};
}
function mealTotals(meal){ return meal.items.reduce((a,it)=>{ const c=calcItem(it); a.cal+=c.cal;a.carb+=c.carb;a.prot+=c.prot;a.fat+=c.fat; return a; },{cal:0,carb:0,prot:0,fat:0}); }
function allTotals(){ return meals.reduce((a,m)=>{ const t=mealTotals(m); a.cal+=t.cal;a.carb+=t.carb;a.prot+=t.prot;a.fat+=t.fat; return a; },{cal:0,carb:0,prot:0,fat:0}); }
function f1(n){ return (n||0).toFixed(1); }

// ===================== SUBSTITUIÇÕES =====================
function macroDist(a, b){
  const ta=(a.prot*4+a.carb*4+a.fat*9)||a.cal||1;
  const tb=(b.prot*4+b.carb*4+b.fat*9)||b.cal||1;
  const dp=a.prot*4/ta - b.prot*4/tb;
  const dc=a.carb*4/ta - b.carb*4/tb;
  const df=a.fat*9/ta  - b.fat*9/tb;
  return Math.sqrt(dp*dp + dc*dc + df*df);
}
function findTacoSubs(food){
  return foods
    .filter(f=>f.taco && f.name!==food.name && f.cal>0)
    .map(f=>({f, d:macroDist(food,f)}))
    .sort((a,b)=>a.d-b.d)
    .slice(0,2)
    .map(x=>x.f);
}
function equivQtyStr(origFood, origQty, sub){
  const cv = calcItem({fi: foods.indexOf(origFood), qty: origQty});
  const targetCal = cv.cal;
  if(!sub.cal || !targetCal) return '—';
  let qty, unit;
  if(sub.wpu || sub.calcMode==='wpu'){
    qty = Math.round((targetCal / (sub.cal * sub.wpu / 100)) * 10)/10;
    unit = sub.unit||'un';
  } else if(sub.calcMode==='perUnit'){
    qty = Math.round((targetCal / sub.cal) * 10)/10;
    unit = sub.unit||'un';
  } else {
    qty = Math.round(targetCal / (sub.cal/100));
    unit = 'g';
  }
  return qty+' '+unit;
}
function renderSubstitutions(){
  const sec = document.getElementById('substSection');
  if(!meals.length){ sec.classList.add('hidden'); return; }
  const seen = new Map();
  meals.forEach(m=>m.items.forEach(it=>{
    if(!seen.has(it.fi)) seen.set(it.fi, it.qty);
  }));
  const rows = [];
  seen.forEach((qty,fi)=>{
    const food=foods[fi]; if(!food) return;
    const subs=findTacoSubs(food);
    if(!subs.length) return;
    rows.push({food,qty,subs});
  });
  if(!rows.length){ sec.classList.add('hidden'); return; }
  sec.classList.remove('hidden');
  const isUnit = f=>(f.wpu||f.calcMode==='wpu'||f.calcMode==='perUnit');
  const qtyStr = (f,q)=> isUnit(f) ? q+' '+(f.unit||'un') : q+'g';
  document.getElementById('substList').innerHTML = rows.map(r=>`
    <div class="subst-card">
      <div class="subst-main">${r.food.name} — <span class="qty">${qtyStr(r.food,r.qty)}</span></div>
      ${r.subs[0] ? `<div class="subst-row"><span>${r.subs[0].name}</span><span class="eq">${equivQtyStr(r.food,r.qty,r.subs[0])}</span></div>` : ''}
      ${r.subs[1] ? `<div class="subst-row"><span>${r.subs[1].name}</span><span class="eq">${equivQtyStr(r.food,r.qty,r.subs[1])}</span></div>` : ''}
    </div>`).join('');
}

function renderMeals(){
  const c = document.getElementById('mealsContainer');
  if(!meals.length){
    c.innerHTML='<div class="empty-hint">Toque em "+ Refeição" para iniciar o planejamento alimentar...</div>';
    document.getElementById('macroSummary').classList.add('hidden');
    if(chart){ chart.destroy(); chart=null; }
    renderSubstitutions();
    return;
  }
  c.innerHTML = meals.map(meal=>{
    const mt = mealTotals(meal);
    const itemsHTML = !meal.items.length
      ? '<div class="empty-hint" style="padding:14px 4px;">Nenhum alimento adicionado.</div>'
      : meal.items.map((item,ii)=>{
          const cv=calcItem(item);
          const fu = foods[item.fi];
          const funit = fu ? (fu.unit||'g') : 'g';
          return `<div class="food-item-card">
            <div class="food-item-top">
              <select onchange="setItemFood(${meal.id},${ii},this.value)">
                ${foodOptions(item.fi)}
              </select>
              <button onclick="removeItem(${meal.id},${ii})" class="btn btn-red btn-icon-only">✕</button>
            </div>
            <div class="food-item-qty-row">
              <input type="number" inputmode="decimal" value="${item.qty}" min="0" step="1"
                onchange="setItem(${meal.id},${ii},'qty',this.value)">
              <span class="unit-tag">${funit}</span>
            </div>
            <div class="food-item-macros">
              <span><b>${f1(cv.cal)}</b> kcal</span>
              <span>C: <b>${f1(cv.carb)}g</b></span>
              <span>P: <b>${f1(cv.prot)}g</b></span>
              <span>G: <b>${f1(cv.fat)}g</b></span>
            </div>
          </div>`;
        }).join('');
    return `<div class="meal-card">
      <div class="meal-card-hdr">
        <input class="meal-name-inp" type="text" value="${meal.name}" onchange="setMealName(${meal.id},this.value)" placeholder="Nome da refeição...">
        <div class="meal-actions">
          <button onclick="addItem(${meal.id})" class="btn btn-outline" style="padding:8px 12px;font-size:12px;">+ Alimento</button>
          <button onclick="removeMeal(${meal.id})" class="btn btn-red btn-icon-only">✕</button>
        </div>
      </div>
      ${itemsHTML}
      <div class="meal-total-bar"><span>Total: ${f1(mt.cal)} kcal | C: ${f1(mt.carb)}g | P: ${f1(mt.prot)}g | G: ${f1(mt.fat)}g</span></div>
    </div>`;
  }).join('');

  document.getElementById('macroSummary').classList.remove('hidden');
  const tot = allTotals();
  document.getElementById('totalCal').textContent  = f1(tot.cal);
  document.getElementById('totalCarb').textContent = f1(tot.carb)+'g';
  document.getElementById('totalProt').textContent = f1(tot.prot)+'g';
  document.getElementById('totalFat').textContent  = f1(tot.fat)+'g';
  updateChart(tot);
  renderSubstitutions();
}

// ===================== CHART =====================
function updateChart(tot){
  const cCal=tot.carb*4, pCal=tot.prot*4, fCal=tot.fat*9;
  const total=(cCal+pCal+fCal)||1;
  const data=[Math.round(cCal/total*100), Math.round(pCal/total*100), Math.round(fCal/total*100)];
  if(chart){ chart.data.datasets[0].data=data; chart.update(); return; }
  chart = new Chart(document.getElementById('macroChart'),{
    type:'pie',
    data:{
      labels:['Carboidratos','Proteínas','Gorduras'],
      datasets:[{data, backgroundColor:['#1a6bcc','#cc3333','#cc9900'], borderColor:['#4db8ff','#ff7070','#ffd166'], borderWidth:2}]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{position:'bottom',labels:{color:'#fff',font:{family:'Rajdhani',size:12},padding:10}},
        tooltip:{callbacks:{label:ctx=>` ${ctx.label}: ${ctx.raw}%`}}
      }
    }
  });
}

// ===================== MANIPULADOS =====================
function addCompound(){
  const body=document.getElementById('compBody');
  const emp=document.getElementById('compEmpty'); if(emp) emp.remove();
  compCtr++;
  const id=`comp${compCtr}`;
  const row=document.createElement('div'); row.id=id; row.className='entry-row';
  row.innerHTML=`
    <div class="entry-top"><button onclick="removeRow('${id}','compBody','compEmpty','Nenhum manipulado adicionado')" class="btn btn-red btn-icon-only">✕</button></div>
    <div class="mb12"><label class="lbl">Substância</label><input type="text" placeholder="Ex: Creatina monohidratada"></div>
    <div class="g2">
      <div><label class="lbl">Dosagem</label><input type="text" placeholder="Ex: 5g"></div>
      <div><label class="lbl">Momento</label><input type="text" placeholder="Ex: Pré-treino"></div>
    </div>`;
  body.appendChild(row);
}

// ===================== ERGOGÊNICOS =====================
function addErgogenic(){
  const body=document.getElementById('ergoBody');
  const emp=document.getElementById('ergoEmpty'); if(emp) emp.remove();
  ergoCtr++;
  const id=`ergo${ergoCtr}`;
  const row=document.createElement('div'); row.id=id; row.className='entry-row';
  row.innerHTML=`
    <div class="entry-top"><button onclick="removeRow('${id}','ergoBody','ergoEmpty','Nenhum ergogênico adicionado')" class="btn btn-red btn-icon-only">✕</button></div>
    <div class="mb12"><label class="lbl">Substância</label><input type="text" placeholder="Ex: Testosterona Cipionato"></div>
    <div class="g2">
      <div><label class="lbl">Dose / Aplicação</label><input type="text" placeholder="Ex: 250mg / IM"></div>
      <div><label class="lbl">Frequência Semanal</label><input type="text" placeholder="Ex: 2x por semana"></div>
    </div>`;
  body.appendChild(row);
}

function removeRow(rowId,bodyId,emptyId,emptyTxt){
  const r=document.getElementById(rowId); if(r) r.remove();
  const body=document.getElementById(bodyId);
  if(!body.children.length){
    const div=document.createElement('div'); div.id=emptyId; div.className='empty-hint';
    div.textContent=emptyTxt;
    body.appendChild(div);
  }
}

// ===================== PDF EXPORT (impressão nativa via Blob URL) =====================
function exportPDF(){
  const btn = document.getElementById('pdfBtn');
  btn.textContent = '⏳ Preparando...'; btn.disabled = true;

  try {
    const name     = document.getElementById('sName').value || 'Aluno';
    const age      = document.getElementById('sAge').value;
    const weight   = document.getElementById('sWeight').value;
    const height   = document.getElementById('sHeight').value;
    const tmb      = document.getElementById('tmbResult').textContent;
    const get      = document.getElementById('getResult').textContent;
    const logo     = _logoMemory || lsGet('td_mobile_logo') || '';
    const obs      = document.getElementById('observations').value;
    const water    = document.getElementById('sWater').value;
    const tot      = allTotals();
    const chartImg = chart ? chart.toBase64Image() : '';

    const compRows = [], ergoRows = [];
    document.querySelectorAll('#compBody .entry-row').forEach(row => {
      const ins = row.querySelectorAll('input');
      compRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
    });
    document.querySelectorAll('#ergoBody .entry-row').forEach(row => {
      const ins = row.querySelectorAll('input');
      ergoRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
    });

    const body = buildPDF({name,age,weight,height,tmb,get,logo,obs,water,freeDays,tot,chartImg,compRows,ergoRows});

    if(currentStudentId){
      const st = students.find(s=>s.id===currentStudentId);
      if(st){
        st.pdfHistory = st.pdfHistory || [];
        st.pdfHistory.push({date: new Date().toLocaleString('pt-BR')});
        st.updatedAt = Date.now();
        saveStudentsToStorage();
        renderStudentsList();
      }
    }

    const fullHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=794, initial-scale=1">
<title>TEAM DECA — ${name}</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;1,400;1,700;1,900&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  @page { size: A4 portrait; margin: 0; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #000 !important;
    color: #fff;
    font-family: 'Rajdhani', sans-serif;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  .pb {
    page-break-before: always !important;
    break-before: page !important;
  }
  @media print {
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .pb { page-break-before: always !important; break-before: page !important; }
    .no-print { display: none !important; }
  }
  #print-bar {
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
    background: #0a1628; border-top: 2px solid #00aaff;
    padding: 14px 16px calc(14px + env(safe-area-inset-bottom)); display: flex; align-items: center; justify-content: space-between;
    font-family: 'Rajdhani', sans-serif; gap: 12px; flex-wrap: wrap;
  }
</style>
</head>
<body>

${body}

<div id="print-bar" class="no-print">
  <div style="color:#fff;font-size:13px;">
    <span style="color:#00aaff;font-weight:700;">1.</span> Toque em <strong>Compartilhar / Imprimir</strong> e escolha <strong>Salvar em PDF</strong><br>
    <span style="color:#00aaff;font-weight:700;">2.</span> No Android/Chrome, use "Salvar como PDF" no diálogo de impressão
  </div>
  <button onclick="window.print()"
    style="background:linear-gradient(135deg,#003d82,#0066cc);color:#fff;border:none;padding:12px 22px;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-style:italic;font-weight:700;font-size:15px;letter-spacing:1px;cursor:pointer;min-height:44px;">
    🖨️ SALVAR / IMPRIMIR
  </button>
</div>

<script>
  window.addEventListener('load', function(){
    setTimeout(function(){ window.print(); }, 900);
  });
<\/script>
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const win = window.open(blobUrl, '_blank');

    if (!win || win.closed) {
      // Fallback para navegadores mobile que bloqueiam popup (ex: Safari iOS) —
      // navegação programática de blob: também é bloqueada em Chrome recente,
      // então baixamos o HTML como arquivo: o usuário abre e usa o botão
      // "SALVAR / IMPRIMIR" dentro dele, ou o Compartilhar > Salvar em PDF.
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `TEAM_DECA_${name.replace(/[^\w\-]+/g,'_')}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      alert('O PDF não pôde abrir em nova aba. Baixamos o arquivo — abra-o e toque em "SALVAR / IMPRIMIR" para gerar o PDF.');
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    } else {
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    }

  } catch(e) {
    console.error('Erro PDF:', e);
    alert('Erro: ' + e.message);
  } finally {
    btn.innerHTML = '⬇ PDF';
    btn.disabled = false;
  }
}

function pdfTH(tx){ return `<th style="padding:9px 12px;text-align:left;color:#00aaff;font-size:11px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`; }
function pdfTD(tx,extra=''){ return `<td style="padding:8px 12px;color:#d0d8e8;font-size:13px;border-bottom:1px solid #1a3d6e;${extra}">${tx}</td>`; }
function pdfTHC(tx){ return `<th style="padding:9px 12px;text-align:center;color:#00aaff;font-size:11px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`; }
function pdfTDC(tx){ return `<td style="padding:8px 12px;color:#d0d8e8;font-size:13px;border-bottom:1px solid #1a3d6e;text-align:center;">${tx}</td>`; }

function buildPDF(d){
  const {name,age,weight,height,tmb,get,logo,obs,water,freeDays,tot,chartImg,compRows,ergoRows} = d;
  const waterHTML = water ? `${water} ml (${(parseFloat(water)/1000).toFixed(1)} L)` : '—';
  const freeDaysHTML = (freeDays && freeDays.length)
    ? DAY_ORDER.filter(d2=>freeDays.includes(d2)).map(d2=>DAY_ABBR[d2]).join(', ')
    : 'Nenhuma';
  const waterFreeBarHTML = `
    <div style="display:flex;gap:14px;margin-bottom:18px;">
      <div style="flex:1;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:12px 16px;">
        <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">💧 Meta de Água Diária</div>
        <div style="font-size:18px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">${waterHTML}</div>
      </div>
      <div style="flex:1;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:12px 16px;">
        <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">🍔 Refeições Livres na Semana</div>
        <div style="font-size:18px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">${freeDaysHTML}</div>
      </div>
    </div>`;
  const logoTag = logo ? `<img src="${logo}" style="max-width:280px;max-height:180px;object-fit:contain;display:block;margin:0 auto;" crossorigin="anonymous">` : '';
  const logoSmall = logo ? `<img src="${logo}" style="height:45px;object-fit:contain;" crossorigin="anonymous">` : `<span style="font-size:20px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">TEAM DECA</span>`;
  const cCal=tot.carb*4, pCal=tot.prot*4, fCal=tot.fat*9, tCal=(cCal+pCal+fCal)||1;
  const pctC=Math.round(cCal/tCal*100), pctP=Math.round(pCal/tCal*100), pctF=Math.round(fCal/tCal*100);

  const pgHdr = (title) => `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;border-bottom:2px solid #00aaff;padding-bottom:14px;">
      <div>
        <div style="font-size:28px;font-weight:900;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:3px;font-family:'Barlow Condensed',sans-serif;">${title}</div>
        <div style="color:rgba(255,255,255,.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-top:2px;font-family:'Barlow Condensed',sans-serif;">${name}</div>
      </div>
      ${logoSmall}
    </div>`;

  const mealTablesHTML = meals.map(meal=>{
    const mt=mealTotals(meal);
    const rows=meal.items.map(item=>{
      const f2=foods[item.fi]; if(!f2) return '';
      const cv=calcItem(item);
      const isUnitFood = f2.wpu || f2.calcMode==='wpu' || f2.calcMode==='perUnit';
      const qtyDisplay = isUnitFood ? item.qty+' '+(f2.unit||'un') : item.qty+'g';
      return `<tr>${pdfTD(f2.name)}${pdfTDC(qtyDisplay)}${pdfTDC(f1(cv.cal))}${pdfTDC(f1(cv.carb)+'g')}${pdfTDC(f1(cv.prot)+'g')}${pdfTDC(f1(cv.fat)+'g')}</tr>`;
    }).join('');
    return `
      <div style="margin-bottom:18px;">
        <div style="background:#0b1e45;padding:9px 14px;border-left:4px solid #00aaff;">
          <span style="font-family:'Barlow Condensed',sans-serif;font-style:italic;font-weight:700;font-size:15px;color:#00aaff;text-transform:uppercase;letter-spacing:1px;">${meal.name}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
          <thead><tr>${pdfTH('Alimento')}${pdfTHC('Qtd')}${pdfTHC('Kcal')}${pdfTHC('Carb')}${pdfTHC('Prot')}${pdfTHC('Gord')}</tr></thead>
          <tbody>${rows||'<tr><td colspan="6" style="padding:10px;text-align:center;color:rgba(255,255,255,.3);font-style:italic;">Sem alimentos</td></tr>'}</tbody>
          <tfoot><tr>
            <td colspan="2" style="padding:8px 12px;background:#0d1f3c;color:#00aaff;font-weight:700;font-size:12px;text-transform:uppercase;font-family:'Barlow Condensed',sans-serif;border-top:1px solid #00aaff;">TOTAL DA REFEIÇÃO</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.cal)}</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.carb)}g</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.prot)}g</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.fat)}g</td>
          </tr></tfoot>
        </table>
      </div>`;
  }).join('') || '<div style="color:rgba(255,255,255,.3);text-align:center;padding:30px;font-style:italic;">Nenhuma refeição cadastrada.</div>';

  const seenSub = new Map();
  meals.forEach(m=>m.items.forEach(it=>{ if(!seenSub.has(it.fi)) seenSub.set(it.fi,it.qty); }));
  const pdfSubRows = [];
  seenSub.forEach((qty,fi)=>{
    const food=foods[fi]; if(!food) return;
    const subs=findTacoSubs(food);
    if(!subs.length) return;
    pdfSubRows.push({food,qty,subs});
  });
  const th  = tx=>`<th style="padding:8px 10px;text-align:left;color:#00aaff;font-size:10px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`;
  const thc = tx=>`<th style="padding:8px 10px;text-align:center;color:#00aaff;font-size:10px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`;
  const td  = tx=>`<td style="padding:7px 10px;color:#d0d8e8;font-size:12px;border-bottom:1px solid #1a3d6e;">${tx}</td>`;
  const tdc = tx=>`<td style="padding:7px 10px;color:#d0d8e8;font-size:12px;border-bottom:1px solid #1a3d6e;text-align:center;">${tx}</td>`;
  const isUnitF = f=>(f.wpu||f.calcMode==='wpu'||f.calcMode==='perUnit');
  const substTableHTML = pdfSubRows.length
    ? `<table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
        <thead><tr>${th('Alimento Prescrito')}${thc('Qtd.')}${th('Substituto 1 (TACO)')}${thc('Qtd. equiv.')}${th('Substituto 2 (TACO)')}${thc('Qtd. equiv.')}</tr></thead>
        <tbody>${pdfSubRows.map(r=>{
          const qStr = isUnitF(r.food) ? r.qty+' '+(r.food.unit||'un') : r.qty+'g';
          const e1 = r.subs[0] ? equivQtyStr(r.food,r.qty,r.subs[0]) : '—';
          const e2 = r.subs[1] ? equivQtyStr(r.food,r.qty,r.subs[1]) : '—';
          return `<tr>${td(r.food.name)}${tdc(qStr)}${td(r.subs[0]?r.subs[0].name:'—')}${tdc(e1)}${td(r.subs[1]?r.subs[1].name:'—')}${tdc(e2)}</tr>`;
        }).join('')}</tbody>
      </table>`
    : '<div style="color:rgba(255,255,255,.3);font-style:italic;padding:12px 0;text-align:center;">Nenhum alimento prescrito na dieta.</div>';

  const compHTML = compRows.length
    ? compRows.map(r=>`<tr>${pdfTD(r[0])}${pdfTDC(r[1])}${pdfTDC(r[2])}</tr>`).join('')
    : '<tr><td colspan="3" style="padding:12px;text-align:center;color:rgba(255,255,255,.3);font-style:italic;">Nenhum manipulado prescrito</td></tr>';
  const ergoHTML = ergoRows.length
    ? ergoRows.map(r=>`<tr>${pdfTD(r[0])}${pdfTDC(r[1])}${pdfTDC(r[2])}</tr>`).join('')
    : '<tr><td colspan="3" style="padding:12px;text-align:center;color:rgba(255,255,255,.3);font-style:italic;">Nenhum ergogênico prescrito</td></tr>';
  const obsHTML = obs.trim()
    ? obs.split('\n').filter(l=>l.trim()).map(l=>`<div style="padding:7px 0;border-bottom:1px solid rgba(26,61,110,.35);color:#d0d8e8;font-size:13px;font-family:'Rajdhani',sans-serif;"><span style="color:#00aaff;margin-right:8px;">▸</span>${l.trim()}</div>`).join('')
    : '<div style="color:rgba(255,255,255,.3);font-style:italic;padding:12px 0;">Nenhuma observação registrada.</div>';

  const macroCardStyle = (top,numColor) => `background:#0d1f3c;border:1px solid #1a3d6e;border-top:3px solid ${top};border-radius:4px;padding:14px;text-align:center;`;

  return `
<div style="width:794px;background:#000;color:#fff;font-family:'Barlow Condensed',sans-serif;">

  <!-- PAGE 1: COVER -->
  <div style="width:794px;min-height:1122px;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 50px;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(0,100,200,.13) 0%,transparent 65%);pointer-events:none;"></div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:50%;border:1px solid rgba(0,170,255,.06);pointer-events:none;"></div>

    <div style="margin-bottom:36px;text-align:center;">${logoTag}</div>

    <div style="font-size:80px;font-weight:900;font-style:italic;color:#00aaff;text-align:center;letter-spacing:8px;text-transform:uppercase;line-height:1;">TEAM DECA</div>

    <div style="width:220px;height:2px;background:linear-gradient(90deg,transparent,#00aaff,transparent);margin:20px auto;"></div>

    <div style="font-size:17px;font-style:italic;color:rgba(255,255,255,.5);text-align:center;letter-spacing:4px;text-transform:uppercase;margin-bottom:56px;">
      TRANSFORME SEU CORPO. SUPERE SEUS LIMITES.
    </div>

    <div style="background:rgba(0,50,120,.2);border:1px solid rgba(0,170,255,.3);border-radius:8px;padding:32px 52px;text-align:center;min-width:380px;">
      <div style="font-size:34px;font-weight:900;font-style:italic;color:#fff;margin-bottom:18px;text-transform:uppercase;letter-spacing:2px;">${name}</div>
      <div style="display:flex;justify-content:center;gap:36px;font-size:15px;color:rgba(255,255,255,.65);font-family:'Rajdhani',sans-serif;">
        ${age    ? `<div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">Idade</div>${age} anos</div>` : ''}
        ${weight ? `<div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">Peso</div>${weight} kg</div>` : ''}
        ${height ? `<div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">Altura</div>${height} cm</div>` : ''}
      </div>
      ${tmb!=='—' ? `
      <div style="margin-top:18px;padding-top:16px;border-top:1px solid rgba(0,170,255,.2);display:flex;justify-content:center;gap:36px;font-size:15px;color:rgba(255,255,255,.6);font-family:'Rajdhani',sans-serif;">
        <div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">TMB</div>${tmb} kcal</div>
        <div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">GET</div>${get} kcal</div>
      </div>` : ''}
    </div>

    <div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:linear-gradient(90deg,transparent,#00aaff 30%,#0055cc 70%,transparent);"></div>
  </div>

  <!-- PAGE 2: DIET -->
  <div class="pb" style="width:794px;min-height:1122px;background:#000;padding:40px;page-break-before:always;">
    ${pgHdr('Planejamento Alimentar')}
    ${waterFreeBarHTML}
    ${mealTablesHTML}

    <div style="margin-top:20px;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:20px;page-break-inside:avoid;break-inside:avoid;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:16px;font-family:'Barlow Condensed',sans-serif;">Resumo de Macronutrientes</div>
      <div style="display:flex;gap:16px;align-items:center;">
        <div style="flex:1;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">
          <div style="${macroCardStyle('#00aaff','#00aaff')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Calorias</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">${f1(tot.cal)}</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">kcal</div>
          </div>
          <div style="${macroCardStyle('#4db8ff','#4db8ff')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Carboidratos</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#4db8ff;font-family:'Barlow Condensed',sans-serif;">${f1(tot.carb)}g</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">${pctC}% das kcal</div>
          </div>
          <div style="${macroCardStyle('#ff7070','#ff7070')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Proteínas</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#ff7070;font-family:'Barlow Condensed',sans-serif;">${f1(tot.prot)}g</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">${pctP}% das kcal</div>
          </div>
          <div style="${macroCardStyle('#ffd166','#ffd166')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Gorduras</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#ffd166;font-family:'Barlow Condensed',sans-serif;">${f1(tot.fat)}g</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">${pctF}% das kcal</div>
          </div>
        </div>
        ${chartImg ? `<div style="flex-shrink:0;"><img src="${chartImg}" style="width:170px;height:170px;object-fit:contain;"></div>` : ''}
      </div>
    </div>
  </div>

  <!-- PAGE 3: SUBSTITUIÇÕES -->
  <div class="pb" style="width:794px;min-height:1122px;background:#000;padding:40px;page-break-before:always;">
    ${pgHdr('Alimentos de Substituição')}
    <div style="color:rgba(255,255,255,.4);font-size:12px;margin-bottom:18px;">Equivalência calórica calculada com base na tabela TACO. Troque pelo substituto na quantidade indicada para manter os macros da dieta.</div>
    ${substTableHTML}
  </div>

  <!-- PAGE 4: EXTRAS -->
  <div class="pb" style="width:794px;min-height:1122px;background:#000;padding:40px;page-break-before:always;position:relative;">
    ${pgHdr('Prescrições & Orientações')}

    <div style="margin-bottom:26px;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:12px;font-family:'Barlow Condensed',sans-serif;">Manipulados</div>
      <table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
        <thead><tr>${pdfTH('Substância')}${pdfTHC('Dosagem')}${pdfTHC('Momento')}</tr></thead>
        <tbody>${compHTML}</tbody>
      </table>
    </div>

    <div style="margin-bottom:26px;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:12px;font-family:'Barlow Condensed',sans-serif;">Ergogênicos</div>
      <table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
        <thead><tr>${pdfTH('Substância')}${pdfTHC('Dose / Aplicação')}${pdfTHC('Frequência Semanal')}</tr></thead>
        <tbody>${ergoHTML}</tbody>
      </table>
    </div>

    <div style="margin-bottom:26px;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:12px;font-family:'Barlow Condensed',sans-serif;">Observações & Orientações</div>
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:16px;">${obsHTML}</div>
    </div>

    <div style="position:absolute;bottom:28px;left:40px;right:40px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(0,170,255,.2);padding-top:14px;">
      <div style="font-size:11px;color:rgba(255,255,255,.25);font-style:italic;font-family:'Barlow Condensed',sans-serif;">TEAM DECA — Consultoria Fitness Profissional</div>
      <div style="font-size:11px;color:rgba(255,255,255,.25);font-family:'Rajdhani',sans-serif;">${new Date().toLocaleDateString('pt-BR')}</div>
    </div>
  </div>

</div>`;
}

// ===================== PDF IMPORT =====================
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

let importData = null;

function openImportModal(){
  importData = null;
  document.getElementById('importStatus').innerHTML = '';
  document.getElementById('importPreview').innerHTML = '';
  document.getElementById('importActions').classList.add('hidden');
  document.getElementById('importFileInput').value = '';
  document.getElementById('modalImport').classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function closeImportModal(){
  document.getElementById('modalImport').classList.add('hidden');
  document.body.classList.remove('modal-open');
}

async function processImportFile(input){
  const file = input.files[0];
  if(!file) return;
  const statusEl  = document.getElementById('importStatus');
  const previewEl = document.getElementById('importPreview');
  const actionsEl = document.getElementById('importActions');

  statusEl.innerHTML  = '<span style="color:#00aaff;">⏳ Lendo PDF, aguarde...</span>';
  previewEl.innerHTML = '';
  actionsEl.classList.add('hidden');

  try {
    const buf = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buf }).promise;

    const pageTexts = [];
    for(let p = 1; p <= pdf.numPages; p++){
      const page = await pdf.getPage(p);
      const tc   = await page.getTextContent();
      const items = [...tc.items].sort((a,b)=>{
        const dy = Math.round((b.transform[5] - a.transform[5]) / 4);
        return dy !== 0 ? dy : a.transform[4] - b.transform[4];
      });
      pageTexts.push(items.map(i => i.str).join(' '));
    }

    importData = parsePDFPages(pageTexts);
    renderImportPreview(importData, pageTexts);
    statusEl.innerHTML = `<span style="color:#00cc66;">✅ PDF processado! Confira os dados abaixo e toque em Importar.</span>`;
    actionsEl.classList.remove('hidden');
  } catch(e){
    console.error(e);
    statusEl.innerHTML = `<span style="color:#ff6b6b;">❌ Erro ao ler PDF: ${e.message}</span>`;
  }
}

function parsePDFPages(pages){
  const all = pages.join('\n');
  const res = { name:'', age:'', weight:'', height:'', water:'', freeDays:[],
                meals:[], compounds:[], ergogenics:[], observations:'',
                rawComp:'', rawErgo:'' };

  const ageM = all.match(/(\d{1,3})\s*anos/i);
  if(ageM) res.age = ageM[1];

  const wM = all.match(/(\d{2,3}(?:[.,]\d{1,2})?)\s*kg/i);
  if(wM) res.weight = wM[1].replace(',','.');

  const hM = all.match(/(\d{3})\s*cm/i);
  if(hM) res.height = hM[1];

  const nameM = all.match(/LIMITES\.?\s+([A-ZÀ-Üa-zà-ü][A-Za-zÀ-ÿ\s]{2,50?}?)(?:\s{2,}|\s+(?:IDADE|anos|\d{2,3}\s*(?:anos|kg|cm)))/i);
  if(nameM) res.name = nameM[1].trim().replace(/\s+/g,' ');

  // ---- Água & refeições livres ----
  const waterM = all.match(/Meta de [ÁA]gua Di[áa]ria\s*(\d+(?:[.,]\d+)?)\s*ml/i);
  if(waterM) res.water = waterM[1].replace(',','.');

  const freeM = all.match(/Refei[çc][õo]es Livres na Semana\s*((?:(?:Dom|Seg|Ter|Qua|Qui|Sex|S[áa]b)(?:\s*,\s*)?)+|Nenhuma)/i);
  if(freeM && !/nenhuma/i.test(freeM[1])){
    const found = freeM[1].match(/Dom|Seg|Ter|Qua|Qui|Sex|S[áa]b/gi) || [];
    res.freeDays = DAY_ABBR.reduce((acc,abbr,i)=>{
      if(found.some(f=>f.toLowerCase()===abbr.toLowerCase())) acc.push(i);
      return acc;
    },[]);
  }

  const p2 = pages[1] || pages[0] || '';
  const mealBlocks = p2.split(/(?=Refeição\s+\d)/i).filter(b => /^Refeição\s+\d/i.test(b.trim()));

  for(const block of mealBlocks){
    const headerEnd = block.search(/Alimento|TOTAL|Qtd/i);
    const mealName  = block.substring(0, headerEnd > 0 ? headerEnd : 80).trim().replace(/\s+/g,' ');
    const bodyEnd   = block.search(/TOTAL DA REFEIÇÃO/i);
    const mealBody  = block.substring(0, bodyEnd > 0 ? bodyEnd : block.length).toLowerCase();

    const meal = { name: mealName, items:[] };
    const used = new Set();

    for(let fi = 0; fi < foods.length; fi++){
      const fname = foods[fi].name.toLowerCase();
      const idx   = mealBody.indexOf(fname);
      if(idx === -1 || used.has(fi)) continue;
      used.add(fi);

      const after = block.substring(idx + fname.length, idx + fname.length + 80);
      const qM    = after.match(/\s*(\d+(?:\.\d+)?)/);
      const qty   = qM ? parseFloat(qM[1]) : (foods[fi].calcMode === 'perUnit' ? 1 : 100);
      meal.items.push({ fi, qty: isNaN(qty) ? 100 : qty });
    }

    res.meals.push(meal);
  }

  const p3 = pages[2] || '';

  const idxManip = p3.search(/MANIPULADOS/i);
  const idxErgo  = p3.search(/ERGOGÊN/i);
  const idxObs   = p3.search(/OBSERVA[ÇC]/i);

  if(idxManip >= 0){
    const end = idxErgo > idxManip ? idxErgo : (idxObs > idxManip ? idxObs : p3.length);
    res.rawComp = p3.substring(idxManip + 12, end)
      .replace(/Substância|Dosagem|Momento|prescrito|Nenhum/gi,'').replace(/\s{3,}/g,'\n').trim();

    const tokens = res.rawComp.split(/\s{2,}|\n/).map(t=>t.trim()).filter(Boolean);
    for(let i = 0; i + 2 < tokens.length; i += 3)
      res.compounds.push([tokens[i], tokens[i+1]||'', tokens[i+2]||'']);
  }

  if(idxErgo >= 0){
    const end = idxObs > idxErgo ? idxObs : p3.length;
    res.rawErgo = p3.substring(idxErgo + 10, end)
      .replace(/Substância|Dose|Aplicação|Frequência Semanal|prescrito|Nenhum|ERGOGÊN\w*/gi,'')
      .replace(/\s{3,}/g,'\n').trim();

    const tokens = res.rawErgo.split(/\s{2,}|\n/).map(t=>t.trim()).filter(Boolean);
    for(let i = 0; i + 2 < tokens.length; i += 3)
      res.ergogenics.push([tokens[i], tokens[i+1]||'', tokens[i+2]||'']);
  }

  if(idxObs >= 0){
    const raw     = p3.substring(idxObs + 24);
    const footerI = raw.search(/TEAM DECA.*Consultoria|^\d{2}\/\d{2}\/\d{4}/im);
    const content = raw.substring(0, footerI > 0 ? footerI : raw.length);
    res.observations = content.split(/▸|•/).map(l=>l.trim()).filter(Boolean).map(l=>'• '+l).join('\n');
  }

  return res;
}

function renderImportPreview(d, rawPages){
  const mealsFound = d.meals.filter(m=>m.items.length>0).length;

  document.getElementById('importPreview').innerHTML = `
    <div style="margin-top:14px;display:grid;gap:12px;">

      <div style="background:#071629;border:1px solid #1a3d6e;border-top:2px solid #00aaff;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Dados do Aluno</div>
        <div class="g2" style="gap:8px;margin-bottom:8px;">
          <div><label class="lbl">Nome</label><input id="ip_name" type="text" value="${d.name}" placeholder="—"></div>
          <div><label class="lbl">Idade</label><input id="ip_age" type="number" inputmode="numeric" value="${d.age}" placeholder="—"></div>
        </div>
        <div class="g2" style="gap:8px;">
          <div><label class="lbl">Peso (kg)</label><input id="ip_weight" type="number" inputmode="decimal" value="${d.weight}" placeholder="—"></div>
          <div><label class="lbl">Altura (cm)</label><input id="ip_height" type="number" inputmode="numeric" value="${d.height}" placeholder="—"></div>
        </div>
      </div>

      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Planejamento Alimentar</div>
        ${mealsFound > 0
          ? d.meals.filter(m=>m.items.length>0).map(m=>`
              <div style="margin-bottom:6px;padding:6px 8px;background:rgba(0,170,255,.07);border-left:2px solid #00aaff;border-radius:2px;">
                <div style="color:#fff;font-size:13px;font-weight:600;">${m.name}</div>
                <div style="color:rgba(255,255,255,.45);font-size:11px;">
                  ${m.items.map(it=>foods[it.fi]?.name+' ('+it.qty+(foods[it.fi]?.unit||'g')+')').join(' · ')}
                </div>
              </div>`).join('')
          : `<div style="color:rgba(255,255,255,.3);font-size:12px;font-style:italic;">
               Nenhuma refeição detectada automaticamente. As refeições serão criadas pelo nome apenas — adicione os alimentos manualmente após importar.
             </div>
             ${d.meals.map(m=>`<div style="color:rgba(255,255,255,.4);font-size:12px;padding:3px 0;">• ${m.name}</div>`).join('')}`
        }
      </div>

      ${d.rawComp ? `
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
          Manipulados detectados: ${d.compounds.length}
        </div>
        <pre style="color:rgba(255,255,255,.5);font-size:11px;font-family:'Rajdhani',sans-serif;white-space:pre-wrap;max-height:80px;overflow-y:auto;">${d.rawComp}</pre>
      </div>` : ''}

      ${d.rawErgo ? `
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
          Ergogênicos detectados: ${d.ergogenics.length}
        </div>
        <pre style="color:rgba(255,255,255,.5);font-size:11px;font-family:'Rajdhani',sans-serif;white-space:pre-wrap;max-height:80px;overflow-y:auto;">${d.rawErgo}</pre>
      </div>` : ''}

      ${d.observations ? `
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Observações</div>
        <pre style="color:rgba(255,255,255,.5);font-size:11px;font-family:'Rajdhani',sans-serif;white-space:pre-wrap;max-height:80px;overflow-y:auto;">${d.observations}</pre>
      </div>` : ''}

    </div>`;
}

function applyImport(){
  if(!importData) return;

  document.getElementById('sName').value   = document.getElementById('ip_name')?.value   || importData.name;
  document.getElementById('sAge').value    = document.getElementById('ip_age')?.value    || importData.age;
  document.getElementById('sWeight').value = document.getElementById('ip_weight')?.value || importData.weight;
  document.getElementById('sHeight').value = document.getElementById('ip_height')?.value || importData.height;
  calcTMB();

  document.getElementById('sWater').value = importData.water || '';
  updateWater();
  freeDays = [...(importData.freeDays || [])];
  renderFreeDaysUI();

  meals = []; mealIdCtr = 0;
  importData.meals.forEach(m => {
    mealIdCtr++;
    meals.push({ id: mealIdCtr, name: m.name, items: [...m.items] });
  });
  renderMeals();

  const compBody = document.getElementById('compBody');
  compBody.innerHTML = '<div id="compEmpty" class="empty-hint">Nenhum manipulado adicionado</div>';
  compCtr = 0;
  importData.compounds.forEach(r => {
    addCompound();
    const rows = compBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]; ins[1].value=r[1]; ins[2].value=r[2];
  });

  const ergoBody = document.getElementById('ergoBody');
  ergoBody.innerHTML = '<div id="ergoEmpty" class="empty-hint">Nenhum ergogênico adicionado</div>';
  ergoCtr = 0;
  importData.ergogenics.forEach(r => {
    addErgogenic();
    const rows = ergoBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]; ins[1].value=r[1]; ins[2].value=r[2];
  });

  document.getElementById('observations').value = importData.observations;

  closeImportModal();
  switchTab('aluno');
}

// ===================== INIT =====================
renderMeals();
renderFreeDaysUI();
renderStudentsList();
updateStudentStatusLine();
if(gcalClientId){
  document.getElementById('gcalClientId').value = gcalClientId;
  updateGcalStatus('desconectado (toque em Conectar)');
}
