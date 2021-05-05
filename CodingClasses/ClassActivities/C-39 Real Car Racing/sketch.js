var database;
var gameState = 0;
var playerCount=0;
var form,player,game,allPlayers;
var distance=0;
var car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img;
var ground_img,track_img;
var cars = [];

function preload(){
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");
    ground_img = loadImage("images/ground.png");
    track_img = loadImage("images/track.jpg");
}
function setup(){
    database = firebase.database();

    canvas = createCanvas(displayWidth-20,displayHeight-30);
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
if(playerCount ==4) {
    game.update(1);
}
if(gameState ==1) {
    clear();
    game.play();
}
}