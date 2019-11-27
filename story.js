var br = `\n \n`;
var next = "Ga verder...";
var dead = "GAME OVER!";
var win = "GEWONNEN!";
var tbc = "WORDT VERVOLGD..."; // to be continued



// VERHAAL
// start
var intro = `Vandaag is het de dag, de dag waar jij je zo lang op hebt verheugd. Samen met je klas ga je op excursie naar een zeer bekend terrein dat echter niemand dan behalve de militaire basis ooit heeft mogen betreden. Gelukkig hebben jullie een docent die dit heeft kunnen regelen. ${br} Het terrein dat jullie gaan bezoeken ligt ver in het noorden van het land. Het is een groot, ongebruikt gebied. Zeggen ze… De militaire basis ligt ver verstopt tussen de bossen die er om heen staan. Een goede plek dus om geheimzinnige projecten uit te voeren. En misschien dat jullie de kans krijgen om één van deze projecten te mogen bekijken… ${br} De excursie naar Area 51 ½ is verplicht voor iedere student uit de klas A1. De bussen staan al klaar op de parkeerplaats en je staat te springen om eindelijk te kunnen vertrekken. Dus waar wacht je nog op?`;

// level 1 - bus
var levelOne = `Je zit met je klasgenoten in de bus onderweg naar Area 51 ½. Je raakt maar niet uitgepraat met een andere student over mogelijke projecten die daar allemaal gedaan worden. De docent draait zich om en schraapt zijn keel. De hele klas is direct muisstil. ${br} “Wat fijn, zo’n rustige klas,” begint de docent. Hij begint te lachen en trekt dan weer een serieus gezicht. “Ik wilde nog even aan jullie mededelen dat het van belang is dat jullie je mobiele telefoons uitschakelen en opbergen in jullie tassen. Deze mogen tijdens de excursie absoluut niet gebruikt worden.” ${br} Je twijfelt om je mobiel uit te zetten. Wat nou als er iets gebeurd en je kan niemand bereiken? Of niemand kan jou bereiken? Daarnaast is het wel logisch dat het verboden is een mobiel te gebruiken op zo’n geheim terrein…`;

// level 2 - bos
var levelTwo = `Je schrikt wakker van een krassend geluid vlak naast je oor. Je hoofd doet pijn en je voelt wat opgedroogd bloed net boven je wenkbrauw. Je kijkt opzij en ziet een klasgenoot met een mes over een steen krassen. Je vraagt wat er aan de hand is en de klasgenoot zegt dat er een ongeluk is gebeurd met de bus. De buschauffeur kreeg spontaan een hartaanval en verloor de controle over het stuur. Je kijkt om je heen en ziet alleen maar bomen. Je kijkt de andere student met een vragende blik aan: “Wat moeten we nu?” ${br} De student haalt zijn schouders op en wijst verschillende kanten op. Hij zegt dat we naar links kunnen, daar is een meer. Dan zouden we wat water kunnen drinken. De student is er alleen niet zeker van of het giftig water is of niet. Als we naar rechts gaan dan lopen we richting een berg. We zouden op onderzoek uit kunnen gaan wat er achter die berg bevindt. De laatste optie is om rechtdoor te gaan. Alleen is de student er zelf nog niet achter kunnen komen wat zich daar bevindt aangezien je al wakker begon te worden. ${br} De student laat de keuze over aan jou.`;

// level 3 - bessenstruik
var levelThree = `Het voelt alsof jullie al uren aan het lopen zijn. De ene keer zijn jullie links af geslagen, de andere keer rechts. Je beeldt je soms in dat je een boom al eerder gezien hebt, sindsdien heb je besloten deze maar te markeren met een cirkel die je maakt met één van je stiften. De student was het er niet mee eens omdat je nu een spoor achter laat. Jij gaf als tegenargument dat het maar goed is dat je dat doet, voor het geval er mensen naar jullie op zoek zijn om jullie te redden. ${br} Je maag begint te knorren. En nu dat van de andere student. “Toevallig geen eten bij je?’ vraagt de student aan jou. Je kijkt in je tas maar er zit niets meer in dan behalve een lege waterfles. Je schudt je hoofd en de student kijkt dan om zich heen. Hij werpt zich over een struik met paarsachtige bessen. Je denkt deze al eens eerder gezien te hebben in een biologieboek op de middelbare school. Je denkt hardop na om de naam en de omschrijving ervan te herinneren.  ${br} Ineens weet je het weer. De student wilt net een hap nemen, als je zegt dat ze giftig zijn. “Ik weet het alleen niet helemaal zeker,” geef je toe. De student denkt even twee keer na maar haalt dan zijn schouders op en neemt een handjevol bessen in zijn mond. Je maag begint nogmaals te geluid te maken en je begint te twijfelen om ook een handje bessen te pakken. Je hebt toch best wel trek en misschien heb je het wel mis over de bessen. En als je het nu niet zeker weet, kun je natuurlijk ook altijd iets mee nemen voor later. Misschien komt het een keer van pas.`;

// level 4 - leven of dood
var levelFour = `Je hebt de student niet echt goed gekend dus besluit je hem maar te laten liggen. Hoe gruwelijk dat nu ook klinkt. Je grijpt naar zijn tas en kijkt wat er allemaal in zit. Een schrift waarvan de bladeren dubbel gevouwen zijn, een potlood van slechts een paar centimeter, een pen dat is begonnen met lekken, een telefoon, en een doosje… Je rilt ervan en gooit gauw het doosje terug in de tas. Je verstopt de tas in de bosjes en loopt naar de student toe. Je voelt in zijn zakken naar iets wat je kan gebruiken en dan vind je een zakmes en een sleutel in één van de broekzakken. Je hebt plek voor maar één voorwerp. Welke neem je mee?`;

// level 5 - wild animal attack
var levelFive = `Je loopt verder door het bos. Links van je hoor je zo nu en dan wat gerommel in de bosjes en tussen de bomen. Je versnelt je pas en zet het bijna op een rennen. Je houdt je rugzak stevig op je rug terwijl je over het pad begint te rennen. Het geritsel blijft links van je. Hetgeen wat daar zit is ook begonnen met rennen en haalt je in. Dan springt er ineens iets voor je. Een wild dier. ${br} Je grijpt naar je broekzak en voelt wat er in zit.`;

// level 6 - verboden toegang
var levelSix = `Je voelt je opgelucht nu je het dier verslagen hebt. Maar je begint je toch wel af te vragen hoe het nou zit met die excursie. Het enige wat je van de student gehoord hebt, is dat er een ongeluk gebeurd is omdat de buschauffeur een hartaanval had gekregen. Verder weet je niks of er nog andere studenten zijn die ronddwalen door het bos, of wat er met de docent gebeurd is. Misschien als je door loopt dat je dan iemand tegen komt? Je hoopt het in ieder geval. Je trekt je tas recht en loopt verder door het bos. ${br} Na wat nog meer uren leken, kom je eindelijk bij een soort huisje terecht. Er staat een bord in de grond en je leest wat er op staat: “Militaire basis. Verboden toegang.” Je haalt je schouders op en loopt naar de deur. Ineens bedenk je de sleutel die je niet mee had genomen. Je geeft een zetje aan de deur maar deze gaat open. Gelukkig maar. Je loopt naar binnen en ziet een paar van je klasgenoten. Je zitten allemaal op hun knieën met hun handen in de lucht. De schrik staat in hun ogen. Je kijkt ze vragend aan. Een student knikt naar de plek naast je. Je kijkt opzij en ziet een man met een wapen in zijn hand. Hij roept: “Op je knieën en handen omhoog, of ik schiet!” ${br} Je slikt.`;

// level 7 - verlaten huisje
var levelSeven = `De zelfverzekerde houding die de man had is nu de angst voor in de plaats gekomen. De man knielt neer en smeekt om vrede. Je kijkt om je heen naar je klasgenoten. De docent is nergens te bevinden. “Waar is onze docent?” vraag je hardop. De man schudt zijn hoofd, een student haalt haar schouders op en een andere student wijst voorzichtig naar beneden met zijn vinger. ${br} Je hebt het wapen nog steeds vast. Nog steeds gericht op de man voor je. Hij blijft bidden en smeken. Je houdt je vinger op de trekker. Je kan het nu overhalen en met een paar andere studenten op onderzoek uit gaan bij de deur achterin de ruimte, of je neemt de man mee als gijzelaar.`;

// level 8 - laboratorium
var levelEight = `Het is al een poosje geleden dat jullie door de deur zijn gegaan. Vlak na de deur was er een trap waar je naar beneden moest. De man kon eerder zijn mond niet houden dus had de student een stuk tape uit zijn tas gepakt en dat om zijn mond geplakt. Beetje gek dat hij een rol tape bij zich had, maar die andere student waar je eerder mee liep had een zakmes bij. En tot zover is het allemaal van pas gekomen dus je hebt eigenlijk niks te klagen. ${br} Na ongelooflijk veel treden af te hebben gelopen begin je je af te vragen hoe diep het wel niet kan zijn hier. Er zijn lange, slecht belichte gangen, trappen die zo nu en dan kraken. Geen enkele deur waar jullie door heen moesten. Je slikt en twijfelt of dit wel een goed idee was. Misschien hadden jullie beter bij de rest moeten blijven. ${br} “Voor ons,” fluistert de student achter je. Hij houdt de man nog steeds stevig vast en als hij dan niet mee wilt lopen, geeft de student de man een flinke duw in de rug. Je ziet voor je een deur waaronder licht schijnt. Je legt je hand op de deurknop en draait deze om. Dan duw je de deur open en jullie lopen naar binnen. Je ziet een tafel staan met daarop drie borden. Voor de borden ligt er een brief. Op de brief staat dat je de spullen die je mee hebt genomen, neer moet leggen op de bijbehorende borden. Het linker bord: wapen. Het middelste bord: bessen. Het rechter bord: zakmes. ${br} Je twijfelt.`;

// level 9 - lege kamer
var levelNine = `“Dit is nog niet het einde…” ${br} Je wordt wakker met zware gebonk in je hoofd. Je kreunt en draait je om. De gijzelaar en de andere student liggen bewusteloos naast je. Je denkt terug aan wat er allemaal gebeurd is. Er was een ongeluk met de bus, daarna werd je wakker door een andere student. Deze is dood gegaan door het eten van giftige bessen, die zitten nog in je tas. Net als het zakmes dat je van hem hebt meegenomen en het wilde dier mee hebt aangevallen. Vervolgens kwam je bij een verlaten huisje. Hier heb je de gijzelaar ontwapend en ben je samen met hem en een andere student door de deur gelopen achterin de ruimte. Vervolgens waren jullie terecht gekomen in een aparte ruimte met een tafel en drie borden. Hier moest je je spullen neerleggen volgens de brief, maar je besloot deze te negeren. Er kwam een man met een heel verhaal en toen werden jullie opgepakt. Wat er daarna is gebeurd weet je alleen niet meer. ${br} Zouden de andere twee het nog weten?`;

// level 10 - lange gangen
var levelTen = `Je hebt een heel stuk door de gangen gerend en je bent buiten adem. Je besluit even stil te staan en te wachten om op adem te komen. Als je opkijkt zie je een lange gang met allemaal deuren. Onder enkele deuren zie je licht branden. Hier moet je zo dan zo stil mogelijk langs zien te lopen. Je maag begint te knorren en je voelt je wat licht in het hoofd. Je hebt al in geen tijden meer gegeten, lijkt het. Je zou het kunnen wagen om bij een deur te stoppen en daar te vragen of iemand wat te eten heeft. Het zou een stomme actie zijn, maar niet geschoten is altijd mis. Je herinnert je dat je ook nog je mobiel bij je hebt. Deze heb je nog je in je zak zitten. Je kan het aanzetten en de hulplijnen bellen. Maar is dat wel zo verstandig? Je kan natuurlijk altijd voorzicht door lopen tot je ergens een uitgang vindt. Maar hoe lang zou dat nog duren...?`;




// ACTIES-GEVOLGEN
// je zet je mobiel uit
var level1_action1 = `Je hebt je mobiel uit gezet. De docent gaat verder met praten maar je luistert maar half mee. Je staart uit het raam en je gedachten dwalen af naar de rest van de dag. Je ogen vallen langzamerhand dicht.`;

// je laat je mobiel aan
var level1_action2 = `Je laat je mobiel aan staan. De docent gaat verder met praten maar je luistert maar half mee. Je staart uit het raam en je gedachten dwalen af naar de rest van de dag. Je ogen vallen langzamerhand dicht.`;

// jullie gaan naar links
var level2_action1 = `De student knikt en gooit zijn tas over zijn schouders. Jij pakt het jouwe en jullie lopen samen richting het meertje waar de student het over had. Je begint best wel dorst te krijgen. Zodra jullie bij het meertje aangekomen zijn, zet je je tas op de grond en haal je je fles water tevoorschijn. Deze is echter leeg. Aangezien je best wel een droge mond hebt gekregen, zit er niets anders op dan je fles te vullen met het water uit het meertje. Het ziet er vrijwel schoon uit dus er zal wel niets aan de hand zijn. ${br} \n Nadat jij en de student allebei jullie flessen hebben gevuld, nemen jullie een teug van het water. Je voelt de kou door je lichaam gaan en geniet er even van. Dan voel je ineens een druk op je borst en zak je in elkaar op de grond.`;

// jullie gaan rechtdoor
var level2_action2 = `De student knikt en gooit zijn tas over zijn schouders. Jij pakt het jouwe en jullie lopen samen de nog onbekende richting op. De student is daar zelf ook nog niet geweest dus het is voor jullie allebei een avontuur om te ontdekken. Jullie trekken er op uit.`;

// jullie gaan naar rechts
var level2_action3 = `De student knikt en gooit zijn tas over zijn schouders. Jij pakt het jouwe en jullie lopen samen richting de berg waar de student het over had. Je begint een beetje te twijfelen of jullie wel naar rechts hadden moeten gaan. Hadden jullie beter niet even wat moeten drinken? Je begint namelijk wel dorst te krijgen. Of was het beter geweest richting het onbekende te gaan? Alhoewel dat idee ook helemaal niks lijkt. Je zucht en denkt na over het ongeluk. Hoe had dat kunnen gebeuren? De student zei dat de buschauffeur een hartaanval had gekregen, maar waarom moest zoiets verschrikkelijks nu weer gebeuren? Net wanneer je zou enthousiast was om naar Area 51 ½ te gaan… ${br} De student wijst naar voren en je kijkt op. De berg is verdomde hoog, zeg. Je kijkt je ogen uit en hoort ineens een klik. Je herkent zo’n klik van series die je weleens hebt gekeken. Je kijkt naar beneden en dan opzij naar de student. Hij staat even stil en je roept dan: “Blijf stilstaan!” De student kijkt je vreemd aan en vraagt waarom alvorens hij zijn voet optilt. De geactiveerde mijn waar de student op heeft gestaan, gaat af.`;


// je neemt een handje
var level3_action1 = `De student kijkt toe hoe je een handje bessen in je mond stopt. Zijn wenkbrauw gaat omhoog. “Zie je wel, je had het mis over de bessen.” Hij geeft een knipoog en staat dan weer op. Je neemt nog een paar handen vol met bessen en kauwt er gulzig op. Je had het inderdaad mis. De bessen kunnen geen kwaad. ${br} Je wilt opstaan en het voelt ineens licht in je hoofd. Het voelt alsof je keel wordt dichtgeknepen en dan kom je achter wat de bes nu wel precies was. Het soort bes waar je een allergie voor hebt en waarvan één hand vol al de dood voor jou kan betekenen…`;

// je laat het liggen
var level3_action2 = `Je kijkt toe hoe de student meerdere handen achter elkaar pakt. Hij ziet een ander bosje met wat smakelijke bessen en trekt daar ook wat bessen uit. De student weet van geen ophouden en blijft maar door eten. “Dat kan nooit goed voor je zijn,” mompel je en de student grijpt naar zijn borst. Hij begint diep te hoesten en je rent naar hem toe om hem te helpen. Het is echter al te laat als hij naar de grond zakt. ${br} “Zie je wel, ik had wel degelijk gelijk over de bessen.”`;

// je stopt wat in je tas
var level3_action3 = `Je kijkt toe hoe de student meerdere handen achter elkaar pakt. Je haalt je schouders op en pikt een paar bessen uit het bosje. Deze stop je in je tas. De student ziet een ander bosje met smakelijke bessen en trekt daar er vervolgens ook een paar uit. De student weet van geen ophouden en blijft maar door eten. “Dat kan nooit goed voor je zijn,” mompel je maar toch pak je ook een paar bessen van dat andere bosje. Plotseling grijpt de student naar zijn borst. Hij begint diep te hoesten en je rent naar hem toe om hem te helpen. Het is echter al te laat als hij naar de grond zakt. ${br} “Zie je wel, ik had wel degelijk gelijk over de bessen.” Je kijkt in je tas. “Shit, nu weet ik niet meer welke de verkeerde waren…” Je besluit er zelf voor de zekerheid geen hap van te nemen. Voor het geval er gevaar op de loer ligt, heb je in ieder geval de bessen als wapen. Wat een grap ook…`;


// je pakt het mes
var level4_action1 = `Je hebt het mes opgepakt en stopt het in je eigen broekzak. Je tilt de student iets op aan zijn armen en schuift hem richting de bosjes. Daar plof je hem neer en je draait je om. Je kijkt vanuit welke richting jullie kwamen en gaat de tegenoverstelde kant op.`;

// je neemt de sleutel
var level4_action2 = `Je hebt de sleutel opgepakt en stopt het in je eigen broekzak. Je tilt de student iets op aan zijn armen en schuift hem richting de bosjes. Daar plof je hem neer en je draait je om. Je kijkt vanuit welke richting jullie kwamen en gaat de tegenovergestelde kant op.`;


// het zakmes
var level5_action1 = `Je haalt haastig het zakmes uit je zak en steekt het voor je uit. Het wilde dier staat op het punt om aan te vallen. Je dreigt met het mes uit te halen maar het dier trekt zich er niets van aan. ${br} Er ontstaat een soort “minigame” tussen jou en het wilde dier. Je moet proberen om met de linker en de rechter pijltjestoets het dier zo vaak mogelijk te ontwijken. Door de adrenaline lukt het je niet om goed te zien wat het dier doet. Je moet zo snel en zo veel mogelijk op de pijltjes drukken. ${br} Druk op de knop om de minigame te starten.`;

var level5_minigame = `De score wat je behaald is op basis van het aantal slagen per minuut. Je moet een minuut lang zo veel mogelijk op de pijltjestoetsen drukken. Als je meer dan 50 slagen hebt behaald, dan heb je de minigame gewonnen en het dier verwond. Als je minder dan 50 slagen hebt behaald, dan heb je de minigame verloren en heeft het wilde dier jou met succes aangevallen.`;

// de sleutel
var level5_action2 = `Je haalt haastig de sleutel uit je zak. “Verdomme, had ik nu maar dat mes meegenomen!” ${br} Het wilde dier valt je aan.`;


// je doet wat hij zegt
var level6_action1 = `Je laat je op je knieën zakken en steekt je handen in de lucht. De man trekt ruw de tas van je rug af en stopt zijn handen erin. Hij gooit alle spullen eruit en smijt de tas opzij. De man fluistert iets door zijn walkietalkie en knikt dan. Hij verlaat de ruimte en een paar minuten later valt er een schotregen door het huis. Je wilt wegduiken, maar je bent al te laat.`;

// je overmeestert de man
var level6_action2 = `Je had het niet van jezelf verwacht maar het is je gelukt de wapen van de man af te pakken en deze op hem te richten. Je voelt je machtig door het wapen. De adrenaline gutst door je lijf.`;

// je spreekt hem tegen
var level6_action3 = `Je kijkt de man recht in de ogen aan maar hij lijkt niet te willen luisteren. Hij tilt het wapen op en schiet zonder ook maar enige aarzeling.`;


// haal de trekker over
var level7_action1 = `Het schot was luid. Echt heel luid. De studenten slaan hun handen over hun oren. Het lichaam van de man zakt in elkaar. Je slaakt een diepe zucht en veegt het zweet van je voorhoofd. “Laten we kijken wat er achter die deur zit. Wie gaat mee?” Twee andere studenten staan op en vegen broek af. Je legt het wapen op het kastje naast je neer en loopt naar de andere kant van de ruimte. Achter je hoor je de deur open slaan. Iemand roept dat je uit moet kijken maar als je je omdraait ben je al te laat. Een van de studenten die met je mee wilde lopen, is opgesprongen en houdt haar badge omhoog in haar ene hand en in de andere hand het wapen dat je zojuist hebt neergelegd. ${br} “Indringers!” roept ze voor ze een schot lost.`;

// laat het wapen zakken
var level7_action2 = `De man slaakt een opgeluchte zucht. “Dank je, dank je,” zegt hij. Een student pakt een stukje touw en bindt dat om de handen van de man. Je zegt tegen hem dat jullie hem als gijzelaar meenemen naar achter de deur om te kijken wat zich daar bevindt. “Wie gaat mee?” Twee andere studenten staan op en vegen hun broek af. Je houdt het wapen bij je voor het geval de man iets doet wat je niet zint. Je kijkt naar de twee studenten die zijn opgestaan. “Eentje gaat mee. Anders wordt het te druk,” besluit je. Je knikt naar de jongen. Je laat hem de man stevig vasthouden en je loopt zelf vooruit naar de deur aan de andere kant van de kamer.`;


// leg de voorwerpen neer
var level8_action1 = `Je vraagt je af hoe degene die deze brief heeft geschreven, weet welke spullen je mee hebt genomen. Echter denk je er verder niet bij na en je haalt de voorwerpen tevoorschijn. Je legt de spullen neer en je hoort een klik. Je kijkt om je heen en de deur waar jullie net door heen waren gekomen, vliegt open. Een wat oudere meneer stapt de ruimte binnen en klapt voorzichtig in zijn handen. Een glimlach staat op zijn gezicht. ${br} “Hartelijk bedankt voor de medewerking. Je weet niet wie ik ben, maar dat is voor later. Het enige wat je hoeft te weten is dat door jou medewerking wij alle voorwerpen hebben die we nog nodig hadden. En omdat jij degene bent die ze allemaal bij je had, willen wij je vragen om een samenwerking. Een samenwerking in ons team.”`;

// negeer de brief / je hebt geen bessen...
var level8_action2 = `Je vraagt je af hoe degene die deze brief heeft geschreven, weet welke spullen je mee hebt genomen. Je vertrouwt het niet helemaal en besluit dus om de voorwerpen voor jezelf te houden. De bessen laat je in je tas, het zakmes houdt je in je broekzak, en het wapen in je handen. Je hoort een klik en je kijkt om je heen. De deur waar jullie net door heen waren gekomen, vliegt open. Een wat oudere meneer stapt de ruimte binnen. Hij heeft geen glimlach op zijn gezicht. ${br} “Ik wilde je bedanken voor de medewerking, maar zo te zien heb je het besluit genomen de spullen voor jezelf te houden. Als je alles wel had tenminste… We hadden gehoopt dat je het andere besluit had genomen, dan had het nog goed afgelopen. Maar dat deed je niet, dus we moeten je straffen.” De man knipt in zijn vingers en achter hem komen er twee mannen tevoorschijn. Deze mannen grijpen je bij je armen vast.`;

var level8_action3 = `Je vraagt je af hoe degene die deze brief heeft geschreven, weet welke spullen je mee hebt genomen. Je vertrouwt het niet helemaal en besluit dus om de voorwerpen voor jezelf te houden. De bessen laat je in je tas, het zakmes houdt je in je broekzak, en het wapen in je handen. Je hoort een klik en je kijkt om je heen. De deur waar jullie net door heen waren gekomen, vliegt open. Een wat oudere meneer stapt de ruimte binnen. Hij heeft geen glimlach op zijn gezicht. ${br} “Ik wilde je bedanken voor de medewerking, maar zo te zien heb je het besluit genomen de spullen voor jezelf te houden. Als je alles wel had tenminste… We hadden gehoopt dat je het andere besluit had genomen, dan had het nog goed afgelopen. Maar dat deed je niet, dus we moeten je straffen.” De man knipt in zijn vingers en achter hem komen er twee mannen tevoorschijn. Deze mannen grijpen je bij je armen vast.`;


// maak de student wakker
var level9_action1 = `De student wilt niet wakker worden… Je begint hem harder aan zijn schouders heen en weer te schudden. Echter schrikt de gijzelaar hiervan wakker en zodra hij jou ziet, begint hij om hulp te roepen. De deur achter je vliegt open en er lopen mannen naar binnen. Een van hen geeft je een spuit. Alles wordt zwart.`;

// maak de gijzelaar wakker
var level9_action2 = `De gijzelaar wordt wakker. Als hij je ziet, begint hij om hulp te roepen. De deur achter je vliegt open en er lopen mannen naar binnen. Een van hen geeft je een spuit. Alles wordt zwart.`;

// wacht in stilte af
var level9_action3 = `Je probeert je ogen te sluiten maar om de een of andere manier heb je het gevoel dat je bekeken wordt. Je draait je een paar keer om en begint te tellen. Aan de ene kant wil je niet langer wachten, maar aan de andere kant denk je ook weer waarom je eigenlijk wacht. Je denkt na en neemt dan een besluit. Je wilt naar de deur gaan, maar hoe lang zal je wachten om deze actie uit te voeren? ${br} Druk op de knop om de minigame te starten.`;

var level9_minigame = `Vul een getal in hoeveel minuten je wilt wachten.`;
/*
    < 15 minuten
    Je loopt naar de deur en duwt er hard tegenaan. De deur vliegt open en je rent naar buiten. 
    > 15 minuten
    Je hebt te lang gewacht! Er komen mannen binnen die je een spuit geven. Alles wordt zwart.
*/


// vraag om eten
var level10_action1 = `Je loopt naar één van de deuren waar het licht onder door schijnt. Je draait de knop om en de deur gaat open. Er staat een mevrouw binnen met enkele reageerbuisjes in de hand. Ze kijkt je aan en een schijnheilige glimlach verschijnt op haar gezicht. De mevrouw schenkt de vloeistof vanuit het ene reageerbuisje in het andere. Ze doet een masker op en je begint je draaierig te voelen. De mevrouw loopt naar je toe en sluit de deur achter je. Je zakt naar de grond.`;

// bel de hulplijnen
var level10_action2 = `Je neemt je telefoon uit je zak en wilt de hulplijnen bellen. Echter heb je geen enkel bereik. Je loopt door met je telefoon in je hand en probeert van alle kanten om je heen minstens één streepje bereik te krijgen. Je maag begint weer te knorren en je begint je draaierig te voelen. De muren om je heen beginnen te bewegen en je zakt naar de grond.`;

// zoek naar de uitgang
var level10_action3 = `Je wisselt het lopen en rennen af door de gang. Bij de deuren waar licht onder door schijnt, loop je. Als er geen licht is, of als er geen deuren zijn dan ren je. Je blijft voortgang maken door de gang. De ene keer neem je de bocht naar links, dan de bocht naar rechts. Er lijkt geen einde te komen aan deze gang. Je gedachten over thuis en school en deze excursie laten je afleiden van het oneindig door rennen. Je voelt je zwakker worden, je ogen worden wazig door de tranen in je ooghoeken. ${br} En nog voor je het in de gaten hebt, wordt er een deur voor je neus open geslagen waar je hard tegenop botst. Je zakt naar de grond.`;


start();