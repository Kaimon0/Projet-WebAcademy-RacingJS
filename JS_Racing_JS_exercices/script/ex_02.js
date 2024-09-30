window.onload = function() {


    (function() {
    
        let button = document.querySelector("footer > div");
        let i = 0;

        button.onclick = () => 
        {
            i+= 1;
            
            button.innerText = i;
        };
       
    })(); 
    };