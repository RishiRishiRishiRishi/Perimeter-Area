function square() {
let square = parseInt(document.getElementById("square").value);
document.getElementById("square_answer").value = 4*square;
}

function triangle() {
let triangle = parseInt(document.getElementById("triangle").value);
let triangle2 = parseInt(document.getElementById("triangle2").value);
let triangle3 = parseInt(document.getElementById("triangle3").value);
document.getElementById("triangle_answer").value = triangle+triangle2+triangle3;
}

function rectangle() {
let length = parseInt(document.getElementById("length").value);
let breadth = parseInt(document.getElementById("breadth").value);
document.getElementById("rectangle_answer").value = 2*(length+breadth);
}

function square2() {
let square = parseInt(document.getElementById("square").value);
document.getElementById("square_answer").value = square*square;
}

function rectangle2() {
let length = parseInt(document.getElementById("length").value);
let breadth = parseInt(document.getElementById("breadth").value);
document.getElementById("rectangle_answer").value = length*breadth;
}