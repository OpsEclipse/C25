
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bucket1,bucketL,bucketR,paper,ground;
var bucketIMG;

function preload()
{
	bucketIMG = loadImage("sprites/trash.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bucket1 = new Bucket(650,670,130,10);
	bucketL = new Bucket(590,650,10,150);
	bucketR = new Bucket(710,650,10,150);
	paper = new Paper(100,400,45);
	ground = new Ground(400,680,800,10);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  bucket1.display();
  bucketL.display();
  bucketR.display();
  paper.display();
  ground.display();
  image(bucketIMG,595,550,145,125);
  
  drawSprites();
 
}

function keyPressed(){
	var randX = random(50,80);
	var randY = random(-120,-100);
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:randX,y:randY});
	}
}



