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
   }
   play(){
       form.hide();
       fill(0);
       textSize(20);
       text("GAME STARTS!",20,20);
       Player.getPlayerInfo();
       
       if(allPlayers!==undefined){
           var displayPosition = 130;

           for(var plr in allPlayers){
               if(plr == 'Player' + player.index)
               fill("red")
               else
               fill("black");
           
           displayPosition +=20;
           text(allPlayers[plr].Name + " :" + allPlayers[plr].Distance , 120,displayPosition);
       }
   }
   if(keyIsDown(UP_ARROW) && (player.index!==null)){
       player.distance += 50;
       player.update();
   }
}
}