const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var wall1, wall2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall1 = new Base(windowWidth+50, 100, 50, 100);
  wall2 = new Base(windowWidth-50, 100,50,100);

}

function draw() {
  background(51);
  Engine.update(engine);


}
