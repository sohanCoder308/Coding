var fixedRect, movingRect;
var r1,r2;
var t,t1;

function setup() {
  createCanvas(1200,800);
 
fixedRect = createSprite(200,200,50,50);
movingRect = createSprite(400,200,80,30)

fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";

t = createSprite(400,200,50,50);
t1 = createSprite(100,200,50,50);

r1 = createSprite(150,100,60,60);
r2 = createSprite(150,400,60,60)
r1.shapeColor = "yellow";
r2.shapeColor = "yellow";

r1.velocityY = 5;
r2.velocityY = -5;

t.velocityX = -5;
t1.velocityX = 5;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  //collision algorithm
  if(isTouching(movingRect,fixedRect))
     {

      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }

  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
//BounceOff Algorithm

 BounceOff(t,t1);
  
  
  drawSprites();
}

