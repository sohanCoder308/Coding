class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body); 
    }
   display(){
      rectMode(CENTER);
      fill("brown");
      rect(this.x,this.y,this.width,this.height); 
   } 
}