var animal;
var x=0;
function setup(){
createCanvas(windowWidth,windowHeight);
animal=loadImage('guinea-pig.png');
}
function draw() {
background('white');
if(mouseX<x){
x=x-10;
}else{
x=x+10;
}
image(animal,x,300);
}
