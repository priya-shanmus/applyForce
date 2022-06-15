const Engine = Matter.Engine
const World =  Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var engine,world
var ball,ground
var btn
function setup(){
  createCanvas(600,600)
  engine = Engine.create()
  world = engine.world


  
var ball_options = {
  restitution:0.5,
  density:2
}

ball = Bodies.circle(300,300,10,ball_options)
World.add(world,ball)

console.log(ball)


var ground_options = {
  isStatic:true
}

ground = Bodies.rectangle(300,550,600,20,ground_options)
World.add(world,ground)


btn  = createImg('up.png')
btn.position(350,50)
btn.size(50,50)
btn.mouseClicked(ballForce)
}


function draw(){
  background("red")
  Engine.update(engine)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10,10)

push()
fill("blue")
rectMode(CENTER)
rect(ground.position.x,ground.position.y,600,20)
pop()
}


function ballForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-2})
}