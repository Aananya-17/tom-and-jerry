var background , backgroundImage;
var cat, catImg2;
var mouse , mouseImage;
function preload() {
    //load the images here
backgroundImage = loadImage("garden.png");
catImg2 = loadImage("cat2.png");
mouseImage = loadImage("mouse1.png");
catImg3 = loadImage("cat3.png");


}

function setup(){
    createCanvas(1000,800);
    background.AddImage(backgroundImage);
    mouse.addAnimation(mouseImage);
    //create tom and jerry sprites here


}

function draw() {

    background(255);

    Text(mouseX + ',' + mouseY, 40 ,45);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2)
      cat.changeAnimation("catRunning");

  }

}
