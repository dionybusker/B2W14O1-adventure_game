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


//verder vanaf level 4


// start();