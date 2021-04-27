class Chain{
    constructor(myBodyA, myBodyB){
        var options={
            bodyA: myBodyA,
            bodyB: myBodyB,
            length:6,
            stiffness: 0.05
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pointA= this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}