var levelTitle = document.getElementById("level");
var next = "Ga verder...";

levelTitle.innerText = "Start";


story.innerText = `Vandaag is het de dag, de dag waar jij je zo lang op hebt verheugd. Samen met je klas ga je op excursie naar een zeer bekend terrein dat echter niemand dan behalve de militaire basis ooit heeft mogen betreden. Gelukkig hebben jullie een docent die dit heeft kunnen regelen. \n \n Het terrein dat jullie gaan bezoeken ligt ver in het noorden van het land. Het is een groot, ongebruikt gebied. Zeggen ze… De militaire basis ligt ver verstopt tussen de bossen die er om heen staan. Een goede plek dus om geheimzinnige projecten uit te voeren. En misschien dat jullie de kans krijgen om één van deze projecten te mogen bekijken… \n \n De excursie naar Area 51 ½ is verplicht voor iedere student uit de klas A1. De bussen staan al klaar op de parkeerplaats en je staat te springen om eindelijk te kunnen vertrekken. Dus waar wacht je nog op?`;

button1.innerText = `LET'S GO!`;
button2.style.visibility = "hidden"
button3.style.visibility = "hidden"


function level_1() {
    var levelEen = `Je zit met je klasgenoten in de bus onderweg naar Area 51 ½. Je raakt maar niet uitgepraat met een andere student over mogelijke projecten die daar allemaal gedaan worden. De docent draait zich om en schraapt zijn keel. De hele klas is direct muisstil. \n \n “Wat fijn, zo’n rustige klas,” begint de docent. Hij begint te lachen en trekt dan weer een serieus gezicht. “Ik wilde nog even aan jullie mededelen dat het van belang is dat jullie je mobiele telefoons uitschakelen en opbergen in jullie tassen. Deze mogen tijdens de excursie absoluut niet gebruikt worden.” \n \n Je twijfelt om je mobiel uit te zetten. Wat nou als er iets gebeurd en je kan niemand bereiken? Of niemand kan jou bereiken? Daarnaast is het wel logisch dat het verboden is een mobiel te gebruiken op zo’n geheim terrein…`;

    level.innerText = "Level 1 - bus";
    story.innerText = levelEen;

    button1.innerText = "Je zet je mobiel uit";
    button2.style.visibility = "visible";
    button2.innerText = "Je laat je mobiel aan";
    button3.style.visibility = "hidden"
    levelImage.src = "img/level_1-bus.jpg";
}


function level_1_action1() {
        level.innerText = "Je zet je mobiel uit";
        var action1 = `Je hebt je mobiel uit gezet. De docent gaat verder met praten maar je luistert maar half mee. Je staart uit het raam en je gedachten dwalen af naar de rest van de dag. Je ogen vallen langzamerhand dicht.`;
        story.innerText = action1;
        button1.innerText = next;
        button2.style.visibility = "hidden";
}

function level_1_action2() {
        level.innerText = "Je laat je mobiel aan";
        var action2 = `Je laat je mobiel aan staan. De docent gaat verder met praten maar je luistert maar half mee. Je staart uit het raam en je gedachten dwalen af naar de rest van de dag. Je ogen vallen langzamerhand dicht.`;
        story.innerText = action2;
        button1.innerText = next;
        button2.style.visibility = "hidden";
}

function level_2() {
    var levelTwee = `Je schrikt wakker van een krassend geluid vlak naast je oor. Je hoofd doet pijn en je voelt wat opgedroogd bloed net boven je wenkbrauw. Je kijkt opzij en ziet een klasgenoot met een mes over een steen krassen. Je vraagt wat er aan de hand is en de klasgenoot zegt dat er een ongeluk is gebeurd met de bus. De buschauffeur kreeg spontaan een hartaanval en verloor de controle over het stuur. Je kijkt om je heen en ziet alleen maar bomen. Je kijkt de andere student met een vragende blik aan: “Wat moeten we nu?” \n \n De student haalt zijn schouders op en wijst verschillende kanten op. Hij zegt dat we naar links kunnen, daar is een meer. Dan zouden we wat water kunnen drinken. De student is er alleen niet zeker van of het giftig water is of niet. Als we naar rechts gaan dan lopen we richting een berg. We zouden op onderzoek uit kunnen gaan wat er achter die berg bevindt. De laatste optie is om rechtdoor te gaan. Alleen is de student er zelf nog niet achter kunnen komen wat zich daar bevindt aangezien je al wakker begon te worden. \n \n De student laat de keuze over aan jou.`;

    level.innerText = "Level 2 - bos";
    story.innerText = levelTwee;

    button1.innerText = "Jullie gaan naar links";
    button2.style.visibility = "visible";
    button2.innerText = "Jullie gaan rechtdoor";
    button3.style.visibility = "visible";
    button3.innerText = "Jullie gaan naar rechts";
    levelImage.src = "img/level_2-bos.jpg";
}