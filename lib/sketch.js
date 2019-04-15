var scl = 40;
var game, player;

var food;


function setup() {
  createCanvas(600,600);
  game = new Game();
  player = new Player();
  food = new Food();
  frameRate(50);




}




function draw() {
  background(50);

  textSize(15);

  fill('#f0ffff');
  text('TheWomanWhoCarryFatman' , 100, 25)

  fill(255, 0, 100);
  text('OVERWEIGHT: '+ game.score, 425, 25);

  player.show();
  player.update();

  food.update();

  if(food.foodType == "vegatable"){
      fill("green");
  }
  else if(food.foodType == "fastFood"){
      fill("red");
  }

  rect(food.x, food.y, scl, scl);

  if(food.y >= 600){
     food = new Food();
    }

  if(player.eat(food)){

      if(food.foodType == "vegatable"){
        game.score -= 2;
      }
      else if(food.foodType == "fastFood"){
          game.score += 5;
      }


    food = new Food();
  }

}




function keyPressed() {
  if (keyCode === UP_ARROW){
    player.dir(0,-1);
  } else if(keyCode === DOWN_ARROW){
    player.dir(0,1);
  } else if(keyCode === LEFT_ARROW){
    player.dir(-1,0);
  } else if(keyCode === RIGHT_ARROW){
    player.dir(1,0);
  }
}

