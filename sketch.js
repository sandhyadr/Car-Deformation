
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1920,1080);
  //createSprite(400,200,50,50);
  //let r = 255;
  //let g = 255;
  //let b = 255;
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  
  background(r,g,b);
  let c = color(255, 204, 0);
  fill(c);
  ellipse(mouseX, mouseY, 10, 10);

  r = map(mouseX,0,width,0,255,true);
  g = map(mouseX,0,width,50,150,true);
  b = map(mouseX,0,width,100,200,true);
  
}