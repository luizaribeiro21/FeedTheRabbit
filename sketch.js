var jardim,coelho;
var imagemDoJardim,imagemDoCoelho;
var maça,imagemDaMaça; 
var folha, imagemDaFolha; 
var folhaLaranja, imagemDaFolhaLaranja; 

function preload(){
  imagemDoJardim = loadImage("garden.png");
  imagemDoCoelho = loadImage("rabbit.png");
  imagemDaMaça = loadImage ("apple.png"); 
  imagemDaFolha = loadImage ("leaf.png"); 
  imagemDaFolhaLaranja = loadImage ("orangeLeaf.png"); 
}

function setup(){
  
  createCanvas(400,400);
  text ("points", 350,10); 
  
  jardim=createSprite(200,200);
  jardim.addImage(imagemDoJardim);


  coelho = createSprite(180,340,30,30);
  coelho.scale =0.09;
  coelho.addImage(imagemDoCoelho);
  
  maça = createSprite (200,0,40,40); 
  maça.velocityY = 5; 
  maça.addImage (imagemDaMaça); 
  maça.scale = 0.1; 
  
  folha = createSprite (200,0,40,40); 
  folha.velocityY = 5; 
  folha.addImage (imagemDaFolha); 
  folha.scale = 0.1;
  
  folhaLaranja = createSprite (200,0,40,40); 
  folhaLaranja.velocityY = 5; 
  folhaLaranja.addImage (imagemDaFolhaLaranja); 
  folhaLaranja.scale = 0.1;
  
   
}


function draw() {
  background(0);
  text ("points", 350,10); 
  
  bordas= createEdgeSprites();
  
  coelho.collide(bordas);
  
  coelho.x = World.mouseX; 
  
  apple(); 
  leaves();
  orangeleaves(); 

  if (coelho.isTouching(maça)){
    maça.x = 1000; 
  }
  
   if (coelho.isTouching(folha)){
    folha.x = 1000; 
  }
  
   if (coelho.isTouching(folhaLaranja)){
    folhaLaranja.x = 1000; 
  }

  drawSprites();
}

function apple (){
  
    if (frameCount%80 === 0){
    maça = createSprite (200,0,40,40); 
    maça.velocityY = 6; 
    maça.addImage (imagemDaMaça); 
    maça.scale = 0.1; 
    maça.x = Math.round (random (10,390)); 
    maça.depth = coelho.depth; 
    coelho.depth = coelho.depth +1; 
    }

} 

function leaves (){
  
    if (frameCount%80 === 0){
    folha = createSprite (80,0,40,40); 
    folha.velocityY = 8; 
    folha.addImage (imagemDaFolha); 
    folha.scale = 0.1; 
    folha.x = Math.round (random (10,390)); 
    folha.depth = coelho.depth; 
    coelho.depth = coelho.depth +1; 
    }

} 

function orangeleaves(){
  if (frameCount%80 === 0){
    folhaLaranja = createSprite (30,0,40,40); 
    folhaLaranja.velocityY = 10; 
    folhaLaranja.addImage (imagemDaFolhaLaranja); 
    folhaLaranja.scale = 0.1; 
    folhaLaranja.x = Math.round (random (10,390)); 
    folhaLaranja.depth = coelho.depth; 
    coelho.depth = coelho.depth +1; 
  }
}







