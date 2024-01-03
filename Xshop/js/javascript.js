// only for search btn
    let searchForm = document.querySelector('.search-form');

    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');

        // searchForm.classList.remove('active');
        cart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');

    }
//end for search btn

//start for cart
    let cart = document.querySelector('.shopping-cart');
    document.querySelector('#cart-btn').onclick = () =>{
        cart.classList.toggle('active');

        searchForm.classList.remove('active');
        // cart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
//end fot cart
// form start section

    let loginForm = document.querySelector('.login-form');
    document.querySelector('#login-btn').onclick = () =>{
        loginForm.classList.toggle('active');

        searchForm.classList.remove('active');
        cart.classList.remove('active');
        // loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
//form end section
//media query toggle
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//start  carousel design
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//end carousel design