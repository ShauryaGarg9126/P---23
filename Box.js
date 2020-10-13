class Box 
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic : false
           
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display()
    {
        
       var p = this.body.position;
     // translate(p.x,p.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.width, this.height);
        

    }
}