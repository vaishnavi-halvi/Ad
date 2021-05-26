class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            friction:0.5,
            density:1
        }
        this.body = Bodies.rectangle(x, y-height/2, width, height, options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill(random(0,255),random(0,255),random(0,255))
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }

      remove(){
        World.remove(world, this.body);
      }
}