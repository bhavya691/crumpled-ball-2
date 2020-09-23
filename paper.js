class paper{
    constructor(){
    var options = {
       
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      
    }
    this.body = Bodies.circle(100,200,55,options);
    this.image = loadImage("throw.png");
    World.add(world,this.body);

    }

    display(){
    var pos = this.body.position;
    imageMode(CENTER);
  
    image(this.image,pos.x, pos.y,50,60);
    }






}