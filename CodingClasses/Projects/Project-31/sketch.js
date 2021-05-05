const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var ground,backgroundImg;

function preload(){}

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,height,width,20);

	for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	  }
   
   
	   for (var j = 40; j <=width; j=j+50) 
	   {
	   
		  plinkos.push(new Plinko(j,75));
	   }
   
	   for (var j = 15; j <=width-10; j=j+50) 
	   {
	   
		  plinkos.push(new Plinko(j,175));
	   }
   
		for (var j = 40; j <=width; j=j+50) 
	   {
	   
		  plinkos.push(new Plinko(j,275));
	   }
   
		for (var j = 15; j <=width-10; j=j+50) 
	   {
	   
		  plinkos.push(new Plinko(j,375));
	   }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  Engine.update(engine);
  
  fill(255);
  textSize(30)
  text("Score : "+score,20,30);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }

  for (var k = 0; k < divisions.length; k++) {
     
	divisions[k].display();
  }
  
  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
	particles[j].display();
  }
}
