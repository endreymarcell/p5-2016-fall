# Harmadik óra: programozás Atomban

## Atom

A parancssor nagyon jó arra, hogy egy-egy parancsot kipróbáljunk, de hosszabb programok írására nem alkalmas. Nem tudjuk elmenteni a munkánkat, nem tudjuk visszavonni az elrontott parancsokat stb. Ezért mostantól nem parancssorba írjuk az utasításokat, hanem külön megírjuk a programot. Ehhez órán az [Atom](https://atom.io/) nevű szerkesztőt használjuk (de bármilyen más plan text editor is megfelelne).  

Az Atom egy kifejezetten programok írására megalkotott szövegszerkesztő, ami különböző módokon segíti a munkánkat, pl. a kód értelmet kihangsúlyozó színezésével ("syntax highlight"), a páros jelek (időzőjel, zárójel stb.) automatikus bezárásával, a behúzandó kódsorok automatikus behúzásával ("indent") stb.  

A harmadik órai példákat úgy tudod kipróbálni, hogy a dropboxban veled megosztott<sup>1</sup> mappában lévő három fájlból a __sketch.js__ nevűt szerkeszted, az __index.html__-t pedig megnyitod Chrome-ban. A JavaScript fájlt minden módosítás után el kell menteni, a weboldalt pedig újra be kell tölteni. Ez a felállás azért működik, mert az index.html-t úgy írtam meg, hogy betöltse a p5 parancsokat, aztán lefuttassa a sketch.js tartalmát.  
Hasznos billentyűkombinációk: Cmd+S a mentésre (windowson Ctrl+S), Cmd+Tab a két program közti váltáshoz (Alt+Tab). Hasznos még a kód szerkesztése közben: Cmd+C másolja a kijelölt sort, Cmd+V pedig beilleszti.  

A parancssorba csak egyenként írhattunk be parancsokat, és újratöltésnél minden elveszett. Mostantól Atomba akárhány parancsot írhatunk, a megírt programot el tudjuk menteni, tetszés szerint tudjuk változtatni stb. A program az oldal betöltésekor fut le, tehát minden újratöltés után újra megjelenik, amit a sketch.js-ben kiadott utasításokkal rajzolunk. (Természetesen ettől még továbbra is lehet használni a parancssort is.)

JavaScriptben hivatalosan minden parancs után pontosvesszőt kell tenni:  
`ellipse(550, 450, 100, 100);`  
A pontosvessző a parancs végét jelzi. A legtöbb esetben azonban az enter és új sorba írás is egyértelmű, így a pontosvessző nélkül is értelmes a program (parancssornál pedig mindig csak egy parancsot futtatunk egyszerre, thát ott mindig egyértelmű a parancs pontosvessző nélkül is). Ezért a kurzuson ajánlom és kérem a sorvégi pontosvessző kitételét, és én is ki fogom írni, de nem számít hibának, ha nincs ott.  

Itt egy példa egy Atomban írt programra, ami nyalókát rajzol:  
```
createCanvas(600, 400);
background('yellow');
ellipse(300, 150, 50, 50);
line(300, 175, 300, 250);
```

Hasznos továbbá tudni, hogy ha egy sor elé dupla perjelet teszünk, onnantól az _komment_ lesz, a program nem fogja végrehajtani. Az Atom ezt jelzi is, szürkére színezi az ilyen sorokat.  
Ha egyszerre több sort is ki szeretnénk kommentelni, jelöljük ki őket és használjuk az `Edit > Toggle Comments` menüpontot. Ez hasznos lehet például akkor, ha valamit, amit megírtunk, éppen nem szeretnénk lefuttatni, de kitörölni sem akarjuk.

(1) Ha nem kaptál mappát, írj nekem emailt!

## Saját függvények

Eddigre már sok függvényt használtunk, most megtanuljuk, hogy lehet sajátot írni. Függvényt írni akkor hasznos, mikor néhány parancsot szeretnénk egy logikai egysgébe összefoglalni, és utána akár többször felhasználni. Például az előző példából a nyalóka két utasítása lehetne egy függvény.  
Függvényeket definiálni a következő szintaxissal lehet:  
```
function functionname() {
    ...
}
```
Ahol _functionname_ a függény neve, a három pont helyére pedig a parancsok jönnek. Például:
```
function lollipop() {
    ellipse(300, 150, 50, 50);
    line(300, 175, 300, 250);
}
```
A kapcsos zárójelek közti részt valamivel beljebb húzzuk (indentáljuk), ezzel jelezve, hogy ez a blokk a függényhez tartozik. Az Atom amúgy ezt magától is megteszi.
(Ha programozás közben elromlik a formázás, az `Edit > Select All`, `Edit > Linez > Auto Indent` opció automatikusan helyesre formázza a programot. Kéretik használni.)

A fenti függvénydefiníció önmagában még nem rajzol semmit. Ez csak egy recept, ami leírja, megtanítja a JavaScriptnek, hogy hogyan kell nyalókát rajzolni, de nem utasítja arra, hogy ezt hajtsa is végre. A függvényt végrehajtani ("meghívni") ugyanúgy tudjuk, mint bármelyik eddig tanultat:  
`lollipop()`

## Ismétlés: változók és függvények létrehozása és használata

||Létrehoz|Használ|
|---|---|---|
|__Változó__|`var x = 10`|`x`|
|__Függény__|`function lollipop() { ... }`|`lollipop()`|

## Hasznos függvények

A nyalókás függvény legfőbb haszna az lenne, hogy több nyalókát is tudjunk vele rajzolni. Jelenleg azonban minden nyalókát ugyanoda rajzol, ami nem túl hasznos. A függvények azonban képesek bemenő adatokat (ún. argumentumokat vagy paramétereket) fogadni, mely adatokat aztán fel tudják használni futás során. Például az `alert()` függvény várt tőlünk egy string argumentumot, és azt írta ki a felugró ablakban, a `strokeWeight()` egy számot, ami a vonal vastagságát határozza meg stb.  
Írjuk át úgy a nyalókás függvényt, hogy argumentumként vegye át a rajzolás helyét, legalábbis az x koordinátát (szélességet):
```
function lollipop(x) {
    ellipse(x, 150, 50, 50);
    line(x, 175, x, 250);
}
```
Hasonlítsuk össze az eredetivel:
```
function lollipop() {
    ellipse(300, 150, 50, 50);
    line(300, 175, 300, 250);
}
```
Láthatjuk, hogy először is beírtunk egy nevet a zárójelek közé, ezzel jelezve, hogy a függvény vár egy bemenő adatot, amit aztán a függvényen belül x-nek fogunk nevezni. Utána mindenhol, ahol a függvényen belül x koordinátát állítottunk be, felhasználtuk ezt a bemenő adatot.  
Most már tudunk több nyalókát rajzolni egymás mellé:
```
function lollipop(x) {
    ellipse(x, 150, 50, 50);
    line(x, 175, x, 250);
}

createCanvas(600, 400);
background('yellow');
lollipop(100);
lollipop(200);
lollipop(500);
```

Ha a nyalóka y koodinátáját is szeretnénk szabadon állítani, fel kell vennünk még egy koordinátát:
```
function lollipop(x, y) {
```
majd pedig az y koordináták megadásakor használjuk ezt az új változót is.  
Figyelem: mivel a nyalóka kódjában az x koordináta mindig állandó (az eredeti kódban mindig 300), ezért elég volt minden 300-as helyére beírni, hogy x. Mivel azonban a kódban az y-ok változnak (a kör közepe 150, a vonal pedig 175-től 250-ig megy), ezért a számok helyére az y megfelelően módosított változatát kell beírni: ha a 150 helyére y-t írunk, a 175 helyére y + 25 kell, a 250 helyére pedig y + 100.
```
    ellipse(x, y, 50, 50);
    line(x, y + 25, x, y + 100);
}
```
(Miért nem nyúltunk az ellipse két 50-eséhez? Mert azok nem koordináták, hanem szélesség és magasság. Mindegy, hogy a kör 0-nál vagy 100-nál kezdődik, a szélessége mindig 50 kell hogy legyen.)  
Tehát a függvény három alakja még egyszer:  

fixen:
```
function lollipop() {
    ellipse(300, 150, 50, 50);
    line(300, 175, 300, 250);
}
```
Változtatható x-szel:
```
function lollipop(x) {
    ellipse(x, 150, 50, 50);
    line(x, 175, x, 250);
}
```
Változtatható x-szel és y-nal:
```
function lollipop(x, y) {
    ellipse(x, y, 50, 50);
    line(x, y + 25, x, y + 100);
}
```

## Döntések

Gyakran előfordul, hogy bizonyos feltételekez kötjük, pontosan milyen parancsoknak kell futnia. Ezt az `if` konstrukcióval tudjuk megtenni:
```
if (condition) {
    ...
}
```
Ahol `condition` egy feltétel, például `x === 100` vagy `y < 500`, a pontok helyére pedig a végrehajtandó utasítások jönnek.  
Például ha csak akkor akarunk kört rajzolni a képernyőre, ha az ablak keskenyebb 600 képpontnál:
```
if (windowWidth < 600) {
    ellipse(100, 100, 50, 50);
}
```

Az `if` opcionálisan kiegészíthető egy `else`, "különben" ággal:
```
if (condition) {
    ...
} else {
    ...
}
```

Például ha széles képernyőre piros, keskenyre kék kört akarunk rajzolni:
```
if (windowWidth > 600) {
    fill(blue);
} else {
    fill(red);
}
ellipse(100, 100, 50, 50);
```

A JavaScript először megvizsgálja a zárójelbe írt feltételt. Ha a feltétel igaznak bizonyul, végrehajtja az első kapcsos zárójelek közé zárt blokk utasítás(ai)t, és átugorja a másodikat. Ha a feltétel hamis, az első blokkot ugorja át és a másodikat hajtja végre. A blokkok után, azokon kívülre írt utasítás minden esetben lefut.
