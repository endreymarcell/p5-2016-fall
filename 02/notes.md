# Második óra: p5 alapok

A p5-ben való rajzoláshoz először létre kell hoznunk egy vásznat, amire rajzolni tudunk. Ezt a `createCanvas(w, h)` függvénnyel tudjuk megtenni, aminek meg kell adnunk a vászon szélességét és magasságát, például:  
`createCanvas(600, 400)`  
létrehoz egy 600 pixel (képpont) széles és 400 pixel magas vásznat. (Ebből még semmit nem látunk, az oldal ugyanúgy fehér marad, de a vászon ettől függetlenül létrejött.)

A vásznunk méretét könnyen tesztelhetjük a `background(c)` függvénnyel, ami az egész vásznat a megadott színűre szinezi. Színeket stringként tudunk neki megadni, például:  
`background("blue")`  
De ha az alapszíneknél több árnyalatot szeretnénk, megadhatunk RGB színkódot is három számmal, 0 és 255 között, például:  
`background(80, 222, 125)`  
(Ha színválasztóra van szükség: google "color picker.")

Legtöbb esetben a vásznat a képernyő a böngészablak teljes méretéhez szeretnénk igazítani. Ehhez a p5 ad két automatikus változót: a `windowWidth` mindig az ablak teljes szélességét, a `windowHeight` a magasságát tartalmazza.
`createCanvas(windowWidth, windowHeight)`

A vászonra rajzolásnál az alakzatok helyét koordinátákban kell meghatározni. A p5 vászon egy derékszügű koordinátarendszerként működik, aminek a bal felső sarka a (0, 0) pont. A vízszintes tengelyt az x, a függőlegeset az y koordináta jelöli. Az x az ablak bal szélén 0, onnan jobbra haladva folyamatosan nő, az ablak jobb szélén eléri a `windowWidth` értékét. Az y az ablak tetején 0, lefelé haladva pedig folyamatosan nő, az ablak alján pedig eléri a `windowHeight` értéket. A két koordináta mindig (x, y) sorrendben követi egymást.  
Vonalat a `line(x1, y1, x2, y2)` függvénnyel tudunk rajzolni, aminek két pont x és y koordinátáit kell megadnunk. Például egy vonal a képernyő bal felső sarkából a (400, 100) pontba:
`line(0, 0, 400, 100)`  
Vagy a képernyő közepétől vízszintesen a jobb széléig:  
`line(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight / 2)`  
(A képernyő középpontját könnyen megkapjuk a teljes szélesség és teljes magasság elfelezésével.)

A vonal színet a `stroke(c)` függvénnyel állíthatjuk be, mely szintén stringet vagy RGB kódot vár.  
A vonal vastagságát a `strokeWeight(w)` állítja be.  
Ha vastag és színes vonalat akarunk rajzolni, akkor először be kell állítanunk a vastagságot és a színt, és csak ezután rajzoljuk meg a vonalat:  
`strokeWeight(5)`  
`stroke("red")`  
Ezzel öt pixel vastag, piros vonalat állítottunk be, de még nem rajzoltunk semmit.  
`line(0, 300, 400, 300)`  
Ezzel pedig húztunk egy vonalat a fenti beállításokkal.  
Amíg nem adunk ki új utasítást, a fenti beállítások maradnak érvényben, tehát minden további vonalunk 5px vastag és piros lesz.

Ha már rajzoltunk valamit, és újra meghívjuk a `background()` függvényt, a p5 a megadott színnel lefesti az egész képet, tehát felülírja mindazt, amit eddig rajzoltunk. A beállításaink azonban (pl. vonal színe és vastagsága) megmaradnak.  
Ha újratöltjük az oldalt, minden változtatás elveszik, beleértve a rajzunkat, a beállításokat, sőt még a vásznat is. Oldal újratöltése után tehát újra létre kell hozni egy vásznat.

További függvények:  
`rect(x, y, w, h)` - rajzol egy téglalapot, aminek a _bal felső sarka_ (x, y) pontban van, w széles és h magas.  
`ellipse(x, y, w, h)` - kör, aminek a _középpontja_ (x, y) pontban van, w széles és h magas.  
`triangle(x1, y1, x2, y2, x3, y3)` - háromszöget rajzol, aminek csúcsai a megadott három pont.  
A fenti alakzatoknak nem csak körvonala (stroke) van, hanem kitöltése (fill) is. Ezek színeit a következőkkel tudjuk szabályozni:  
`stroke(c)` - megadja a körvonal színét  
`noStroke()` - ne legyen körvonal  
`fill(c)` - megadja a kitöltés színét  
`noFill()` - az alakzat legyen átlátszó  

Szöveg kiírásához:  
`textFont(f)` - stringet vár, beállítja a betűtípust  
`textSize(s)` - betűméret  
`text(s, x, y)` - kiírja s szöveget (x, y) pontba.  
Például:  
`textFont("Georgia")`  
`textSize(48)`  
`text("Yabadabadooo", 500, 195)`  

Ha valaminek nem ismerjük a pontos használatát, utána tudunk nézni a p5 referenciában: https://p5js.org/reference/

A koordinátarendszerben való tájékozódáshoz segítséget nyújthat a `drawGrid()` függvény, mely elérhető a második órához tartozó sandboxban, és 100 pixel sűrűségű rácsot rajzol a vászonra. (Ez nem beépített p5-ös függvény, hanem én írtam.)