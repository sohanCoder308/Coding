class Box3 {
    constructor(x, y, width, height) {
        var options = {
            
            'restitution':0.4,
            'friction' : 0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill(253,250,114);
        stroke(0);
        strokeWeight(1.5);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}