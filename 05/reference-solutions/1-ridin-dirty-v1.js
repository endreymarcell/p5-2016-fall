// ebben a változatban az autó balról jobbra haladva kimegy a képből

var x = 0; // ebben a változóban tároljuk el, hol van éppen az autó
var car; // ebben pedig a képet

function setup() {
    createCanvas(windowWidth, windowHeight);
    car = loadImage('limo.png'); // betöltjük a képet a változóba
}

function draw() {
    background('white'); // lefestjük a hátteret, hogy a kocsi ne húzzon "csíkot" maga után
    x = x + 3; // a helyzetét 3 pixellel jobbrább tesszük az eddiginél, tehát "mozgatjuk"
    image(car, x, 100); // és kirajzoljuk a kocsit
}
