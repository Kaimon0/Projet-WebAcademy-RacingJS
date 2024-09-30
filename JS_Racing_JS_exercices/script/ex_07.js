window.onload = function() {

    (function() {

        var bg = document.querySelector("footer > div > canvas");
        var pause = document.querySelector("footer > div > button:nth-of-type(1)");
        var stop = document.querySelector("footer > div > button:nth-of-type(2)");
        // var mute = document.querySelector("footer > div > button:nth-of-type(3)");
        var sound = new Audio("../triangle.ogg");

        
        if (bg.getContext) {
            
            var triangle = bg.getContext("2d");
        
            triangle.beginPath();
            triangle.moveTo(6, 6); 
            triangle.lineTo(14, 10);
            triangle.lineTo(6, 14);
            triangle.fillStyle = "white";
            triangle.fill();
          }

          bg.addEventListener("click", function(){

            sound.play();

          });

          pause.addEventListener("click", function(){

            if(sound.play()) {

                sound.pause();
            }


          });

          stop.addEventListener("click", function(){

            if(sound.play){
                sound.stop();

            }
          });

          stop.addEventListener("click", function(){

            if(sound.play){
                sound.stop();

            }

            });


    })(); 
    };