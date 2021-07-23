var fixedRect, movingRect;
var fixedRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2=createSprite(300,400,50,80);
  fixedRect2.shapeColor="green";
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
 }
else if(isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor="blue";
  fixedRect2.shapeColor="blue";
}
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect2.shapeColor="green";

 }

  
  drawSprites();
}


