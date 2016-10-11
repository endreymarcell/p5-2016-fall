// 1. Külső Sanyi
// A függvényen belüli 'size' a külső változóra vonatkozik

function centeredCircle() {
    ellipse(windowWidth / 2, windowHeight / 2, size, size);
}

var size = 100;

centeredCircle();

//----------------------------------------------------------
// 2. Kölcsönsanyi
// A bemeneti adat (argumentum) a függvényen belül a 'size' nevet kapja

function centeredCircle(size) {
    ellipse(windowWidth / 2, windowHeight / 2, size, size);
}

var pizza = 100;

centeredCircle(pizza);

//----------------------------------------------------------
// 3. Saját Sanyi
// A függvénynek van egy saját 'size' nevű változója

function centeredCircle() {
    var size = 100;
    ellipse(windowWidth / 2, windowHeight / 2, size, size);
}

centeredCircle();
