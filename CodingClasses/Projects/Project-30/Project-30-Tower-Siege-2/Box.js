class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        World.add(world, this.body);
      }
      display(){
        
        if(this.body.speed < 3)
        {   
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill(135,206,234);
        stroke(0);
        strokeWeight(1.5);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }

        else
        {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-1;
          tint(255,this.visibility);
          pop();
        } 
      } 
    }