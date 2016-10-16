# Negyedik óra: dinamikus programok

## setup() és draw()

p5-ben természetesen nem csak olyan programokat lehet írni, amik statikus rajzokat készítenek, de olyanokat is, amik változnak, mozognak, reagálnak stb. Ehhez a programunkat úgy kell megírni, hogy tartalmazzon két speciális függvényt. (Pontosabban valójában minden p5 programot így kell megírni - az, hogy az eddigi progamok is működtek, annak köszönhető, hogy én a háttérben ezt megoldottam.)  

Az első speciális függvény a `setup()`. Ez minden p5-ös weboldal megnyitásakor egyszer lefut. Ezzel lehet a programunk kezdeti állapotát beállítani - egy tipikus példa a vászon létrehozása:  
```
function setup() {
    createCanvas(windowWidth, windowHeight);
}
```
A második speciális függvény a `draw()`. Ez csak a `setup()` után fut le, viszont nem csak egyszer, hanem másodpercenként 60-szor, a végtelenségig (vagy amíg meg nem állítjuk). Ebben kell tehát a programunk változó részeit írni.  
```
function draw() {
    // something that probably moves...
}
```
**Figyelem:** Akár mozog a programunk, akár nem, rajzolással kapcsolatos parancsokat csak ezen függvényeken belülre (vagy más, saját függvényeken belüle) írhatunk! Azt, hogy eddig függvényeken kívül is írtunk, vegyük "tanulópályának".  
A következő program tehát nem fog működni:
```
createCanvas(windowWidth, windowHeight);

function draw() {
    // something that probably moves...
}
```
A `createCanvas()` hívást nem írhatjuk csak úgy oda a programba, bele kell tennünk egy függvénybe.

## Az első mozgó program: felfújódó gömb

Írjunk egy programot, ami a képernyő közepére rajzol egy kört, ami folyamatosan nő! Használhatjuk a `centeredCircle()` függvényt.  

### Első lépés: mindent kézzel

Az első nekifutás lehetne ez: csináljunk egy `diameter` (átmérő) változót, ami indulhat nulláról. Rajzoljunk egy kört, aminek a mérete ezt a változót használja, növeljük meg a változó értékét, és ismételgessük ezt a két lépést:  
```
var diameter = 0;
centeredCircle(diameter);
diameter = diameter + 5;
centeredCircle(diameter);
diameter = diameter + 5;
centeredCircle(diameter);
diameter = diameter + 5;
// etc...
```

### Második lépés: tegyük a parancsainkat függvénybe

Gondoljunk bele, hogy ha a kör rajzolása és a változó növelése benne lenne egy függényben, akkor már csak azt az egy függvényt kéne sokszor egymás után meghívnunk. Írjunk tehát egy ilyen függvényt:
```
var diameter = 0;
function drawCircleAndGrow() {
    centeredCircle(diameter);
    diameter = diameter + 5;    
}
drawCircleAndGrow();
drawCircleAndGrow();
drawCircleAndGrow();
drawCircleAndGrow();
// etc...
```

### Harmadik lépés: hívjuk a függvényt 'draw'-nak

A fenti függvény mindent megcsinál, de nekünk kell újra meg újra meghívni. A p5-ben azonban pont erre van a `draw()` függvény: azt a p5 magától hívja meg újra és újra. Tehát nevezzük át a függényünket `draw()`-ra:
```
var diameter = 0;
function draw() {
    centeredCircle(diameter);
    diameter = diameter + 5;    
}
```

Így néz ki az elkészült program:
```
var diameter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    centeredCircle(diameter);
    diameter = diameter + 5;    
}
```
Ez meg is csinálja, amit akartunk: egyre nagyobb köröket rajzol a képernyő közepére.

**Fontos:** a függvényekről azt tanultuk, hogy a definíciójuktól még nem történik semmi, meg is kell hívni őket ahhoz, hogy végrehajtódjanak. A `setup()` és a `draw()` viszont különleges függvények: ezeket maga a p5 fogja meghívni, tehát nekünk csak definiálni kell őket.

## További példák

### Ridin' dirty

Van egy `car(x)` függvényünk, ami rajzol egy autót, méghozzá a megadott szélességre (tehát a vízszintes tengelyen oda, ahol a paraméterben megadjuk neki). Ennek a használatával írjunk egy programot, amin az autó a képernyő bal széléről jobbra gurul!  
Ez a példa majdnem ugyanaz, mint a fenti, csak (1) átmérő helyett az x koordinátát tartjuk számon, (2) kör helyett pedig autót rajzolunk:
```
var x = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    car(x);
    x = x + 5;
}
```
Egy apró probléma van ezzel a programmal: az autó csíkot húz. A p5 automatikusan semmit nem töröl le a képről, egymásra rajzolja az egymás után következő utasításokat. Az autócsík eltüntetéséhez minden autórajzolás előtt fessük fehérre a teljes vásznat:
```
function draw() {
    background('white');
    car(x);
    x = x + 5;
}
```
There, problem solved.  
Vegyük észre, hogy a két rajzoló parancs fordított sorrendben nem működne: ha előbb lenne a `car(x)` és utána a `background('white');`, akkor minden kirajzolt autót lefestenénk fehérre, és semmit nem látnánk a képen.

### Egeret követő autó

Láttuk, hogy a p5 automatikusan beállít számunkra néhány változót (pl. `windowWidth, windowHeight`). További két ilyen változó a `mouseX` és `mouseY`, amik az egér aktuális helyét mondják meg a vásznon. Ennek a használatával írjunk programot, amiben az autó nem fixen kigurul jobbra, hanem mindig oda gurul (az x tengelyen), ahol az egér van!  
Ehhez is keveset kell változtatni az előző programon: (1) az autó helyzete nem az x változóból fog jönni, hanem a mouseX változóból, (2) ezért aztán az x-re nem is lesz szükségünk.
```
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white');
    car(mouseX);
}
```

### Egeret követő kör

Autó helyett most rajzoljunk egy kört, mégpedig pontosan oda, ahol az egér van!  
Ehhez az `ellipse(x, y, w, h)` függvényt használjuk, ami négy számot vár: a kör középpontjának x és y koordinátáját - ezek nyilván a beépített `mouseX` és `mouseY` változókból fognak jönni -, illetve a kör szélességét és magasságát, amit úri és úrihölgyi kedvünk szerint állíthatunk be arra, amire szeretnénk.
```
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white');
    ellipse(mouseX, mouseY, 100, 100);
}
```
