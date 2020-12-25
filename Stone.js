class Stone{
    constructor(x, y, r){
        var properties = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.r = r;

        this.body = Bodies.circle(x, y, this.r / 2,  properties);

        World.add(world, this.body);

        this.image = loadImage("Sprites/stone.png");
    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        imageMode(CENTER);

        fill("white");
        image(this.image, 0, 0, this.r, this.r);  

        pop();

    }
}