var ground, groundImage;
var ground2;
var ballon1, ballon1Image;
var ballon2, ballon2Image;
var ballon3,ballon3Image
var ballon4,ballon4Image
var bow, bowImage;
var layer;
var score =0;
var ballon1Group;
var ballon2Group;
var ballon3Group;
var ballon4Group;
var arrowGroup;


function preload(){
groundImage = loadImage("background0.png");
ballon1Image = loadImage("green_balloon0.png");
ballon2Image = loadImage("blue_balloon0.png");
ballon3Image =  loadImage ("pink_balloon0.png");
ballon4Image =  loadImage ("red_balloon0.png");
bowImage = loadImage ("bow0.png");
arrowImage = loadImage ("arrow0.png");
  
  
}

function setup() {
  
createCanvas(600, 600);
  
ground = createSprite(300,300);
  
ground.addImage(groundImage);
ground.x = ground.width/2;
ground.velocityX = -2; 
ground.scale=1.5;
  
bow = createSprite(400,250,20,10);
bow.addImage(bowImage);
    
  
  var arrow, arrowImage; 

  ballon1Group = createGroup();
  ballon2Group = createGroup();
  ballon3Group = createGroup();
  ballon4Group = createGroup();
  arrowGroup = createGroup();
  
  
  }

function draw() {
  
  
bow.y = World.mouseY;


  
if (ground.x < 150) {
      ground.x = ground.width/2;
  }  
  
  
  if (keyDown("space")){
    arrow();
  }
  
  
  spawnBallon();

  
  
  drawSprites();
  textSize = 50;
  text("Score : " + score,270,30);
  
if(arrowGroup.isTouching(ballon1Group)){
  ballon1Group.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
if(arrowGroup.isTouching(ballon2Group)){
  ballon2Group.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}  
if(arrowGroup.isTouching(ballon3Group)){
  ballon3Group.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
if(arrowGroup.isTouching(ballon4Group)){
  ballon4Group.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
}

function arrow() {
var arrow = createSprite(400,250,20,10);
arrow.addImage(arrowImage);
arrow.scale = 0.3;
arrow.y = bow.y;
arrow.velocityX = -20;
arrow.lifetime = 100;
arrowGroup.add(arrow);
}

function spawnBallon(){

  var select_ballon = Math.round(random(1,4));
console.log(select_ballon)
  
  if(World.frameCount % 80 ==0) {
    
    if (select_ballon ==1){
      ballon1();
    } else if (select_ballon ==2){
      ballon2();   
    } else if (select_ballon ==3){
      ballon3();
    } else if (select_ballon ==4){
      ballon4();
    }
    }
    
function ballon1(){
var green = createSprite(0,Math.round(random(20,370)), 10,10 );
  green.addImage(ballon1Image);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  ballon1Group.add(green);
  
}
  
 function ballon2(){
var blue = createSprite(0,Math.round(random(20,370)), 10,10 );
  blue.addImage(ballon2Image);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
ballon2Group.add(blue);
} 
  
function ballon3(){
  var pink =createSprite(0,Math.round(random(20,370)), 10,10 );
  pink.addImage(ballon3Image);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;

  ballon3Group.add(pink);
} 
  
 function ballon4(){
var red = createSprite(0,Math.round(random(20,370)), 10,10 );
  red.addImage(ballon4Image);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  ballon4Group.add(red);
}  
  
}
 
  

