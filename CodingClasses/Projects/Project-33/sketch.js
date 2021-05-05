const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var plinkos = [];
var divisions = [];
var particle;
var turn = 5;
var gameState = "play";

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width+20,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50)  {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50)  {
       plinkos.push(new Plinko(j,375));
    }
}
function draw() {
  Engine.update(engine);
  background("black");
  fill("yellow");
  strokeWeight(4);
  line(400, 500, 800, 5);
  textSize(25);
  fill("white");
  text("Score : "+score,50,30);
  fill("white");
  textSize(15);
  text("500", 40, 780);
  text("500", 120, 780);
  text("500", 200, 780);
  text("500", 280, 780);
  text("100", 360, 780);
  text("100", 440, 780);
  text("100",520, 780);
  text("100", 600, 780);
  text("200", 680, 780);
  text("200",760,780);
  text("200", 840, 780);
  textSize(25);
  text("Turns Left : "+turn, 590,30);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
     if(particle != null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<300){
          score = score+500;
          particle = null;
          if(turn<=0) gameState = "end";
        }
        else if (particle.body.position.x>=300&& particle.body.position.x<600){
          score = score+100;
          particle = null;
          if(turn<=0) gameState = "end";
        }
        else {
          score = score+200;
          particle = null;
          if(turn<=0) gameState = "end";
        }
      }
   }
   if(gameState === "end"){
    textSize(30);
    fill(255);
    text("Game Over!", 480, 320);
   }
   ground.display();
}

function mousePressed(){
  if(gameState!=="end"){
  turn--;
  particle = new Particle(mouseX, 10, 10);
  }
}
