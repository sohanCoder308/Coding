class Food {
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("Milk.jpg");
    }
   getFoodStock(){
       return this.foodStock;
   } 
   updateFoodStock(foodStock){
       this.foodStock = foodStock;
   } 
   deductFood(){
       if(this.foodStock>0){
           this.foodStock = this.foodStock - 1;
       }
   }
   getFedTime(lastFed){
        this.lastFed = lastFed;
   }
   display(){
        var x = 80,
            y = 50;
        imageMode(CENTER);
        image(this.image,870,250,100,100);
        if(this.foodStock != 0){
            for(var i=0; i < this.foodStock; i++){
               if(i % 10 == 0){
                   x = 80;
                   y = y + 90;
               }
              image(this.image,x,y,100,100);
              x = x + 50; 
            }
        }
   }
   
}