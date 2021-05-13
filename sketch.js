var robot;
var gameState = 0;
var enemies, granites,jets;
var laser,laserimg;
var coinimg,coin;
var life = 5;
var coins = 0;
var anime;
var ground,invisibleground;

var coinG,laserG;

function preload(){

  anime = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
  laserimg = loadImage("laser.png");
  coinimg = loadImage("coin.png");

}
function setup() {
  createCanvas(800,600);



  

  robot = createSprite(100,480,50,50);
  robot.addAnimation("robot",anime);
  robot.scale = 0.20;

  ground = createSprite(400,580,800,10);
  ground.shapeColor = "brown";
  
  invisibleground = createSprite(400,595,800,10);
  invisibleground.visible = false;

  coinG = new Group();
  laserG = new Group();

}

function draw() {
  background(255,255,255);  
  robot.collide(invisibleground);


  if(keyWentDown("space")&&robot.y>=470){
    robot.velocityY=-15;
  }

  robot.velocityY = robot.velocityY +0.4;

  if(frameCount%150===0){

    coin = createSprite(850,random(500,200),50,50);
    coin.addImage("coin",coinimg);
    coin.scale = 0.3;
    coin.velocityX = -3;  
    
    coinG.add(coin)
  }


  if(keyWentDown(RIGHT_ARROW)){
    laser = createSprite(210,210,10,10);
    laser.addImage("laser",laserimg);
    laser.scale=0.1;
    laser.y = robot.y-60;
    laser.velocityX=3
    laserG.add(laser);

  }

  if(coinG.isTouching(robot)){
    coinG.destroyEach();
    coins++;
  }

  if(keyWentDown("I")){
    robot.visible = false
  }
  if(frameCount%100===0){
  robot.visible = true
  }
  textSize(40);
  fill(0);
  text("Coins:" + coins,50,75);





  drawSprites();
}