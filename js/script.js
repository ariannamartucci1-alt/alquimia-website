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
  form.addEventListener('submit',async e=>{
    e.preventDefault();

    const box=document.querySelector('.waitlist-inner');
    const submit=form.querySelector('button[type="submit"]');

    if(!box)return;

    const data={
      name:form.querySelector('[name="name"]')?.value.trim()||'',
      email:form.querySelector('[name="email"]')?.value.trim()||'',
      consentimiento:form.querySelector('input[type="checkbox"]')?.checked?'Sí':'No',
      origen:'Website'
    };

    if(submit)submit.disabled=true;

    try{
     const response=await fetch('https://hook.eu1.make.com/qmntbqppprhphlb93mcpgikabl7qskdd',{
  method:'POST',
  body:new URLSearchParams(data)
});

      if(!response.ok)throw new Error('Webhook request failed');

      box.innerHTML='<div class="success-state"><div class="kicker">Alquimia</div><h2 class="section-title">GRACIAS POR FORMAR PARTE.</h2><p>Te avisaremos cuando haya nuevas piezas, historias y lanzamientos.</p><a class="btn" href="index.html">Volver al inicio</a></div>';

    }catch(error){

      if(submit)submit.disabled=false;

      const message=form.querySelector('.form-message');

      if(message){
        message.textContent='Ha ocurrido un problema. Inténtalo de nuevo.';
      }
    }
  });
}
