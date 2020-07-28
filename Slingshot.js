class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.sling3=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.position){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+20,pointB.y)
            image(this.sling3,pointA.x-20,pointA.y-10,15,30)
            }
            else{
            line(pointB.x-20,pointB.y,pointA.x+20,pointA.y) 
            line(pointB.x+20,pointB.y,pointA.x+20,pointA.y)
            image(this.sling3,pointA.x+20,pointA.y-10,15,30)

            }        }
    }
    
}