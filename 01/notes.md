# Első óra: alapok

## JavaScript konzol
A böngészőkben van egy konzol (parancsor), amibe közvetlenül lehet JS kódot írni. Chrome-ban Cmd+Alt+J (Ctrl+Shift+J) nyitja meg, de van Firefoxban, Safariban, IE-ben is.  
Enterre a böngésző végrehajtja / kiértékeli a beleírtakat. Korábban beírt parancsokat a felfele nyíllal tudunk visszahívni, az autocomplete (mikor a chrome gépelés közben már felajánlja, mit írhatunk be) a tab billentyűvel használható.  
A lenti példákban a `>` kezdetű sorok azok, amiket begépelhetsz a parancssorba, a `>` nélküliek pedig a gép válaszát jelzik.  

## Értékek és típusok
Szám értékek: számok  
String (szöveg) értékek: idézőjelek közötti karakterek  
Boolean (igazságérték) értékek: `true` vagy `false`  
Egyenlőség: három egyenlőségjellel, pl.  
`> 1 + 2 === 3`  
`true`  
Egyenlőségnél a típus is számít!  
`> 1 === "1"`  
`false`  
`> true === "true"`  
`false`  
Illetve a kis- és nagybetű különbsége is mindig számít.  
A típust a `typeof` operátorral is meg lehet nézni:  
`> typeof 10`  
`"number"`  
`> typeof "10"`  
`"string"`  
`> typeof true`  
`"boolean"`  
`> typeof "true"`  
`"string"`  

## Változók
Az értékeket el lehet menteni változókba (angolul variable).  
Változót a `var` kulcsszóval tudunk létrehozni, de ekkor értéket még nem kap (`undefined` lesz).  
`> var price`  
`undefined`  
Változóba értéket az egyenlőségjellel ("legyen-jellel") tudunk beletenni:  
`> price = 300`  
`300`  
Mostantól a böngésző emlékszik a változó értékére:  
`> price`  
`300`  
És ez mindeddig meg is marad így, amíg csak bele nem teszünk valami mást a változóba.  
Fontos megérteni az értékadás (egy egyenlőségjel) és az összehasonlítás, tesztelés (három egyenlőségjel) közti különbséget!  
`> price = 300`  
`300`  
Ez egy _utasítás_: a `price` változó tartalma mostantól legyen 300!  
`> price === 300`  
`true`  
Ez pedig egy _állítás_: a `price` változó tartalma most éppen 300.  

A változó létrehozása és az értékadás történhet egyszerre is tehát  
`> var price`  
`> price = 300`  
helyett lehet egyszerűen azt írni, hogy  
`> var price = 300`  

Mikor értéket adunk egy változónak, hivatkozhatunk más változókra:  
`> var coffeePrice = 400`  
`> var croissantPrice = 500`  
`> var amountToPay = coffeePrice + croissantPrice`  
`> amoutToPay`  
`900`  
Illetve saját magára is:  
`> var sleep = 6`  
`> sleep`  
`6`  
`> sleep = sleep + 2`  
`8`  

A változó típusa mindig a benne lévő érték típusától függ, ugyanazok a szabályok vonatkoznak az egyenlőségére, mint az értékeknek, és ugyanúgy lehet rajtuk használni a `typeof` opertátort.  

## Függvények
A függvényekkel (angolul functions) a gépet utasítani tudjuk valaminek az elvégzésére vagy kiszámolására. Két fajta függvény van:  
 - a kérdező típusú  
 - a felszólító típusú.  

A kérdező típusú függvények kiszámolnak, válaszolnak valamit. Azért hívjuk meg őket, mert érdekel a visszatérési értékük.  
`> doubleOf(2)`  
`4`  
`> uppercase("snowflake")`  
`SNOWFLAKE`  
`> bigger(10, 20)`  
`20`  
`> getCurrentDayName()`  
`"Saturday"`  
`> isTodayWeekday()`  
`false`  

A felszólító típusú függvényeknek nincs visszatérési értéke (a konzol csak annyit ír: `undefined`). Azért hívjuk meg őket, hogy végrehajtsanak, csináljanak valamit.  
`> bubble()`  
(Rajzol egy kék kört valahova a képernyőre.)  
`> alert('Yabadabadooo')`  
(Dob egy felugró ablakot a megadott tartalommal.)  
`> centeredCircle(100)`  
(Rajzol egy középre igazított kört a megadott sugárral.)  

Mindkét fajta függvényt úgy kell meghívni, hogy a neve után nyitó és záró zárójelt teszünk. Ha a függvény bár bemeneti adatot vagy adatokat, azokat a zárójelbe kell írni, vesszővel elválasztva.  
Nem vár bemenő adatot:  
`> bubble()`  
Egy bemenő adatot vár:  
`> doubleOf(100)`  
Két bemenő adatot vár:  
`> bigger(89, 98)`  

## Kifejezések behelyettesíthetősége
Bizonyos függvények bemenő adatokat várnak. Ide nem csak expliciten begépelni lehet az értékeket, hanem változót is lehet megnevezni, vagy akár egy másik függvényt írni, aminek van visszatérési értéke.  

Függvény konkrétan begépelt értékkel:  
`> alert("You just won a free iPad!")`  
Függvény változóból kapott értékkel:  
`> var message = "You just won a free iPad!"`  
`> alert(message)`  
Függvény másik függvényből kapott értékkel:  
`> alert(getCurrentDayName())`  
Ezek a hívások bármilyen mélyen egymásba ágyazhatók:  
`> centeredCircle(10)`  
`> centeredCircle(doubleOf(10))`  
`> centeredCircle(doubleOf(doubleOf(10)))`  
stb.  
Még pár példa:  
`> var x = 100`  
`> var y = 120`  
`> centeredCircle(bigger(x, y))`  
(Vagyis:  
 - mondd meg, melyik a nagyobb x és y közül,  
 - és rajzolj egy középre igazított kört annak a sugarával.)  

`> centeredCircle(doubleOf(bigger(x, y)))`  
(Vagyis:  
 - mondd meg, melyik a nagyobb x és y közül,  
 - vedd ennek a dupláját,  
 - és rajzolj egy középre igazított kört ekkora sugárral.)  

`> centeredCircle(bigger(doubleOf(x), y))`  
(Vagyis:  
 - vedd x dupláját,  
 - mondd meg, melyik a nagyobb e szám és y közül,  
 - és rajzolj egy középre igazított kört ekkora sugárral.  
