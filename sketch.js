var canvas,bg;
var together;
var tom,tomImg1,tomImg2;
var jerry,jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(200, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.5;

    jerry = createSprite(800, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.20;
}

function draw() {

    background(bg);

    if(tom.x - jerry.x > (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x=275;
        tom.scale=0.5;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.20;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        tom.velocityX = 2.5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 20;
        jerry.changeAnimation("jerryTeasing");
    }
}