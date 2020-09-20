const Engine= Matter.Engine
const World=  Matter.World
const Bodies= Matter.Bodies
var engine, world 
var ground, ball
var box1, box2

function setup() {
  createCanvas(800,400);
  engine=Engine.create ()
  world= engine.world 
  ground=new Ground(400,350,800,50);
  box1=new box(700,200,20,50);
  box2=new box(650,150,20,50) ;
  var ball_options={
    restitution:1,
    friction:0.3,
    density:0.5
    
 }

  ball= Bodies.circle(100,150,15,ball_options)
  World.add(world,ball)
  console.log(ground)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display();
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,15,15)

 box1.display()
 box2.display()
}

