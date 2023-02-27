// Linardos, Caitlin
//Assignment 2, Q4
// Chosen countries: Cabo Verde, Laos

triangleRotation = 72;
function setup() {
  createCanvas(600, 400);

  // Degree mode to make creating the stars and alligning them easier
  angleMode(DEGREES);
}

function draw() {
  background("darkslateblue");

  strokeWeight(3);
  stroke("black");

  // This represents the red from the Laos Flag
  fill("firebrick");
  rect(0, 62.5, 600, 275);

  // This represents the Cabo Verde flag
  fill("snow");
  rect(0, 150, 600, 100);

  fill("firebrick");
  rect(0, 190, 600, 20);

  // Push() and pop() was used to eliminate rotation of the custom shape after this.
  push();
  addEllipsestars(-160, -25, 1.1);
  pop();

  // This represents the blue of the Laos flag.
  fill("darkslateblue");
  noStroke();
  beginShape();

  // Bottoom - top right of shape
  vertex(78, 220);
  vertex(74.6, 210);
  vertex(73.4, 200);
  vertex(73, 190);
  vertex(74, 180);
  vertex(76.2, 170);
  vertex(78, 165);
  vertex(80, 160);

  // Top - bottom left of shape
  vertex(228.3, 160);
  vertex(230.5, 165);
  vertex(233.3, 175);
  vertex(235.3, 190);
  vertex(235, 200);
  vertex(233.5, 210);
  vertex(230.2, 220);
  endShape(CLOSE);
}

// This function allows the triangle to be created for the star, so if variables were changed they would change in all the shapes.
function triangleStar(rotates) {
  rotate(rotates);
  triangle(0, 45, 20, 0, -20, 0);
}
// This function puts the star together with the already defined function "triangleStar" and defined above setup()  "triangleRotation". The stars represnt the Cabo Verde flag.
function addStar(x, y, size) {
  fill("gold");
  translate(x, y);
  scale(size);
  noStroke();
  
  // first point
  triangleStar();
  // second point
  rotate(triangleRotation);
  triangleStar();
  // third point
  rotate(triangleRotation);
  triangleStar();
  // fourth point
  rotate(triangleRotation);
  triangleStar();
  // fifth point
  rotate(triangleRotation);
  triangleStar();
}

// This function allows the star and ellipse image to be created. The ellipse within this function represents the Laos flag.
function addEllipsestars(x, y, size) {
  scale(size);
  translate(x, y);

  fill("snow");
  ellipse(300, 200, 150);

  // This rotation allowed the star to appear straight.
  rotate(35);

  // Star 1
  addStar(276, 32, 0.35);
  // Star 3
  addStar(340, -18, 1);
  //Star 2
  addStar(-5, -190, 1);
  // Star 4
  addStar(-360, -5, 1);
  // Star 5
  addStar(120, -125, 1);
  // Star 6
  addStar(70, 125, 1);
  // Star 8
  addStar(-300, -10, 1);
  // Star 7
  addStar(8, 165, 1);
  // Star 10
  addStar(400, 120, 1);
  // Star 9
  addStar(80, -95, 1);
  
}
