var fixedRect
var movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(300, 100, 80, 80);

  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
}

function draw() {
  background(0,0,0);  

  if(
   movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2  &&
  movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
  ){

    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }else{

    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }



  movingRect.x = mouseX
  movingRect.y = mouseY

  drawSprites();
}