class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.playerRank=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  getCarEndCount(){
     var carendCountref = database.ref('CarAtEnd');
     carendCountref.on("value",(data)=>{
        this.playerRank = data.val();
     });
  }
  static updateCarCountEnd(Rank){
     database.ref('/').update({
         CarAtEnd:Rank
     });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
