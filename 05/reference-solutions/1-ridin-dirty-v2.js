// ebben a változatban az autó balról jobbra halad, de a kép szélét elérve megáll

var x = 0; // ebben a változóban tároljuk el, hol van éppen az autó
var car; // ebben pedig a képet

function setup() {
    createCanvas(windowWidth, windowHeight);
    car = loadImage('limo.png'); // betöltjük a képet a változóba
}

function draw() {
    background('white'); // lefestjük a hátteret, hogy a kocsi ne húzzon "csíkot" maga után
    if (x < width - 520) { // ha a kocsi még nem ment ki a képről... (a 300 a kép szélessége)
        x = x + 3; // akkor a helyzetét 3 pixellel jobbrább tesszük az eddiginél, tehát "mozgatjuk"
    }
    image(car, x, 100); // és kirajzoljuk a kocsit
}
