class Player {
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref('PLAYERCOUNT');
        playerCountRef.on( "value", function (data){
            playerCount = data.val();
        } ); 
    }
    updateCount(count){
        database.ref('/').update({
            PLAYERCOUNT:count 
        });
    }
    update(name){
        var playerIndex = "Player "+playerCount;
        database.ref(playerIndex).set({
           Name:name
        })
    }
}