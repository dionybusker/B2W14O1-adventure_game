// een nieuwe script tag wordt aangemaakt, hiermee kan een andere js file ingeladen worden
var ref = document.getElementsByTagName("script")[0];
var script = document.createElement("script");
script.src = "story.js";

ref.parentNode.insertBefore(script, ref);

// titel van de pagina wordt aangepast
document.title = "Area 51 ½ - prequel"


var gameContainer = document.getElementById("game-container");
var title = document.getElementById("title");
var story = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var item = document.getElementById("inventoryItem");

title.innerText = "AREA 51 ½ – PREQUEL";
story.innerText = "// verhaal";
button1.innerText = "// actie 1";
button2.innerText = "// actie 2";
button3.innerText = "// actie 3";

// element img wordt aangemaakt, dit laat een afbeelding zien
var levelImage = document.createElement("img");
gameContainer.appendChild(levelImage);
// afbeelding wordt toegevoegd
levelImage.src = "img/start.jpg";
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



// onclick events toevoegen aan de buttons
button1.onclick = action;

function action() {
    story.innerText = level_1;
    button1.innerText = `Je zet je mobiel uit`;
    button2.style.visibility = "visible";
    button2.innerText = `Je laat je mobiel aan`;
    button3.style.visibility = "hidden"
    levelImage.src = "img/level_1-bus.jpg";
}





