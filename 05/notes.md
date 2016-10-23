# Ötödik óra: egér és billentyűzet

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
