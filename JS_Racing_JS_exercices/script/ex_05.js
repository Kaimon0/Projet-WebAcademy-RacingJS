let body = document.getElementsByTagName("body");
let buttons = document.getElementsByTagName("button");
let select = document.getElementsByTagName("select");


//permet d'attendre que tout les elements de la page soit charger 
//au lieu que seul la page soit charger comme load
window.addEventListener("DOMContentLoaded", () => {

    let style = window.getComputedStyle(body[0]);
    let button_plus = buttons[0];
    let button_minus = buttons[1];

    button_plus.addEventListener("click", (event) => {
        document.body.style.fontSize = parseInt(style.fontSize) + 1 + "px";
    });

    button_minus.addEventListener("click", (event) => {
        document.body.style.fontSize = parseInt(style.fontSize) - 1 + "px";
    });

    select[0].addEventListener("change", (event) => {
        document.body.style.backgroundColor = event.target.value;

    });
    
  });
