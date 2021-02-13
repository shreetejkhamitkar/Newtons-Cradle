class Bob
{
    constructor(x,y,r)
   {
   
    var options={
   isStatic:false,
   restitution:1.2,
   friction:0.4,
   density:3.0

   

 
    }
    this.x=x;
    this.y=y;
    this.r=r;

    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body);
}
display()
{
    var bobposition=this.body.position;
    push()
    translate(bobposition.x,bobposition.y);
    rotate (this.body.angle)
    rectMode(CENTER);
    fill(255,0,255);
    
    ellipseMode(CENTER);
    ellipse(0,0,this.r,this.r)
        pop()
}
}





