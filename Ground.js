class Ground{

    constructor(x, y){

        var properties = {

            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 1920, 50, properties);

        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        rectMode(CENTER);

        fill("Grey");

        rect(0, 0, 1920, 50);

        pop();
    }

}