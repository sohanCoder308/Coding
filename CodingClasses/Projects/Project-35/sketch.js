//Create variables here
var dog,happyDog,dogImg,happyDogImg,foodS,foodStock,database;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.jpg");
  happyDogImg = loadImage("dogImg1.jpg");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  
  dog = createSprite(250,350);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock,showError);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage(happyDogImg); 
  }

  
  drawSprites();

  fill(0);
  textSize(25);
  text("FOOD LEFT : "+foodS,150,100);
  textSize(15);
  text("Note: Press Up Arrow Key to Feed the pet Milk",100,450);
  //add styles here

}

function readStock(data){
    foodS = data.val();
}

function writeStock(fytui){
    if(fytui<=0){
      fytui=0;
    }
    else{
      fytui=fytui-1; 
    }

    database.ref('/').update({
       Food:fytui
    })
}

function showError(){
   console.log("ERROR IN READING THE DATABASE");
}