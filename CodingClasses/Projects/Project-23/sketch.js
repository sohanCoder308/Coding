//defining the variables and constants
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1, block2, block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//loading images in preload function
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {

	//to create the canvas
	createCanvas(800, 700);

	//setting the rectangle mode to center
	rectMode(CENTER);
	
	 //creating the engine
	 engine = Engine.create();
	 //creating a world in the engine
	 world = engine.world;
	
	

    //to create the package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	//adding image to the package sprite
	packageSprite.addImage(packageIMG);
    //scaling the package sprite image
	packageSprite.scale=0.2

	//to create the helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	//adding image to the helicopter sprite
	helicopterSprite.addImage(helicopterIMG);
	//scaling the helicopter sprite image
	helicopterSprite.scale=0.6

	//to create the ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	//giving white color to the ground
	groundSprite.shapeColor=color(255);

	//package options
	var package_options = {

		//to give really bouncing effect
		restitution : 0.5,

		//making the package stable
		isStatic : true
	}
    
	//to create the package body
	packageBody = Bodies.circle(width/2 , 200 , 5, package_options);
	//adding the package body in the world
	World.add(world, packageBody);
	
	

	//to create the ground options
    var ground_options = {

		//making the ground stable
		isStatic : true
	}

	
	
	//to create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
	//adding the ground in the world
 	World.add(world, ground);

	

    //updating the engine
	Engine.run(engine);

  block1 = new Redblock(290,620,20,100);
  block3 = new Redblock(382.5,656,166,30);
  block2 = new Redblock(475,620,20,100);
	

}


function draw() {
	
	//setting the rectangle mode to center
	rectMode(CENTER);

	
    

	//making the background black
	background(0);
    Engine.update(engine);
	
	//giving the X and Y positions of package sprite to package body
	packageSprite.x = packageBody.position.x ;
	packageSprite.y = packageBody.position.y ;
   
	block1.display();
	block2.display();
	block3.display();

	

	//to draw the sprites
	drawSprites();
  
}


function keyPressed() {

//to make the package fall only when down arrow key is pressed	
 if (keyCode === DOWN_ARROW) {
   
   //making the package fall down by setting its stability to false (0)
   Matter.Body.setStatic(packageBody,false);
  }

}