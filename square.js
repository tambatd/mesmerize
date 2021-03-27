function setup() {
  frameRate(35);
  createCanvas(1000, 1000);
  noStroke();
}

function draw() {
  background(0);
for(i=20;i<975;i+=25){
  for(j=20;j<975;j+=20){
    fill(color(random(255), random(255),     random(255)));
    square(i, j, random(20)); 
  }
}

}
