const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var level=0
var circleGroup = []
var boxGroup = [] 

function preload(){
    bgi=loadImage("Pics/background.jpg")
    boyS=loadAnimation("Pics/img1.png","Pics/img3.png","Pics/img2.png")
    boyF=loadAnimation("Pics/img4.png","Pics/img5.png","Pics/img6.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth/2,760,windowWidth,300);
    background1=createSprite(windowWidth/2,windowHeight/2)
    background1.addImage(bgi)
    background1.velocityX=-1
    boy1=createSprite(70,500)
    guy=new Guy()
    boy1.addAnimation("Standing",boyS)
    boy1.addAnimation("Jumping",boyF)
    boy1.scale = 0.07
    
    
}
function draw(){
  Engine.update(engine)
    background(bgi)
    if(background1.x<=0){
        background1.x=windowWidth/2
    }
    
    drawSprites()
    boy1.changeAnimation("Standing",boyS)
    guy.display()
    ground.display()
  
    if(frameCount%1200){
        if(level===0)
        level=1;
        else
        level=0
      }
       if(frameCount%75==0){
       createBlock()
       }

       for(var i = 0;i<boxGroup.length;i++){
         boxGroup[i].display()
         Matter.Body.setPosition(boxGroup[i].body,{x:boxGroup[i].body.position.x-7,y:boxGroup[i].body.position.y})
         if(boxGroup[i].body.position.x<0){
           boxGroup[i].remove()
         }
       }
    
       for(var i = 0;i<circleGroup.length;i++){
        circleGroup[i].display()
        Matter.Body.setPosition(circleGroup[i].body,{x:circleGroup[i].body.position.x-7,y:circleGroup[i].body.position.y})
        if(circleGroup[i].body.position.x<0){
          circleGroup[i].remove()
        }
      }
}

function createBlock(){
    if(level===1){
        b1=new Box(windowWidth,random(400,600),100,random(20,100))
        boxGroup.push(b1);
  
        
      }
      if(level===0){
       
        c1=new Ball(windowWidth,random(500,600),random(120,250))
        circleGroup.push(c1);
        
      }
    }

    function keyPressed(){
      if(keyCode===32){
        boy1.changeAnimation("Jumping",boyF)
        Matter.Body.translate(guy.body,{x:0,y:-200})
      }
    }