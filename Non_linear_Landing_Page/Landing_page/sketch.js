let canvas;
let Font;

let displayCursor = true;
let mouseDetected = false;

var offset = 0;
let sinPos;

let vertPull = 0;
let horzPull = 0;

let gridSpacing;

let vertOffset;

let tSize;

let leastDim, mostDim;

let bezierThic, arrowLineThic, arrowThic, dotThic, dashSpacing;

let centerlineThic;

let cpOffestX1,cpOffestY1,cpOffestX2,cpOffestY2;

let v1,v2,v3,v4,v5,v6;

let targetX;
let targetY;

let cursorX;
let cursorY;

let vertAnimPos;
let vertAnimToggle = false;
let rectFillAlpha = 0;
let speed1 = 0.02;
let trans1 = 0;
let speed2 = 0.02;
let trans2 = 0;

let mouseFill = 0;
let mouseColor;
let mouseRadius;

let x ;
let y ;
let easing = 0.15;

let x1,y1,x2,y2,x3,y3,x4,y4;

let whiteC ;
let orangeC ;
let blackC ;
let tealC ;

let interA;
let interB;

let abtButton;
let buttonOffset;
let buttonSize;

let rotAngle = 0;

let abtText;

function preload() {
  Font = loadFont('MontserratAlternates-Regular.ttf');

}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  mouseColor = color(255,255,255,0);
  
  noCursor();
  
  abtText = createP("Non-Linear is a creative practice by 'Dennis Fabian Peter' with a primary focus on Art, Design and Tech.");
  abtText.style('font-family', 'Montserrat');
  abtText.style('display', 'none');
  abtText.style('cursor', 'none');

  
  whiteC = color(255,255,255);
  orangeC = color(255, 102, 41);
  blackC = color(0);
  tealC = color(24,163,140, 220);
  clearC = color(255,255,255, 0);
  
  vertAnimPos = 0;

if(width/height > 1){  
  targetX = width/1.1;
  targetY = height - height/20;
  }
else{
  targetX = width - width/20;
  targetY = height - height/10;  
  }
  
cursorX = width/2;
cursorY = height/2;
  
x = width/2;
y = height/2 ;
  
  abtButton = createButton('about');
  abtButton.style('font-family', 'Montserrat Alternates');
  abtButton.style('border', '3px solid black');  
  abtButton.style('background-color', 'transparent'); 
  abtButton.style('cursor', 'none');
  
  canvas.touchStarted(cursorOff);
      
}


function draw() {
  background(255);
  
  
  
  abtButton.position(buttonOffset, height / 50);
  abtButton.style('font-size', buttonSize + 'px');
  abtButton.mouseOver(abtMouseOver);
  abtButton.mouseOut(abtMouseOut);
  //abtButton.touchStarted(abtAnimation);
  abtButton.mouseClicked(abtAnimation);
  abtButton.mouseReleased(()=>abtButton.style('background-color', 'transparent'));
  
  
  abtText.position(0,height/2);
  abtText.style('font-size', width/40 + 'px');
  abtText.style('padding-left', width/20 + 'px');
  abtText.style('padding-right', width/20 + 'px');
  

  
  if(mouseDetected==true && displayCursor==true){
    targetX = mouseX;
    targetY = mouseY; 
    } else{
              if(mouseIsPressed===true){
                targetX = mouseX;
                targetY = mouseY; 
                fill(0); 
              }
              if(mouseIsPressed===false){
                fill(255);
                targetX = constrain(180-(-rotationY * 15),0,canvas.width);
                targetY = constrain(((rotationX*25)-600),0,canvas.height);
              }
}
  
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
  
  
  /////////////////////////////////////////////////
  push();
  
  let easedTrans1 = map2(trans1,0,1,0,1,QUARTIC, BOTH);
  
  if(vertAnimToggle == false){
    if(trans1>0){
       trans1 -= speed1;     
       }
  
    }
  
  if(vertAnimToggle == true){
        if(trans1 < 1){
          trans1 += speed1;    
          }
          abtText.style('display', 'inline');
    }
  
  if(trans1 <= 0.1){
     abtText.style('display', 'none');
     }
  
  vertAnimPos = easedTrans1 *(-height*1.5);
  rectFillAlpha = easedTrans1 * 100
  
  interA = lerpColor(orangeC, whiteC, easedTrans1);
  interB = lerpColor(blackC, whiteC, easedTrans1);
  interC = lerpColor(tealC, whiteC, easedTrans1);
  interD = lerpColor(clearC, whiteC, easedTrans1);
  
  
  let abtFontColor = interB;
  let abtTextColor = interD;
  
  abtButton.style('color', str(interB));
  abtButton.style('border-color', str(interB));
  abtText.style('color', str(interD));

  
  translate(0,vertAnimPos);
  
  ///////////////////////////////////////////////
  
  translate(width/2, height/2);
  angleMode(DEGREES);
  rotate(rotAngle);
  translate(-width/2, -height/2);
  
  translate(0,vertOffset);
  
  push();
    fill(50,rectFillAlpha);
    rect(-width,height/2, width*4, height*10);
  pop();
  
  push()
  stroke(0,100);
  setLineDash([ 8, 8])
  strokeWeight(centerlineThic);
  translate(sin(millis()/1000) * width,0);
  line(-2*width,height/2, width*4, height/2)
  pop()
  
  
  v0 = createVector(x1,y1);
  v1 = createVector(cpOffestX1, -cpOffestY1);
  
  v2 = createVector(width-x1, y1);
  v3 = createVector(-cpOffestX1, cpOffestY1);
  
  drawArrowLine(v0, v1, 60, 240, 210, 240 , arrowLineThic, dashSpacing, dashSpacing/1.5);   
  drawArrowLine(v2, v3, 60, 240, 210, 240, arrowLineThic, dashSpacing, dashSpacing/1.5); 
  
  strokeCap(SQUARE);  
  stroke(10, 140); 
  fill(241, 253, 251,140);
  strokeWeight(bezierThic);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  bezier(x4, y4, width-x3, height-y3, width-x2, height-y2, width-x1, y1);
  
  drawArrow(v0, v1, arrowThic);   
  drawArrow(v2, v3, arrowThic); 

  push();
  noStroke();
  fill(255,190);
  circle(x3, y3, dotThic * (abs(vertPull/1) + 1.5));
  circle(width-x3, height-y3, dotThic * (abs(vertPull/1) + 1.5));
  fill(255, 102, 41,250); 
  circle(x3, y3, dotThic * (abs(vertPull/1) + 1));
  circle(width-x3, height-y3, dotThic * (abs(vertPull/1) + 1));
  pop();
  pop();
  
  
  push();//SINE****************
    stroke(interC);
    translate(sinPos,height - height / 20);
    sine();
  pop();
  
if(displayCursor == true ){
  if(mouseDetected == true){mouseColor = interA;}
  
  push();
  strokeWeight(4);  
  stroke(mouseColor);
  mouseColor.setAlpha(mouseFill)
  fill(mouseColor)
  circle(mouseX, mouseY, mouseRadius);
  pop();
}
  
  noStroke();
  textFont(Font);
  fill(interB);
  textSize(tSize);
  textAlign(LEFT, CENTER);
  text("non", tSize/1 + (horzPull*(tSize/5)), tSize/1.5 );
  textSize(tSize);
  text("linear", tSize/1.9 - (horzPull*(tSize/3.4)), (tSize/1.5)*(2.3));
  
}


//FUNCTIONS ____________________________________________________________________________________________
//_________________________________________________________



function mouseMoved(){

      mouseDetected = true;
  
      targetX = mouseX;
      targetY = mouseY;

}

function touchMoved() {

}


function deviceMoved() {
  easing = 0.1;
  
  }

  
function checkRatio() {
  
  if(width/height >1){  
    mostDim = width;
    bezierThic = width/100;
    arrowLineThic = width/200;
    arrowThic = width/30;
    dashSpacing = width/100;
    centerlineThic = 2;
    dotThic =  width/80;
    
    vertOffset = -vertPull*(height/15);
    
    cpOffestX1 = (width/100 * (horzPull*10));
    cpOffestY1 = (height/5 * constrain((-vertPull*1.5),-1.5,1.5));
    cpOffestX2 = (width/120 * (horzPull*20));
    cpOffestY2 = (height/4 * abs((-vertPull)*0.85));
    
    x1=width/3;
    y1=height/2 ;
    x2= x1 + cpOffestX1;
    y2= y1 - cpOffestY1;
    x3=x1 + cpOffestX2;
    y3=y1 - cpOffestY2;
    x4=width/2;
    y4=height/2
    
    tSize = width/23;
    sinPos = width/30;
    
    gridSpacing = mostDim/100;
    mouseRadius = width/30;
    
    buttonSize = width/50;
    buttonOffset = width -  width/11;
    
    
  }
    
  
  if(width/height <=1){ 
    mostDim = height;
    bezierThic = width/80;
    arrowLineThic = width/100;
    arrowThic = width/17;
    dashSpacing = width/50;
    centerlineThic = 1;
    dotThic = width/40;
    
    vertOffset = vertPull*(height/15);
    
    cpOffestX1 = (width/100 * (horzPull*20));
    cpOffestY1 = (height/6 * constrain((-vertPull*1.5),-1.5,1.5));
    cpOffestX2 = (width/80 * (horzPull*20));
    cpOffestY2 = (height/4 * abs((vertPull)*0.85));
    
    x1=width/4;
    y1=height/2 ;
    x2= x1 + cpOffestX1;
    y2= y1 - cpOffestY1;
    x3=x1 + cpOffestX2;
    y3=y1 - cpOffestY2;
    x4=width/2;
    y4=height/2
    
    tSize = width/13;
    sinPos = width/20;
    
    gridSpacing = mostDim/50
    mouseRadius = width/20;
    
    buttonSize = width/30;
    buttonOffset = width -width/6.3;
  }
  
    if(width/height >1.8){ 
      
    cpOffestX1 = (width/100 * (horzPull*10));
    cpOffestY1 = (height/3.5 * constrain((-vertPull*1.5),-1.5,1.5));
    cpOffestX2 = (width/120 * (horzPull*20));
    cpOffestY2 = (height/2 * abs((vertPull)*0.85));
    
    x1=width/3;
    y1=height/2 ;
    x2= x1 + cpOffestX1;
    y2= y1 - cpOffestY1;
    x3=x1 + cpOffestX2;
    y3=y1 - cpOffestY2;
    x4=width/2;
    y4=height/2;
      
    tSize = width/28;
    
    gridSpacing = mostDim/120;
    mouseRadius = width/50;
      
    buttonSize = width/70;
    buttonOffset = width -  width/15;

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

      rotAngle = constrain((vertPull* horzPull)*20, -15, 15)
  
}



function drawArrow(base, vec, as) {
  push();
  translate(base.x, base.y);
  rotate(vec.heading());
  let arrowSize = as;
  translate(vec.mag() - arrowSize, 0);
  
  noStroke();
  fill(24,163,140);
  triangle(20, arrowSize / 3, 20, -arrowSize / 3, arrowSize + 20, 0);
  pop();
}

function drawArrowLine(base, vec, r, g, b, a , s , d1, d2) {
  push();
  strokeCap(SQUARE);
  stroke(r, g, b, a);
  strokeWeight(s);
  fill(r, g, b, a);
  translate(base.x, base.y);
    push();
    setLineDash([ d1, d2]);
    line(0, 0, vec.x, vec.y);
    pop();
  pop();
}


function sine(){
  
  strokeWeight(3);
  noFill();
  beginShape();
  for(var x = 0; x < constrain(width/8,0,130); x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 10;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -width/10000, width/10000, -width/1000, width/1000);
    vertex(x, y);
  }
  endShape();
  offset += 5;
}



function abtAnimation(){
  
  vertAnimToggle = !vertAnimToggle;
  abtButton.style('background-color', 'rgb(255, 102, 41,0.3)' );
  
}


function abtMouseOver(){
  mouseFill = 255;
  abtButton.style('background-color', 'rgb(220,220,220,0.7)' );
  
}


function abtMouseOut(){
  mouseFill = 0;
  abtButton.style('background-color', 'transparent' );
  
}

function windowResized() {
  canvas = resizeCanvas(window.innerWidth, window.innerHeight);

}

function cursorOff() {
  displayCursor = false;

}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}

