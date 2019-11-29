// left arrow key = 37
// right arrow key = 39
// space key = 32

var ref = document.getElementsByTagName("script")[0];
var script = document.createElement("script");
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js";

ref.parentNode.insertBefore(script, ref);


var levelTitle = document.getElementById("level");

function minigame() {

    document.onkeyup = function(arrowkey) {
        if (arrowkey.keyCode == 32) {
            keyPressed();

            // $("#btn").click();
            return false;
        }
    }

    var can_click = true;

    var count_clicks = 0;
    function myInterval(i) {
        var interval = setInterval(function(){startInterval()}, 1000);
        function startInterval() {
            if (i <= 0) {
                clearInterval(interval);
                can_click = false;
                story.innerText = "Aantal keer geklikt: " + count_clicks;

                if (count_clicks >= 50) {
                    story.innerText = `Aantal keer geklikt: ${count_clicks}. ${br} ${level5_minigameWin}`
                    button1.innerText = next;
                    button1.onclick = level_6;
                } else {
                    story.innerText = `Aantal keer geklikt: ${count_clicks}. ${br} ${level5_minigameLose}`
                    button1.innerText = dead;
                    button1.style.backgroundColor = "#CC0E00";
                    levelImage.style.filter = "grayscale(100%)";
                }
            } else {
                can_click = true;
                i--;
                $(levelTitle).text(i);
            }
        }
    }

    function keyPressed() {
        if (can_click == true) {
            count_clicks++;
        }
        $(story).text(count_clicks);
        if (count_clicks == 1) {
            myInterval(11);
        }
   }


}
