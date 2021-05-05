//defining the variables
var bullet,wall;
var speed,weight,thickness;


function setup() {
  //to create the canvas
  createCanvas(1600,400);
  
  //giving random numbers to the speed
  speed = random(223,321);
  //giving random numbers to the weight
  weight = random(30,52);
  //giving random numbers to the thickness
  thickness = random(22,83);

  //to create the bullet 
  bullet = createSprite(50,200,60,10);

  //to create the wall
  wall = createSprite(1200,200,thickness,height/2);
  //to give a default color to the wall
  wall.shapeColor = color(80,80,80);

  //giving random speed to the bullet
  bullet.velocityX = speed;
}


function draw() {

  //to give the background color
  background("black");  

  //telling what to do if bullet has collided wall
  if(hasCollided(bullet,wall)){

    //setting the velocity of the bullet to zero (0)
    bullet.velocityX = 0;

    //to calculate the damage to the wall
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    //telling what to do if damage is less than ten (10)
    if(damage > 10){

      //changing the color of the wall to green
       wall.shapeColor = color(255,0,0);
    }

    //telling what to do if damage is greater than ten (10)
    if(damage < 10){

      //changing the color of the wall to red
       wall.shapeColor = color(0,255,0);
    }
  }

  //to draw the sprites
  drawSprites();
}


//writing function to collide if object1 touches object2  
function hasCollided(lbullet,lwall){

   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

   if((bulletRightEdge >= wallLeftEdge)){
     return true;
   }
   return false;
}