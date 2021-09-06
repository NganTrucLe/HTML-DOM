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
 
 */

/**
 * Define Global Variables
 * 
 */
 const header=document.querySelector(".page__header");
 console.log(header.offsetTop);
 const section=document.getElementsByClassName("landing__container");
 const sections=document.getElementsByTagName("section");
 const navbarList=document.getElementById("navbar__list");
 const list=document.getElementById("navbar__list").children;

/**i
 * End Global Variabless
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildMenu(){
    for (let container of section){
       const items=document.createElement("li");
       items.textContent=container.firstElementChild.textContent;
       console.log(items);
       navbarList.appendChild(items);
       items.classList.add("menu__link");
    }
}


// Add class 'active' to section when near top of viewport
function active(){
   let measure=document.documentElement.scrollTop;
   //console.log(measure);
 //  console.log(sections[0].offsetTop);
   if (measure>0 && measure < sections[0].offsetTop){ 
    const selectorPainted=document.querySelector("#paint");
   // console.log(selectorPainted.innerHTML);
    selectorPainted.removeAttribute("id");
    let first=navbarList.children[0];
    first.id="paint";
   }else if (measure>sections[0].offsetTop && measure < sections[1].offsetTop){
    const selectorPainted=document.querySelector("#paint");
  //  console.log(selectorPainted.innerHTML);
    selectorPainted.removeAttribute("id");
    let first=navbarList.children[1];
    first.id="paint";
   }else if (measure>sections[1].offsetTop && measure < sections[2].offsetTop){
    const selectorPainted=document.querySelector("#paint");
 //   console.log(selectorPainted.innerHTML);
    selectorPainted.removeAttribute("id");
    let first=navbarList.children[2];
    first.id="paint";
   }
}

// Scroll to anchor ID using scrollTO event
function scroll(e){
    const onClick=e.target.textContent;
    for (let idSection of sections){
      const id=idSection.getAttribute("data-nav");
      if (onClick==id){
        window.scrollTo({
            top: idSection.offsetTop-100,
            behavior: 'smooth'
        });
      }
    }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildMenu();

// Scroll to section on link click
navbarList.addEventListener("click", scroll);
/*navbarList.addEventListener("mouseover",(e)=>{
  const selector=e.target.textContent;
  console.log(selector);
  for (let index of list){
    if (selector==index.textContent){
      const selectorPainted=document.querySelector("#paint");
  //  console.log(selectorPainted.innerHTML);
      selectorPainted.removeAttribute("id");
      index.id="paint";
    }
  }
  e.preventDefault();
})*/

let first=navbarList.children[0];
first.id="paint";
// Set sections as active
window.onscroll = function() {active()};
