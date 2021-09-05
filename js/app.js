/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
 const sections = document.querySelectorAll('section');
 const navLi = document.querySelectorAll('nav li');
 const button = document.querySelector('.float');
 
 /**
  * End Global Variables
  * Start Helper Functions
  *
  */
 
 
 
 /**
  * End Helper Functions
  * Begin Main Functions
  *
  */
 window.addEventListener('scroll', () =>{
     let current = '';
     let upTop = false;
     sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight= section.clientHeight;
        if (pageYOffset >= (sectionTop-sectionHeight/3)) {
            current =section.getAttribute('id');
        }
     })
     if (current === 'section2' || current === 'section3') {
         upTop = true
         button.classList.add('active');
     } else {
         upTop = false
         button.classList.remove('active')
     }
     console.log(upTop);
     if (upTop === true) {
         button.classList.add('active');
     }
     navLi.forEach(li =>{
         li.classList.remove('active')
         if(li.classList.contains(current)) {
             li.classList.add('active');   
         }
     })
 })
 
 // build the nav
 
 
 // Add class 'active' to section when near top of viewport
 
 
 // Scroll to anchor ID using scrollTO event
 
 
 /**
  * End Main Functions
  * Begin Events
  *
  */
 
 // Build menu
 
 // Scroll to section on link click
 
 
 // Set sections as active