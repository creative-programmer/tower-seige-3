const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;
var polygon,slingShot;
var gameState = "onsling";

var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(385,300,250,15);
 ground1 = new Ground(400,400,800,15)


block1 = new Block(295,272,30,40);
block2 = new Block(330,235,30,40);
block3 = new Block(360,195,30,40);
block4 = new Block(390,195,30,40);
block5 = new Block(325,272,30,40);
block6 = new Block(445,272,30,40);
block7 = new Block(355,272,30,40);


block8 = new Block(385,272,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(475,272,30,40);



block13 = new Block(420,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(450,235,30,40);

block16 = new Block(415,272,30,40);
block17 = new Block(390,155,30,40);


polygon = Bodies.circle(50,200,20)

World.add(world,polygon);


slingShot = new Slingshot(this.polygon,{x : 100, y : 200})




}

function draw() {
  background("yellow");  
  Engine.update(engine);

text("SCORE :"+score,400,40);

  ground.display();
  ground1.display();
fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

fill("green")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

fill("pink")
  block13.display();
  block14.display();
  block15.display();

fill("white");
  block16.display();
  block17.display();
  slingShot.display();
  ellipse(polygon.position.x,polygon.position.y,30,30)


  block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();


block8.score();
block9.score();
block10.score();
block11.score();
block12.score();


block13.score();
block14.score();
block15.score();

block16.score();
block17.score();
 
}


function mouseDragged(){
  
      Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
  }



function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon);
  }
}




