const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, pig1;
var platform;
var bird, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(550,300,50,50);
    box2 = new Box(500,300,50,50);
    box3 = new Box(450,300,50,50);
    box4 = new Box(525,250,50,50);
    box5 = new Box(475,250,50,50);
    box6 = new Box(500,200,50,50);

    ground = new Ground(500,330,400,10);
    bird = new Bird(100,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255,255);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    bird.display();
    slingshot.display();    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}