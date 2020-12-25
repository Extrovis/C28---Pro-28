const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage;

var throwingStone;

var launcher;

var ground;

var treeImage;

var mango1, mango2, mango3, mango4 ,mango5;


function preload()
{
	
	boyImage = loadImage("Sprites/boy.png");

	treeImage = loadImage("Sprites/tree.png");

}

function setup() {

	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	throwingStone = new Stone(255, 745, 90);

	ground = new Ground(width / 2, height - 50);

	launcher = new Sling(throwingStone.body, {x: 255, y: 745});

	mango1 = new Mango(1145, 450, 70);
	mango2 = new Mango(1380, 430, 70);
	mango3 = new Mango(1270, 330, 70);
	mango4 = new Mango(1470, 330, 70);
	mango5 = new Mango(1585, 450, 70);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");

  image(boyImage, 200, windowHeight - 300, 300, 300);

  image(treeImage, 1920 - 900, height - 760, 700, 700);

  throwingStone.display();

  launcher.display();

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(throwingStone, mango1);
  detectCollision(throwingStone, mango2);
  detectCollision(throwingStone, mango3);
  detectCollision(throwingStone, mango4);
  detectCollision(throwingStone, mango5);
  
  drawSprites();


  /*fill("black");
  textSize(20);
  text(mouseX + " ' " + mouseY, mouseX, mouseY);*/
 
}

function mouseDragged(){

	Matter.Body.setPosition(throwingStone.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){

	launcher.launch();

}

function keyPressed(){
	if(keyCode == 32){
		
		Matter.Body.setPosition(throwingStone.body, {x: 255, y: 745});

		launcher.attach(throwingStone.body);

	}
}

function detectCollision(Lstone, Lmango){

	mangoBodyPosition = Lmango.body.position;

	stoneBodyPosition = Lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= Lmango.r + Lstone.r){
		
		Matter.Body.setStatic(Lmango.body, false);

	}

}




