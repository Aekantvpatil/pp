
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1,ground1,dustbin1
;

function setup() {

	createCanvas(1500, 700);

	

	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,450,40)
	ground1=new ground(600,500,1800,20)
    dustbin1=new dustbin(1307,320)
	//Create the Bodies Here.
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	


	Engine.run(engine);
	Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	paper1.display();
	ground1.display();
    dustbin1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100});
	}
}


