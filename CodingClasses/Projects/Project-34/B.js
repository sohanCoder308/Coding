class B {
    constructor(x,y,r){
        var options = {
           'isStatic' : true
        }
      this.r = r;
      this.body = Bodies.circle(x,y,r,options);
      World.add(world,this.body);  
    }
   display(){
      var pos = this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("green");
      ellipse(pos.x,pos.y,this.r,this.r);
      pop(); 
   } 
}