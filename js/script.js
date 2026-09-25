const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const heroFilm=document.querySelector('#hero-film');
if(heroFilm){
  const film=heroFilm.dataset.film;
  fetch(film,{method:'HEAD'}).then(r=>{
    if(r.ok){
      heroFilm.src=film;
      heroFilm.load();
      heroFilm.play().catch(()=>{});
    }
  }).catch(()=>{});
}

const form=document.querySelector('#waitlist-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault(); const msg=document.querySelector('.form-message'); msg.textContent='Gracias por formar parte de Alquimia.'; form.reset();});}
