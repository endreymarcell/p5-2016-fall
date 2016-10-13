// 1. Külső Sanyi
// A függvényen belüli 'size' a külső változóra vonatkozik

function redCircle() {
    fill('red');
    centeredCircle(size);
}

var size = 100;

redCircle();

//----------------------------------------------------------
// 2. Kölcsönsanyi
// Az argumentum felülírja a külső változót

function redCircle(size) {
    fill('red');
    centeredCircle(size);
}

var size = 1000;
var pizza = 100;

redCircle(pizza);

//----------------------------------------------------------
// 3. Saját Sanyi
// A saját változó felülírja az argumentumot és a külső változót

function redCircle(size) {
    var size = 100;
    fill('red');
    centeredCircle(size);
}

var size = 1000;
var pizza = 100;

redCircle();
