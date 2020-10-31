class Box {
    constructor(x, y, width, height) {
      var options = {
         friction : 0.1,
         density : 1.0
      }

      this.Visibilty = 255;

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }


    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //fill("red");
     if (this.body.speed < 3){
      rect(pos.x, pos.y, this.width, this.height);
     }
     else {
       World.remove(world,this.body);
      }
    }
}