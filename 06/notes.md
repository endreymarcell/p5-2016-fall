# Hatodik óra: hangok és mobil

## Atom package-ek

Ezen az órán próbaképpen feltettünk két package-et a kódszerkesztő programunkba, amik segítenek hatékonyan programozni.  

Az első neve __jsformat__, és abban segít, hogy a kódunkat helyesen formázzuk meg. Programok írása közben minden leütött betű számít, de általában nagy szabadságot kapunk az ún. whitespace karakterek, tehát szóközök, tabok és enterek használatában. Azonban az, hogy a programnak mindegy, nem jelenti azt, hogy a programozónak is az. Megírás után ugyanis szeretnénk elolvasni a programot, belenyúlni, módosítani stb., ehhez pedig létfontosságú, hogy könnyen el tudjuk olvasni, meg tudjuk érteni, amit írtunk. Gondoljunk bele, hogy [ez a program](https://github.com/endreymarcell/p5-notes/blob/master/06/formatting-examples/01-garbage.js) pontosan ugyanazt csinálja, mint [ez a program](https://github.com/endreymarcell/p5-notes/blob/master/06/formatting-examples/04-nice.js), de ha nekünk kell dolgozni vele, nyilván sokkal könnyeb dolgunk van a második, szépen megformázott változattal. Ebben a formázásban segít nekünk a jsformat. Így kell telepíteni: Atom > Preferences > Install, itt a keresési mezőbe `jsformat` és enter, majd a találatok között a jsformat-on Install. Ha a telepítés befejeződött, megjelenik a Settings gomb, erre kattintva kell kikeresni a `Format on save` opciót. Ezt egyszer ki és újra be kell kattintani.  
Ha úgy találod, hogy a jsformat inkább zavar, mint segít, nyugodtan kapcsold ki (Atom > Preferences > Packages > jsformat > Disable).  

A második plugin neve __linter-jshint__, ez pedig hibákat keres a kódunkban, és hibaüzeneteket mutat, tipikusan akkor, ha elgépeltünk valamit. Nagyon jól el tudja kapni például azt, ha elfelejtünk bezárni egy kapcsos zárójelet, ha véletlenül kimarad egy vessző egy függvény paramétereinek felsorolásánál, ha elgépeljük a "function" szót stb. A telepítéséhez: Atom > Preferences > Install, itt a keresési mezőbe `linter-jshint` és enter, majd a találatok között a linter-hsinten Install.  

Figyelem: mindkét pacakge kifejezetten JavaScript fájlokhoz van kitalálva, ezért csak akkor fognak működésbe lépni, ha az általunk éppen szerkesztett fájl már el van mentve, méghozzá ".js" kiterjesztéssel!  

## Hangok lejátszása

Hangokat p5-ben a képekhez hasonló módon használni: először le kell töltenünk egy hangfájlt (.mp3 formátumban) ugyanabba a mappába, ahol a programunk van, a programon belül pedig először bele kell töltenünk egy változóba, utána abból a változóból tudjuk elindítani.  
Először tehát létrehozunk egy változót a már letöltött hangfájlnak:  
`var meow;`  
Utána beletültjük a hangot a `loadSound()` paranccsal:  
`meow = loadSound('cat.mp3')`;  
Aztán pedig elindítjuk:  
`playSound(meow);`  
Illetve meg is tudjuk állítani:  
`stopSound(meow);`  

Figyelem: a `playSound()` és `stopSound()` függvényeket én írtam és adom nektek, mert velük egyszerűbb a hangok használata. A fenti program tehát csak akkor fog működni, ha ez a két függvény definiálva van benne, így:  
```
function playSound(sound) {
  if (!sound.isPlaying()) {
    sound.play();
  }
}

function stopSound(sound) {
  sound.stop();
}
```

## Hangok betöltése

Ha a programunkban több képet is szeretnénk használni, esetleg hangokat is, abba a problémába ütközünk, hogy a program futása elindul, mielőtt a képek és a hangok betöltődtek volna. Ennek a megelőzésére a p5 biztosít egy harmadik speciális függvényt a `setup()` és a `draw()` mellett: ennek a neve `preload()`. Ez a függvény pontosan egyszer fut le, mégpedig még a `setup()` előtt. Ha ebben töltjük be a képeinket `loadImage()` és a hangjainkat `loadSound()` parancsokkal, akkor biztosak lehetünk benne, hogy a program futásakot már minden fájl rendelkezésre áll majd.  
Itt van tehát egy teljes példaprogram, amiben betöltünk, majd kattintásra lejátszunk egy hangfájlt:  
```
var scream;

function preload() {
    scream = loadSound('texas_chain_saw_massacre.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('black');
    if (mouseIsPressed) {
        playSound(scream);
    }
}
```

## Mobiltelefon képernyője

p5-ös programokat ugyanúgy megnézhetünk a telefonunk böngészőjében, mint számítógépen. (Viszont ilyenkor fejben kell tartanunk, hogy különböző gyártók különböző termékein futó különböző böngészők nem mindig ugyanúgy viselkednek.)  
Amíg a képernyőn az egeret és az egérkattintásokat figyeltük, addig a `mouseIsPressed` változót használtuk a kattintás felismerésére, és a `mouseX` és `mouseY` változókat az egér helyének meghatározására. A mobil roppant hasonlóan működik, csak a változókat hívják kicsit másképpen: `touchIsDown`, `touchX` és `touchY`.  
Példaképpen itt van a képernyőre már megírt primitív paint mobilos változata, amivel az ujjunkkal tudunk rajzolni a képernyőre:  
```
function setup() {
    createCanvas(windowWidth, windowHeight);
    fill('green');
    stroke('green');
}

function draw() {
    if (touchIsDown) {
        ellipse(touchX, touchY, 150, 150);
    }
}
```

### Tesztelés

Ha szeretnénk számítógépen kipróbálni, hogyan működne a programunk a telefonon, azt a Chrome fejlesztői eszközeivel megtehetjük. Ha megnyitjuk a JavaScript konzolt (Cmd+Alt+J illetve Ctrl+Shift+J), annak bal felső sarkában találunk egy kis ikont, ami egy telefont illetve egy tabletet ábrázol. Ha ezt bekapcsoljuk, a Chrome mobil eszközt fog szimulálni, ahol a szürke kör jelképezi az ujjunkat, és a kattintás az ujjal való képernyőérintést.  
Ez hasznos lehet például akkor, ha valami hiba miatt mobilon nem fut a program, de nem tudjuk, mi a hiba. Mobilon sajnos nincs JavaScript konzol, ami kiírná a hibát, de asztali Chrome-ban van, tehát érdemes ilyenkor abban megnyitni a programot, és mobil szimulációra állítva kipróbálni.  

## Számítógépen és mobilon egyaránt működő program

Ha megírtuk a programunkat mobilra, de szeretnénk, ha továbbra is működne számítógépen is, akkor azzal szembesülünk, hogy mind a `touchIsDown`, mind a `mouseIsPressed` változót figyelnünk kell:
```
if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 150, 150);
}
if (touchIsDown) {
    ellipse(touchX, touchY, 150, 150);
}
```
Ez kicsit kényelmetlen. Viszont JavaScriptben az `if`-nek több feltételt is meg lehet adni, amiket ÉS, illetve VAGY kapcsolatba hozhatunk. Az ÉS jele `&&`, a VAGY jele pedig `||`. Jelen esetben az utóbbira van szükségünk:  
```
if (mouseIsPressed || touchIsDown) {
    ellipse(touchX, touchY, 150, 150);
    ellipse(mouseX, mouseY, 150, 150);
}
```
kiolvasva: "Ha le van nyomva az egérgomb vagy meg van érintve a billentyűzet..."  
Az if belsejében pedig hagyatkozhatunk arra a trükkre, hogy a `mouseX` és `mouseY` változók ugyan elvileg az egér helyét tárolják, gyakorlatban azonban előzékeny módon az ujjal érintés helyét is visszaadják, tehát használhatóak `touchX` és `touchY` helyett:  
```
if (mouseIsPressed || touchIsDown) {
    ellipse(mouseX, mouseY, 150, 150);
}
```
A fenti program helyesen fog működni számítógépen és mobilon is.

## A telefon mozgásérzékelője

p5-ben hozzáférünk a telefonunk mozgásérzékelőjének adataihoz is. Ezeket a `rotationX`, `rotationY` és `rotationZ` változók adják meg. A három változót úgy kell értelmeznünk, hogy ha elképzeljük, hogy a telefonunk egy repülő, a telefon képernyője a repülő háta, és a telefon teteje a repülő orra, akkor a `rotationX` adja meg a telefon emelkedését, a `rotationY` a jobbra-balra dőlését, a `rotationZ` pedig az útirányát.  
