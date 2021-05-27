class Launcher
{
  constructor(body,point)
  {
     var options={
         bodyA:body,
         pointB:point,
         stiffness:0.01,
         length:17
     }
     this.special=Matter.Constraint.create(options)
     Matter.World.add(world,this.special)
     this.point=point;
  }
  display()
  {
    if(this.special.bodyA != null)
    {
        strokeWeight(5)
        line(this.special.bodyA.position.x,this.special.bodyA.position.y,this.point.x,this.point.y)      
    }
    
  }
  fly()
    {
        this.special.bodyA=null;
    }
}