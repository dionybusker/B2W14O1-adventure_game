// een nieuwe script tag wordt aangemaakt, hiermee kan een andere js file ingeladen worden
var ref = document.getElementsByTagName("script")[0];
var script = document.createElement("script");
script.src = "story.js";

ref.parentNode.insertBefore(script, ref);

// titel van de pagina wordt aangepast
document.title = "Area 51 ½ - prequel";


var gameContainer = document.getElementById("game-container");
var title = document.getElementById("title");
var story = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var item = document.getElementById("inventoryItem");
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
var inventory = document.createElement("h3");
gameContainer.appendChild(inventory);
// tekst wordt toegevoegd
inventory.innerText = "Rugzak";
// styling van element h3, hier komt de inventory
inventory.style.gridArea = "inventory";
inventory.style.padding = "10px";
inventory.style.margin = "0";
inventory.style.height = "30px";


// // afbeelding toevoegen aan item
// item.src = "img/item-sleutel.png";
// // styling van de afbeelding van item

item.style.paddingTop = "10px";
item.style.visibility = "hidden";

// het element footer wordt aangemaakt
var footer = document.createElement("footer");
gameContainer.appendChild(footer);
// tekst wordt toegevoegd
footer.innerText = "© Diony Busker, 2019";
// styling van de footer
footer.style.gridArea = "footer";
footer.style.margin = "5px auto";
footer.style.fontSize = "12px";


// FUNCTIES
function start() {
    var levelTitle = document.getElementById("level");
    levelImage.src = "img/start.jpg";

    levelTitle.innerText = "Start";

    button1.innerText = `LET'S GO!`;
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";

    // button1 wordt de originele kleur dat het was
    button1.style.backgroundColor = "#2f5496";

    story.innerText = intro;

    button1.addEventListener("click", level_1, {once: true});
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

        story.innerText = level2_action1;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
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

        story.innerText = level2_action3;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
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

        story.innerText = level3_action1;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
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
    }

    function action2() {
        level.innerText = "Je neemt de sleutel";

        story.innerText = level4_action2;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
    }

    button1.onclick = action1;
    button2.onclick = action2;
}


function level_3() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 5 - wild animal attack";
    levelImage.src = "img/level_5-wild_animal_attack.jpg";

    story.innerText = levelFive;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";

    button1.innerText = "Het zakmes";
    button2.innerText = "De sleutel";
    
    function action1() {
        level.innerText = "Het zakmes";

        story.innerText = level5_action1;

        button1.innerText = next;
        button1.onclick = level_6;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action2() {
        level.innerText = "De sleutel";

        story.innerText = level5_action2;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
    }

    button1.onclick = action1;
    button2.onclick = action2;
}


function level_6() {
    var levelTitle = document.getElementById("level");
    levelTitle.innerText = "Level 6 - verboden toegang";
    levelImage.src = "img/level_6-verboden_toegang.jpg";

    story.innerText = levelSix;

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Je doet wat hij zegt";
    button2.innerText = "Je overmeestert de man";
    button3.innerText = "Je spreekt hem tegen";
    
    function action1() {
        level.innerText = "Je doet wat hij zegt";

        story.innerText = level6_action1;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
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

        story.innerText = level6_action3;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
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

        story.innerText = level7_action1;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
    }

    function action2() {
        level.innerText = "Laat het wapen zakken";

        story.innerText = level7_action2;

        button1.innerText = next;
        button1.onclick = level_8;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    button1.onclick = action1;
    button2.onclick = action2;
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
    button3.innerText = "Je hebt geen bessen...";
    
    function action1() {
        level.innerText = "Leg de voorwerpen neer";

        story.innerText = level8_action1;

        button1.innerText = win;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#4C8507";
    }

    function action2() {
        level.innerText = "Negeer de brief";

        story.innerText = level8_action2;

        button1.innerText = next;
        button1.onclick = level_9;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action3() {
        level.innerText = "Je hebt geen bessen...";

        story.innerText = level8_action3;

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

    // zichtbaarheid van de knoppen 2 en 3, knop 1 is er altijd
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";

    button1.innerText = "Maak de student wakker";
    button2.innerText = "Maak de gijzelaar wakker";
    button3.innerText = "Wacht in stilte af";
    
    function action1() {
        level.innerText = "Maak de student wakker";

        story.innerText = level9_action1;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
    }

    function action2() {
        level.innerText = "Maak de gijzelaar wakker";

        story.innerText = level9_action2;

        button1.innerText = dead;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";

        button1.style.backgroundColor = "#CC0E00";
    }

    function action3() {
        level.innerText = "Wacht in stilte af";

        story.innerText = level9_action3;

        button1.innerText = next;
        button1.onclick = level_10;
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

        story.innerText = level10_action1;

        button1.innerText = tbc;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action2() {
        level.innerText = "Bel de hulplijnen";

        story.innerText = level10_action2;

        button1.innerText = tbc;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    function action3() {
        level.innerText = "Zoek naar de uitgang";

        story.innerText = level10_action3;

        button1.innerText = tbc;
        button1.onclick = start;
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
    }

    button1.onclick = action1;
    button2.onclick = action2;
    button3.onclick = action3;
}