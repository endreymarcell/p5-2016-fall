// 0. --------------------------------------------
function sing() {
    alert('Do you want to build a snowman?');
}
sing();

// 1. --------------------------------------------
function sing() {
    alert('Do you want to build a ' + what + '?');
}
var what = "snowman";
sing();

// 2. --------------------------------------------
function sing(what) {
    alert('Do you want to build a ' + what + '?');
}
var what = "fire";
sing(what);

// 3. --------------------------------------------
function sing(what) {
    alert('Do you want to build a ' + what + '?');
}
var invention = "spaceship";
sing(invention);

// 4. --------------------------------------------
function sing(idea) {
    alert('Do you want to build a ' + what + '?');
}
var idea = "house";
sing(idea);

// 5. --------------------------------------------
function sing(what) {
    alert('Do you want to build a ' + what + '?');
}
var what = "castle";
sing();

// 6. --------------------------------------------
function sing(what) {
    alert('Do you want to build a ' + what + '?');
}
var what = "fire";
sing('what');

// 7. --------------------------------------------
function sing() {
    var what = "kennel for a pitbull"
    alert('Do you want to build a ' + what + '?');
}
var what = "LEGO airplane";
sing();

// 8. --------------------------------------------
function sing(what) {
    var what = "better future for our children"
    alert('Do you want to build a ' + what + '?');
}
var what = "drone";
sing(what);
