class Paper{
    constructor(x, y, radius){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        circle(pos.x,pos.y,40,40);
    }
}