class Rope{

    constructor(bodyA,bodyB,pointx,pointy){
        this.pointx=pointx
        this.pointy=pointy

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{
                x:this.pointx,
                y:this.pointy
            },
            stiffness: 0.5

        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope)
    }
    display(){
        var posA=this.rope.bodyA.position;
        var posB=this.rope.bodyB.position;
        strokeWeight(2);
        stroke("cyan");
        line(posA.x,posA.y,posB.x+this.pointx,posB.y+this.pointy);








    }
}