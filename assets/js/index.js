const iconBurger = document.getElementById('icon');
let menuBurger = document.getElementById('menuBurger');
const navbar = document.querySelector('nav');

let hidden = true;

menuBurger.style.display = "none";

iconBurger.addEventListener('click', ()=>{
    if (hidden) {
        navbar.style.borderRadius = "0 0 25px 25px";
        menuBurger.style.display = "none";
        hidden = false;
    }
    else {
        navbar.style.borderRadius = "0%";
        menuBurger.style.display = "initial";
        hidden = true;
    };
});
