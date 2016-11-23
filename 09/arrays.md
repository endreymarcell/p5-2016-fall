# Tömbök

## Tömbök létrehozása és használata

A tömbök (vagy listák) olyan változók, amikben több értéket is lehet tárolni.  
Tömböt úgy lehet létrehozni, hogy szögletes zárójelek között vesszővel elválasztva felsoroljuk az elemeit:  
`var lotteryNumbers = [4, 9, 11, 24, 69];`  
`var names = ["Stan", "Pan"];`  
`var daysOfWeek = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];`

Ha pedig használni szeretnénk belőle egy értéket, akkor a tömb neve után szögletes zárójelek közé kell írni a kívánt elem sorszámát. Vigyázat, a sorszámozás 0-tól kezdődik!
```
> var names = ["Stan", "Pan"]
> names[0]
"Stan"
> names[1]
"Pan"
> names[2]
undefined
```

## Tömbök és random

Ha van egy tömbünk, és szeretnénk belőle véletlenszerűen választani egy elemet, csak át kell adni a tömböt a `random()` függvénynek. A `random()`-ot eddig számokkal használtuk, de ha számok helyett egy tömböt kap, annak egy véletlenszerűen választott elemét fogja visszaadni:  
```
> var names = ["Stan", "Pan"]
> random(names)
"Pan"
```

## A "for" ciklus

Amit mi korábban a `repeat()` függvénnyel oldottunk meg, tehát parancsok többszöri végrehajtását, arra a JavaScript beépített megoldásként az úgynevezett for ciklust nyújta. Ez kicsit elrettentően néz ki, de roppant hasznos tud lenni. Szintaxisa a következő:  
```
for (var i = 0; i < LIMIT; i++) {
	// commands
}
```
ahol a `LIMIT` helyére beírjuk, hogy hány ismétlést szeretnénk, a `// commands` helyére pedig az utasításokat.  
Például így rajzolhatunk 5 kört random helyre:  
```
for (var i = 0; i < 5; i++) {
	ellipse(random(0, width), random(0, height), 30, 30);
}
```
Ha rájövök, hogy inkább 25 körre van szükségem, csak át kell írnom az 5-öt 25-re a kódban.

## Tömbök és for ciklus

A for ciklus és a tömbök roppant jó barátjai egymásnak.  
Tegyük fel, hogy van egy bogyóm a képen, ami jobbra halad:  
```
var x;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = 0;
}

function draw() {
	background('white');
	ellipse(x, 300, 30, 30);
	x += 10;
}
```

Idáig minden oké, ugye?  
Az csak a baj, hogy ha három kört akarok egy helyett, akkor kénytelen vagyok mindent háromszor írni:  
```
var a;
var b;
var c;

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = 0;
    b = 0;
    c = 0;
}

function draw() {
	background('white');
	
	ellipse(a, 300, 30, 30);
	a += 10;
	
	ellipse(b, 300, 30, 30);
	b += 10;
	
	ellipse(c, 300, 30, 30);
	c += 10;
}
```
Hát ez nem valami menő. És bele se merek gondolni, mi történne, ha harminc kéne!  
Itt jönnek a képbe a tömbök, amik - mint említettük - pont arra jók, hogy egyetlen változóban több értéket lehessen tárolni. A tömböt tartalommal úgy tudjuk feltölteni, hogy odaadjuk az elemeit egy szögletes zárójelek közé zárt, vesszőkkel határolt listában. A tömb egyes elemeire pedig úgy lehet hivatkozni, hogy a tömb neve után szögletes zárójelek közé írjuk az elem sorszámát. (Ne felejtsük, hogy a számozás nulláról indul!) Tehát:  

```
var x;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = [0, 0, 0];
}

function draw() {
	background('white');
	
	ellipse(x[0], 300, 30, 30);
	x[0] += 10;
	
	ellipse(x[1], 300, 30, 30);
	x[1] += 10;
	
	ellipse(x[2], 300, 30, 30);
	x[2] += 10;
}
```

Az előző programban lévő `a`, `b` és `c` változók szerepét most az `x[0]`, `x[1]` és `x[2]` vették át. Ez persze önmagában még nem segített rajtunk... Még mindig háromszor kell írni a körök kirajzolását. De figyeld meg, hogy abban a három leírásban egyetletnegy különbség van: a sorszám, amit az `x` tömbnek átadunk. Tehát: azonos kódsorokat ismétlünk megadott darabszámszor, és az egészben csak egy számláló változik. _Ez pedig pont az, amit a for ciklus meg tud nekünk oldani:_ többször végrehajtja a neki adott parancsokat, és közben számol. Mégpedig úgy számol, hogy mi tudjuk használni ezt a számlálót. Mutatom:  

```
var x;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = [0, 0, 0];
}

function draw() {
	background('white');
	
	for (var i = 0; i < 3; i++ ) {
		ellipse(x[i], 300, 30, 30);
		x[i] += 10;
	}
}
```

Mindjárt más, nemde? Nézd meg jól ezt a programot és az eggyel feljebb lévőt: pontosan ugyanazt csinálják. Csak mihelyettünk maga a számítógép fogja beírni a szögletes zárójelekbe a 0, 1 és 2 számokat.  
És persze az igazi haszos az, hogy innentől kezdve a világ legyszerűbb dolga 3 helyett 30 háromszöget csinálni:  
`for (var i = 0; i < 3; i++ ) {`  
helyett  
`for (var i = 0; i < 30; i++ ) {`  
és már készen is vagyunk.  
Ha pedig különböző x-ről szeretném indítani a köröket, csak a `setup()` megfelelő sorát kell átírnom, például:  
`x = [0, 100, 288];`
