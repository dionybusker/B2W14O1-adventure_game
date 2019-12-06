// een nieuwe script tag wordt aangemaakt, hiermee kan een andere js file ingeladen worden
var ref = document.getElementsByTagName("script")[0];
var script = document.createElement("script");
script.src = "story.js";

ref.parentNode.insertBefore(script, ref);

// minigame
var ref = document.getElementsByTagName("script")[0];
var script = document.createElement("script");
script.src = "minigame.js";

ref.parentNode.insertBefore(script, ref);

// titel van de pagina wordt aangepast
document.title = "Area 51 ½ - prequel";


var gameContainer = document.getElementById("game-container");
var title = document.getElementById("title");
var story = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventory = document.getElementById("inventoryItem");
// var levelTitle = document.getElementById("level");


title.innerText = "AREA 51 ½ – PREQUEL";
story.innerText = "// verhaal";
button1.innerText = "// actie 1";
button2.innerText = "// actie 2";
button3.innerText = "// actie 3";


// STYLING
// element img wordt aangemaakt, dit laat een afbeelding zien
var levelImage = document.createElement("img");
gameContainer.appendChild(levelImage);

// styling van de afbeelding in element img
levelImage.style.maxHeight = "300px";
levelImage.style.width = "500px";
levelImage.style.margin = "auto 10px auto auto";
levelImage.style.gridArea = "image";
levelImage.style.outlineStyle = "solid";

// element h2 wordt aangemaakt, hier komt het level waar je in zit
var level = document.createElement("h2");
gameContainer.appendChild(level);
// tekst wordt toegevoegd
level.innerText = "// level";
// styling van element h2 met het level waar je in zit
level.style.gridArea = "level";
level.style.padding = "10px";
level.style.margin = "0";

// element h2 (level) krijgt een id
level.id += "level";

// element h3 wordt aangemaakt, hier komt de inventory
var inventoryTitle = document.createElement("h3");
gameContainer.appendChild(inventoryTitle);
// tekst wordt toegevoegd
inventoryTitle.innerText = "Rugzak";
// styling van element h3, hier komt de inventory
inventoryTitle.style.gridArea = "inventory";
inventoryTitle.style.padding = "10px";
inventoryTitle.style.margin = "0";
inventoryTitle.style.height = "30px";


// // afbeelding toevoegen aan item
// item.src = "img/item-sleutel.png";
// // styling van de afbeelding van item

inventory.style.paddingTop = "10px";
inventory.style.visibility = "hidden";

// het element footer wordt aangemaakt
var footer = document.createElement("footer");
gameContainer.appendChild(footer);
// tekst wordt toegevoegd
footer.innerText = "© Diony Busker, 2019";
// styling van de footer
footer.style.gridArea = "footer";
footer.style.margin = "5px auto";
footer.style.fontSize = "12px";


// mobile = false (telefoon staat uit) , mobile = true (telefoon staat aan)
var items = {"mobile" : false, "berries" : false, "knife" : false, "key" : false, "weapon" : false};

// var items = [
//     {"berries" : false, image : "img/item-bessen.png"},
//     {"knife" : false, image : "img/item-zakmes.png"},
//     {"key" : false, image : "img/item-sleutel.png"},
//     {"weapon" : false, image : "img/item-wapen.jpg"}
// ];


// var berries;
// berries.src = "img/item-bessen.png";
// var knife;
// knife.src = "img/item-zakmes.png";


// var itemImage = {
//     function (itemIMG) {
//         // image = "img/item-bessen.png";
//         var img = document.createElement("img");
//         img.src = itemIMG.image;
//         gameContainer.appendChild(img);
//     }
// }


// FUNCTIES
function start() {
    var levelTitle = document.getElementById("level");
    levelImage.src = "img/start.jpg";
    levelImage.style.filter = "none"

    levelTitle.innerText = "Start";

    button1.innerText = `LET'S GO!`;
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";

    // button1 wordt de originele kleur dat het was
    button1.style.backgroundColor = "#2f5496";

    story.innerText = intro;

    button1.addEventListener("click", level_1, {once: true});

    items = {"mobile" : false, "berries" : false, "knife" : false, "key" : false, "weapon" : false};
    // inventory.style.visibility = "hidden";
}

function level_1() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 1 - bus";
    levelImage.src = "img/level_1-bus.jpg";

    story.innerText = levelOne;

    button1.innerText = "Je zet je mobiel uit";
    button2.style.visibility = "visible";
    button2.innerText = "Je laat je mobiel aan";
    button3.style.visibility = "hidden"

    function action1() {
        level.innerText = "Je zet je mobiel uit";

        story.innerText = level1_action1;

        button1.innerText = next;
        button1.onclick = level_2;
        button2.style.visibility = "hidden";
    }

    function action2() {
        level.innerText = "Je laat je mobiel aan";

        story.innerText = level1_action2;

        button1.innerText = next;
        button1.onclick = level_2;
        button2.style.visibility = "hidden";
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.style.visibility = "hidden";
}


function level_2() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 2 - bos";
    levelImage.src = "img/level_2-bos.jpg"

    story.innerText = levelTwo;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Jullie gaan naar links";
    button2.innerText = "Jullie gaan rechtdoor";
    button3.innerText = "Jullie gaan naar rechts";

    function action1() {
        level.innerText = "Jullie gaan naar links";

        story.innerText = level2_action1 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    function action2() {
        level.innerText = "Jullie gaan rechtdoor";

        story.innerText = level2_action2;

        button1.innerText = next;
        button1.onclick = level_3;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action3() {
        level.innerText = "Jullie gaan naar rechts";

        story.innerText = level2_action3 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}


function level_3() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 3 - bessenstruik";
    levelImage.src = "img/level_3-bessenstruik.jpg"

    story.innerText = levelThree;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Je neemt een handje";
    button2.innerText = "Je laat het liggen";
    button3.innerText = "Je stopt wat in je tas";
    
    function action1() {
        level.innerText = "Je neemt een handje";

        story.innerText = level3_action1 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    function action2() {
        level.innerText = "Je laat het liggen";

        story.innerText = level3_action2;

        button1.innerText = next;
        button1.onclick = level_4;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action3() {
        level.innerText = "Je stopt wat in je tas";

        story.innerText = level3_action3;

        button1.innerText = next;
        button1.onclick = level_4;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        // items["berries"] = true;

        console.log(items);

        items["berries"] = new Image();
        items["berries"].src = "img/item-bessen.png";

        inventory.style.visibility = "visible";
        inventory.style.width = "auto";
        inventory.style.height = "50px";

        inventory.src = items["berries"].src;

        items["berries"] = true;
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}


function level_4() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 4 - leven of dood";
    levelImage.src = "img/level_4-leven_of_dood.png";

    story.innerText = levelFour;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";

    button1.innerText = "Je pakt het mes";
    button2.innerText = "Je pakt de sleutel";
    
    function action1() {
        level.innerText = "Je pakt het mes";

        story.innerText = level4_action1;

        button1.innerText = next;
        button1.onclick = level_5;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        // items["knife"] = true;

        console.log(items);

        if (items["berries"] == true) {
            var itemKnife = document.createElement("img");
            gameContainer.appendChild(itemKnife);
            items["knife"] = new Image();
            items["knife"].src = "img/item-zakmes.png";
    
            itemKnife.style.width = "auto";
            itemKnife.style.height = "50px";
            itemKnife.style.gridArea = "item";
            itemKnife.style.position = "relative";
            itemKnife.style.top = "75px";

            itemKnife.src = items["knife"].src;
        } else {
            items["knife"] = new Image();
            items["knife"].src = "img/item-zakmes.png";

            inventory.style.visibility = "visible";
            inventory.style.width = "auto";
            inventory.style.height = "50px";

            inventory.src = items["knife"].src;
        }

        items["knife"] = true;
    }

    function action2() {
        level.innerText = "Je neemt de sleutel";

        story.innerText = level4_action2;

        button1.innerText = next;
        button1.onclick = level_5;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        if (items["berries"] == true) {
            var itemKey = document.createElement("img");
            gameContainer.appendChild(itemKey);
            items["key"] = new Image();
            items["key"].src = "img/item-sleutel.png";
    
            itemKey.style.width = "auto";
            itemKey.style.height = "25px";
            itemKey.style.gridArea = "item";
            itemKey.style.position = "relative";
            itemKey.style.top = "75px";

            itemKey.src = items["key"].src;
        } else {
            items["key"] = new Image();
            items["key"].src = "img/item-sleutel.png";

            inventory.style.visibility = "visible";
            inventory.style.width = "auto";
            inventory.style.height = "25px";

            inventory.src = items["key"].src;
        }

        items["key"] = true;
    }

    button1.onclick = action1;
    button2.onclick = action2;
}


function level_5() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 5 - wild animal attack";
    levelImage.src = "img/level_5-wild_animal_attack.jpg";

    story.innerText = levelFive;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";

    button1.innerText = "Het zakmes";
    button2.innerText = "De sleutel";


    if (items["knife"] == true) {
        function action1() {
            level.innerText = "Het zakmes";

            story.innerText = level5_action1;

            button1.innerText = game;
            button1.onclick = level_5_minigame;
            button2.style.visibility = "hidden";
            button3.style.visibility = "hidden";
        }
    } else {
        button1.style.backgroundColor = "black";
        // button1.style.cursor = "default";
        // button1.onmouseover = function() {
        //     alert("Je hebt geen zakmes! \nGebruik de sleutel.");
        // }
        button1.onclick = function() {
            return false;
        }
    }

    if (items["key"] == true) {
        function action2() {
            level.innerText = "De sleutel";

            story.innerText = level5_action2 + newGame;

            button1.innerText = dead;
            button1.onclick = refreshPage;
            button2.style.visibility = "hidden";
            button3.style.visibility = "hidden";

            button1.style.backgroundColor = "#CC0E00";
            levelImage.style.filter = "grayscale(100%)";

            loseAudio();
        }
    } else {
        button2.style.backgroundColor = "black";
        // button2.style.cursor = "default";
        // button2.onmouseover = function() {
        //     alert("Je hebt geen sleutel! \nGebruik het zakmes.");
        // }
        button2.onclick = function() {
            return false;
        }
    }

    button1.onclick = action1;
    button2.onclick = action2;
}


function level_6() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 6 - verboden toegang";
    levelImage.src = "img/level_6-verboden_toegang.jpg";

    story.innerText = levelSix;

    button2.style.cursor = "pointer";
    button2.style.backgroundColor = "#2f5496";
    // button1.removeEventListener("onmouseover", level_5(), false);
    // button2.removeEventListener("onmouseover", level_5(), false);

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Je doet wat hij zegt";
    button2.innerText = "Je overmeestert de man";
    button3.innerText = "Je spreekt hem tegen";
    
    function action1() {
        level.innerText = "Je doet wat hij zegt";

        story.innerText = level6_action1 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    function action2() {
        level.innerText = "Je overmeestert de man";

        story.innerText = level6_action2;

        button1.innerText = next;
        button1.onclick = level_7;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action3() {
        level.innerText = "Je spreekt hem tegen";

        story.innerText = level6_action3 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}


function level_7() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 7 - verlaten huisje";
    levelImage.src = "img/level_7-verlaten_huisje.jpg"

    story.innerText = levelSeven;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";

    button1.innerText = "Haal de trekker over";
    button2.innerText = "Laat het wapen zakken";
    
    function action1() {
        level.innerText = "Haal de trekker over";

        story.innerText = level7_action1 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    function action2() {
        level.innerText = "Laat het wapen zakken";

        story.innerText = level7_action2;

        button1.innerText = "Meenemen";
        button2.innerText = "Laten liggen";
        button1.onclick = level7_action2_ch1;
        button2.onclick = level7_action2_ch2;
        button3.style.visibility = "hidden";
    }

    button1.onclick = action1;
    button2.onclick = action2;
}

function level7_action2_ch1() { // meenemen
    story.innerText = level7_action2_1;
    button1.innerText = next;
    button1.onclick = level_8;
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";

    if (items["berries"] == false && items["knife"] == true) {
        var itemWeapon = document.createElement("img");
        gameContainer.appendChild(itemWeapon);
        items["weapon"] = new Image();
        items["weapon"].src = "img/item-wapen.png";

        itemWeapon.style.width = "auto";
        itemWeapon.style.height = "50px";
        itemWeapon.style.gridArea = "item";
        itemWeapon.style.position = "relative";
        itemWeapon.style.top = "75px";

        itemWeapon.src = items["weapon"].src;
    } else if (items["berries"] == true && items["knife"] == true) {
        var itemWeapon = document.createElement("img");
        gameContainer.appendChild(itemWeapon);
        items["weapon"] = new Image();
        items["weapon"].src = "img/item-wapen.png";

        itemWeapon.style.width = "auto";
        itemWeapon.style.height = "50px";
        itemWeapon.style.gridArea = "item";
        itemWeapon.style.position = "relative";
        itemWeapon.style.left = "100px";

        itemWeapon.src = items["weapon"].src;
    }

    items["weapon"] = true;
}

function level7_action2_ch2() { // laten liggen
    story.innerText = level7_action2_2;
    button1.innerText = next;
    button1.onclick = level_8;
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
}


function level_8() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 8 - laboratorium";
    levelImage.src = "img/level_8-laboratorium.jpg"

    story.innerText = levelEight;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Leg de voorwerpen neer";
    button2.innerText = "Negeer de brief";

    // if (items["berries"])

    // checken of je alle voorwerpen hebt. Zo ja, dan wordt de laatste button niet zichtbaar
    if (items["berries"] == true && items["knife"] == true && items["weapon"] == true) {
        button3.style.visibility = "hidden";
    }
    
    // checken of welke voorwerpen je niet hebt, dan wordt de juiste tekst in de derde button weergegeven
    if (items["berries"] == false || items["knife"] == false || items["weapon"] == false) {
        if (items["berries"] == false && items["weapon"] == true) {
            button3.innerText = "Je hebt geen bessen...";
        } else if (items["berries"] == true && items["weapon"] == false) {
            button3.innerText = "Je hebt geen wapen...";
        } else if (items["berries"] == false && items["weapon"] == false) {
            button3.innerText = "Je mist meerdere items...";
        }
    }

    // checken of je alle voorwerpen hebt, zo ja dan kun je de bovenste optie gebruiken, anders niet
    if (items["berries"] == true && items["knife"] == true && items["weapon"] == true) {
        function action1() {
            level.innerText = "Leg de voorwerpen neer";
            story.innerText = level8_action1 + newGame;

            button1.innerText = win;
            button1.onclick = refreshPage;
            button2.style.visibility = "hidden";
            button3.style.visibility = "hidden";

            button1.style.backgroundColor = "#4C8507";

            winAudio();
        }

    } else {
        button1.style.backgroundColor = "black";
        // button1.style.cursor = "default";
        button1.onclick = function() {
            return false;
        }
    }

    function action2() {
        level.innerText = "Negeer de brief";

        story.innerText = level8_action2;

        button1.style.backgroundColor = "#2f5496";

        button1.innerText = next;
        button1.onclick = level_9;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action3() {
        story.innerText = level8_action3;

        button1.style.backgroundColor = "#2f5496";

        button1.innerText = next;
        button1.onclick = level_9;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}


function level_9() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 9 - lege kamer";
    levelImage.src = "img/level_9-lege_kamer.jpg"

    story.innerText = levelNine;

    // button1.style.cursor = "pointer";
    button1.style.backgroundColor = "#2f5496";

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Maak de student wakker";
    button2.innerText = "Maak de gijzelaar wakker";
    button3.innerText = "Wacht in stilte af";
    
    function action1() {
        level.innerText = "Maak de student wakker";

        story.innerText = level9_action1 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    function action2() {
        level.innerText = "Maak de gijzelaar wakker";

        story.innerText = level9_action2 + newGame;

        button1.innerText = dead;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
        levelImage.style.filter = "grayscale(100%)";

        loseAudio();
    }

    function action3() {
        level.innerText = "Wacht in stilte af";

        story.innerText = level9_action3;

        button1.innerText = game;
        button1.onclick = level_9_minigame;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}


function level_10() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 10 - lange gangen";
    levelImage.src = "img/level_10-lange_gangen.jpg"

    story.innerText = levelTen;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Vraag om eten";
    button2.innerText = "Bel de hulplijnen";
    button3.innerText = "Zoek naar de uitgang";
    
    function action1() {
        level.innerText = "Vraag om eten";

        story.innerText = level10_action1 + newGame;

        button1.innerText = tbc;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        toBeContinued();
    }

    function action2() {
        level.innerText = "Bel de hulplijnen";

        story.innerText = level10_action2 + newGame;

        button1.innerText = tbc;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        toBeContinued();
    }

    function action3() {
        level.innerText = "Zoek naar de uitgang";

        story.innerText = level10_action3 + newGame;

        button1.innerText = tbc;
        button1.onclick = refreshPage;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        toBeContinued();
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}

// enable/disable key
function disableKey() {
    document.onkeydown = function() {
        return false;
    }
}

function enableKey() {
    document.onkeydown = function() {
        return true;
    }
}

// pagina verversen
function refreshPage() {
    window.location.reload();
}

function loseAudio() {
    // audio toevoegen, faal eind
    var audio = document.createElement("audio");
    gameContainer.appendChild(audio);
    audio.setAttribute("id", "lose");
    audio.setAttribute("src", "audio/wilhelm_scream.mp3");

    lose.play();
}

function winAudio() {
    // audio toevoegen, win eind
    var audio = document.createElement("audio");
    gameContainer.appendChild(audio);
    audio.setAttribute("id", "won");
    audio.setAttribute("src", "audio/applause.mp3");

    won.play();
}

function toBeContinued() {
    // audio toevoegen, to be continued
    var audio = document.createElement("audio");
    gameContainer.appendChild(audio);
    audio.setAttribute("id", "continued");
    audio.setAttribute("src", "audio/to_be_continued.mp3");

    continued.play();
}