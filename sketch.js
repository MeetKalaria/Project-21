const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

var groundObj
var leftSide
var rightSide

var radius = 40
var world



function setup() {
	createCanvas(1800,1400);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1500,600,20,120)

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	Matter.Bodies.circle(10,10,20,ball_options)
	World.add(world,ball)

	
	ellipseMode(RADIUS)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius)
  
  groundObj.display()
  leftSide.display()
  rightSide.display()

 
  

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


