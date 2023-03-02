let canvas;

let b = document.getElementByClass("left");
let w = b.clientWidth;
let h = b.clientHeight;

let displayCursor = true;
let mouseDetected = false;
let moveDetected =0;

let vertPull = 0;
let horzPull = 0;

let gridSpacing;

let targetX;
let targetY;

let cursorX;
let cursorY;

let mouseFill = 0;
let mouseColor;
let mouseRadius;

let x ;
let y ;
let easing = 0.15;


function setup() {
  canvas = createCanvas(100, 100);
  mouseColor = color(255,255,255,0);
  
  canvas.parent('sketch-holder');
  
  noCursor();

  targetX = 0;
  targetY = 0;


cursorX = width/2;
cursorY = height/2;
  
x = width/2;
y = height/2 ;
  
  
canvas.touchStarted(cursorOff);
      
}


function draw() {
  background(255);
  
  checkRatio();
  getMousePoints();
  
  
    push();
    translate(horzPull*15, vertPull*15);
    translate(-50, -50);
      for (var i = 0; i < mostDim + 200; i += gridSpacing) {
      strokeWeight(1);
      stroke(0,0,0,20);
      line(i, 0, i, height+200);
      line(width+200, i, 0, i);
    }
    pop();
  
  
}


//FUNCTIONS ____________________________________________________________________________________________
//_________________________________________________________



function mouseMoved(){

      mouseDetected = true;
  
      targetX = mouseX;
      targetY = mouseY;

}


  
function checkRatio() {
  
  if(width/height >1){  
    mostDim = width;

    gridSpacing = mostDim/100;
    mouseRadius = width/30;

  }
    
  
  if(width/height <=1){ 
    mostDim = height;
    
    gridSpacing = mostDim/50
    mouseRadius = width/20;

  }
  
    if(width/height >1.8){ 

    gridSpacing = mostDim/120;
    mouseRadius = width/50;

    }

}


function getMousePoints() {
  
      let dx = targetX - x;
      x += dx * easing;
      
      let dy = targetY - y;
      y += dy * easing;  
  
      cursorX = x;
      cursorY = y;
    
      horzPull = map(cursorX - (width/2), -width/2, width/2, -1, 1);
      vertPull = map(cursorY - (height/2), -height/2, height/2, -1, 1);
  
}


function windowResized() {
  canvas = resizeCanvas(window.innerWidth, window.innerHeight);

}

function cursorOff() {
  displayCursor = false;

}
