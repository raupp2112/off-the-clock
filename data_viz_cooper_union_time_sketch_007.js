function setup() {
  createCanvas(500, 500);
  textFont('Quantico');
  angleMode(DEGREES);
}

function draw() {
  background(255);

  let centerX = width / 2;
  let centerY = height / 2;

  let hr = hour() % 12 || 12;
  let min = minute();
  let sec = second();
  let s = sec * 5;

  // --- 1. SET GLOBAL STYLES ---
  textAlign(CENTER);
  noStroke(); // Set once here
  rectMode(CENTER);

  // --- 2. GRID OF 60 CIRCLES (Minutes) ---
  let cols = 10;
  let spacing = 40;
  let startX = centerX - (spacing * 9) / 2;
  let startY = centerY - (spacing * 5) / 2;

  for (let i = 0; i < 60; i++) {
    let x = startX + (i % cols) * spacing;
    let y = startY + floor(i / cols) * spacing;

    if (i < min) {
      fill(150, 200, 255, 150);
      circle(x, y, 15);
    } else {
      noFill();
      stroke(210);
      strokeWeight(1);
      circle(x, y, 10);
      noStroke(); // Reset for next iteration
    }
  }

  // --- 3. LARGE NUMBERS (Background) ---
  textSize(200);
  fill(150, 0, 255, 20);
  text(hr, centerX, centerY - 100);
  fill(150, 200, 255, 100);
  text(min, centerX, centerY + 70);
  fill(0, 200, 150, 40);
  text(sec, centerX, centerY + 250);

  // --- 4. UI LABELS ---
  textSize(13.8);
  fill(150, 0, 255, 100);
  text('< H O U R S >', centerX, centerY - 176);
  fill(150, 200, 255, 255);
    text('    M       I       N       U       T       E       S    ', centerX, centerY + 4);
  fill(0, 200, 150, 200);
  text('S E C O N D S', centerX, centerY + 184);

  // --- 5. ROTATING LINES (Seconds) ---
  push();
    translate(centerX, centerY);
    rotate(sec * 6);
    stroke(0, 200, 150, 100);
    strokeWeight(1);
    line(0, 0, 0, s);
    line(0, 0, 0, -s);
    line(0, 0, s, 0);
    line(0, 0, -s, 0);
    line(-s, -s, s, s);
    line(s, -s, -s, s);
  pop();

  // --- 6. HOUR BARS ---
  noStroke(); // Ensure stroke is off for rects
  fill(150, 0, 255, 60);
  let barSpacing = 40;
  let startRectY = centerY - (11 * barSpacing) / 2;

  for (let i = 0; i < 12; i++) {
    rect(centerX, startRectY + (i * barSpacing), hr * 24, 3);
  }
}
