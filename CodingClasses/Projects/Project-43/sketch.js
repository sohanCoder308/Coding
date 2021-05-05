
function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

 

}

function draw() {
  background(0);  
 

  hr = hour();
  mn = minute();
  sc = second();

 
 
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  
  
  
  push();
  translate(300,300)
  rotate(-90)
  rotate(scAngle); 
  stroke("red");
  strokeWeight(5);
  line(0,0,100,0);
  pop()

 
  push();
  translate(300,300)
  rotate(-90)
  rotate(mnAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,85,0);
  pop()

  
  push();
  translate(300,300)
  rotate(-90)
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,45,0);
  pop()

 

  noFill();
  strokeWeight(7);
  stroke(255,0,0);
  translate(300,300)
  rotate(-90)
  arc(0,0,300,300,0,scAngle);
  strokeWeight(7);
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  strokeWeight(7);
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}