# Nyolcadik óra: átlászóság, egér és billentyűzet pontosabb használata (mouseClicked), gombokra kattintás, program állapota

## Átlászóság

Mikor rajzolunk a képernyőre, lehetőségünk van áttetszőséget is állítani. Ehhez a színt beállító függvénynek három helyett négy számot kell átadni: az első három továbbra is az RGB színkód 0-255 között, a negyedik szám pedig a szín "erősségét" állítja, és szintén 0-255 között mozog, ahol a 0 a teljesen átlátszó, a 255 pedig az átlátszatlan.
Így tudunk például fehér háttérre egy áttetsző kék "buborékot" rajzolni:
```
background('white');
fill(0, 0, 255, 170);
ellipse(500, 300, 100, 100);
```

Ez persze nem csak a `fill()` függvénnyel működik, hanem bármelyikkel, ami színt vár.

## mouseClicked, keyPressed

A `mouseIsPressed` ill. `keyIsPressed` változók nagyon hasznosak akkor, mikor egérgomb vagy billentyű lenyomva tartására folyamatosan szeretnénk csinálni valamit (például vonalat húzni, amig nyomjuk az egér gombját). Viszont ha azt szeretnénk, hogy egérrel való kattintáskor vagy billentyű lenyomásakor szigorúan csak egyszer fussanak az utasításaink, akkor mást kell használnunk. Például ha a szóköz lenyomásakor a vászon egy véletlenszerű helyére szeretnénk rajzolni egy kört, azt találjuk, hogy egy kör helyett három-négyet is kapunk. (Ez azért van, mert a `draw()` függvény másodpercenként hatvanszor is lefut, és megvizsgálja, nyomjuk-e épp a billentyűt - mi viszont nem vagyunk elég gyorsak, hogy a billentyűt lenyomjuk és el is engedjük a másodperc hatvanad része alatt.)  
Ilyen feladatokra a p5 egy másik eszközt nyújt: azt a kódot, amit egérkattintáskor szeretnénk futtatni, helyezzük egy új függvénybe, aminek a `mouseClicked()` nevet adjuk. Ez a kód minden egérkattintáskor szigorúan csak egyszer fog lefutni.  
Így néz ki egy program `mouseIsPressed` használatával:  
```
function draw() {
	if (mouseIsPressed) {
		ellipse(random(0, width), random(0, height), 100, 100);
	}
}
```

De ez még több kört rajzol kattintásonként. Itt a javított verzió, ami minden kattintásra csak egy kört rajzol:  
```
function draw() {}

function mouseClicked() {
	ellipse(random(0, width), random(0, height), 100, 100);
}
```

Ugyanígy a `keyIsPressed` változó helyett használhatjuk a `keyPressed()` függvényt.  

## Gombokra való kattintás

Ha azt szeretnénk, hogy csak bizonyos helyre való kattintáskor történjen valami, a `mouseClicked()` függvényben meg tudjuk vizsgálni az egér helyét.  
Kör alakú gombnál az a kérdés, hogy az egér milyen messze van a kör középpontjától. Ennek a kiszámolására a p5 a `dist()` függvényt biztosítja, ami négy koordinátát vár, és megadja az általuk meghatározott két pont távolságát. Ha például a (400, 200) középpont köré rajzoltunk kört, a `dist(400, 200, mouseX, mouseY)` meg fogja mondani, milyen közel van az egér éppen a kör középpontjához. Az egér akkor van _benne_ a körben, ha a középponttól való távolsága kisebb, mint a kör sugara. Ezt fogjuk tehát feltételként megadni az `if`-ben:  
```
function draw() {
	ellipse(400, 200, 150, 150);
}

mouseClicked() {
	if (dist(400, 200, mouseX, mouseY) < 75) {
		alert("Kattintás a kör alakú gombon belül!")
	}
}
```

Négyzet alakú gombokra használjatjuk a `mouseInRect()` segédfüggvényt, ami ugyanazt a négy számot várja, amit a `rect()`-nek adtunk, és igazat vagy hamisat ad vissza aszerint, hogy az egér épp benne van-e a négyzetben. (Ezt a függvényt nem a p5 adja, hanem én írtam.) Így lehet használni:  
```
function draw() {
	rect(500, 150, 300, 400);
}

mouseClicked() {
	if (mouseInRect(500, 150, 300, 400)) {
		alert("Kattintás a négyzet alakú gombon belül!")
	}
}
```

## Programállapot

Gyakran szeretnénk a programunknak különböző állapotokat adni. Például írhatunk egy lámpakapcsolót, amit kattintással tudunk fel-le kapcsolni. Ilyenkor egyrészt csinálnunk kell egy változót, amiben tárolni akarjuk a program állapotát:  
```
var lights;
```

Aztán a `setup()` függvényben beállítjuk a kezdőállapotát - legyen ez most például az, hogy fel van kapcsolva a lámpa:  
```
function setup() {
	createCanvas(windowWidth, windowHeight);
	lights = "on";
}
```

A `draw()` függvényben aszerint rajzolunk fehér vagy fehete hátteret, hogy mi épp a lámpa állapota:
```
function draw() {
	if (lights === "on") {
		background('white');
	} else {
		background('black');
	}
}
```

Végül pedig írunk egy `mouseClicked()` függvényt, ami mindig átállítja a program állapotát a másik lehetségesre - felkapcsoltról lekapcsoltra és fordítva:  
```
function mouseClicked() {
	if (lights === "on") {
		lights = "off";
	} else {
		lights = "on";
	}	
}
```
