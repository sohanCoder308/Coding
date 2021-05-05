const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0;
var gameState = "onSling";
var groundb,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon,polygon_img,backgroundImg;

function preload(){
    getBackgroundImage();
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options1 = 
    {
        isStatic : false
    }
	
	polygon = Bodies.circle(100,200,15,options1);
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

	box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
	
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
	
	box16 = new Box(390,155,30,40);

	box17 = new Box(740,205,30,40);
    box18 = new Box(770,205,30,40);
    box19 = new Box(800,205,30,40);
    box20 = new Box(830,205,30,40);
	box21 = new Box(860,205,30,40);
	
    box22 = new Box(770,165,30,40);
    box23 = new Box(800,165,30,40);
	box24 = new Box(830,165,30,40);
	
	box25 = new Box(800,125,30,40);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  if(backgroundImg){
  background(backgroundImg);
  }

  drawSprites();

  fill("red");
  groundb.display();
  ground1.display();
  ground2.display();

  fill(135,206,234);
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();

  fill(255,192,203);
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  
  fill(253,250,114);
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();

  fill(254,92,92);
  box16.display();
  box16.score();

  fill(253,250,114);
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();

  fill(135,206,234);
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();

  fill(255,192,203);
  box25.display();
  box25.score();
 
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
 
  fill(255);
  textSize(24);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks...",150,30);
  text("Press 'R' Key to get another chance!!",150,75);
  text("SCORE : "+score,1000,50);

  sling.display();
}

function mouseDragged()
{
  if(gameState !== "launched"){ 	
   Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY});
  }	
}

function mouseReleased()
{
	sling.fly();
	gameState = "launched";
}

function keyPressed()
{
   if(keyCode === 82)
   {
	  sling.attach(polygon);
	  Matter.Body.setPosition(polygon,{x:100 , y:200}); 
	  gameState = "onSling"; 
   }

}

async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    console.log(responseJSON.datetime);

    var hour = datetime.slice(11,13);
    console.log(hour);

    if((hour >= 6) && (hour <= 19)){
          bg = "day.png";
    }
    else {
        bg = "night.png"
    }
    backgroundImg = loadImage(bg);
}