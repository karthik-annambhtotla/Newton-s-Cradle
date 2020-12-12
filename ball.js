class Ball{
    constructor(x,y){
        var options= { 
            restitution:0.9,
            density:0.3

        }
       this.body=Bodies.circle(x,y,20,options);
        this.radius=20;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
       fill("red")
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
       pop();
    }
}