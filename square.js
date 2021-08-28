var fade = 0;
var fadeAmount = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (i = 20; i < 975; i += 150) {
    for (j = 20; j < 975; j += 50) {
      textSize(32);
      text("Click Me!", i, j);
    }
  }
}

function draw() {
  
}

function touchStarted() {
  background(random(255), random(255), random(255));
  for (i = 20; i < windowWidth - 25; i += 25) {
    for (j = 20; j < windowHeight - 20; j += 20) {
      fill(color(random(255), random(255), random(255), fade));
      if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
      square(i, j, random(20));
    }
  }
}


