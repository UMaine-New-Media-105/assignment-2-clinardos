// variable
let squareX = 0;
let squareY = 80;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  stroke("white");
  strokeWeight(1);

  // Row 1
  myRows();

  // Row 2
  myRows(squareX, squareY);

  //Row 3
  myRows(squareX, squareY * 1);

  //Row 4
  myRows(squareX, squareY * 1);

  //Row 5
  myRows(squareX, squareY * 1); //

  translate(0, -320);

  // letter C
  letterC();
}

function myRows(x, y) {
  fill("hsl(320,90%,40%)");
  translate(x, y);
  square(squareX, squareX, squareY);
  square(squareY, squareX, squareY);
  square(squareY * 2, squareX, squareY);
  square(squareY * 3, squareX, squareY);
  square(squareY * 4, squareX, squareY);
}

function letterC() {
  fill("hsl(330,60%,80%)");

  square(squareX, squareX, squareY);
  square(squareY, squareX, squareY);
  square(squareY * 2, squareX, squareY);
  square(squareY * 3, squareX, squareY);
  square(squareX, squareY, squareY);
  square(squareX, squareY * 2, squareY);
  square(squareX, squareY * 3, squareY);
  square(squareX, squareY * 4, squareY);
  square(squareY, squareY * 4, squareY);
  square(squareY * 2, squareY * 4, squareY);
  square(squareY * 3, squareY * 4, squareY);
}
