class Paper{

    constructor(x,y){

 var options= {
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:1.2
 
 }


 this.body = Bodies.circle(x,y,30,options);
 World.add(world,this.body);

 //calling the function
keyPressed();

}

display(){
 
  ellipseMode(RADIUS) 

  ellipse(this.body.position.x,this.body.position.y,20,20)
}


}



