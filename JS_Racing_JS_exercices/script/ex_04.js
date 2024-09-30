window.onload = function() {


    (function() {

        document.addEventListener("keydown", (e) => {
        var div = document.querySelector("footer > div");
        if(div.innerHTML.length <= 42) {
            div.innerHTML += e.key;
        }else {
            div.innerHTML = div.innerHTML.slice(1);
            
        }

        });
          
    })(); 
};