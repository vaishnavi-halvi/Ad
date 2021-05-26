class Guy{
    constructor() {
        var options = {
            isStatic:false, 
             friction:0.5,
            density:1
        }
        this.body = Bodies.rectangle(270,500,20,220,options);
        World.add(world, this.body);
        
      }
      display(){
          boy1.x=this.body.position.x
          boy1.y=this.body.position.y
         
          
        }

      remove(){
        World.remove(world, this.body);
      }
}