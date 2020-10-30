
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  var options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0.5,
	  density:1.2
  }
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}


