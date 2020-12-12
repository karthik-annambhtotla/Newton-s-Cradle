
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var holder;
var rope1,rope2,rope3,rope4,rope5,rope6,rope7;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//holder
	holder = new Bar(400,100);

 var ballDiameter=40;	


	//balls
	ball1 = new Ball(300,600);
	ball2 = new Ball(390,600);
	ball3 = new Ball(480,600);
	ball4 = new Ball(570,600);
	ball5 = new Ball(660,600);
	// ball6 = new Ball(210,600);
	// ball7 = new Ball(120,600);

	//ropes
	rope1 = new Rope(ball1.body,holder.body,-ballDiameter*2,0);
	rope2 = new Rope(ball2.body,holder.body,-ballDiameter*1,0);
	rope3 = new Rope(ball3.body,holder.body,0,0);
	rope4 = new Rope(ball4.body,holder.body,ballDiameter*1,0);
	rope5 = new Rope(ball5.body,holder.body,ballDiameter*2,0);
	// rope6 = new Rope(210,170);
	// rope7 = new Rope(120,170);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  drawSprites();
  
  holder.display();
  rope1.display();
  rope2.display();
  rope3.display();	
  rope4.display();
  rope5.display();
//   rope6.display();
//   rope7.display();
  ball1.display();
  ball2.display();
  ball3.display();	
  ball4.display();
  ball5.display();
//   ball6.display();
//   ball7.display();
  
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	//rope.fly(); 
  }
  
//   function keyPressed(){
// 	if(keyCode===32){
// 	  rope.attach(ball.body);
// 	}
//   }

