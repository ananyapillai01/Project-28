class mango{
    constructor(x, y, radius){
        options = {
            isStatic: true,
            resitution: 0,
            friction: 1,
        }
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, r, radius, options);
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255, 0, 255)
        image(this.image, 0, 0, this.radius+2, this.radius+2);
        pop();
    }
}