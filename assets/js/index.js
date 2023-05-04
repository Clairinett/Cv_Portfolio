const iconBurger = document.getElementById('icon');
let menuBurger = document.getElementById('menuBurger');
const navbar = document.querySelector('nav');

let hidden = true;

menuBurger.style.opacity = "0";
menuBurger.style.transform = "translateY(-50vh)";

iconBurger.addEventListener('click', ()=>{
    if (hidden) {
        navbar.style.borderRadius = "0 0 25px 25px";
        menuBurger.style.transform = "translateY(-50vh)";
        hidden = false;
    }
    else {
        navbar.style.borderRadius = "0%";
        menuBurger.style.opacity = "1";
        menuBurger.style.transform = "translateY(0vh)";
        hidden = true;
    };
});