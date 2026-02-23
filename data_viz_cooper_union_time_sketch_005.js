function setup() {
  // Just create the canvas; Flexbox handles the rest!
  createCanvas(500, 500);

  textFont('Quantico');
  angleMode(DEGREES);
}

// You no longer need windowResized() for positioning,
// though you can keep it if you want to resize the canvas itself.

function draw() {
  background(240);



  let centerX = width / 2;
  let centerY = height / 2;

  let h24 = hour();
  let hr = h24 % 12 || 12;
  let min = minute();
  let sec = second();
  let s = sec * 5;

  // --- GRID OF 60 CIRCLES (Minutes) ---
  let cols = 10;
  let rows = 6;
  let spacing = 40;

  let startX = centerX - (spacing * (cols - 1)) / 2;
  let startY = centerY - (spacing * (rows - 1)) / 2;

  for (let i = 0; i < 60; i++) {
    let x = startX + (i % cols) * spacing;
    let y = startY + floor(i / cols) * spacing;

    if (i < min) {
      fill(150, 200, 255, 150); // Active blue
      noStroke();
      circle(x, y, 15); // Full size for "passed" minutes
    } else {
      noFill();
      stroke(210);
      strokeWeight(1);
      circle(x, y, 10); // Smaller "placeholder" dot for future minutes
    }
  }


  // --- Text Display ---
  textAlign(CENTER);
  noStroke();
  textSize(200);
  fill(150, 0, 255, 20);
  text(hr, centerX, centerY - 100);
  fill(150, 200, 255, 100);
  text(min, centerX, centerY + 70);
  fill(0, 200, 150, 40);
  text(sec, centerX, centerY + 250);

  // 2. Large Central Circle (Seconds)
  //noStroke();
  //stroke(0, 200, 150, 100);
  //circle(centerX, centerY, sec);

  // --- ROTATING LINES (Seconds) ---
  push();
  translate(centerX, centerY);
  rotate(sec * 6);
  //stroke(50, 100, 255, 75);
  stroke(0, 200, 150, 100);
  strokeWeight(1);
  line(0, 0, 0, s);
  line(0, 0, 0, -s);
  line(0, 0, s, 0);
  line(0, 0, -s, 0);
  line(-s, -s, s, s);
  line(s, -s, -s, s);
  pop();



  //  blendMode(OVERLAY)
  //    // 1. Square (using the 'hr' variable)
  //    rectMode(CENTER);
  //  stroke(150, 0, 255, 200);
  //  fill(150, 0, 255, 255);
  //  //rect(centerX, centerY, hr*24, hr*24);
  //  rect(centerX, centerX-0, hr*24, 4);
  //  rect(centerX, centerX-20, hr*24, 4);
  //  rect(centerX, centerX-30, hr*24, 4);
  //  rect(centerX, centerX-40, hr*24, 4);
  //  rect(centerX, centerX-50, hr*24, 4);
  //  rect(centerX, centerX-100, hr*24, 4);
  //  rect(centerX, centerX+70, hr*24, 4);
  //  rect(centerX, centerX+80, hr*24, 4);
  //  rect(centerX, centerX+90, hr*24, 4);
  //  rect(centerX, centerX+100, hr*24, 4);
  //  rect(centerX, centerX+110, hr*24, 4);
  //  rect(centerX, centerX+4, hr*24, 4);

  //// Adjusted multiplier for better fit
  ////rect(centerX, centerY, 12*24, 12*24); // Adjusted multiplier for better fit
  //blendMode(BLEND)



  // --- EVENLY SPACED HOUR BARS ---
  //blendMode(OVERLAY);
  rectMode(CENTER);
  //stroke(150, 0, 255, 200);
  fill(150, 0, 255, 60);

  let numberOfBars = 12;
  let barSpacing = 40; // Change this to spread them further apart or closer
  let barHeight = 3;
  let totalHeight = (numberOfBars - 1) * barSpacing;
  let startRectY = centerY - totalHeight / 2; // Centers the group vertically

  for (let i = 0; i < numberOfBars; i++) {
    // Each bar is placed based on its index (i)
    let yPos = startRectY + (i * barSpacing);

    // Draw the bar. Width is determined by the hour 'hr'
    rect(centerX, yPos, hr * 24, barHeight);
  }

  blendMode(BLEND);
}
