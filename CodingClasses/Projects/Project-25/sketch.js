//defining the constants and variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground,dImage;
var dustbin1,dustbin2,dustbin3;

function preload(){

  //loading the image
  dImage = loadImage("dustbin.png");
}


function setup() {

	//to create the canvas
	createCanvas(1200, 700);

  //creating the engine 
	engine = Engine.create();

	//adding the world to engine
	world = engine.world;

	//to create the paper ball
  paperBall = new Paper(140,450,70);
  
	//to create the ground
  ground = new Ground(600,670,1200,15);
  
	//to create the dustbin blocks
	dustbin1 = new Dustbin(951.5,558,15,175);
	dustbin2 = new Dustbin(1123,558,15,175);
	dustbin3 = new Dustbin(1037,655,160,13);
	
  //updating the engine
	Engine.run(engine);
  
}


function draw() {

  //setting rectangle mode to center	
  rectMode(CENTER);

  //setting yellow color to background
  background("yellow");

  //to update the engine
  Engine.update(engine);
  
  //displaying the ground
  ground.display();

  //displaying the dustbin blocks
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dImage,935,427,205,235);
  
  //displaying the paper ball
  paperBall.display();
 

  //to draw the sprites
  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x : 750, y: -750})
  }
  
}
