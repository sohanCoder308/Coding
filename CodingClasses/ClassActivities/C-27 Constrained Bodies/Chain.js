class Chain {
    constructor (birdbody,logbody){
        var options = {
            bodyA : birdbody,
            bodyB : logbody,
            stiffness : 0.001,
            length : 10
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain); 
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y,pointB.x,pointB.y);

    }
}