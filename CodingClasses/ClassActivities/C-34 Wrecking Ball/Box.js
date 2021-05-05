class Box {
    constructor(x,y,width,height){
       var options = {
           restitution : 0.4,
           friction : 0.4
       } 
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body); 
    }
   display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(angle);
      rect(0,0,this.width,this.height); 
      pop();
   } 
}