class Ball{
    constructor(x,y,r){
        let options={
            isStatic:false,
		    restitution:0.1,
		    friction:0,
		    density:0.8
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.r=r
        World.add(world,this.body);
    }
    show(){
        let pos=this.body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        stroke(255)
        fill(127)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}