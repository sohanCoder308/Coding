class Game {
    constructor(){
        
    }
   getState(){
       var gameStateRef = database.ref('GAMESTATE');
       gameStateRef.on( "value", (data)=>{
           gameState = data.val();
       } ); 
   } 
   update(state){
       database.ref('/').update({
          GAMESTATE:state 
       });
   }

   async start() {
      if(gameState===0){
          player = new Player();
          var playerCountRef = await database.ref('PLAYERCOUNT').once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
          }
          
          form = new Form();
          form.display();
          
      }
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3= createSprite(500,200);
      car4= createSprite(700,200); 
      cars = [car1,car2,car3,car4];
      
   }
   play(){
       form.hide();
       
       Player.getPlayerInfo();
       
       if(allPlayers!==undefined){
           var index = 0;
           var x=0;
           var y;
           var displayPosition = 130;
           var displayHeight = 100;
           for(var plr in allPlayers){
               if(plr == 'Player' + player.index){
              fill("red");
               }else{
               fill("black");
               }
               index = index+1;
               x = x+200;
               y = displayHeight - allPlayers[plr].Distance;
               cars[index-1].x = x;
               cars[index-1].y = y;

               if(index === player.index){
                   cars[index-1].shapeColor = red;
                   camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
               }
           displayPosition +=20;
           //text(allPlayers[plr].Name + " :" + allPlayers[plr].Distance , 120,displayPosition);
       }
   }
   if(keyIsDown(UP_ARROW) && (player.index!==null)){
       player.distance += 50;
       player.update();
   }
  }
}