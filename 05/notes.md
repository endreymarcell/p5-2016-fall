# Ötödik óra: egér és billentyűzet, képek

## Egér és billentyűzet használata

A p5 nem csak az egér aktuális pozcióját tartja számon (`mouseX` és `mouseY` változók), de azt is, hogy kattintunk-e éppen az egérrel. Az erre szolgáló változó neve `mouseIsPressed`, típusa pedig boolean, vagyis vagy igaz vagy hamis (`true` vagy `false`). A `mosueIsPressed` változó vizsgálatával minden pillanatban el tudjuk dönteni, le van-e épp nyomva az egérgomb. Tipikusan `if` feltételeként használjuk:
```
if (mouseIsPressed) {
    // do stuff
}
```

A következő példaprogram a Paint egy nagyon primitív változata: az egérrel tudunk rajzolni a képre, de a tollunk csak akkor "fog", ha lenyomjuk rajta a gombot:
```
function setup() {
    createCanvas(windowWidth, windowHeight);
    fill('black');
}

function draw() {
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 20, 20);
    }
}
```
A program logikája a következő: a `setup()` függvényben létrehozzuk a vásznat, és beállítjuk a töltőszínt (amivel a képre rajzolt alakzatok ki lesznek töltve) feketére. Utána a `draw()` függvény minden egyes lefutásakor megvizsgáljuk, hogy le van-e épp nyomva az egér gombja, és ha igen, rajzolunk egy 20x20 képpont méretű kört, mégpedig pont oda, ahol épp az egér van.  

A `keyIsPressed` változó lényegében ugyanazt csinálja, mint a `mouseIsPressed`, csak nem az egérgomb lenyomására reagál, hanem a billentyűzet bármelyik billentyűjére.  

## Képek

A következőképpen tudunk képeket beilleszteni a programunkba: először, még minden függvényen kívül, létrehozunk neki egy változót:  
`var img;`
Utána a változóba beletöltjük a képet a `loadImage()` függvényt használva - ezt kiadhatjuk a `setup()` függvényen belül, de még jobb a `preload()` függvényben tenni, mert ekkor a p5 megvárja, hogy minden kép betöltődjön, és csak utána kezd futni:
```
function preload() {
	img = loadImage('batman.png');
}
```
A `draw()` függvényben pedig az `image()` parancssal tudjuk kirajzolni. Az `image()` három paramétert vár: a képet tartalmazó változót, és két koordinátát a kirajzolás helyéhez:  
```
function draw() {
	image(img, 400, 300);
}
```
Ha szeretnénk a képet átméretezve beilleszteni, átadhatunk az `image()`-nek még két számot, mely ekkor a kép szélességét és magasságát fogja meghatározni.  
