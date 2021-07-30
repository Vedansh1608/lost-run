var player,player_running,road
function preload(){
  //pre-load images
  player_running = loadAnimation("Runner-1.png","Runner-2.png");
  roadimage = loadImage("path.png");
}

function setup(){
  createCanvas(400,600);
 
  //crating road
  road = createSprite(197,100,50,100);
  road.addImage("road",roadimage);
  road.velocityY = 10;


   //create sprites here
   player = createSprite(197,500,30,30);
   player.addAnimation("player",player_running);
   player.scale =0.1
}

function draw() {
  background(0);
  drawSprites();
  
  if (road.y > 500 ) {
  road.y = road.height / 7;
  }
  
}
