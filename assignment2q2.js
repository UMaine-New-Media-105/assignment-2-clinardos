// Caitlin, Linardos A2Q2
// Michigan not including the UP

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("royalblue");


  strokeWeight(5);
fill ("lightskyblue")
  beginShape();

  // Bottom line of the state
  vertex(60, 360);
  vertex(300, 360);

  // First line going up on right side
  vertex(310, 330);
  vertex(320, 315);

  // Thumb of mitt (rightside)
  vertex(330, 290);
  vertex(335, 275);
  vertex(340, 272);
  vertex(345, 270);
  vertex(348, 250);
  vertex(345, 225);
  vertex(340, 200);
  vertex(330, 180);
  
  // Thumb of mitt (left side, going down)
  vertex(322, 182);
  vertex(318, 185);
  vertex(300, 230);
  vertex(285, 220);

  // curve (inbetween the thumb and hand of the mitt on left side)
  vertex(285, 200);
  vertex(300, 180);
  vertex(303, 170);

  //top right half (going up forming the upper part of the right hand and the top too)
  vertex(303, 140);
  vertex(300, 130);
  vertex(298, 125);
  vertex(294, 105);
  vertex(290, 100);
  vertex(272, 90);
  vertex(272, 85);
  vertex(270, 80);
  vertex(268, 75);
  vertex(266, 73);
  vertex(168, 50);
  vertex(163, 55);

  // left top half (this covers the left top section of the hand as well as the upper left side)
  vertex(162, 75);
  vertex(170, 80);
  vertex(150, 95);
  vertex(150, 130);
  vertex(140, 140);
  vertex(130, 143);
  vertex(125, 140);
  vertex(120, 130);
  vertex(125, 95);
  vertex(105, 125);
  vertex(95, 150);

  // left bottom half (this leads from the upper top half to the bottom back to the line where the shape began)
  vertex(78, 190);
  vertex(80, 220);
  vertex(85, 230);
  vertex(90, 240);
  vertex(94, 250);
  vertex(92, 300);
  vertex(85, 320);
  vertex(65, 345);

  endShape(CLOSE);
}
