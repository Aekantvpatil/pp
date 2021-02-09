class dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.dustbinWidth=200
        this.dustbinHeight=213
        this.wallthickness=20
this.dustbingreen_img= loadImage("dustbingreen.png")

this.boxLeftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight , {isStatic:true} );
World.add(world, this.boxLeftBody);
this.boxBottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true} );
World.add(world, this.boxBottomBody);
this.boxRightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true} );
World.add(world,this.boxRightBody);
    }
    display(){
        var posBottom=this.boxBottomBody.position
        var posleft=this.boxLeftBody.position
        var posright=this.boxRightBody.position
    push()
    
        translate(posleft.x,posleft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255,0,255)
      rotate(this.angle)
      //  ellipse(0,0,this.r,this.r);
       
        pop()
        push()
        translate(posright.x,posright.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255,0,255)
      rotate(this.angle)
        pop()
        push()
        translate(posBottom.x,posBottom.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255,0,255)
      rotate(this.angle)
      image(this.dustbingreen_img,0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeigh)
        pop()

    }
}
