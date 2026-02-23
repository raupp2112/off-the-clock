function setup() {
  // Create the 500x500 canvas
  createCanvas(500, 500);
}

function draw() {
  background(240); // Light grey background

  // Define the center points
  let centerX = width / 2;
  let centerY = height / 2;

  // 1. Draw the Square
  // Set rectMode to CENTER so (250, 250) is the middle of the square
  rectMode(CENTER);
  noStroke()
    fill(150, 200, 255, 100); // Soft blue
  rect(centerX, centerY, minute()*10, minute()*10);

  // 2. Draw the Circle
  fill(255, 150, 150); // Soft red
  circle(centerX, centerY, second());

  // 3. Draw the Line
  // To center a line, we draw it from left-of-center to right-of-center
  stroke(50);
  //line(centerX - 100, centerY, centerX + 100, centerY);
  line(centerX, second()*10, centerX, centerY);

  line(second()*10, centerX , centerX, centerY);


  //line(millis(), 20, 50, 75);
}
