var bg,tom1,tom2,tom3,mouse1,mouse2,mouse3;
var tom,mouse;

function preload() {
    //load the images here
    bg = loadImage("imagens/garden.png");
    tom1 = loadAnimation("imagens/cat1.png");
    tom2 = loadAnimation("imagens/cat2.png","imagens/cat3.png");
    tom3 = loadAnimation("imagens/cat4.png");
    mouse1 = loadAnimation("imagens/mouse1.png");
    mouse2 = loadAnimation("imagens/mouse2.png","imagens/mouse3.png");
    mouse3 = loadAnimation("imagens/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomdormindo",tom1);
    tom.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("jerrylevantando",mouse1);
    mouse.scale - 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x -mouse.x -(tom.width -mouse.width)/2){
        tom.velocityX = 0 ;
        tom.addAnimation("ultimotom",tom3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("ultimotom");
        mouse.addAnimation("ultimomouse",mouse3);
        mouse.scale= 0.15;
        mouse.changeAnimation("ultimomouse");
        
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFTARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomcorrendo",tom2);
        tom.changeAnimation("tomcorrendo");
        mouse.addAnimation("mouseprovocando",mouse2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseprovocando");
    }


}
