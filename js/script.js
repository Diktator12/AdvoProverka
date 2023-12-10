(function () {

     $(document).ready(function () {
          $(window).scrollTop(0);
     });

     // ============================================================

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

     new Swiper('.testimonials__slider', {

          spaceBetween: 16,
          slidesPerView: 3,
          // centeredSlides: true,
          height: 400,

          navigation: {
               nextEl: '.testimonials__next',
               prevEl: '.testimonials__prev',
          },

          pagination: {
               el: '.gallery__pagination',
               type: 'bullets',
          },

          breakpoints: {
               1: {
                    slidesPerView: 1,
                    spaceBetween: 0,
               },
               577: {
                    slidesPerView: 2,
                    spaceBetween: 20,
               },
               846: {
                    slidesPerView: 3,
                    spaceBetween: 20,
               },
               1001: {
                    slidesPerView: 3,
                    spaceBetween: 16,
               }
          },

          autoHeight: true,
     });

     // =========================================================================

     const accordionItems = document.querySelectorAll('.faq__item');

     accordionItems.forEach((item) => {
          const question = item.querySelector('.faq__item-top');
          const answer = item.querySelector('.faq__item-bottom');

          item.addEventListener('click', () => {
               accordionItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                         otherItem.classList.remove('active');
                         otherItem.querySelector('.faq__item-bottom').style.height = '0';
                    }
               });

               item.classList.toggle('active');
               const maxHeight = item.classList.contains('active') ? answer.scrollHeight + 'px' : '0';
               answer.style.height = maxHeight;
          });
     });

     const telInputs = document.querySelectorAll('input[type="tel"]');
     const im = new Inputmask('+7 (999) 999-99-99');
     im.mask(telInputs);

     // =========================================================================

     var hoverElement = document.getElementById('hoverElement');

     hoverElement.addEventListener('mousedown', function () {
          hoverElement.classList.add('clicked');
     });

     document.addEventListener('mouseup', function () {
          hoverElement.classList.remove('clicked');
     });

})()