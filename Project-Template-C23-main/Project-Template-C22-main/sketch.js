const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var con1,con2,con3,con4;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,800,20,roof_options);
    World.add(world,roof);

	
  ball1= new Ball(320,380,40)
  ball2= new Ball(360,380,40)
  ball3= new Ball(400,380,40)
  ball4= new Ball(440,380,40)
  ball5= new Ball(480,380,40)


  con1=Matter.Constraint.create({
    pointA:{x:300,y:100},
    bodyB:ball1.body,
    pointB:{x:0,y:0},
    // length:200,
    // stiffness:0.1,
  })
  World.add(world,con1);

  con2=Matter.Constraint.create({
    pointA:{x:350,y:100},
    bodyB:ball2.body,
    pointB:{x:0,y:0},
    // length:200,
    // stiffness:0.1,
  })
  World.add(world,con2);

  con3=Matter.Constraint.create({
    pointA:{x:400,y:100},
    bodyB:ball3.body,
    pointB:{x:0,y:0},
    // length:200,
    // stiffness:0.1,
  })
  World.add(world,con3);

  con4=Matter.Constraint.create({
    pointA:{x:450,y:100},
    bodyB:ball4.body,
    pointB:{x:0,y:0},
    // length:200,
    // stiffness:0.1,
  })
  World.add(world,con4);
  con5=Matter.Constraint.create({
    pointA:{x:500,y:100},
    bodyB:ball5.body,
    pointB:{x:0,y:0},
    // length:200,
    // stiffness:0.1,
  })
  World.add(world,con5);

  
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,400,20);

  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();


  
  line(con1.pointA.x,con1.pointA.y,con1.bodyB.position.x,con1.bodyB.position.y)
  line(con2.pointA.x,con2.pointA.y,con2.bodyB.position.x,con2.bodyB.position.y)
  line(con3.pointA.x,con3.pointA.y,con3.bodyB.position.x,con3.bodyB.position.y)
  line(con4.pointA.x,con4.pointA.y,con4.bodyB.position.x,con4.bodyB.position.y)
  line(con5.pointA.x,con5.pointA.y,con5.bodyB.position.x,con5.bodyB.position.y)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
	}
}