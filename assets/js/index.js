const iconBurger = document.getElementById('icon');
let menuBurger = document.querySelector('menuBurger');
const navbar = document.querySelector('nav');

let hidden = true;

menuBurger.style.display = "none";

iconBurger.addEventListener('click', ()=>{
    if (hidden) {
        navbar.style.borderRadius = "0%";
        menuBurger.style.display = "inline";
        hidden = false;
    }
    else {
        navbar.style.borderRadius = "0 0 25px 25px";
        menuBurger.style.display = "none";
        hidden = true;
    };
});


// // Sélectionner nos éléments
// let btn       = document.querySelector('button');
// let div       = document.querySelector('div');
// let hidden    = true;

// // Cacher le message
// div.style.display = "none";

// // Détecter le clic
// btn.addEventListener('click', () => {
  
//   if(hidden) {
//     btn.textContent = "Cacher";
//     div.style.display = "block";
//     hidden = false;
//   }
//   else {
//     btn.textContent = "Afficher";
//     div.style.display = "none";
//     hidden = true;
//   }
  
// });