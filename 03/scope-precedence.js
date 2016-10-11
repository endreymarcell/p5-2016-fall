// 1. Külső Sanyi
// A függvényen belüli 'size' a külső változóra vonatkozik

function centeredCircle() {
    ellipse(windowWidth / 2, windowHeight / 2, size, size);
}

var size = 100;

centeredCircle();

//----------------------------------------------------------
// 2. Kölcsönsanyi
// Az argumentum felülírja a külső változót

function centeredCircle(size) {
    ellipse(windowWidth / 2, windowHeight / 2, size, size);
}

var size = 1000;
var pizza = 100;

centeredCircle(pizza);

//----------------------------------------------------------
// 3. Saját Sanyi
// A saját változó felülírja az argumentumot és a külső változót

function centeredCircle(size) {
    var size = 100;
    ellipse(windowWidth / 2, windowHeight / 2, size, size);
}

var size = 1000;
var pizza = 100;

centeredCircle();
