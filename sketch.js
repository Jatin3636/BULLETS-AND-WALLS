var wall,bullet,bulletImage;
var speed,weight,thickness;

function preload() {
   bulletImage = loadImage("bullet.png");
}

function setup() {
  createCanvas(1200,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(100, 200, 70, 15);
  bullet.velocityX = speed;
  bullet.addImage(bulletImage);
  bullet.scale = 0.1;
  wall = createSprite(900,200,thickness,height/2);
}

function draw() {
  background(0);

  if(collided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  
    if(damage > 10) {
      wall.shapeColor = "green";
    } else if(damage <= 10 ) {
      wall.shapeColor = "red";
    
    }
  }
  drawSprites();
}

function collided(object1,object2) {

  bulletRightEdge = object1.x + object2.width;
  wallLeftEdge = object2.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;

}