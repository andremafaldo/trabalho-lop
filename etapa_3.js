var yo, xo;
var podeMudar = true;
function setup() {
  createCanvas(512, 512);
  yo = random(512); 
  xo = 15;
}

function draw() {
  background(0);
  
  if(!podeMudar){
     xo += 15;
  }
  
  if(xo > width){
	podeMudar = true;
  }
  
  if(mouseIsPressed && podeMudar) {
      yo = random(512); 
      xo = 15;
    podeMudar = false;
  }
  
  rect(xo,yo,40,40);
}
