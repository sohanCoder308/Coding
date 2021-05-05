//defining the constants and variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground;
var dustbin1,dustbin2,dustbin3;


function preload(){}


function setup() {

	//to create the canvas
	createCanvas(1200, 700);

    //creating the engine 
	engine = Engine.create();

	//adding the world to engine
	world = engine.world;

	//to create the paper ball
	paperBall = new Paper(140,450,57);
	//to create the ground
	ground = new Ground(600,670,1200,15);
	//to create the dustbin blocks
	dustbin1 = new Dustbin(890,568,15,185);
	dustbin2 = new Dustbin(1135,568,15,185);
	dustbin3 = new Dustbin(1020,653,245,15);
	
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
   //displaying the paper ball
  paperBall.display();

  //to draw the sprites
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x : 210, y: -210})
	}
}
