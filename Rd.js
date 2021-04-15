class Rd{
    constructor(x,y){
    friction:0.2
    }
    update(){
        if(this.raind.position.y>height){
            Matter.body.setPosition(this.raind, {x:random(0,400)}, {y:random(0,200)})
        }
    }
    drawRain(){
        ellipse()
    }
    update(){
        this.raind = Bodies.circle(x,y,4,options);
        ellipse(10,10,drop.x.drop.y,);
    }
}