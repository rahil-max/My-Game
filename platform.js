class platform{
    constructor(x,y){
        this.x=x;
        this.y=y; 
        this.sprite = createSprite(x,y,100,20);
        this.platformimg = loadImage("Images/grass.png");
        this.sprite.collide(boy);
    }

    display(){
    this.sprite.addImage("platform",this.platformimg);
    this.sprite.scale = 0.1;
    }
}