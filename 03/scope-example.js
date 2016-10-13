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
// A bemeneti adat (argumentum) a függvényen belül a 'size' nevet kapja

function redCircle(size) {
    fill('red');
    centeredCircle(size);
}

var pizza = 100;

redCircle(pizza);

//----------------------------------------------------------
// 3. Saját Sanyi
// A függvénynek van egy saját 'size' nevű változója

function redCircle() {
    fill('red');
    var size = 100;
    centeredCircle(size);
}

redCircle();
