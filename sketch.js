var hero,bg,bgImg1,invisibleGround,obstacle,obsGruop;
var boy,bg2,lol,bullet;
var corona,invisibleGround1; 
var score = 0, score1=0;
var gameState=1;
function preload()
{
 //Level 1 images
  bgImg=loadImage("bgImg1.jpg");
  boyRunning = loadAnimation("rbImg1.png","rbImg2.png","rbImg3.png","rbImg4.png","rbImg5.png","rbImg6.png","rbImg7.png");
  monsterImg=loadImage("virus.png")
  lolimg = loadImage("rbImg1.png")
  maskImg=loadImage("OIP.png");
  heroImg=loadImage("fastboi2.png");
 
  //Level 2
  boyImg1= loadImage("BoyImg.png")
 // boyImg2 = loadImage("BoyImg2.png")
  monsterImg=loadImage("virus.png")
  bgImg2=loadImage("bgImg2.jpg");


continueImg = loadImage("ContinueImg.png")
nextLvlImg = loadImage("NextLvlImg.png")
retryImg = loadImage("retryImg.png")
plGmImg = loadImage("PlGm.PNG")

boardLvl = loadImage("OIP (8).jpg")

smanImg = loadImage ("manImg.png")
maskImg= loadImage("OIP.png")
}


function setup() {
	createCanvas(1200, 600);

bulletsGroup = createGroup();
//Level 1 
  bg= createSprite(400,200,1200,1000);
bg.addImage(bgImg)
bg.scale=3.5
bg.velocityX=-20;

hero = createSprite(200,230,20,20);
hero.addAnimation("running", boyRunning);
hero.scale=1

invisibleGround = createSprite(600,580,1200,10);
invisibleGround.visible = false;



 bg2= createSprite(600,300,1200,60)
 bg2.addImage(bgImg2)
 bg2.scale=3
 bg2.visible= false;


 //invisibleGround1 = createSprite(600,530,1200,20)
 //invisibleGround1.visible=false;


 bg3= createSprite(600,300,1200,600)
 bg3.addImage(bgImg2)
 bg3.scale=3
 bg3.visible= false;
 //
 block = createSprite(100,120,100,20)
 block.visible= false;
 lol = createSprite(1600,200,100,100)
 lol.velocityX=-30
 lol.addImage(monsterImg)
 lol.scale=2
 lol.visible = false;

 obsGroup = createGroup();
 invisibleGround = createSprite(600,530,1200,20)
 invisibleGround.visible=false;
 
 

 boy = createSprite(100,100,100,100)
 boy.debug =true;   
     boy.visible= false;

 bullet = createSprite(600,boy.y,10,10)
     //bullet.velocityX=30
     bullet.shapeColor = "yellow" 
     bullet.visible= false;
     obsGroup= createGroup();
     obsGroup1= createGroup();
     obsGroup2= createGroup();
     sman =createSprite(600,400,100,100)
     sman.addImage(smanImg)
     sman.scale=0.1
     sman.debug= true
    
     mask =createSprite(200,20,100,100)
     mask.addImage(maskImg)
     mask.scale=0.11
     //mask.debug= true
     mask.visible = false;
    sman.scale=0.1
     sman.visible=false;

chero = createSprite(300,300,30,30); 
chero.visible= false;
covid1 = createSprite(350,300,30,30); 

covid1.addImage(monsterImg)
covid1.scale=0.2
covid1.visible = false;
covid2 = createSprite(400,300,30,30); 

covid2.addImage(monsterImg)
covid2.scale=0.2
covid2.visible = false;
covid3 = createSprite(500,300,30,30); 
covid3.addImage(monsterImg)
covid3.scale=0.2
covid3.visible = false;

obstacle1 = createSprite(200,150,30,240);
 obstacle1.shapeColor = "brown"
 obstacle1.visible= false;
 obstacle2 = createSprite(1000,200,30,250);
 obstacle2.shapeColor = "brown"
 obstacle2.visible= false;
 obstacle3 = createSprite(750,350,30,240);
 obstacle3.shapeColor = "brown"
 obstacle3.visible= false;
 obstacle4 = createSprite(450,350,30,240);
 obstacle4.shapeColor = "brown"
 obstacle4.visible= false;
 obstacle5= createSprite(250,400,300,30);
 obstacle5.shapeColor = "brown"
 obstacle5.visible= false;
 obstacle6 = createSprite(700,110,300,30);
 obstacle6.shapeColor = "brown"
 obstacle6.visible= false;
 obstacle7 = createSprite(950,400,250,30);
 obstacle7.shapeColor = "brown"
 obstacle7.visible= false;
 obstacle8 = createSprite(600,550,250,30);
 obstacle8.shapeColor = "brown"
 obstacle8.visible= false;

 inBo1 = createSprite(0,500,10,1000); 
 inBo1.visible= false;
 inBo2 = createSprite(1200,500,10,1000);   
 inBo2.visible= false;
 inBo3 = createSprite(600,0,1200,10); 
 inBo3.visible= false;  
 inBo4 = createSprite(600,600,1200,10); 
 inBo4.visible= false;  
}
  function draw() {
    score = score + Math.round(getFrameRate()/60);
  //background("red")\
  //score=0;
  if(keyDown("r")&&gameState===0){
    gameState=1;
    hero.visible = true;
  }
 if (gameState===1){

 bg.visible= true;
  if(keyDown("up")) {
	hero.velocityY = -21;
 }
 if(bg.x<=50){
  bg.x=1000
  }
 //add gravity
 hero.velocityY = hero.velocityY + 1.6
 hero.collide(invisibleGround)
 

 


 if(score===120&&gameState===1){
  //continueB.x=100
   gameState=2;
   hero.destroy();
 }
 if (frameCount % 100=== 0) {
  obstacle = createSprite(1200, 450, 10, 10);
 obstacle.addImage(monsterImg)
  obstacle.scale = 0.070
  obstacle.velocityX = -10;
 obstacle.lifetime = 120;
 obsGroup.add(obstacle)
 //obstacle.y=Math.round(random(50,340));
 }
 if(obsGroup.isTouching(hero)){
   gameState=0;
   obsGroup.destroyEach();
   hero.visible = false;
 }

 }
 
 
   if (gameState===2){

  bg2.visible= true
   boy.visible =true 
   //continueB.y=2000
  boy.velocityY=boy.velocityY+1;
 boy.addImage(boyImg1)
 boy.collide(invisibleGround);
  boy.scale= 0.2
  if(bg.x<=50){
    bg.x=1000
  }

 if( boy.y>350 && keyDown("space") ){
    boy.velocityY=-20
  }
  if (frameCount % 40=== 0) {
    obstacle = createSprite(1200, 305, 50, 50);
  obstacle.visible= true;
  obstacle.addImage(monsterImg)
  obstacle.scale=0.2
  //  obstacle.addImage(monsterImg)
    //obstacle.scale = 0.070
    
    obstacle.velocityX =-12;
   obstacle.lifetime = 120;
   obstacle.y=Math.round(random(50,340));
   obsGroup.add(obstacle)
  
  }
  if(keyDown("right")){
   //boy.addImage(boyImg1)
    
     bullet = createSprite(boy.x,boy.y,10,10)
     bullet.velocityX=20
     bullet.lifetime = 120
     bullet.shapeColor = "yellow" 
     bulletsGroup.add(bullet)
    }
   for(var i = 0; i<obsGroup.length;i++){
    if(bulletsGroup.isTouching(obsGroup.get(i))){
      obsGroup.get(i).destroy();
      bulletsGroup.destroyEach();
     // score1+10
      
        score1++;
        console.log(score)
    }
    }

    if(score1===120&&gameState===2){
      
      gameState=3
    
     }
    }
/*
    if(gameState==3){
      background(bgImg)
      sman.visible= true;
      mask.visible= true;
     bg.destroy();
      boy.destroy();
      
    ;  //obstacle.destroy();
     mask.x= mouseX
     mask.y= mouseY
     //sman.visible=true
     sman.y= sman.y+10
     sman.collide(invisibleGround);  
     mask.collide(sman)
     mask.collide(invisibleGround)
     if(obsGroup.isTouching(mask)){
      obstacle.destroy();
      //gameState=1
     }
     if(obsGroup1.isTouching(mask)){
      obstacle1.destroy();
      //gameState=1
     }
     if(obsGroup2.isTouching(mask)){
      obstacle2.destroy();
     // gameState=1
     }
    
     if(obsGroup.isTouching(sman)){
      obstacle.destroy();
      gameState=3.1
     }
     if(obsGroup1.isTouching(sman)){
      obstacle1.destroy();
      gameState=3.1
     }
     if(obsGroup2.isTouching(sman)){
      obstacle2.destroy();
       gameState=3.1
     }
    
     if (frameCount % 65=== 0) {
      obstacle = createSprite(600, 0, 50, 50);
     obstacle.visible= true;
     obstacle.addImage(monsterImg)
     obstacle.scale=0.12
     obstacle.debug= true;
      obstacle.velocityY=7
     obstacle.lifetime = 120;
     obstacle.x=Math.round(random(500,700));
     obstacle.y=0
     obsGroup.add(obstacle)
     }
     if (frameCount % 100=== 0) {
      obstacle1 = createSprite(0, 450, 10, 10);
     obstacle1.addImage(monsterImg)
      obstacle1.scale = 0.070
      obstacle1.velocityX = 15;
     obstacle1.lifetime = 120;
     obstacle1.y=Math.round(random(450,500));
     obstacle1.debug= true;
     obsGroup1.add(obstacle1)
     //obstacle.y=Math.round(random(50,340));
     }
     if (frameCount % 125=== 0) {
      obstacle2 = createSprite(1200, 450, 10, 10);
     obstacle2.addImage(monsterImg)
      obstacle2.scale = 0.070
      obstacle2.velocityX = -15;
     obstacle2.lifetime = 120;
     obstacle2.debug= true;
     obstacle2.y=Math.round(random(450,500));
     obsGroup2.add(obstacle2)
     //obstacle.y=Math.round(random(50,340));
     }
    }
    if(score===120&&gameState===3){
      //continueB.x=100
      gameState=4
     //  gameState=2;
     }
     if(gameState===4){
       chero.collide(inBo1)
       chero.collide(inBo2)
       chero.collide(inBo3)
       chero.collide(inBo4)

       chero.collide(obstacle1)
       chero.collide(obstacle2)
       chero.collide(obstacle3)
       chero.collide(obstacle5)
       chero.collide(obstacle4)
       chero.collide(obstacle6)
       chero.collide(obstacle7)
       chero.collide(obstacle8)


       covid1.collide(inBo1)
       covid1.collide(inBo2)
       covid1.collide(inBo3)
       covid1.collide(inBo4)
       covid1.collide(obstacle1)
       covid1.collide(obstacle2)
       covid1.collide(obstacle3)
       covid1.collide(obstacle4)

       covid1.collide(obstacle5)

       covid1.collide(obstacle6)
        covid1.collide(obstacle7)
       covid1.collide(obstacle8)






       covid2.collide(inBo1)
       covid2.collide(inBo2)
       covid2.collide(inBo3)
       covid2.collide(inBo4)
       covid2.collide(obstacle1)
       covid2.collide(obstacle2)
       covid2.collide(obstacle3)
       covid2.collide(obstacle4)
       covid2.collide(obstacle5)
       covid2.collide(obstacle6)
       covid2.collide(obstacle7)
       covid2.collide(obstacle8)


       covid3.collide(inBo1)
       covid3.collide(inBo2)
       covid3.collide(inBo3)
       covid3.collide(inBo4)
       covid3.collide(obstacle1)
       covid3.collide(obstacle2)
       covid3.collide(obstacle3)
       covid3.collide(obstacle4)
       covid3.collide(obstacle5)
       covid3.collide(obstacle6)
       covid3.collide(obstacle7)
       covid3.collide(obstacle8)


     background(bgImg)
      obstacle1.visible= true;
      obstacle2.visible= true;
      obstacle3.visible= true;
      obstacle4.visible= true;
      obstacle5.visible= true;
      obstacle6.visible= true;
      obstacle7.visible= true;
      obstacle8.visible= true;
      if(keyDown (DOWN_ARROW)){
       chero.velocityY=5
       chero.velocityX=0
         if(chero.y<covid1.y){
          covid1.setVelocity(0,-5)
        }
        else{
          covid1.setVelocity(0,5) 
        }
      }
      if(keyDown (UP_ARROW)){
        chero.velocityY=-5
        chero.velocityX=0
         if(chero.y<covid1.y){
          covid1.setVelocity(0,-5)
        }
        else{
          covid1.setVelocity(0,5) 
        }
      }
      if(keyDown (RIGHT_ARROW)){
        chero.velocityY=0
       chero.velocityX=5
         if(chero.x<covid1.x){
          covid1.setVelocity(-5,0)
        }
        else{
          covid1.setVelocity(5,0) 
        }
      }

      if(keyDown (DOWN_ARROW)){
        chero.velocityY=5
        chero.velocityX=0
          if(chero.y<covid2.y){
           covid2.setVelocity(0,-5)
         }
         else{
           covid2.setVelocity(0,5) 
         }
       }
       if(keyDown (LEFT_ARROW)){
         chero.velocityX=-5
         chero.velocityY=0
          if(chero.y<covid2.y){
           covid2.setVelocity(0,-5)
         }
         else{
           covid2.setVelocity(0,5) 
         }
       }
       if(keyDown (RIGHT_ARROW)){
         chero.velocityY=0
        chero.velocityX=5
          if(chero.x<covid2.x){
           covid2.setVelocity(-5,0)
         }
         else{
           covid2.setVelocity(5,0) 
         }
       }

       if(keyDown (DOWN_ARROW)){
        chero.velocityY=5
        chero.velocityX=0
          if(chero.y<covid3.y){
           covid3.setVelocity(0,-5)
         }
         else{
           covid3.setVelocity(0,5) 
         }
       }
       if(keyDown (UP_ARROW)){
         chero.velocityY=-5
         chero.velocityX=0
          if(chero.y<covid3.y){
           covid3.setVelocity(0,-5)
         }
         else{
           covid3.setVelocity(0,5) 
         }
       }
       if(keyDown (RIGHT_ARROW)){
         chero.velocityY=0
        chero.velocityX=5
          if(chero.x<covid3.x){
           covid1.setVelocity(-5,0)
         }
         else{
           covid3.setVelocity(5,0) 
         }
       }
      if(keyDown (LEFT_ARROW)){
        chero.velocityY=0
        chero.velocityX=-5
        if(chero.x<covid3.x){
          covid3.setVelocity(-5,0)
        }
        else{
          covid3.setVelocity(5,0) 
        }
      }
     }
   */
  drawSprites();
  if(gameState===0){
    background(255);
    textSize(45)
    fill("black")
    strokeWeight(5)
    stroke("yellow")
        text("Game over. ",500,450)
        text("press R to restart ",500,530)
      }
  if(gameState===1){
    textSize(20)
    fill("white")
        text("Score: "+score,100,100)
      }
      if(gameState===2){
        textSize(20)
        fill("white")
            text("Score: "+score1,100,100)
          }
}

     


  
 
 
 



















































































































































 
  

 
  // fill("white");
   //textSize(25);
   //text("Score= "+score,140,385)
  
  /*if(chero.isTouching(ghost)){
   var gameOver= createSprite(200,200)
  gameOver.setAnimation("gameover.png_1")
  gameOver.scale=2 
  }
  if(score===58){
  var youWin = createSprite(200,200)
  youWin.setAnimation("youwin.png_1")
  youWin.scale=2
  }*/
    
  
 /*var obstacle;
   function preload(){
    boyImg= loadImage("boyImg.png")
    boyImg2= loadImage("boyImg2.png")
  monsterImg=loadImage("OIP.jpg")
  bgImg2=loadImage("Lava.jpg");
  bulletImg = loadImage("bulletImg.jpg")
  //bgImg= loadImage("Lava.jpg")
  }
  
  
  function setup() {
  createCanvas(1200, 600);
  
  
  //Create the Bodies Here.
  
  
  }
  
  
  function draw() {
   // background(bg);
   
    boy.collide(invisibleGround);
  boy.collide(lol);
    boy.collide(block)
    if(keyDown("space")){
      boy.velocityY=-2
    }
    if (boy.isTouching(block)){
      boy.x=block.x
    }
    if(keyDown("right")){
      boy.addImage(boyImg)
      boy.velocityX=5
     // bullet = createSprite(600,boy.y,50,50)
      //bullet.velocityX=30
      //bullet.addImage(bulletImg)
    }
    if(keyDown("left")){
     boy.addImage(boyImg2)
      //bullet = createSprite(600,boy.y,10,10)
      //bullet.velocityX=-30
      boy.velocityX=-5
    }
    boy.velocityY=boy.velocityY+1;
    if (frameCount % 10=== 0) {
     lol = createSprite(1600,300,300,50);
     lol.velocityX=-10
    // lol.addImage(monsterImg)
     //lol.scale=1
  //  boy.collide(obstacle);
      /*ob.scale = 0.07
      obstacle.velocityX = -10;*/
   /*  lol.lifetime = 200;
     lol.y=Math.round(random(100,350))
    }
 //  spawnObstacles();
  drawSprites();*/
  