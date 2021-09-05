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
let button = document.getElementById('btn');
let sections = document.getElementsByTagName('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// This function add the navigation bar
 function addNavBar() {
    let navbarList = document.getElementById('navbar__list');
    let list;
    let anchor;
    for (let section=1; section<=sections.length; section++) {
        anchor = document.createElement('a');
        list = document.createElement('li');
        anchor.href=`#${sections[section-1].getAttribute('id')}`;
        anchor.className='menu__link';
        anchor.innerHTML = `${sections[section-1].getAttribute('data-nav')}`;
        list.appendChild(anchor);
        navbarList.appendChild(list);
    }
 }
// This is function make the button appear when we scroll the window to y greater than 200
function buttonDisplay(){
    let y=document.documentElement.scrollTop;
    if (y>800) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
addNavBar();
button.onclick = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"});
//sections[0].onmouseover = () => button.style.display = 'none';
window.onscroll = buttonDisplay;
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