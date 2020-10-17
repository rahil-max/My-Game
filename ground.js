class Ground{
    constructor(x){
        this.sprite = createSprite(x,200,displayWidth+50000,50);
        this.groundimg = loadImage("Images/ground2.png");
        //this.x = bg.x;
        //pathgroup.add(this.sprite);
    }
    display(){
        this.sprite.addImage("ground",this.groundimg);
        this.groundimg.resize(displayWidth+50000,50);
        }
    }