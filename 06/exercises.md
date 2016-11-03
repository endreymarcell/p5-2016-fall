# Hatodik óra: feladatok

## Hang

__The future soon__

Keress egy robotos képet és egy robothangot. A robotot rakd a képernyő bal oldalára. Írd meg úgy a programot, hogy ha lenyomod bármelyik billentyűt, a robot hangot ad és elindul jobbra, de ha felengeded, megáll.

__Lang Lang__

Keress egy képet egy zongoráról és rakd a képernyő közepére. Keress egy hangot, amiben zongorázik valaki, és írd meg úgy a programot, hogy ha lenyomod bármelyik billentyűt a számítógép billentyűzetén, elindul a zongorahang, ha pedig felemeled, abbamarad.

__Mood changes__

Írj egy programot, amiben a képernyő két felét egy függőleges vonal választja el. Bal oldalra tegyél be egy síró emojit (nem kell megrajzolni, keress hozzá képet), jobb oldalra pedig egy nevetőt. Keress egy-egy hangot mindkettőhöz, és attól függően, hogy az egeret a képernyő bal vagy jobb oldalán tartod, játsszd le az egyiket vagy a másikat.

## Mobil: touch

__Folyamatos vonalak__

Írd át a paint programot úgy, hogy ne pöttyök legyenek, hanem folyamatos vonalak. Ezt úgy érdemes csinálni, hogy mikor megérinted a képernyőt, akkor elmented az érintés helyét két változóba, és nem kört rajzolsz, hanem vonalat az elmentett pontokból az érintés mostani helyéig. (És figyelj rá, hogy előbb rajzold a vonalat, utána mentsd el az érintés helyét.)

__Rajztábla__

Írd meg a minimalista Paint-ed mobilra: ha húzod az ujjad a képernyőn, húzzon csíkot.

__Célkereszt__

Írj egy programot, ami célkeresztet (kör és négy kis vonalka) rajzol az ujjad helyére, de csak ha megérinted a képernyőt.

__Vaku__

Írj egy programot, amiben alapesetben fekete a háttér, de ha megérinted a képernyőt, fehér lesz, és amíg megérintve tartod, fehér is marad. Ha ez megvan, írd át úgy, hogy ne azonnal váltson vissza feketére, hanem fokozatosan sötétüljön vissza. (Ezt úgy lehet megcsinálni, hogy a `background()`-nak egy számot adsz át. A 255 a fehér, a 0 a fekete, közötte van a szürke 253 árnyalata.)

__Helikopter__

Írj egy programot, amiben egy helikopter van a kép közepén, de ha megérinted a képernyőt, elindul az ujjad felé, ha pedig felemeled az ujjad, ismét megáll.

## Mobil: orientation

__Iránytű__

Írj egy iránytűt, ami mindig észak felé mutat! Vagy legalábbis mindig `rotationZ === 0` felé, nem baj, ha az nem pont északra van. Egy kört képzelek el, amire rá van írva a négy égtáj betűje, és van egy mutatója (középről csak egy irányba a szél felé, szóval inkább óramutatóra hasonlít, mint iránytűre). Így tudod egy adott `rotationZ`-hez és vonalhosszhoz kiszámolni, hogy mennyi a vonal X és Y tengely menti mérete:

```
var lineX = lineLenght * Math.cos(rotationZ * Math.PI / 180);
var lineY = lineLenght * Math.sin(rotationZ * Math.PI / 180);
```

__White Stripes__

Írj egy programot, amiben fekete háttéren egy vízszintes fehér vonal halad a képernyő tetejétől az aljáig, és ha leért az aljára, újra elindul a tetejéről. Ha ez megvan, írd át úgy, hogy a telefon emelkedésétől függően menjen a vonal felfelé vagy lefelé, és a képernyő bármelyik szélét elérve újraindul a túloldalról. Ha szeretnéd, ezt még kiegészítheted függőleges vonallal is, ugyanilyen logikával, emelkedés helyett dőléssel.

__A különbség__

Írj egy programot, ami fehér képernyőt mutat, de ha megérinted a képernyőt, kiírja vagy azt, hogy "ÉG", vagy azt, hogy "FÖLD", attól függően, hogy a mobil képernyője épp felfelé néz, vagy lefelé (emelkedés, rotationX).

## Funky

