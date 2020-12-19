class Bobs{
    constructor(x,y,radius){
        var ballOption={
            isStatic:false,
        }
        this.body=Bodies.circle(x,y,20,ballOption)
   World.add(world,this.body)
    
     } 
 
 display(){
       ellipseMode(RADIUS)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,20,20) 
 }
 
 }