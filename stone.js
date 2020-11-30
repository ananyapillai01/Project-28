class stone{
    constructor(x, y){
        var options = {
            isStatic: false,
            resitution: 0,
            friction: 1,
            density: 1.2,
        }
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, 20, options);
        this.radius= 20;
        

        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
