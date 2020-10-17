var boy,boyimg, boy_running, boy_collided,boy_jump;
var ground, invisibleGround,ground2;
var bg,h,bgimg,platformimg,bg3,bg4,bg5,bg6;
var pathgroup,pathimg;
var backgroundimg;

var grass0,grass1,grass2,grass3,grass4,grass5,grass6,grass7,grass8,grass9,grass10,grass11,grass12,grasss13,grass14,grass15,grassgroup;
var enemiesGroup, enemy1, enemy2, enemy3

var gamestate="start";
var checkpoint = 0;
var count = 3;

var gameover,gameoverimg,reset,resetimg;

function preload(){
  boy_running = loadAnimation("images/tile024.png","images/tile025.png","images/tile026.png","images/tile027.png","images/tile028.png","images/tile029.png","images/tile030.png","images/tile031.png");
  boy_collided = loadAnimation("images/tile016.png","images/tile017.png");
  boy_jump = loadAnimation("images/tile006.png","images/tile007.png","images/tile005.png");
  boyimg = loadImage("images/tile017.png");
  
  enemy1 = loadAnimation("images/enemy1.png","images/enemy2.png","images/enemy3.png");
  enemy2 =  loadAnimation("images/enemy4.png","images/enemy5.png","images/enemy6.png");
  enemy3 = loadAnimation("images/enemy7.png","images/enemy8.png","images/enemy9.png");
  
  pathimg = loadImage("Images/path.png");

  gameoverimg = loadImage("images/gameOver.png");
  
  resetimg = loadImage("images/restart.png");

  changeBg();

  bg3 = loadImage("Images/jungle 3.jpg");
  bg4 = loadImage("Images/jungle4.jpg");
  bg5 = loadImage("Images/jungle5.jpg");
  bg6 = loadImage("Images/city.jpg");

  backgroundimg = loadImage("Images/background.jpg");

}

function setup() {
  createCanvas(displayWidth, 200);

  bg = createSprite(width/2,height/2,displayWidth,height);
  
  grassgroup = new Group();

  boy = createSprite(50,50,20,50);
  boy.addImage("boy",boyimg);
  boy.addAnimation("running",boy_running);
  boy.addAnimation("jump",boy_jump);
  boy.addAnimation("dead",boy_collided);
  boy.scale = 1;
  
  ground = new Ground(10500);

  grass0 = new platform (50,150);
  grass1 = new platform(445,98);
  grass2 = new platform(2445,32);
  grass3 = new platform(3000,-450);
  grass4 = new platform(4250,-320);
  grass5 = new platform(5000,1);
  grass6 = new platform(6100,32);
  grass7 = new platform(7000,-400);
  grass8 = new platform(8000,-660);
  grass9 = new platform(9100,-520);
  grass10 = new platform(10500,-100);
  grass11 = new platform(11000,200);
  grass12 = new platform(12200,-10);
  grass13 = new platform(13100,1);
  grass14 = new platform(14300,12);
  grass15 = new platform(15100,298);
  grass16 = new platform(16000,50);

  invisibleGround = createSprite(200,190,width,10);
  invisibleGround.visible = false;
  
  enemiesGroup = new Group();

  pathgroup = new Group();
  
  gameover = createSprite(width/2,50,300,30);
  gameover.addImage(gameoverimg);
  gameover.scale = 0.5;
  gameover.visible = false;
  
  reset  = createSprite(width/2,100,300,30);
  reset.addImage(resetimg);
  reset.scale = 0.5;
  reset.visible = false;
  
  score = 0;
  
}

function draw() {
  background(backgroundimg);

  ground.x = bg.x;
 // boy.x=16000;
  
  ground.display();

  //console.log(checkpoint);

  grass0.display();
  grass1.display();
  //grassgroup.add(grass1);
  grass2.display();
  //grassgroup.add(grass2);
  grass3.display();
 // grassgroup.add(grass3);
  grass4.display();
  //grassgroup.add(grass4);
  grass5.display();
  //grassgroup.add(grass5);
  grass6.display();
  //grassgroup.add(grass6);
  grass7.display();
  //grassgroup.add(grass7);
  grass8.display();
  //grassgroup.add(grass8);
  grass9.display();
  //grassgroup.add(grass9);
  grass10.display();
  //grassgroup.add(grass10);
  grass11.display();
 // grassgroup.add(grass11);
  grass12.display();
 // grassgroup.add(grass12);
  grass13.display();
  //grassgroup.add(grass13);
  grass14.display();
  //grassgroup.add(grass14);
  grass15.display();
 // grassgroup.add(grass15);
  grass16.display();
  //grassgroup.add(grass16);

  if(gamestate==="start"){
    bg.velocityX = 0;
    textSize(30);
    fill("red");
    textStyle("bold");
    stroke(10);
    text("Press S to Start",width/2-100,100);

    if(keyDown("s")){
      gamestate = "play";
    }
  }
  

  if(gamestate==="play"){

    bg.velocityX= 2;

    bg.y = boy.y;

    //boy.y = mouseY;
   // boy.x = mouseX;

    camera.x = bg.x;


    //camera.x = boy.x;
    camera.y = bg.y;

   // console.log();

    if(keyDown(RIGHT_ARROW)) {
      boy.x += 3;
      boy.changeAnimation("running", boy_running);
    }

    if(keyDown(LEFT_ARROW)) {
      boy.x-=3 ;
      boy.changeAnimation("running", boy_running);
    }

  if(keyDown(UP_ARROW)) {
    boy.velocityY = -10;
    boy.changeAnimation("jump",boy_jump);
  }
  
  boy.velocityY = boy.velocityY + 0.8

  if (boy.x>=3300 && boy.x<7000){
    bg.addImage(bg3);
    bg.scale = 6;
  }
  else if (boy.x>=7000 && boy.x<11000){
    bg.addImage(bg4);
    bg.scale = 1.5;
  }
  else if (boy.x>=11000 && boy.x<16000){
    bg.addImage(bg5);
    bg.scale = 2.7;
  }
  else if (boy.x>=1600){
    textSize(30);
    fill("red");
    textStyle("bold");
    text("You Won",bg.x/2,200);
    bg.addImage(bg6);
    bg.scale = 1.5;
    bg.velocityX = 0;
    enemiesGroup.destroyEach();
  }

  if(boy.isTouching(grass1.sprite)){
     checkpoint = 1;
     count+=3;
  }
  else if(boy.isTouching(grass1.sprite)){
    checkpoint = 1;
    count+=21;
 }
  else if(boy.isTouching(grass2.sprite)){
  checkpoint = 3;
  count+=15;
}
  else if(boy.isTouching(grass4.sprite)){
  checkpoint = 4;
  count+=11;
}
  else if(boy.isTouching(grass5.sprite)){
  checkpoint = 5;
}
  else if(boy.isTouching(grass6.sprite)){
  checkpoint = 6;
}
  else if(boy.isTouching(grass7.sprite)){
  checkpoint = 7;
}
  else if(boy.isTouching(grass8.sprite)){
  checkpoint = 8;
}
  else if(boy.isTouching(grass9.sprite)){
  checkpoint = 9;
}
  else if(boy.isTouching(grass10.sprite)){
  checkpoint = 10;
}
  else if(boy.isTouching(grass11.sprite)){
  checkpoint = 11;
}
  else if(boy.isTouching(grass12.sprite)){
  checkpoint = 12;
}
  else if(boy.isTouching(grass13.sprite)){
  checkpoint = 13;
}
  else if(boy.isTouching(grass14.sprite)){
  checkpoint = 14;
}
  else if(boy.isTouching(grass15.sprite)){
  checkpoint = 15;
}
  else if(boy.isTouching(grass16.sprite)){
  checkpoint = 16;
}
   
  spawnenemies();
    
   if (enemiesGroup.isTouching(boy)||boy.isTouching(ground.sprite)){
      gamestate = "end";
  }
  
  
  if (gamestate==="end"){
    gameover.visible = true;
    reset.visible = true;
    ground.velocityX=0;
    bg.visible = false;
    boy.velocityY=0;
    boy.velocityX=0;
    boy.changeAnimation("dead",boy_collided); 

    if(mousePressedOver(reset)||keyDown("R")){
      restart();
    }
  }

  boy.collide(pathgroup);
  boy.collide(invisibleGround);
  boy.collide(grass0.sprite);
  boy.collide(grass1.sprite);
  boy.collide(grass2.sprite);
  boy.collide(grass3.sprite);
  boy.collide(grass4.sprite);
  boy.collide(grass5.sprite);
  boy.collide(grass6.sprite);
  boy.collide(grass7.sprite);
  boy.collide(grass8.sprite);
  boy.collide(grass9.sprite);
  boy.collide(grass10.sprite);
  boy.collide(grass11.sprite);
  boy.collide(grass12.sprite);
  boy.collide(grass13.sprite);
  boy.collide(grass14.sprite);
  boy.collide(grass15.sprite);
  boy.collide(grass16.sprite);

  drawSprites();
  bg.addImage(bgimg);
  bg.scale = 4.8;
}
}

function mouseClicked() {
   if(mouseButton===LEFT && count>0){
    var path = createSprite(mouseX+100,mouseY,100,10);
    path.addImage("path",pathimg);
    pathimg.resize(100,20);
    console.log(path.x);
    console.log(path.y);
    pathgroup.add(path);
    count--;
  }
 
  }


function spawnenemies() {
  if(frameCount % 60 === 0) {

    var rand = Math.round(random(1,3));

    var randomnumber = Math.round(random(1,16));

    switch(rand) {
      case 1: 
      var enemy1b = createSprite(100,165,10,40);
      
      enemy1b.velocityX = -4;

      enemy1b.x = bg.x+300;
      enemy1b.y = boy.y;

     enemy1b.addAnimation("enemy1",enemy1);

     enemy1b.scale = 0.5;
    enemy1b.lifetime = 300;

    enemy1b.debug = true;

    enemy1b.setCollider("rectangle",0,0,140,100)

    enemiesGroup.add(enemy1b);

              break;

      case 2: 
      var enemy2b = createSprite(300,165,10,40);
      enemy2b.x = ("grass"+randomnumber).x;
     
      enemy2b.velocityX = -4;
       enemy2b.addAnimation("enemy1",enemy2);
  
       enemy2b.scale = 0.5;
      enemy2b.lifetime = 300;
  
      enemy2b.debug = true;
  
      enemy2b.setCollider("rectangle",0,40,100,20)
  
      enemiesGroup.add(enemy2b);
              break;

      case 3: var enemy3b = createSprite(100,165,10,40);
      //enemy3b.velocityX = -4;
      enemy3b.x = ("grass"+random).x
       enemy3b.addAnimation("enemy1",enemy3);
  
       enemy3b.scale = 0.5;
      enemy3b.lifetime = 300;
  
      enemy3b.debug = true;
  
      enemy3b.setCollider("rectangle",0,0,40,40)
  
      enemiesGroup.add(enemy3b);
              break;

      default: break;
    }
           
  }
}


function changeBg(){
  h = hour();
  if(h<=17 && h>=5){
    bgimg = loadImage("images/jungle1.png");
  }
  else{
    bgimg = loadImage("images/jungle2.jpg");
  }

}

  function restart (){
    gamestate="play";
    enemiesGroup.destroyEach();
    gameover.visible=false;
    reset.visible = false;
    switch(checkpoint){
      case 0:
        boy.x = 50;
        boy.y = 140;
        break;

        case 1:
        boy.x = 445 ;
        boy.y = 88;
        break;

        case 2:
        boy.x = 2445;
        boy.y = 22;
        break;

        case 3:
        boy.x = 3000;
        boy.y = -460;
        break;

        case 4:
        boy.x = 4250;
        boy.y = -330;
        break;

        case 5:
        boy.x = 5000;
        boy.y = -9;
        break;

        case 6:
        boy.x = 6100;
        boy.y = 22;
        break;

        case 7:
        boy.x = 7000;
        boy.y = -410;
        break;

        case 8:
        boy.x = 8000;
        boy.y = -670;
        break;

        case 9:
        boy.x = 9100;
        boy.y = -530;
        break;

        case 10:
        boy.x = 10500;
        boy.y = -110;
        break;

        case 11:
        boy.x = 11000;
        boy.y = 190;
        break;

        case 12:
        boy.x = 12200;
        boy.y = -20;
        break;

        case 13:
        boy.x = 13100;
        boy.y = -9;
        break;

        case 14:
        boy.x = 14300;
        boy.y = 2;
        break;

        case 15:
        boy.x = 15100;
        boy.y = 288;
        break;

        case 16:
          boy.x = 16000;
          boy.y = 0;
          break;

        default :
        break;
    }
    //boy.x = 50;
    boy.changeAnimation(boyimg);
    //count=0;

    bg.x = width/2;

    bg.velocityX= 2;

    camera.x = bg.x;
  }

