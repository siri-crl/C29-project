const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var bird, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(810, 350);
    bird = new Bird(100,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255,255);
    engine.update();
    strokeWeight(4);
    ground.display();
    pig1.display();

    bird.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}