class Food {
    constructor() {
        this.image = loadImage("Milk.png");
    }
    
    getFoodStock() {
        var foodStockRef = database.ref('food');
        foodStockRef.on("value", (data)=>{
        foodCount = data.val();
        });
    }

    updateFoodStock(foodStockToUpdate) {
        database.ref('/').update({
            food: foodStockToUpdate
        });
    }

    getFedTime() {
        var fedTimeRef = database.ref('last Fed');
        fedTimeRef.on("value", (data)=>{
            lastFed = data.val();
        });
    }

    updateFedTime() {
        database.ref('/').update({
            lastFed: hour()
        });
    }

    async start(){
        var foodRef = await database.ref('food').once("value");
        if(foodRef.exists()) {
            foodCount = foodRef.val();
        }

        var lastFedRef = await database.ref('lastFed').once("value");
        if(lastFedRef.exists()) {
            lastFed = lastFedRef.val();
        }        

        var gameStateRef = await database.ref('gameState').once("value");
        if(gameStateRef.exists()) {
            gameState = gameStateRef.val();
        }        

      }

    display() {
        textSize(15);
        fill("white");
        stroke(5);
        if(lastFed >= 12) {
            text("Last Fed: " + lastFed % 12 + " PM", 50, 60);
        } else if(lastFed === 0){
            text("Last Fed: 12 AM", 50, 60);
        } else {
            text("Last Fed: " + lastFed + " AM", 50, 60);
        }

        var x = 80, y = 100;
        imageMode(CENTER);
        if(foodCount != 0) {
            for(var i = 0; i < foodCount; i++) {
                if(i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(milkImg, x, y, 50, 50);
                x = x + 30;
            }
        }
    }

    bedroom() {
        background(bedRoomImg, 800, 400);
    }

    washroom() {
        background(washRoomImg, 800, 400);
    }

    garden() {
        background(gardenImg, 800, 400);
    }

    getState() {
        readState = database.ref('gameState');
        readState.on("value", (data)=>{
        gameState = data.val();
     });
    }

    updateState(state) {
        database.ref('/').update({
        gameState : state
      })
    }

    defineState()
    {
        currentTime = hour();

        if(gameState === "hungry"){
            food1.display();
            addFood.show();
            feed.show();
            input.show();
            dog.visible = true;
            this.updateState(gameState);
          } if(currentTime === lastFed + 1) {
            food1.garden();
            gameState = "playing"
            addFood.hide();
            feed.hide();
            dog.visible = false;
            this.updateState(gameState);
          } else if(currentTime === lastFed + 2) {
            food1.bedroom();
            gameState = "sleeping"
            addFood.hide();
            feed.hide();
            dog.visible = false;
            this.updateState(gameState);
          } else if(currentTime >= (lastFed + 2) && currentTime <= (lastFed + 4)) {
            food1.washroom();
            gameState = "bathing"
            addFood.hide();
            feed.hide();
            dog.visible = false;
            this.updateState(gameState);
          } else {
            gameState = "hungry"
            food1.display();
            addFood.show();
            feed.show();
            input.show();
            dog.visible = true;
            this.updateState(gameState);
          } 

    }

}