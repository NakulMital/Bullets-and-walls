var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = (80, 80, 80);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;

  

  thickness = random(22, 83);
}

function draw() {
  background(0,0,0);  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);
    if (damage<10) {
       bullet.shapeColor = "green";
    }
    if (damage>10) {
       bullet.shapeColor = "red";
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
     return true;
  }
  return false;
}