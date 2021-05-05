class createDrop {
    constructor(x,y){
        var options = {
            friction: 0.1,
            restituion: 0.01
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add (world,this.rain);
    }
    updateY(){
        if (this.rain.position.y > height){
            Matter.Body.setPosition(this.rain , {x:random(0,400), y:random(0,400)});
        }
    }
    showDrop(){
        fill(87,216,247);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }
}