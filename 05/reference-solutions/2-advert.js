var advertSize = 10; // a reklám szövegének kezdő mérete

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER); // középre igazítva írjuk majd ki a szöveget
}

function draw() {
    background('white');
    textSize(advertSize); // beállítjuk a szöveg méretét
    text("Coffee!", width / 2, height / 2); // kiírjuk a szöveget a vászon közepére
    advertSize = advertSize + 5; // megnöveljük a méretet (ez a fenti parancsra már nem vonatkozik, csak a következőre fog)
    if (advertSize > 500) { // de ha már nagyon nagy...
        advertSize = 10; // akkor visszaállítjuk kicsisre
    }
}

/*
A szövegméret feltételes növelését másképp is meg lehet írni, például így:

function draw() {
    background('white');
    textSize(advertSize);   // beállítjuk a szöveg méretét
    text("Coffee!", width / 2, height / 2); // kiírjuk a szöveget a vászon közepére
    if (advertSize > 500) { // ha már nagyon nagy...
        advertSize = 10;    // akkor visszaállítjuk kicsisre
    } else {      // ellenkező esetben (tehát ha még nem nagyon nagy)...
    advertSize = advertSize + 5;    // megnöveljük a méretét
    }
}

*/
