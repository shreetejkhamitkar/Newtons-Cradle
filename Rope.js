class Rope {
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
    bodyA: body1,
    bodyB: body2,
    pointB:{x:this.offsetX, y:this.offsetY}
    
    }
    
    this.rope=Constraint.create(options);
    World.add(world, this.rope);
    }
    
    display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(3);
    var Anchorx1=pointA.x;
    var Anchory1=pointA.y;
    var Anchorx2=pointB.x+ this.offsetX;
    var Anchory2=pointB.y+this.offsetY;
    line(Anchorx1, Anchory1, Anchorx2, Anchory2);
    }
    }
    