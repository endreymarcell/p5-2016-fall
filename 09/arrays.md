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

