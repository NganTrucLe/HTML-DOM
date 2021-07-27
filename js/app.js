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

// Create text for navigation bar

var node1 = document.createElement("LI");
var node2 = document.createElement("LI");
var node3 = document.createElement("LI");

node1.setAttribute("class","section_1");
node2.setAttribute("class","section_2")
node3.setAttribute("class","section_3")
node1.setAttribute("class","menu__link");
node2.setAttribute("class","menu__link")
node3.setAttribute("class","menu__link")

var a1 = document.createElement("A");
var a2 = document.createElement("A");
var a3 = document.createElement("A");

a1.href = "#section1";
a2.href = "#section2";
a3.href = "#section3";

var section1 = document.createTextNode("SECTION 1");
var section2 = document.createTextNode("SECTION 2");
var section3 = document.createTextNode("SECTION 3");

a1.appendChild(section1);
a2.appendChild(section2);
a3.appendChild(section3);

node1.appendChild(a1);
node2.appendChild(a2);
node3.appendChild(a3);

document.getElementById("navbar__list").appendChild(node1);
document.getElementById("navbar__list").appendChild(node2);
document.getElementById("navbar__list").appendChild(node3);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll('nav .navbar__menu ul li');

window.addEventListener("scroll", ()=> {
    let current = "";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset > (sectionTop-sectionHeight/3)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})
