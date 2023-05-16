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




const enveloppeCv = document.getElementById('enveloppeCv');
const enveloppePortfolio = document.getElementById('enveloppePortfolio');
const secCv = document.getElementById('cv');
const secPortfolio = document.getElementById('portfolio');

const main = document.querySelector('main');

let afficherCv = true;
let afficherPo = true;

secCv.style.display = "none";
secPortfolio.style.display = "none";


enveloppeCv.addEventListener('click', ()=> {
    if (afficherCv) {
        secPortfolio.style.display = "none";
        secCv.style.display = "initial";
        afficherCv = false;
        afficherPo = true;
        main.style.height = "250vh"
    }
    else {
        secCv.style.display = "none";
        afficherCv = true
        main.style.height = "110vh"
    }

})

enveloppePortfolio.addEventListener('click', ()=> {
    if (afficherPo) {
        secPortfolio.style.display = "initial";
        secCv.style.display = "none";
        afficherPo = false;
        afficherCv = true;
        main.style.height = "250vh"

    }
    else {
        secPortfolio.style.display = "none";
        afficherPo = true
        main.style.height = "110vh"

    }
});

// main.addEventListener('click', ()=> {
//     secCv.style.display = "none";
//     secPortfolio.style.display = "none";
//     main.style.height = "110vh"
// })
