const $=(s,p=document)=>p.querySelector(s),$$=(s,p=document)=>[...p.querySelectorAll(s)];
const root=document.documentElement, storedTheme=localStorage.getItem('uhm-theme')||'dark';root.dataset.theme=storedTheme;
$('#theme')?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('uhm-theme',root.dataset.theme)});
const drawer=$('#drawer'),overlay=$('#overlay');function closeMenu(){drawer?.classList.remove('open');overlay?.classList.remove('open');document.body.style.overflow=''} $('#menu')?.addEventListener('click',()=>{drawer.classList.add('open');overlay.classList.add('open');document.body.style.overflow='hidden'});overlay?.addEventListener('click',closeMenu);$$('.drawer a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();$('.lightbox')?.classList.remove('open')}});
const lang=$('#lang');lang?.addEventListener('click',()=>{const alternate=root.dataset.altLang;if(alternate){location.href=alternate;return}const en=root.lang==='en';root.lang=en?'fa':'en';root.dir=en?'rtl':'ltr';lang.textContent=en?'EN':'FA';localStorage.setItem('uhm-lang',root.lang)});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(e=>observer.observe(e));
addEventListener('scroll',()=>{root.style.setProperty('--progress',`${scrollY/(document.documentElement.scrollHeight-innerHeight)*100}%`);$('#dock')?.classList.toggle('show',scrollY>650)},{passive:true});
$$('.copy').forEach(b=>b.addEventListener('click',async()=>{const english=root.lang==='en', idle=english?'Copy path':'کپی مسیر';try{await navigator.clipboard.writeText(b.closest('.path').dataset.copy);b.textContent=english?'Copied ✓':'کپی شد ✓';setTimeout(()=>b.textContent=idle,1600)}catch{b.textContent=english?'Select text':'انتخاب کنید'}}));
const checks=$$('.checks input'),meter=$('.meter i');if(checks.length){let saved=JSON.parse(localStorage.getItem('uhm-prep-checks')||'[]');checks.forEach((c,i)=>{c.checked=!!saved[i];c.addEventListener('change',()=>{localStorage.setItem('uhm-prep-checks',JSON.stringify(checks.map(x=>x.checked)));update()})});function update(){meter.style.width=`${checks.filter(x=>x.checked).length/checks.length*100}%`}update()}
const hero=$('.hero');hero?.addEventListener('pointermove',e=>{if(matchMedia('(pointer:fine)').matches)hero.style.background=`radial-gradient(circle at ${e.clientX/window.innerWidth*100}% ${e.clientY/hero.offsetHeight*100}%,#0088ff18,transparent 25%)`});
const gallery=$$('.gallery img'),light=$('.lightbox');let at=0;function show(i){at=(i+gallery.length)%gallery.length;$('.lightbox img').src=gallery[at].src;$('.lightbox img').alt=gallery[at].alt;light.classList.add('open')}gallery.forEach((x,i)=>x.parentElement.addEventListener('click',()=>show(i)));$$('[data-light]').forEach(b=>b.addEventListener('click',()=>light?.classList.remove('open')));document.addEventListener('keydown',e=>{if(!light?.classList.contains('open'))return;if(e.key==='ArrowLeft')show(at+1);if(e.key==='ArrowRight')show(at-1)});

// Keep background media decorative and inexpensive: it only runs while its hero is in view.
const heroVideo=$('.hero-video');
if(heroVideo){
 const mediaObserver=new IntersectionObserver(([entry])=>entry.isIntersecting&&!document.hidden?heroVideo.play().catch(()=>{}):heroVideo.pause(),{threshold:.08});
 mediaObserver.observe(heroVideo);
 document.addEventListener('visibilitychange',()=>document.hidden?heroVideo.pause():heroVideo.play().catch(()=>{}));
}
// External links opened in a separate tab should never retain access to this page.
$$('a[target="_blank"]').forEach(link=>link.rel='noopener noreferrer');
