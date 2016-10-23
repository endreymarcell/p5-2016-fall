var normal;
var laughing;

function setup() {
    createCanvas(windowWidth, windowHeight);
    normal = loadImage('garfield_normal.png');
    laughing = loadImage('garfield_laughing.png');
    imageMode(CENTER);
}

function draw() {
    background('white');
    if (mouseIsPressed) { // ha le van nyomva az egér gombja...
        image(laughing, width / 2, height / 2); // kirajzoljuk a nevető Garfieldot
    } else { // ellenkező esetben pedig
        image(normal, width / 2, height / 2); // a simát
    }
}
