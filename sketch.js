var canvas,ground,groundi;

var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;


function preload() {
groundi = loadImage("images/garden.png"); 

//corrected 
tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");


/*tomi = loadImage("images/cat1.png");
tomr = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png");
jeri = loadAnimation("image/mouse1.png","image/mouse2.png","image/mouse3.png","image/mouse4.png");*/
}

function setup(){
    createCanvas(1000,800);

  /* ground = createSprite(500,350,10,10);
   ground.addImage(groundi);
   ground.scale = 1.4;*/

   cat = createSprite(850,600,10,10);
   cat.addAnimation("sleeping",tomImg1);
   cat.scale = 0.1;

  jer = createSprite(100,600,10,10);
  jer.addAnimation("jerryStanding", jerryImg1);
  jer.scale=0.15;

}

function draw() {

  //corrected
    background(groundi);
   
 /*   if(keyDown("left")){
      cat.velocityX = -5;
  
    }*/
    drawSprites();
}


function keyPressed(){



}
