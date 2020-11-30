class tree{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.treeWidth = 450;
        this.treeHeight = 600;
        this.treeThickness = 10;

        this.image = loadImage("tree.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic: true})
        this.leftBody = Bodies.rectangle(0, this.y-thistreeWidth/2, this.treeThickness, this.treeHeight, {isStatic: false})
        this.rightBody = Bodies.rectangle(this.x + treeWidth/2, this.y-this.treeHeight/2, this.treeThickness)

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display()
    {
        var pos = this.bottomBody.position;
        push()
        translate(pos.x, pos.y + 10);
        fill(255)
        imageMode(CENTER)
        image(this.image, 0, -this.treeHeight/2, this.treeWidth, this.treeHeight)
        pop()
    }
}