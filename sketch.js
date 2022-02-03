


//var
var r01, R01_move, R01_die

var blockGroup;
var scrapperImg;
var scrapper;
// Preload

function preload()
{
  R01_move = loadAnimation("R01.png","R02.png",);
  R01_move.playing=false;
  scrapperImg=loadAnimation("Scrapper1.png","Scrapper2.png");

}

// Setup
function setup()
{
createCanvas(windowWidth, windowHeight)
blockGroup=new Group();
r01 = createSprite(500,500,50,50)
r01.addAnimation("moving", R01_move);
r01.scale=0.3

r01.debug=true;
r01.setCollider("rectangle",0,0,400,400)

scrapper=createSprite(width/2,250,width,300);
scrapper.addAnimation("moving",scrapperImg);



}

// Draw
function draw()
{
background(180)
drawSprites()

//MOVEMENT
if (keyDown("LEFT")){
  r01.x -= 10;
  R01_move.playing=true
  r01.addAnimation("moving", R01_move);
  
}

if (keyDown("RIGHT")){
  r01.x += 10;

  R01_move.playing=true
  r01.addAnimation("moving", R01_move);
}

//console.log(mouseX, mouseY)

if(keyDown("space")){
  r01.velocityY=-10;
}

r01.velocityY+=0.1;
//camera.position.y=r01.position.y
r01.collide(blockGroup)
spawnBlocks();

}

function spawnBlocks(){
  if(frameCount%130==0){

 var block1 = createSprite(Math.round(random(300,width/2+200)),Math.round(random(r01.y+100,r01.y+400)),350,50)
 console.log(block1.x,block1.y) 
 block1.velocityY=-1
  block1.shapeColor="black"
  block1.debug=true
  blockGroup.add(block1);
 
  }
}
