function setup() {
  createCanvas(500, 500);
  textFont('Quantico');
  angleMode(DEGREES); 
}

function draw() {
  background(240);

  let centerX = width / 2;
  let centerY = height / 2;
  
  let h24 = hour();
  let hr = h24 % 12; 
  if (hr === 0) hr = 12; 
  
  let min = minute();
  let sec = second();
  let s = sec * 5; 

  // --- GRID OF 60 SQUARES (Minutes) ---
  let cols = 10;
  let rows = 6;
  let spacing = 40; 
  
  let startX = centerX - (spacing * (cols - 1)) / 2;
  let startY = centerY - (spacing * (rows - 1)) / 2;

  rectMode(CENTER);
  
  for (let i = 0; i < 60; i++) {
    let x = startX + (i % cols) * spacing;
    let y = startY + floor(i / cols) * spacing;
    
    // UI Logic: Fill squares based on current minutes
    if (i < min) {
      fill(150, 200, 255, 150); 
      noStroke();
    } else {
      noFill();
      stroke(200); 
      strokeWeight(1);
    }
    
    // Draw the square directly at x, y without rotation
    rect(x, y, 15, 15);
  }

  // 2. Circle (Seconds)
  noStroke();
  fill(255, 150, 150, 100);
  circle(centerX, centerY, sec);

  // --- ROTATING LINES (Seconds) ---
  push();
    translate(centerX, centerY);
    rotate(sec * 6);
    stroke(50,100,255, 75);
    strokeWeight(1);
    line(0, 0, 0, s);     
    line(0, 0, 0, -s);    
    line(0, 0, s, 0);     
    line(0, 0, -s, 0);    
    line(-s, -s, s, s);   
    line(s, -s, -s, s); 
    
       //line(centerX, centerY, mouseX, mouseY);     

  pop();

  // --- Text Display ---
  textAlign(CENTER);
  noStroke();
  textSize(200);
  fill(255, 150);
  text(hr, centerX, centerY - 100);
  text(min, centerX, centerY + 75);
  text(sec, centerX, centerY + 250);
}
