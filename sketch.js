var car, wall;
var speed, weight;
function setup() {
  createCanvas(1000, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color("blue");
  car.velocityX = speed;
  wall = createSprite(900, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);
  car.collide(wall);
  var deformation = Is_Touching();
  if(deformation > 180) {
    car.shapeColor = color("red");
  } else if(deformation >= 50) {
    car.shapeColor = color("yellow");
  } else if(deformation >= 0) {
    car.shapeColor = color("green");
  }
  drawSprites();
}

function Is_Touching() {
  if (car.x + car.width >= wall.x) {
      car.velocityX = 0;
      return ((weight*(speed^2))/700);
  } else {
      return -1;
  }
}