
let s;
let scl = 10;
let food;
let lastDir = 0;
function mousePressed() {
 //s.total = s.total + 1;
}

function setup() {
  createCanvas(400,400);
  s = new Snake();
  frameRate(15);
  food = pickLocation();
  console.log(food)
}

function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows))); 
  food.mult(scl); 
  return food;
}

function draw() {
  background(51);
  s.death();
  s.updata();
  s.show();
 
  if(s.eat(food)){
    food = pickLocation();
  }

  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
  
}  



function keyPressed() {
  if(keyCode === UP_ARROW && lastDir != DOWN_ARROW ){
    s.dir(0,-1);
  }else if(keyCode === DOWN_ARROW && lastDir != UP_ARROW){
    s.dir(0,1); 
  }else if(keyCode === RIGHT_ARROW && lastDir != LEFT_ARROW){
    s.dir(1,0); 
  }else if(keyCode === LEFT_ARROW && lastDir != RIGHT_ARROW){
    s.dir(-1,0);
  } 
  if(s.total > 0)  lastDir = keyCode; 
}



