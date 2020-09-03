
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella,manImg,man;
var engine,world;
var thunder;
var thunders
var rain = [];

var th1,th2,th3,th4;
function preload(){
 manImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png",
 "walking_6.png","walking_7.png","walking_8.png",)  
th1 = loadImage("1.png")
th2 = loadImage("2.png")
th3 = loadImage("3.png")
th4 = loadImage("4.png")
thunders = new Group()
}

function setup(){
   createCanvas(400,500)
   engine = Engine.create();
  world = engine.world;
  
man = createSprite(200,400,10,10);
man.addAnimation(manImg);
man.scale=0.3;
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    
    if(frameCount%60===0){
     rain.push(new Drop(random(width/2-30, width/2+30), 10,10));
      
    }
    if(frameCount%60===0){
      rain.push(new Drop(random(width/2-20, width/2+20), 10,10));
       
     }
     if(frameCount%60===0){
      rain.push(new Drop(random(width/2-5, width/1+20), 10,10));
       
     }
  
   for (var j = 0; j < rain.length; j++) {
    
      rain[j].display();
    }

    if (frameCount % 80 === 0) {
      thunder = createSprite(random(100, 1000), 0, 100, 100);
      //thun.velocityY = 6;
      var rand = Math.round(random(1,4));
      switch(rand){
          case 1: thunder.addImage(th1);
          break;
          case 2: thunder.addImage(th2);
          break;
          case 3: thunder.addImage(th3);
          break;
          case 4: thunder.addImage(th4);
          break;
      }
      thunders.add(thunder);
    }

      drawSprites();
}   

