var ball,img,paddle;
function preload() {
 

  ball_moving = loadImage("ball.png");
  paddle_move = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);

  ball = createSprite(200,200,20,20);
  ball.addImage("moving",ball_moving );

  
  paddle = createSprite(370,200,20,20);
    paddle.addImage("move",paddle_move);
  
}

function draw() {
  background(205,153,0);
  

  
  edges = createEdgeSprites();

  if (keyDown("space")) {
    ball.velocityX = 5;
    ball.velocityY = 5;
  }

  
  if (ball.isTouching(edges[0]) || ball.isTouching(edges[2]) || ball.isTouching(edges[3])) {
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3])
  }
  
if(ball.isTouching(paddle)){

    randomVelocity()
  }
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  
  if ( paddle.isTouching(edges[2]) || paddle.isTouching(edges[3])) {
   paddle.bounceOff(edges[2]);
   paddle.bounceOff(edges[3])
  }
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y -20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.y = paddle.y +20;
  }
  drawSprites();
  
}

function randomVelocity()
{
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  ball.velocityY = -3;
}

