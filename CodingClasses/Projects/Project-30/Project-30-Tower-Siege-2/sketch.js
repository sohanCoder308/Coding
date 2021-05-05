const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var groundb,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon,polygon_img;
function preload(){}

function setup() 
{
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

    var options1 = 
    {
        isStatic : false
    }
	
	polygon = Bodies.circle(50,200,15,options1);
	polygon_img = loadImage("polygon.png"); 
	World.add(world,polygon);

	sling = new SlingShot(this.polygon,{x:100, y:200});

	groundb = new Ground(0,400,5000,30);
	ground1 = new Ground(390,310,270,12);
	ground2 = new Ground(800,225,210,12);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box2(330,235,30,40);
    box9 = new Box2(360,235,30,40);
    box10 = new Box2(390,235,30,40);
    box11 = new Box2(420,235,30,40);
	box12 = new Box2(450,235,30,40);
	
	box13 = new Box3(360,195,30,40);
	box14 = new Box3(390,195,30,40);
	box15 = new Box3(420,195,30,40);
	
	box16 = new Box4(390,155,30,40);

	box17 = new Box3(740,205,30,40);
    box18 = new Box3(770,205,30,40);
    box19 = new Box3(800,205,30,40);
    box20 = new Box3(830,205,30,40);
	box21 = new Box3(860,205,30,40);
	
    box22 = new Box(770,165,30,40);
    box23 = new Box(800,165,30,40);
	box24 = new Box(830,165,30,40);
	
    box25 = new Box2(800,125,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundb.display();
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
 
  fill(255);
  textSize(24);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks...",150,30);
  text("Press 'R' Key to get another chance!!",150,75);

  sling.display();
}

function mouseDragged()
{
   Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY});	
}

function mouseReleased()
{
	sling.fly();
}

function keyPressed()
{
   if(keyCode === 82)
   {
	  sling.attach(polygon);
	  Matter.Body.setPosition(polygon,{x:50 , y:200}); 
   }
}


