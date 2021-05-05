var fixedRect, movingRect;
var r1,r2;

function setup() {
  createCanvas(1200,800);
 
fixedRect = createSprite(200,200,50,50);
movingRect = createSprite(400,200,80,30)

fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";

r1 = createSprite(150,100,60,60);
r2 = createSprite(150,400,60,60)

r1.velocityY = 5;
r2.velocityY = -5;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  //collision algorithm
  if(( movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2)&&
  ( fixedRect.x  - movingRect.x < fixedRect.width/2 + movingRect.width/2)&&
  (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2)&&
  (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
//BounceOff Algorithm

  if(( r1.x - r2.x < r2.width/2 + r1.width/2)&&
  ( r2.x  - r1.x < r2.width/2 + r1.width/2))
  {
    r1.velocityX = r1.velocityX * (-1);
    r2.velocityX = r2.velocityX * (-1);
    r1.shapeColor = "yellow";
    r2.shapeColor = "yellow";

  }

  if((r1.y - r2.y < r2.height/2 + r1.height/2)&&
  (r2.y - r1.y < r1.height/2 + r2.height/2))
  {

    r1.velocityY = r1.velocityY * (-1);
    r2.velocityY = r2.velocityY * (-1);
    r1.shapeColor = "green";
    r2.shapeColor = "green";
  }
  
  drawSprites();
}