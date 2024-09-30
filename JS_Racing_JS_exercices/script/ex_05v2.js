window.onload = function() {


    (function() {
    
        var button1 = document.querySelector(".exercice > footer > div > button:nth-of-type(1)");
        var button2 = document.querySelector(".exercice > footer > div > button:nth-of-type(2)");
        var size = 16;
        var background = document.querySelector("body");
        var select = document.querySelector("select");
        var defaut = select.value = "#bdc3c7";
        var turquoise = select.value = "#1abc9c";
        var sunFlower = select.value = "#f1c40f";
        var pumpkin = select.value = "#d35400";
        var alizarin = select.value = "#e74c3c";
        var emerald = select.value = "#40d47e";
        var peterRiver = select.value = "#3498db";

        button1.addEventListener("click", function(){

            size += 1;            
            background.style.fontSize = size + "px";
        });
            
        button2.addEventListener("click", function(){
            size -= 1;            
            background.style.fontSize = size + "px";
        });
        
        select.addEventListener("change", function(){

        if (select.value == defaut) {

            background.style.backgroundColor = "#bdc3c7";

        } else if (select.value == turquoise) {

            background.style.backgroundColor = "#1abc9c";

        } else if (select.value == sunFlower) {

            background.style.backgroundColor = "#f1c40f";

        } else if (select.value == pumpkin) {

            background.style.backgroundColor = "#d35400";
        
        } else if (select.value == alizarin) {

            background.style.backgroundColor = "#e74c3c";
        
        } else if (select.value == emerald) {

            background.style.backgroundColor = "#40d47e";
        
        }  else if (select.value == peterRiver) {

            background.style.backgroundColor = "#3498db";
        
        } else {
            
            background.style.backgroundColor = "#bdc3c7";
        }

        });

    })(); 
 };

    