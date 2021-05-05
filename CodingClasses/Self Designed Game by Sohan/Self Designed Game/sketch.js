var backgroundImg,backg,nbackg;
var gameState = "PLAY";
var lives = 5,nightImg;
var monsNo = 0,wallC = 0;
var diamondCount = 0;
var DxPos = 300,coinsCount =0;
var food,foodImg1;

function preload()
{
	backgroundImg = loadImage("Images/Farm.jpg");
	tomImage = loadImage("Images/p1.gif");
	D1image= loadImage("Images/diamond2.png");
	CoinImage= loadImage("Images/coin1.png");
	M1image = loadImage("Images/monster.png");
	nightImg = loadImage("Images/backgnight.gif");
	foodImg1 = loadImage("Images/food1.jpg");
}

function setup() {
	createCanvas(800, 800);
	
	backg = createSprite(600,400,1200,800);
	backg.addImage(backgroundImg);
	backg.scale = 2.0;
	backg.velocityX = -3;

	tom = createSprite(100,550,50,50)
	tom.addImage(tomImage);
	tom.scale = 0.5;
	

	invisibleGround = createSprite(20,750,1200,8);
	invisibleGround.visible = false;

	monsterG = new Group();
	coinsG = new Group();
	FoodG = new Group();
	//Engine.run(engine);
  
}


function draw() {
  //Engine.update(engine);
  //rectMode(CENTER);
  background("white");
  
  if(gameState === "PLAY"){
			drawSprites();
			textSize(20);
			fill("white");
			strokeWeight(20);
			text("Coins Collected : "+coinsCount,100,50);
			text("Lives Left : "+lives,100,100);
		if(backg.x < 400){
			backg.x = 600;
		}
		if(keyDown("space")&& tom.y>400){
			tom.velocityY = -10;  }

			tom.velocityY=tom.velocityY+0.5

			tom.collide(invisibleGround);
		if(frameCount % 200 === 0){
			spawn();
		}
		if(monsterG.isTouching(tom)){
			lives-=1;
			console.log("Oops.. you loose 1 life. Be careful");
			monsterG.destroyEach();
			monsNo = 0;
			tom.scale -= 0.2;
		}
		if(coinsG.isTouching(tom)){
		coinsCount +=1;
		coinsG.destroyEach();
		}

		if(lives<=0 || tom.scale <= 0)
		{ gameState = "END";
		
		};
		
		if(monsNo==5){
			diamondCount += 1;
			console.log("no of diamonds"+diamondCount)
			monsNo = 0;
			console.log("resetting the monster Count");
			diamond = createSprite(DxPos,100,50,50);
			diamond.scale = 0.1;
			diamond.addImage(D1image);
			DxPos = DxPos+100;
		}
		if(wallC >0 && wallC<=30){
			if(wallC >0 && wallC <=15){
				backg.addImage(backgroundImg);
			}
			else{
			backg.addImage(nightImg);
			}
			
			backg.velocityX = -3;
			if(wallC > 30){
				wallC = 0;
			}
		}
		if(coinsCount > 2){
			
			spawnFood();
			console.log("spawnning the food");
			console.log("Before Food : "+coinsCount)
			if(tom.isTouching(FoodG));
			coinsCount -=2;
			tom.scale += 0.05;
			console.log("After Food : "+coinsCount);
		} 
 
}

if(gameState === "END"){

	backg.velocityX = 0;
	coinsG.setVelocityXEach(0);
	monsterG.setVelocityXEach(0);
	FoodG.setVelocityXEach(0);
	
	background("black");
	textSize(50);
		fill("Yellow");
			text("GAME OVER",300,400)
}

 
}

function spawn(){
	//randf = Math.round.random(1,4);
	var randf = Math.round(random(1,3));
	console.log("random no is " +randf);
    switch(randf){
		case 1 : 	monster = createSprite(1300,Math.round(random(400,700)));
					monster.velocityX = -8;
					monster.scale = 0.3;
					monster.addImage(M1image);
					monsterG.add(monster);
					monsNo +=1;
					console.log("Mons no = " +monsNo);
					wallC += 1;
					break;
		case 2: 	coins = createSprite(1300,Math.round(random(500,600)));
					coins.velocityX = -3;
					coins.scale = 0.1;
					coins.addImage(CoinImage);
					coinsG.add(coins);
		

	}
}

function spawnFood(){
	if(coinsCount > 2){
		if(frameCount % 100 === 0){
		food = createSprite(1300,Math.round(random(300,500)));
		food.velocityX = -3;
		food.scale = 3.0;
		food.addImage(foodImg1);
		FoodG.add(food);
	   }
	}
}

function reset(){
	
}
