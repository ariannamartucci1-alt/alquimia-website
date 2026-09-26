const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));

const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  const href=a.getAttribute('href');
  if(href===current || (current===''&&href==='index.html')){a.classList.add('active');a.setAttribute('aria-current','page');}
});

const heroFilm=document.querySelector('#hero-film');
if(heroFilm){
  const film=heroFilm.dataset.film;
  fetch(film,{method:'HEAD'}).then(r=>{
    if(r.ok){heroFilm.src=film;heroFilm.load();heroFilm.play().catch(()=>{});}
  }).catch(()=>{});
}

const form=document.querySelector('#waitlist-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const box=document.querySelector('.waitlist-inner');
    if(!box)return;
    box.innerHTML='<div class="success-state"><div class="kicker">Alquimia</div><h2 class="section-title">GRACIAS POR FORMAR PARTE.</h2><p>Te avisaremos cuando haya nuevas piezas, historias y lanzamientos.</p><a class="btn" href="index.html">Volver al inicio</a></div>';
  });
}