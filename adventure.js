var gameContainer = document.getElementById("game-container");
var title = document.getElementById("title");
var story = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var item = document.getElementById("inventoryItem");

title.innerText = "Area 51 ½ - de prequel";
story.innerText = "// verhaal";
button1.innerText = "// actie 1";
button2.innerText = "// actie 2";
button3.innerText = "// actie 3";

// creating an element img, this will show an image
var levelImage = document.createElement("img");
gameContainer.appendChild(levelImage);
// styling the image in the element img
levelImage.style.height = "auto";
levelImage.style.width = "200px";
levelImage.style.margin = "auto";
levelImage.src = "img/voorbeeld.jpg";
levelImage.style.gridArea = "image";

// creating an element h2, this will be the level you are currently in
var level = document.createElement("h2");
gameContainer.appendChild(level);
// styling the element h2 with the level you are currently in
level.style.gridArea = "level";
level.innerText = "// level";
level.style.padding = "10px";
level.style.margin = "0";

// creating an element h3, this will display the inventory
var inventory = document.createElement("h3");
gameContainer.appendChild(inventory);
// styling the element h3, which will display the inventory
inventory.style.gridArea = "inventory";
inventory.innerText = "Rugzak";
inventory.style.padding = "10px";
inventory.style.margin = "0";
inventory.style.height = "30px";

item.style.paddingTop = "10px";