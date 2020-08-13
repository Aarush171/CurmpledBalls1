var dustbin1, dustbin2, dustbin3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(670,610,20,80);
	dustbin2 = new Dustbin(530,610,20,80);
	dustbin3 = new Dustbin(600,630,140,20);
	ground = new Ground(400, 650, 800, 20);
	paper = new Paper(100, 200, 20);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  	background(0);
  
  drawSprites();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:65, y:-45});
	}
}

