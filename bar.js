class Bar {

   
        constructor(x,y){
            var options={
                restitution: 0.7,
                friction: 0.5,
                density:1
            }
            this.body= Bodies.rectangle(x,y,700,30,options);
            this.width=700;
            this.height=30;
    
           // World.add(gameWorld,this.body);
        }
        display(){
            var pos=this.body.position
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            stroke("green");
            strokeWeight(3);
            fill("yellow");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
    }
  

