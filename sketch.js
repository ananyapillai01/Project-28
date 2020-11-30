
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new stone(200, 200, 10,10);

	tree = new tree(700, 100, 40, 40);

	ground = new ground(750, 700, 1000, 20);

	launcher = new launcher(150, 150, 10, 10);

	mango1 = new mango(700, 750, 10, 10);
	mango2 = new mango(650, 700, 10, 10);
	mango3 = new mango(600, 650, 10, 10);
	mango4 = new mango(550, 600, 10, 10);
	mango5 = new mango(500, 550, 10, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  stone.display();

  tree.display();

  ground.display();

  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  drawSprites();
}
function keyPressed(){
	if (keyCode === 32){
		matter.body.setPosition(stone.body, {x: 235, y: 420})
		launcher.attach(stone.body);
	}
}
function detectCollision(stone, mango){
	mangoPosition = mango.position.body;
	stonePosition = stone.position.body;

var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
 
if(distance <= mango.radius + stone.radius){
	 Matter.Body.setStatic(mango.body.false);
 }
}
function mouseDragged(){
	matter.body.setPosition(stone.body, {x: 235, y: 420})
	stone.attach(mango.body);
}