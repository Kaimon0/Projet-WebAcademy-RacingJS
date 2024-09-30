window.onload = function() {
    let div = document.querySelector("footer > div");

(function() {

    
    div.onclick = () => 
    {

        let name = prompt("What is your name ?");

        while (name == null || name == "") {
            
            name = prompt("What is your name ?");

        }  
        
            
        if (confirm ("Are you sure " + name + " is your name ?")) {

                let hello = "Hello " + name + " !";

                alert(hello);

                div.innerText = hello;
             } 
        };
     })(); 
};