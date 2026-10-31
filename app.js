function setLanguage(lang){
  const chosen=lang==='km'?'km':'en';
  document.documentElement.lang=chosen;
  document.body.dataset.lang=chosen;
  document.querySelectorAll('[data-en][data-km]').forEach((el)=>{el.innerHTML=el.dataset[chosen]||el.dataset.en});
  document.querySelectorAll('.lang').forEach((button)=>{const active=button.dataset.lang===chosen;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
  try{localStorage.setItem('alura-language',chosen)}catch{}
}
let saved='en';try{saved=localStorage.getItem('alura-language')==='km'?'km':'en'}catch{}
setLanguage(saved);
document.querySelectorAll('.lang').forEach((button)=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav'),mobile=document.createElement('nav');
mobile.className='mobile-nav';mobile.setAttribute('aria-label','Mobile navigation');mobile.innerHTML=nav.innerHTML;document.querySelector('.header').append(mobile);
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');mobile.classList.toggle('open',open)});
mobile.querySelectorAll('a').forEach((a)=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');mobile.classList.remove('open')}));
// Insert the verified Telegram or other chat URL here when it is provided.
const orderChatUrl='';
if(orderChatUrl){const link=document.getElementById('contact-link');link.href=orderChatUrl;link.removeAttribute('aria-disabled');link.querySelector('span').dataset.en='Chat with us to order';link.querySelector('span').dataset.km='ផ្ញើសារមកយើងដើម្បីបញ្ជាទិញ';setLanguage(document.body.dataset.lang)}
