var earth,sun;
var sunImg,earthImg,space;

function preload(){

  sunImg = loadImage("assets/sun.png");
  earthImg = loadImage("assets/earth.png");
  space = loadImage("assets/download.jpg");
}
function setup(){
  earth = createSprite(200,150, 50, 50);
  
   sun = createSprite(200, 200);

   sun.addImage(sunImg);
  
   earth.addImage(earthImg);
   

  earth.scale = 0.1;
 sun.scale = 0.01;

earth.rotateToDirection=true;
earth.velocityX = 5;

}
function draw() {
  background(space);
  earth.rotation=earth.rotation+5;
  if(frameCount%60 === 0){
    sun.scale = sun.scale+0.01;
  }

  
 
  drawSprites();
}
