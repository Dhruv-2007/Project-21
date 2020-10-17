var bullet;
var speed,weight;
var wall;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


  bullet = createSprite(50,200,40,10);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  BulletStats();
  WallStats();
}

function draw() {
  background("black");  

  if(hasCollied(bullet,wall)){
     bullet.velocityX = 0;
     damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

     if(damage > 10){
       wall.shapeColor = ("red");
     } else if(damage < 10){
       wall.shapeColor = ("green");
     }
     DamageStats();
  }
  drawSprites();
}

function hasCollied(bullet,wall){
   bulletleftEdge = bullet.x + bullet.width;
   wallleftEdge = wall.x;
  
   if(bulletleftEdge >= wallleftEdge){
      return true;
   } 
    return false;
}