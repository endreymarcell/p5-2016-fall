// ebben a változatban a vadállat mindig pontosan követi az egeret

var animal; // ebben fogjuk tárolni a képet

function setup() {
    createCanvas(windowWidth, windowHeight);
    animal = loadImage('guinea-pig.png'); // betöltjük a képet a változóba
}

function draw() {
    background('white');
    image(animal, mouseX, 300); // kirajzoljuk a képet az egér aktuális helyére (vízszintesen)
}
