const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.header__icon')

const body = document.body;

if (menu && menuBtn) {
     menuBtn.addEventListener('click', e => {
          menu.classList.toggle('active')
          menuBtn.classList.toggle('active')
          body.classList.toggle('lock')
     })

     menu.addEventListener('click', e => {
          if (e.target.classList.contains('nav')) {
               menu.classList.remove('active')
               menuBtn.classList.remove('active')
               body.classList.remove('lock')
          }
     })

     menu.querySelectorAll('.nav__link').forEach(link => {
          link.addEventListener('click', () => {
               menu.classList.remove('active')
               menuBtn.classList.remove('active')
               body.classList.remove('lock')
          })
     })
}

// ================================================

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
     anchor.addEventListener('click', event => {
          event.preventDefault();

          const blockID = anchor.getAttribute('href').substring(1);

          document.getElementById(blockID).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          })
     })
})

// ===========================================================

const burgerButton = document.getElementById('burger-button');

function toggleBurgerButtonVisibility() {
     if (window.innerWidth >= 769) {
          burgerButton.classList.remove('header__icon');
     } else {
          burgerButton.classList.add('header__icon');
     }
}

window.addEventListener('load', toggleBurgerButtonVisibility,);
window.addEventListener('resize', toggleBurgerButtonVisibility);

// ==========================================================================