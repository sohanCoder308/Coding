const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var pen1,pen2,pen3,pen4,pen5;
var sli1,sli2,sli3,sli4,sli5;
var ground,b1,b2,b3,b4,b5;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(620,500);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
	   mouse : canvasmouse	
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
    pen1 = new Pendulum(width-490,height-100,"yellow");
    sli1 = new Sling(pen1.body, {x : 150, y : 50});

	pen2 = new Pendulum(width-408,height-100,"yellow");
    sli2 = new Sling(pen2.body, {x : 205, y : 50});

	pen3 = new Pendulum(width-346,height-100,"yellow");
	sli3 = new Sling(pen3.body, {x : 265, y : 50});

	pen4 = new Pendulum(width-284,height-100,"yellow");
    sli4 = new Sling(pen4.body, {x : 325, y : 50});

	pen5 = new Pendulum(width-222,height-100,"yellow");
    sli5 = new Sling(pen5.body, {x : 385, y : 50}); 

	ground = new Ground(width-350,height-450,300,50);

	b1 = new B(150,50,5);
    b2 = new B(205,50,5);
    b3 = new B(265,50,5);
    b4 = new B(325,50,5);
    b5 = new B(385,50,5);

	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();

  fill(0);
  textSize(25);
  text("DRAG AND RELEASE THE FIRST PENDULUM!..",20,450);

  ground.display();
  
  pen1.display();
  sli1.display();

  pen2.display();
  sli2.display();

  pen3.display();
  sli3.display();

  pen4.display();
  sli4.display();

  pen5.display();
  sli5.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pen1.body, {x : mouseX, y : mouseY});	
}
