function setup() {
  createCanvas(500, 500);
  textFont('Quantico'); 
}

function draw() {
  background(240);

  let centerX = width / 2;
  let centerY = height / 2;
  
  // Define time variables at the top for consistency
  let h24 = hour();
  let hr = h24 % 12; 
  if (hr === 0) hr = 12; // Convert 0 to 12
  
  let min = minute();
  let sec = second();
  
  let s = sec * 2; 

  // 1. Square (using the 'min' variable)
  rectMode(CENTER);
  noStroke();
  fill(150, 200, 255, 100);
  rect(centerX, centerY, min * 5, min * 5); // Adjusted multiplier for better fit

  // 2. Circle (using the 'sec' variable)
  fill(255, 150, 150);
  circle(centerX, centerY, sec);

  // --- Lines ---
  stroke(50, 75);
  strokeWeight(1);
  line(centerX, centerY, centerX, centerY + s);     
  line(centerX, centerY, centerX, centerY - s);     
  line(centerX, centerY, centerX + s, centerY);     
  line(centerX, centerY, centerX - s, centerY);     
  line(centerX - s, centerY - s, centerX + s, centerY + s);
  line(centerX + s, centerY - s, centerX - s, centerY + s);

  // --- Text Display ---
  textAlign(CENTER);
  noStroke();
  textSize(200);
  fill(255, 150); // Increased opacity slightly for readability

  text(hr, centerX, centerY - 100);
  text(min, centerX, centerY + 75);
  text(sec, centerX, centerY + 250);
  

}
