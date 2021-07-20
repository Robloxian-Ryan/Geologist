//
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(800,100,70,70)
	ground = new Ground(600,600,1200,20)
	hammer = new Hammer(100,100,100,50)
  iron = new Iron(300,100,80,50)
  rubber = new Rubber(1000,100,50)
  sand1 = new Sand(120,100,10)
  sand2 = new Sand(140,100,10)
  sand3 = new Sand(160,100,10)
  sand4 = new Sand(180,100,10)
  sand5 = new Sand(200,100,10)
  sand6 = new Sand(220,100,10)
  sand7 = new Sand(240,100,10)
  sand8 = new Sand(260,100,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();
  stone.display();
  ground.display();
  hammer.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  rubber.display();

}
