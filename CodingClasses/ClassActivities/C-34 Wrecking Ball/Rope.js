class Rope {
    constructor(bodyA,pointB){
        var options = {
            length : 10.0,
            //stiffness : 0.05,   
            bodyA : bodyA,
            pointB : pointB
        }
         this.pointB = pointB;
         this.rope = Constraint.create(options);
         World.add(world,this.rope);

    }
   fly(){
       this.rope.bodyA = null;
   } 
   
   attach(body){
      this.rope.bodyA = body; 
   }
   
   display(){
       if(this.rope.bodyA) {
       var pointA = this.rope.bodyA.position;
       var pointB = this.pointB;
     stroke ("white")
      line(pointA.x,pointA.y,pointB.x, pointB.y); 
   } 
}
}