let Font;

let vertPull = 0;
let horzPull = 0;

let cpOffestX1,cpOffestY1,cpOffestX2,cpOffestY2;

let v1,v2,v3,v4,v5,v6;

let targetX;
let targetY;

let cursorX;
let cursorY;

let x ;
let y ;
let easing = 0.05;

let x1,y1,x2,y2,x3,y3,x4,y4;

let rotAngle = 0;

function preload() {
  Font = loadFont('Montserrat-Regular.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  
targetX = width/2;
targetY = height/2;
  
x = width/2;
y = height/2 ;
    
}

function draw() {
  background(245);
  
  strokeWeight(3);
  fill(255);
  circle(mouseX, mouseY, 20);
  
  push();
  translate(horzPull*15, vertPull*15);
  translate(-50, -50);
    for (var i = 0; i < width+200; i += 20) {
    strokeWeight(1);
    stroke(0,0,0,30);
  	line(i, 0, i, height+200);
  	line(width+200, i, 0, i);
  }
  pop();
  
  
  noStroke();
  textFont(Font);
  fill(30);
  textSize(width/20);
  textAlign(LEFT, CENTER);
  text("non", width/26 + (horzPull*(width/75)), width/30 );
  textSize(width/20);
  text("Linear", width/40 - (horzPull*(width/75)), (width/30)*(2.3));
  
  translate(width/2, height/2);
  angleMode(DEGREES);
  rotate(rotAngle);
  translate(-width/2, -height/2);
  
  translate(0,vertPull*50);
  
  getMousePoints();
  bezierPoints();
  
  v0 = createVector(x1,y1);
  v1 = createVector(cpOffestX1, -cpOffestY1);
  
  v2 = createVector(width-x1, y1);
  v3 = createVector(-cpOffestX1, cpOffestY1);
  
  v4 = createVector(width/2, height/2);
  v5 = createVector(mouseX -width/2 , mouseY - height/2 );
  v6 = createVector(-(mouseX -width/2), -(mouseY - height/2));
  
    
  strokeCap(SQUARE);
  stroke(180);
  strokeWeight(5);

  
  fill(255,160);
  strokeWeight(8);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  bezier(x4, y4, width-x3, height-y3, width-x2, height-y2, width-x1, y1);
  

  
  
  stroke(0);
  strokeWeight(2);
  line(-width,height/2, width*3, height/2)
 
  stroke(0,150); 
  strokeWeight(10 * (abs(vertPull/1) + 1));  
  point(x3, y3);
  point(width-x3, height-y3);
  
  drawArrow(v0, v1, 255, 0, 0, 140 , 5, 17, 12, 7);   
  drawArrow(v2, v3, 255, 0, 0, 140, 5, 17, 12, 7); 
  
  drawArrow(v4, v5.limit(50), 0, 0, 255, 140, 3, 15, 8, 5); 
  drawArrow(v4, v6.limit(50), 0, 255, 0, 140, 3, 15, 8, 5);


  
  
}


//FUNCTIONS ____________________________________________________________________________________________
//_________________________________________________________



function mouseMoved(){
  targetX = mouseX;
  targetY = mouseY; 
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
  
  rotAngle = constrain((vertPull* horzPull)*20, -15, 15)
  
}



function bezierPoints(){
  
  cpOffestX1 = (width/100 * (horzPull*10));
  cpOffestY1 = (height/4 * constrain((-vertPull*1.5),-1.5,1.5));
  cpOffestX2 = (width/120 * (horzPull*20));
  cpOffestY2 = (height/4 * abs((-vertPull)*0.85));
  
  if(width/height >1){    
    x1=width/3;
    y1=height/2 ;
    x2= x1 + cpOffestX1;
    y2= y1 - cpOffestY1;
    x3=x1 + cpOffestX2;
    y3=y1 - cpOffestY2;
    x4=width/2;
    y4=height/2
   }
  
  if(width/height <= 1){
    x1=width/3;
    y1=height/2 ;
    x2= x1 + cpOffestX1;
    y2= y1 - cpOffestY1;
    x3=x1 + cpOffestX2;
    y3=y1 - cpOffestY2;
    x4=width/2;
    y4=height/2
  }

}

function drawArrow(base, vec, r, g, b, a , s , as, d1, d2) {
  push();
  stroke(r, g, b, a);
  strokeWeight(s);
  fill(r, g, b, a);
  translate(base.x, base.y);
    push();
    setLineDash([ d1, d2]);
    line(0, 0, vec.x, vec.y);
    pop();
  rotate(vec.heading());
  let arrowSize = as;
  translate(vec.mag() - arrowSize, 0);
  fill(r, g, b);
  stroke(r, g, b);
  triangle(0, arrowSize / 3, 0, -arrowSize / 3, arrowSize, 0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}



function setLineDash(list) {
  drawingContext.setLineDash(list);
}


