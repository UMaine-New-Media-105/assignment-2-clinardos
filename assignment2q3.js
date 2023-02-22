// Caitlin, Linardos A2Q3
// Michigan not including the UP

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("royalblue");

  // using the function with the three variables for position and size.
  michigan(25, 0, 1.279);
}

// I changed my shape into a function.
function michigan(x, y, size) {
  translate(x, y);
  scale(size);
  strokeWeight(5);
  fill("lightskyblue");
  beginShape();

  // Bottom line of the state - x
  vertex(0, 310);
  vertex(240, 310);

  // First line going up on right side
  vertex(250, 280);
  vertex(260, 265);

  // Thumb of mitt (rightside)
  vertex(270, 240);
  vertex(275, 225);
  vertex(280, 222);
  vertex(285, 220);
  vertex(288, 200);
  vertex(285, 175);
  vertex(280, 150);
  vertex(270, 130);

  // Thumb of mitt (left side, going down)
  vertex(262, 132);
  vertex(258, 135);
  vertex(240, 180);
  vertex(225, 170);

  // curve (inbetween the thumb and hand of the mitt on left side)
  vertex(225, 150);
  vertex(240, 130);
  vertex(243, 120);

  //top right half (going up forming the upper part of the right hand and the top too)
  vertex(243, 90);
  vertex(240, 80);
  vertex(238, 75);
  vertex(234, 55);
  vertex(230, 50);
  vertex(212, 40);
  vertex(212, 35);
  vertex(210, 30);
  vertex(208, 25);
  vertex(206, 23);
  vertex(108, 0);
  vertex(103, 5);

  // left top half (this covers the left top section of the hand as well as the upper left side)
  vertex(102, 25);
  vertex(110, 30);
  vertex(90, 45);
  vertex(90, 80);
  vertex(80, 90);
  vertex(70, 93);
  vertex(65, 90);
  vertex(60, 80);
  vertex(65, 45);
  vertex(45, 75);
  vertex(35, 100);

  // left bottom half (this leads from the upper top half to the bottom back to the line where the shape began)
  vertex(18, 140);
  vertex(20, 170);
  vertex(25, 180);
  vertex(30, 190);
  vertex(34, 200);
  vertex(32, 250);
  vertex(25, 270);
  vertex(5, 295);

  endShape(CLOSE);
}
