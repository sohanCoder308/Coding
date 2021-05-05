class Ball {
    constructor(x,y,r){
        var options = {
           density : 0.5,
           frictionAir : 0.005
        }
       this.x = x;
       this.y = y; 
       this.r = r; 
       this.body = Bodies.circle(x,y,r,options);
       World.add(world,this.body); 
    }
   display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      angleMode(RADIANS);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
   } 
}