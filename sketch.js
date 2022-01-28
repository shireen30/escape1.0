//var
var r01, R01_move, R01_die
var block1
var block2
var block3
var block4

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
  
r01 = createSprite(500,500,50,50)
r01.addAnimation("moving", R01_move);
r01.scale=0.3

r01.debug=true;
r01.setCollider("rectangle",0,0,400,400)

scrapper=createSprite(width/2,250,width,300);
scrapper.addAnimation("moving",scrapperImg);
block1 = createSprite(Math.round(random(0,width)), height-20, 400, 40)
block1.velocityY=-3
block1.shapeColor="black"
block1.debug=false

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

console.log(mouseX, mouseY)

if(keyDown("space")){
  r01.velocityY=-10;
}

r01.velocityY+=0.8;

r01.collide(block1)

}

