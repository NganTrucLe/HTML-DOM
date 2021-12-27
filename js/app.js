let navbar_menu = document.querySelector('ul');
let listSections = document.querySelectorAll('section'); 
let nav_list = [];


// function create a tag <li> and tag <a> with class and href attribute
function createNavbarList(innerText,link) {
   let navbar_list = document.createElement('li');
   navbar_list.classList.add(link);
   navbar_list.innerHTML = `<a class = "menu__link" href = "#${link}">${innerText}</a>`;
   navbar_menu.appendChild(navbar_list);
}

function buildTheNav() {
   listSections.forEach((element) => {
       let innerText = element.firstElementChild.firstElementChild.innerHTML;
       let link = element.id;
       createNavbarList(innerText,link);
   })
}

// Build menu
buildTheNav();
nav_list = document.querySelectorAll('li');
// Hover effect when scroll to any section
window.addEventListener('scroll', () => {
   let current = '';
   listSections.forEach( (section) => {
       const corYSection = section.offsetTop - section.clientHeight;
       section.classList.remove('your-active-class');
       if (pageYOffset >= corYSection){
           current = section.getAttribute('id');
       }
   })
   document.getElementById(current).classList.add('your-active-class');
   nav_list.forEach( (nav_element) => {
       nav_element.classList.remove('active');
       if (nav_element.classList.contains(current)){
           nav_element.classList.add('active');
       }
   })
})

// Build the Scroll-to-top button
const buttonScroll = document.getElementById('toTop');
window.addEventListener('scroll',() => {
   const corYSection2 = document.getElementById('section1').offsetTop;
   if (pageYOffset >= corYSection2){
       buttonScroll.style.display = 'block';
   }
   else buttonScroll.style.display = 'none';
})

// Scroll to top of the page every time the button is clicked
buttonScroll.addEventListener('click',function (){
   window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth"
   })
});