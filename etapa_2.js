var x = 100;
var y = 100;


function setup() {
  createCanvas(600, 600);
  background(0);

}

function draw() {
  
  if(keyIsDown(RIGHT_ARROW)){
     x += 5
  }
  
    if(keyIsDown(LEFT_ARROW)){
     x -= 5
  }
  
    if(keyIsDown(UP_ARROW)){
     y -= 5
  }
  
    if(keyIsDown(DOWN_ARROW)){
     y += 5
  }
  
  
  
  clear();
  fill(255,100,180);
  rect(x, y, 50, 50);

}
