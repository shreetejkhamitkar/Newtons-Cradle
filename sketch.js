
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,RoofCradle;
var Chain1,Chain2,Chain3,Chain4,Chain5;
var engine,world;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

roofCradle=new Roof(width/2,height/4,250,15);

var startBobpositionX=width/2;
var startBobpositionY=height/4 + 200;
bobDiameter=40;

bob1=new Bob(startBobpositionX-bobDiameter*2,startBobpositionY,bobDiameter);
bob2=new Bob(startBobpositionX-bobDiameter,startBobpositionY,bobDiameter);
bob3=new Bob(startBobpositionX,startBobpositionY,bobDiameter);
bob4=new Bob(startBobpositionX+bobDiameter,startBobpositionY,bobDiameter);
bob5=new Bob(startBobpositionX+bobDiameter*2,startBobpositionY,bobDiameter);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });

Chain1=new Rope(bob1.body,roofCradle.body,-bobDiameter*2, 0);
Chain2=new Rope(bob2.body,roofCradle.body,-bobDiameter*1, 0);
Chain3=new Rope(bob3.body,roofCradle.body,0, 0);
Chain4=new Rope(bob4.body,roofCradle.body,bobDiameter*1, 0);
Chain5=new Rope(bob5.body,roofCradle.body,bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  
  background(230);
  Engine.update(engine);
  drawSprites();

  roofCradle.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();
 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	startBobposition=constraint.bodyA.position
	roofCradle.body=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofCradle.position.x=roofCradle.position.x+roofBodyOffset.x
	roofCradle.position.y=roofCradle.position.y+roofBodyOffset.y
	line(startBobpositionX, startBobpositionX, roofCradle.position.x,roofCradle.position.y);
}
