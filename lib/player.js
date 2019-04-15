function Player() {
  this.x = mouseX;
  this.y = mouseY;
  this.xspeed = 1;
  this.yspeed = 0;

  this.dir =function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }


  this.update = function() {

    this.death();

   // this.x = this.x + this.xspeed*(scl);
   // this.y = this.y + this.yspeed*(scl);

    this.x = mouseX - 10;
    this.y = 480;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);


  }

  this.show = function(){
    fill('yellow');
    rect(this.x, this.y, scl ,scl);
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if(d<45){
      return true;
    } else{
      return false;
    }
  }

  this.death = function() {

  }
}



function Food() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  this.vec = createVector(floor(random(cols)), 0);
  this.vec.mult(scl);
  this.x = this.vec.x;
  this.y = this.vec.y;





  this.pickLocation = function(){

    this.vec = createVector(floor(random(cols)), floor(random(rows)));
    this.vec.mult(scl);

  }

  this.update = function(){
    this.y += 8;
  }

  this.pickType = function(){
    var randType = Math.ceil(Math.random()*10);

    if(randType < 6){
      return("vegatable");
    }
    else{
      return("fastFood");
    }

  }

      this.foodType = this.pickType();

}