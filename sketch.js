var ship, ship_running, edges;
var sea;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea1 = loadImage("sea.png")
}






function setup(){
  createCanvas(1000,500);

  sea = createSprite(0,350,1200,0.5);
  sea.addImage("sea moving", sea1)
  sea.scale = 0.5;
  sea.x = sea.width/20

  ship = createSprite(200,200,20,20);
  ship.addAnimation("running", ship_running);
  
  edges = createEdgeSprites();


  ship.scale = 0.2;
  ship.x = 100
}






function draw(){ 
  background("sea.png");
  
  console.log(ship.y)
  
  if(keyDown("space")){
    ship.velocityY = -10;
  }

  ship.velocityY = ship.velocityY + 0.5;

  if (sea.x < 0){
     sea.x = sea.width/8
  }

  sea.velocityX = -5
  
  ship.collide(edges)
  drawSprites();
}