 /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER PRICES ===============*/
const swiperPrices= new Swiper('.prices__swiper',{
 loop:true,
grabCursor:true,
spaceBetween:24,
pagination: {
   el:'.swiper-pagination',
   clickable:true,
},
autoplay:{
   delay:3000,
   disableOnInteraction:false,
},

})


// =================SWIPER REVIEWS====================
const swiperReviews = new Swiper('.reviews__swiper', {
   
  loop: true,
  spaceBetween:16,
  grabCursor:true,
  speed: 600,
   
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
autoplay:{
   delay:3000,
   disableOnInteraction:false,
}
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
              :scrollUp.classListl.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
   origin:'top',
   distance:'60px',
   duration:2000,
//reset:true, // Animation repeat
})
sr.reveal('.home__content',{origin:'bottom'})
sr.reveal('.home__info',{origin:'bottom',delay:800})
sr.reveal('.home__data',{delay:1400})
sr.reveal('.home__button',{origin:'left',delay:1800})

sr.reveal('.delivery__data',{origin:'right' })
sr.reveal('.delivery__content',{origin:'left',dleay:600 })
sr.reveal('.delivery__img',{ delay:1200 })


sr.reveal('.about__data',{ origin:'left' })
sr.reveal('.about__img',{ origin:'right' })

sr.reveal('.prices__box')
sr.reveal('prices__swiper',{ origin:'bottom',delay:600})

sr.reveal('.gallery__image',{  interval:100})
sr.reveal('.footer__container')








