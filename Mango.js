class Mango{
    constructor(x, y, r){

        var properties = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.r = r;

        this.image = loadImage("Sprites/mango.png");

        this.body = Bodies.circle(x, y, this.r / 2, properties);

        World.add(world, this.body);

    }

    display(){
        
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        imageMode(CENTER);

        image(this.image, 0, 0, this.r, this.r);

        pop();

    }
}