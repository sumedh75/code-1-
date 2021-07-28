var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){ball.position.x=ball.position.x+4}
  drawSprites()


}




