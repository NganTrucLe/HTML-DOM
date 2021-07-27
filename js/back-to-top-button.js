const backToTopButton = document.querySelector('#back-to-top-button');

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 900) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0,0);
}