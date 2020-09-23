
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , line1;
var garbage1 , garbage2 , garbage3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 640);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper();
	line1 = new ground();
	
	garbage1 = new dustbin(680,577,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(233,231,233);
  Engine.update(engine);
 
  ball.display();
  line1.display();
  garbage1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:500, y:-470});
	}
}

