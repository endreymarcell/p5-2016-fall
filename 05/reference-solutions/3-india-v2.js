// ebben a változatban a vadállat fokozatosan halad az egér felé, de az egeret elérve rezeg

var animal; // ebben fogjuk tárolni a képet
var x = 0; // ebben pedig az aktuális helyzetét

function setup() {
    createCanvas(windowWidth, windowHeight);
    animal = loadImage('guinea-pig.png'); // betöltjük a képet a változóba
}

function draw() {
    background('white');
    if (mouseX < x) { // ha az egér balrább van, mint x
        x = x - 10; // akkor csökkentsük (húzzuk balra) x-et
    } else { // különben
        x = x + 10; // növeljük (toljuk jobbra) x-et
    }
    image(animal, x, 300); // kirajzoljuk a képet x-hez
}
