var gameContainer = document.getElementById("game-container");
var title = document.getElementById("title");
var story = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventory = document.getElementById("inventoryItem");

title.innerText = "Mooi geel";
story.innerText = "Mooi rood";
button1.innerText = "Eerste button";
button2.innerText = "Tweede button";
button3.innerText = "Derde button";
// inventory.src = "img/voorbeeld.jpg";


var levelImage = document.createElement("img");
levelImage.style.height = "auto";
levelImage.style.width = "200px";
levelImage.src = "img/voorbeeld.jpg";

// gameContainer.appendChild(levelImage);

// levelImage.innerHTML = "Mooi geel";