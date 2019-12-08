var ref = document.getElementsByTagName("script")[0];
var script = document.createElement("script");
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js";

ref.parentNode.insertBefore(script, ref);

var levelTitle = document.getElementById("level");


function level_5_minigame() {
    document.onkeyup = function(arrowkey) {
        if (arrowkey.keyCode == 32) {
            keyPressed();
            return false;
        }
    }

    var can_click = true;

    var count_clicks = 0;
    var min_clicks = 50;

    function myInterval(sec) {
        var interval = setInterval(function(){startInterval()}, 1000);
        function startInterval() {
            if (sec == 0) {
                clearInterval(interval);
                can_click = false;

                if (count_clicks >= min_clicks) {
                    story.innerText = `Aantal keer geklikt: ${count_clicks}. ${br} ${level5_minigameWin}`;
                    button1.innerText = next;
                    button1.onclick = level_6;

                } else {
                    story.innerText = `Aantal keer geklikt: ${count_clicks}. ${br} ${level5_minigameLose} ${newGame}`;
                    button1.innerText = dead;

                    if (count_clicks < min_clicks ) {
                        loseAudio();
                    }

                    button1.onclick = refreshPage;
                    button1.style.backgroundColor = "#CC0E00";
                    levelImage.style.filter = "grayscale(100%)";
                }
            } else {
                sec--;
                $(levelTitle).text(sec);
            }
        }
    }

    // zodra er op de spatiebalk wordt gedrukt, dan wordt funciton keyPressed() aangeroepen en uitgevoerd
    // in deze functie worden het aantal clicks opgeteld met +1 en wordt de timer gestart die aftelt in function startInterval() totdat de timer gelijk is aan 0
    function keyPressed() {
        if (can_click == true) {
            count_clicks++;
            $(story).text(count_clicks);

            if (count_clicks == 1) {
                myInterval(11);
            }
        }
    }
}


function level_9_minigame() {
    story.innerText = level9_minigame + br;

    var input = document.createElement("input");
    story.appendChild(input);

    input.setAttribute("id", "number")
    input = document.getElementById("number");

    button1.innerText = "Submit";

    var min_wait = 12;

    function action() {
        if (input.value > 0 && input.value <= min_wait) {
            story.innerText = level9_minigameWin;
            button1.onclick = level_10;
            button1.innerText = next;
        } else if (input.value > min_wait) {
            story.innerText = level9_minigameLose + br;
            button1.innerText = dead;
            button1.onclick = refreshPage;

            button1.style.backgroundColor = "#CC0E00";
            levelImage.style.filter = "grayscale(100%)";

            loseAudio();
        }
    }

    button1.onclick = action;
}