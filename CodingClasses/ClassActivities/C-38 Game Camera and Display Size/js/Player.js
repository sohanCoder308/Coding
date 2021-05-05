class Player {
    constructor(){
        this.index = null;
        this.distance  = 0;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref('PLAYERCOUNT');
        playerCountRef.on( "value",  (data)=>{
            playerCount = data.val();
        } ); 
    }
    updateCount(count){
        database.ref('/').update({
            PLAYERCOUNT:count 
        });
    }
    update(){
        var playerIndex = "Players/Player " +this.name;
        database.ref(playerIndex).set({
           Name:this.name,
           Distance:this.distance
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('Players');
        playerInfoRef.on("value",(data)=> {
            allPlayers  = data.val();
        });
    }
}