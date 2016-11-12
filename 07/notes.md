# Hetedik óra: webkamera, random

## Webkamera használata

p5-ben a webkamerát (illetve a mobiltelefon szelfi-kameráját) is tudjuk használni. A szintaxis nagyon hasonló ahhoz, ahogy képeket teszünk a képre, csupán a `loadImage()` helyett kell más függvényt meghívni.
Először tehát létrehozunk egy változót a webkamera képének:
`var capture;`
Utána a `setup()` függvényben beletöltjük a webkamerából érkező adatokat:
`capture = createCapture(VIDEO);`
Végül pedig a `draw()` függvényben felhasználjuk a képet:
`image(capture, width / 2, height / 2);`

Futtatáskor a böngésző engedélyt fog kérni a webkamera használatára, majd ha ezt megadjuk, a vásnon megjelenik a webkamera folyamatos, real-time képe.

# Szűrők használata

p5-ben a megrajzolt képeinkre szűrőket, _filtereket_ tudunk tenni a `filter()` függvény használatával. Ezt minden másik parancs után kell kiadni a `draw()` legvégén. A [p5 referenciában](https://p5js.org/reference/#/p5/filter) megnézhetjük, hogy pontosan milyen szűrőket tudunk a képre tenni.
Szűrőket tudunk tenni természetesen a webkamerától kapott képre is. Itt egy példa egy teljes programra, ami betölti a webkamera képét, majd invertálja a színeit:
```
var capture;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
}

function draw() {
    image(capture, width / 2, height / 2);
    filter(INVERT);
}
```

# Billentyűk megkülönböztetése: key és keyCode

Korábban már láttuk a `keyIsPressed` változó használatát. Ha nem csak az érdekel minket, hogy le van-e nyomva billentyű, hanem az is, hogy melyik billentyű az, a `key` és a `keyCode` változók lesznek a barátaink, amik eltárolják a legutoljára lenyomott billentyűt. Ha betűről van szó, a `key` változót használjuk, ami sima stringként eltárolja a betűt, amit lenyomtunk. Ha speciális billentyűkre vagyunk kíváncsiak (pl. enter, tab, nyilak), a `keyCode` változó értékét vizsgáljuk meg.  
A következő példaprogram felugró ablakban mondja meg, hogy az általunk lenyomott billentyű az enter volt-e, vagy valami más:  
```
function draw() {
    if (keyIsPressed) {
        if (keyCode === ENTER) {
            alert("You pressed the enter key.");
        } else {
            alert("You pressed something else.");
        }
    }
}
```

Ez a program pedig piros kört rajzol, ha a "p" betűt nyomjuk le, és kéket, ha bármi mást:  
```
function draw() {
    if (keyIsPressed) {
        if (key === "p") {
            fill("red");
        } else {
            fill("blue");
        }
    }
    ellipse(100, 100, 100, 100);
}
```


# Véletlenszámok: random

Még izgalmasabb és változatosabb rajzokat tudunk készíteni akkor, ha véletlenszerűen rajzolunk. Ehhez a p5 a `random()` nevű függvényt adja nekünk, ami két számot vár, és kimenetként ad egy véletlenszámot az általunk megadott két határ között. Tehát például a `random(0, 100)` egy véletlenszerűen választott számot fog adni 0 és 100 között. Valahányszor meghívjuk a függvényt, más számot fog visszaadni.  

## Véletlen hely

Ezt felhasználhatjuk például arra, hogy véletlen helyre rajzoljunk dolgokat:  
`ellipse(random(0, width), random(0, height), 50, 50)`  
A fenti parancs egy 50 képpont sugarú kört rajzol a vászon valamelyik véletlenszerűen választott pontjára. Az `ellipse()` függvénynek adott első szám az x koordináta, ami 0 és `width` között mozoghat, tehát itt ezek között a határok között kérünk véletlenszámot. A második az y koordináta, itt ugyanez a helyzet `height`-tal.

## Véletlen méret

A megrajzolt dolgok mérete és lehet véletlenszerű:  
`ellipse(100, 100, random(10, 100), random(10, 100)`
A fenti parancs mindig ugyanoda rajzol ellipszist, de mindig más méretűt.  

### Ellipszis vagy kör?

A fenti program nem köröket rajzol, inkább "tojásokat", hiszen az ellipszis szélességét és magasságát két különböző véletlenszámmal határozzuk meg. Ha véletlen méretű köröket szeretnénk rajzolni, akkor a véletlenszám-generálást nem az `ellipse()` hívásba rakjuk bele, hanem előre elmentjük az eredményét egy változóba, és az `ellipse()`-nek már ezt a változót adjuk át:  
```
var a = random(10, 100);
ellipse(100, 100, a, a);
```

## Véletlen szín

p5-ben úgy tudunk pontos színeket megadni, hogy egy színt beállító függvénynek (pl. `stroke()`, `fill()`) három számot adunk meg. Ez a három szám egy RGB színkód, mindhárom 0-tól 255-ig terjedhet. Természetesen 0-tól 255-is is tudunk véletlenszámot dobni, tehát ha véletlen színt szeretnénk, nincs más dolgunk, mint `random()` hívásokat írni a színt beállító függvénybe, pl.:  
`fill(random(0, 255), random(0, 255), random(0, 255));`  

# Ismétlés

Véletlenszerű dolgokból a legjobb sokat rajzolni. Ehhez szerencsére nem kell sokszor kiadni ugyanazokat a parancsokat, meg tudjuk oldani egyszerűbben is az ismétlést. Például tegyük fel, hogy szeretnénk a vászonra 30 db véletlen színű és méretű, véletlen helyre kerülő ellipszist rajzolni. Egy darab ellipszist meg tudunk csinálni ennyi kóddal:  
```
fill(random(0, 255), random(0, 255), random(0, 255));
ellipse(random(0, width), random(0, height), random(10, 100), random(10, 100))
```
Ahhoz, hogy a gép ezt harmincszor végre tudja hajtani, először tegyük a parancsokat egy külön, saját függvénybe:  
```
function randomEllipse() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(random(0, width), random(0, height), random(10, 100), random(10, 100))
}
```
Majd használjuk a `repeat()` függvényt az ismétléshez:  
`repeat(randomEllipse, 30)`  
És már kaptunk is 30 ellipszist.  
__Figyelem:__ bár a `randomEllipse()` egy függvény, ebben az egy esetben kivételesen nem kell mögé kitennünk a nyitó és záró zárójeleket.  
__Figyelem 2:__ a `repeat()` nem beépített JavaScript konstrukció (mint pl. a `function` vagy az `if`), és nem is p5-is függvény. A `repeat()` függvényt én írtam a kurzus számára, hogy egyszerűbbé tegyem az ismétlést. (Természetesen JavaScriptben magától is van erre lehetőség, de sokkal bonyolultabb. Ezt a bonyolultságot szerettem volna elkerülni.) Ez viszont azt jelenti, hogy a `repeat()` hívások csak azokban a programokban működnek, ahol a `repeat()` függvény definiálva van. Tehát ha valahol szükségünk van rá, másoljuk be ezt a pár extra sort a programunkba:
```
// helper function
function repeat(fun, times) {
    for (var i = 0; i < times; i++)
        fun();
}
```
