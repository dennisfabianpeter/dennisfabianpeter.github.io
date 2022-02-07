let regularFont;
let boldFont;
let mediumFont;
let italicFont;

let x = 0;
let y = 0;
let easing = 0.08;

let cursorX = 0;
let cursorY = 0;

let circles = [];

let circlesSmall = [];

  //Alpha Weights
  const L1 = 255;
  const L2 = 15;
  const L3 = 7;
  const L4 = 1;
  const L0 = 1;


const list = {
  nonlYOffset: 0.0001,  
  nonlAlpha: L4,
  nonlRGB:1,
    
  desYOffset: 0.0001,  
  desAlpha: L3,
  desRGB:1,
    
  tinkYOffset: 0.0001,  
  tinkAlpha: L2,
  tinkRGB:1,
    
  archYOffset: 0.0001,  
  archAlpha: L1,
  archRGB:255,
    
  artYOffset: 0.0001,  
  artAlpha: L2,
  artRGB:1,
  
  prodYOffset: 0.0001,  
  prodAlpha: L3,
  prodRGB:1,
  
  someYOffset: 0.0001,  
  someAlpha: L4,
  someRGB:1,
  
  aTransp: 255,
  nTransp: 255,
  aOffset: 1,
  
  imOffset: 0.00001,
  
}

let  fontHeightOffset = 5;
  

function preload() {
  boldFont = loadFont('Raleway-Bold.ttf');
  mediumFont = loadFont('Raleway-SemiBold.ttf');
}

  
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60);
  
  listTime = 1000,
  transitionTime = 500;
  
  
  p5.tween.manager.addTween(list)
      .addMotions([
        { key: 'nonlYOffset', target: 0.0001 ,},
        { key: 'nonlAlpha', target: L4 },
        { key: 'desYOffset', target: 0.0001 },
        { key: 'desAlpha', target: L2 },
        { key: 'tinkYOffset', target: 0.0001 },
        { key: 'tinkAlpha', target: L2 },
        { key: 'archYOffset', target: 0.0001 },
        { key: 'archAlpha', target: L1 },
        { key: 'artYOffset', target: 0.0001 },
        { key: 'artAlpha', target: L2 },
        { key: 'prodYOffset', target: 0.0001 },
        { key: 'prodAlpha', target: L3 },
        { key: 'someYOffset', target: 0.0001 },
        { key: 'someAlpha', target: L4 },
        ], listTime)
  
  
      .addMotions([
        { key: 'nonlYOffset', target: 1},
        { key: 'nonlAlpha', target: L3 },
        { key: 'desYOffset', target: 1},
        { key: 'desAlpha', target: L2 },
        { key: 'tinkYOffset', target: 1},
        { key: 'tinkAlpha', target: L1 },
        { key: 'archYOffset', target: 1},
        { key: 'archAlpha', target: L2 },
        { key: 'artYOffset', target: 1},
        { key: 'artAlpha', target: L3 },
        { key: 'prodYOffset', target: 1},
        { key: 'prodAlpha', target: L4 },
        { key: 'someYOffset', target: -6},
        { key: 'someAlpha', target: L4 },
        { key: 'archRGB', target: 1 },   //RGB
        { key: 'tinkRGB', target: 255 },   //RGB
      
        { key: 'aOffset', target: 0.0001 },   //A/N
        { key: 'nTransp', target: 0.0001 },   //A/N        
        ], transitionTime,'easeInOutQuad')
  
      .addMotions([
        { key: 'nonlYOffset', target: 1 },
        { key: 'nonlAlpha', target: L3 },
        { key: 'desYOffset', target: 1 },
        { key: 'desAlpha', target: L2 },
        { key: 'tinkYOffset', target: 1 },
        { key: 'tinkAlpha', target: L1 },
        { key: 'archYOffset', target: 1 },
        { key: 'archAlpha', target: L2 },
        { key: 'artYOffset', target: 1 },
        { key: 'artAlpha', target: L3 },
        { key: 'prodYOffset', target: 1 },
        { key: 'prodAlpha', target: L4 },
        { key: 'someYOffset', target: -6 },
        { key: 'someAlpha', target: L4 },
        ], listTime)
  
      .addMotions([
        { key: 'nonlYOffset', target: 2 },
        { key: 'nonlAlpha', target: L2 },
        { key: 'desYOffset', target: 2 },
        { key: 'desAlpha', target: L1 },
        { key: 'tinkYOffset', target: 2 },
        { key: 'tinkAlpha', target: L2 },
        { key: 'archYOffset', target: 2 },
        { key: 'archAlpha', target: L3 },
        { key: 'artYOffset', target: 2 },
        { key: 'artAlpha', target: L4 },
        { key: 'prodYOffset', target: -5 },
        { key: 'prodAlpha', target: L4 },
        { key: 'someYOffset', target: -5 },
        { key: 'someAlpha', target: L3 },
        { key: 'tinkRGB', target: 1 },   //RGB
        { key: 'desRGB', target: 255 },   //RGB
        ], transitionTime, 'easeInOutQuad')
  
      .addMotions([
        { key: 'nonlYOffset', target: 2 },
        { key: 'nonlAlpha', target: L2 },
        { key: 'desYOffset', target: 2 },
        { key: 'desAlpha', target: L1 },
        { key: 'tinkYOffset', target: 2 },
        { key: 'tinkAlpha', target: L2 },
        { key: 'archYOffset', target: 2 },
        { key: 'archAlpha', target: L3 },
        { key: 'artYOffset', target: 2 },
        { key: 'artAlpha', target: L4 },
        { key: 'prodYOffset', target: -5 },
        { key: 'prodAlpha', target: L4 },
        { key: 'someYOffset', target: -5 },
        { key: 'someAlpha', target: L2 },
        ], listTime)
  
  
      .addMotions([
        { key: 'nonlYOffset', target: 3 },
        { key: 'nonlAlpha', target: L1 },
        { key: 'desYOffset', target: 3 },
        { key: 'desAlpha', target: L2 },
        { key: 'tinkYOffset', target: 3 },
        { key: 'tinkAlpha', target: L3 },
        { key: 'archYOffset', target: 3 },
        { key: 'archAlpha', target: L4 },
        { key: 'artYOffset', target: -4 },
        { key: 'artAlpha', target: L4 },
        { key: 'prodYOffset', target: -4 },
        { key: 'prodAlpha', target: L3 },
        { key: 'someYOffset', target: -4 },
        { key: 'someAlpha', target: L2 },
        { key: 'desRGB', target: 1 },   //RGB    
        { key: 'nonlRGB', target: 255 },   //RGB
      
        { key: 'aTransp', target: 0.0001 },   //A/N
        { key: 'imOffset', target: 1 },   //im Offset
        ], transitionTime, 'easeInOutQuad')
  
      .addMotions([
        { key: 'nonlYOffset', target: 3 },
        { key: 'nonlAlpha', target: L1 },
        { key: 'desYOffset', target: 3 },
        { key: 'desAlpha', target: L2 },
        { key: 'tinkYOffset', target: 3 },
        { key: 'tinkAlpha', target: L3 },
        { key: 'archYOffset', target: 3 },
        { key: 'archAlpha', target: L4 },
        { key: 'artYOffset', target: -4 },
        { key: 'artAlpha', target: L4 },
        { key: 'prodYOffset', target: -4 },
        { key: 'prodAlpha', target: L3 },
        { key: 'someYOffset', target: -4 },
        { key: 'someAlpha', target: L2 },
        ], listTime)
  
  
      .addMotions([
        { key: 'nonlYOffset', target: 4 },
        { key: 'nonlAlpha', target: L2 },
        { key: 'desYOffset', target: 4 },
        { key: 'desAlpha', target: L3 },
        { key: 'tinkYOffset', target: 4 },
        { key: 'tinkAlpha', target: L4 },
        { key: 'archYOffset', target: -3 },
        { key: 'archAlpha', target: L4 },
        { key: 'artYOffset', target: -3 },
        { key: 'artAlpha', target: L3 },
        { key: 'prodYOffset', target: -3 },
        { key: 'prodAlpha', target: L2 },
        { key: 'someYOffset', target: -3 },
        { key: 'someAlpha', target: L1 },
        { key: 'nonlRGB', target: 1 },   //RGB    
        { key: 'someRGB', target: 255 },   //RGB
      
        { key: 'aTransp', target: 255 },   //A/N
        { key: 'imOffset', target: 0.00001 },   //im Offset
        ], transitionTime, 'easeInOutQuad')
  
      .addMotions([
        { key: 'nonlYOffset', target: 4 },
        { key: 'nonlAlpha', target: L2 },
        { key: 'desYOffset', target: 4 },
        { key: 'desAlpha', target: L3 },
        { key: 'tinkYOffset', target: 4 },
        { key: 'tinkAlpha', target: L4 },
        { key: 'archYOffset', target: -3 },
        { key: 'archAlpha', target: L4 },
        { key: 'artYOffset', target: -3 },
        { key: 'artAlpha', target: L3 },
        { key: 'prodYOffset', target: -3 },
        { key: 'prodAlpha', target: L2 },
        { key: 'someYOffset', target: -3 },
        { key: 'someAlpha', target: L1 },
        ], listTime)
  
  
      .addMotions([
        { key: 'nonlYOffset', target: 5 },
        { key: 'nonlAlpha', target: L3 },
        { key: 'desYOffset', target: 5 },
        { key: 'desAlpha', target: L4 },
        { key: 'tinkYOffset', target: -2 },
        { key: 'tinkAlpha', target: L4 },
        { key: 'archYOffset', target: -2 },
        { key: 'archAlpha', target: L3 },
        { key: 'artYOffset', target: -2 },
        { key: 'artAlpha', target: L2 },
        { key: 'prodYOffset', target: -2 },
        { key: 'prodAlpha', target: L1 },
        { key: 'someYOffset', target: -2 },
        { key: 'someAlpha', target: L2 },
        { key: 'someRGB', target: 1 },   //RGB    
        { key: 'prodRGB', target: 255 },   //RGB
        ], transitionTime, 'easeInOutQuad')
  
      .addMotions([
        { key: 'nonlYOffset', target: 5 },
        { key: 'nonlAlpha', target: L3 },
        { key: 'desYOffset', target: 5 },
        { key: 'desAlpha', target: L4 },
        { key: 'tinkYOffset', target: -2 },
        { key: 'tinkAlpha', target: L4 },
        { key: 'archYOffset', target: -2 },
        { key: 'archAlpha', target: L3 },
        { key: 'artYOffset', target: -2 },
        { key: 'artAlpha', target: L2 },
        { key: 'prodYOffset', target: -2 },
        { key: 'prodAlpha', target: L1 },
        { key: 'someYOffset', target: -2 },
        { key: 'someAlpha', target: L2 },
        ], listTime)
  
        
      .addMotions([
        { key: 'nonlYOffset', target: 6 },
        { key: 'nonlAlpha', target: L4 },
        { key: 'desYOffset', target: -1 },
        { key: 'desAlpha', target: L4 },
        { key: 'tinkYOffset', target: -1 },
        { key: 'tinkAlpha', target: L3 },
        { key: 'archYOffset', target: -1 },
        { key: 'archAlpha', target: L2 },
        { key: 'artYOffset', target: -1 },
        { key: 'artAlpha', target: L1 },
        { key: 'prodYOffset', target: -1 },
        { key: 'prodAlpha', target: L2 },
        { key: 'someYOffset', target: -1 },
        { key: 'someAlpha', target: L3 },
        { key: 'prodRGB', target: 1 },   //RGB    
        { key: 'artRGB', target: 255 },   //RGB
        { key: 'aOffset', target: 1 },   //A/N
        { key: 'nTransp', target: 255 },   //A/N
        ], transitionTime, 'easeInOutQuad')
  
      .addMotions([
        { key: 'nonlYOffset', target: 6 },
        { key: 'nonlAlpha', target: L4 },
        { key: 'desYOffset', target: -1 },
        { key: 'desAlpha', target: L4 },
        { key: 'tinkYOffset', target: -1 },
        { key: 'tinkAlpha', target: L3 },
        { key: 'archYOffset', target: -1 },
        { key: 'archAlpha', target: L2 },
        { key: 'artYOffset', target: -1 },
        { key: 'artAlpha', target: L1 },
        { key: 'prodYOffset', target: -1 },
        { key: 'prodAlpha', target: L2 },
        { key: 'someYOffset', target: -1 },
        { key: 'someAlpha', target: L3 },
        ], listTime)
  
  
      .addMotions([
        { key: 'nonlYOffset', target: 0.0001 },
        { key: 'nonlAlpha', target: L4 },
        { key: 'desYOffset', target: 0.0001 },
        { key: 'desAlpha', target: L3 },
        { key: 'tinkYOffset', target: 0.0001 },
        { key: 'tinkAlpha', target: L2 },
        { key: 'archYOffset', target: 0.0001 },
        { key: 'archAlpha', target: L1 },
        { key: 'artYOffset', target: 0.0001 },
        { key: 'artAlpha', target: L2 },
        { key: 'prodYOffset', target: 0.0001 },
        { key: 'prodAlpha', target: L3 },
        { key: 'someYOffset', target: 0.0001 },
        { key: 'someAlpha', target: L4 },
        { key: 'artRGB', target: 0.0001 },   //RGB    
        { key: 'archRGB', target: 255 },   //RGB
        ], transitionTime, 'easeInOutQuad')
  
      .startLoop()
  
  basePosX = 0;
  basePosY = 0;
  
  //COLORS////////////////////
  LC1 = [ 242, 242, 242];
  LC2 = [ 217, 217, 217];
  MC1 = [ 242, 48, 5]; //SATURATED LINES
  MC2 = [  140, 124, 104];  //SATURATED HELLO BOX
  MC3 = [  242, 48, 5]; //SATURATED LINES
  DC1 = [ 13, 13, 13];
  W = 255;
  
  mainCircleColor = color(LC1[0], LC1[1], LC1[2], 255);
  stripeColor1 = color(DC1[0], DC1[1], DC1[2], 30);
  stripeColor2 = color(MC3[0], MC3[1], MC3[2], 40);
  helloColor1 = color(W,255);
  helloColor2 = color(DC1[0], DC1[1], DC1[2], 255);
  orbitColor1 = color(MC1[0], MC1[1], MC1[2], 255);
  orbitColor2 = color(W,255);
  axisColor1 = color(DC1[0], DC1[1], DC1[2], 30);
  axisColor2 = color(MC3[0], MC3[1], MC3[2], 90);
  
  
  halfHeight = height/2;
  halfWidth = width/2;
  lArrayCircRadius = width/110;
  sArrayCircRadius = width/150;
  
  //TEXT SIZES CONSTANT//////////////
  tSize = width/24;
  tHSize = tSize * 1.2;

  
  
        //ARRAY OF CIRCLE LARGE///////////////////////////////////////////
            // columns
            for (let c =0; c<=halfWidth; c+=width/60)
          {
            // rows
            for (let r =0; r<=halfWidth; r+=width/60)
            {
            circles.push([r, c]);
            }
          }
        //ARRAY OF CIRCLE LARGE///////////////////////////////////////////
  
  
  
        //ARRAY OF CIRCLE SMALL///////////////////////////////////////////
            // columns
            for (let c =0; c<=width/3; c+=width/60)
          {
            // rows
            for (let r =0; r<=width/6; r+=width/60)
            {
            circlesSmall.push([r, c]);
            }
          }
        //ARRAY OF CIRCLE SMALL///////////////////////////////////////////
  
}



function draw() { 

  background(256); 

  //STROKES/////////////////
  zigzagStroke = 30;
  axisStroke = 10;
  mainSphereStroke = 5;
  orbitStroke = 4 * width/850;
  axisRectStroke = 6;
  imCircleStroke = 8;
  
  //TEXTSIZES VARIABLE//////////////
  anTSize = tSize;
  listTSize = tSize * 0.85;
  imTSize = tSize;   
  helloTsize = tSize * 1.95 - cursorX*(width/45);
  helloRectSize = halfWidth;

  
  
  //COLORS VARIABLE/////////////////  
  zigzagStrokeColor = 250 + cursorX * 40;
  zigzagStrokeAlpha = 255 - cursorX*200 - (0.5-cursorY)*100 ;
  stripeFillColor = lerpColor(stripeColor1, stripeColor2, cursorX * cursorY);
  orbitStrokeColor = lerpColor(orbitColor1, orbitColor2, cursorX);
  helloFillColor = lerpColor(helloColor1, helloColor2, cursorX);
  dennisFillColor = lerpColor(helloColor2, helloColor1, cursorX);
  axisStrokeColor = lerpColor(axisColor1, axisColor2, cursorX)
  joiningLineStrokeColor = lerpColor(axisColor1, axisColor2, cursorX);

  
  
  //IMPORTANT DIMENSIONS VARIABLE/////////////////
  largeCircXPos = (-(halfWidth) + (cursorX * 2.75 * (width/4))) + width/6 ;
  largeCircRadius = width*2 - (cursorX * 2.75 * (halfWidth));
  rectWidth = (tSize + width/200); 
  secondaryCircRelPos = largeCircRadius/2 - width/6.7 - cursorX*30;
  axisRotation = -(0.5 - cursorY)*20 * cursorX; 
  aOffset = list.aOffset * width/80;
  imOffset = width/13.25 * list.imOffset; //for shifting 'i'm' for 'non linear' text
  helloRectSize = halfWidth;
    

  //EASING//////////////////////////////////////////////////////////////////
      let targetX = mouseX;
      let dx = targetX - x;
      x += dx * easing;

      let targetY = mouseY;
      let dy = targetY - y;
      y += dy * easing;
  //EASING/////////////////////////////////////////////////////////////////
  
  
  
  //REMAP MOUSEX/Y to 0-1/////////////////
      cursorX = map(x, 60, width - 60, 0, 1, true);
      cursorY = map(y, 0, height, 0, 1, true);
  //REMAP MOUSEX/Y to 0-1////////////////
   
  
  
  //RECTANGLE BACKGROUND//////////////////////////////////////////////
    push()
      translate(largeCircXPos, halfHeight); //to large circle
      rotate(90 -  (0.5-cursorX)*90 + (0.5-cursorY)*90 * (0.2+cursorX));
      noStroke();
      fill(LC2[0], LC2[1], LC2[2]);
      rectMode(CORNER);
      rect(-width*2,-rectWidth * 1.7, width*4 , rectWidth*20);
    pop();
  //RECTANGLE BACKGROUND/////////////////////////////////////////////
  
  
  //ZIG ZAG//////////////////////////////////////////////
  push();
  lSize = height/10;
  
  translate(largeCircXPos * cursorX + width * 1.2 * (1-cursorX),halfHeight + (lSize) * 5 );
  rotate((90 -  (0.5-cursorX)*90 + (0.5-cursorY)*90 * (0.2+cursorX))*cursorX + 90*(1-cursorX));
  stroke(zigzagStrokeColor,zigzagStrokeAlpha );
  strokeWeight(zigzagStroke);
  
  translate(6* lSize + sin(millis()/20)*50 ,0);

  for(let i = 0; i<20; i++){
    translate(-lSize,0);
      beginShape();
      noFill()
      strokeCap(SQUARE);
      vertex(0, 0);
      vertex(-lSize, lSize);
      vertex(0, lSize*2);
      vertex(-lSize, lSize*3);
      vertex(0, lSize*4);
      vertex(-lSize, lSize*5);
      vertex(0, lSize*6);
      vertex(-lSize, lSize*7);
      vertex(0, lSize*8);
      vertex(-lSize, lSize*9);
      vertex(0, lSize*10);
      vertex(-lSize, lSize*11);
      vertex(0, lSize*12);
      vertex(-lSize, lSize*13);
      endShape();   
  }
  
  pop();
  //ZIG ZAG//////////////////////////////////////////////

  
  
  //MAIN LARGE SPHERE FILL ONLY//////////////////////////////////////////////
    push()
      noStroke();  
      translate(largeCircXPos, halfHeight); //to large circle
      fill(LC1[0], LC1[1], LC1[2], 255);
      circle(0, 0, largeCircRadius);
        
        push();
          translate(0,300 * (0.5 - cursorY));
          rotate(45);
          fill(LC2[0], LC2[1], LC2[2]);
          circle(0,0,rectWidth*2);
        pop();
    pop()
  //MAIN LARGE SPHERE FILL ONLY//////////////////////////////////////////////
  
  
  //STRIPES ABOVE MAIN CIRCLE////////////////////////
  push();
  noStroke(); 
  fill(stripeFillColor);
  rotate(45);
  translate(width/2.5 + cursorX*300,0); 
  rotate(90 * (cursorY*cursorX));
  
  lineWidth = width/20 + (cursorX)*80;
  lineHeight =width/3;
  
  translate(sin(millis()/20) * 50 - 50, 0);
    rect(0,0,lineHeight ,lineWidth);
  
    translate(0, 20);
    rect(0,0,lineHeight,lineWidth);

    translate(0,20);
    rect(0,0,lineHeight,lineWidth);

    translate(0,20);
    rect(0,0,lineHeight,lineWidth);

    translate(0,20);
    rect(0,0,lineHeight,lineWidth);

    translate(0,20);
    rect(0,0,lineHeight,lineWidth);
   
  pop(); 
  //STRIPES ABOVE MAIN CIRCLE////////////////////////
  
  

  
  //MAIN AXIS LINE//////////////////////////////////////////////////////
  push()  
      stroke(axisStrokeColor);
      strokeWeight(axisStroke);
      noFill();
      strokeCap(SQUARE);
      translate(largeCircXPos, halfHeight);
      rotate(axisRotation);
      line(-width*2, 0, secondaryCircRelPos - imOffset, 0); //
  pop()
  //MAIN AXIS LINE//////////////////////////////////////////////////////
  
  
  
  //CIRCLE ARRAY LARGE//////////////////////////////////////////////////
  push();
      noStroke();  
      translate(largeCircXPos, halfHeight); //to large circle
      rotate(axisRotation);
      translate(secondaryCircRelPos,0); //from large circle to desired point
      fill(LC2[0], LC2[1], LC2[2], 170);
      circle(0,0,width/70 + imOffset*1.3);
      translate(-imOffset,0);
      fill(W,150);
      circle(0,0,width/40);
        rotate(90 + (45 * (1- cursorX)));
        for (let c of circles)
          { 
          fill(W,150);
          circle(c[0], c[1], lArrayCircRadius);
          }
  pop();
  //CIRCLE ARRAY LARGE//////////////////////////////////////////////////
  
  
  
  //MAIN LARGE SPHERE STROKE ONLY////////////////////////////////////////////
    push()
      stroke(MC1[0], MC1[1], MC1[2], 255);  
      strokeWeight(mainSphereStroke);
      noFill();
      setLineDash([ 12, 8]);
      strokeCap(SQUARE);
      circle(largeCircXPos, halfHeight, largeCircRadius);
    pop()
  //MAIN LARGE SPHERE STROKE ONLY////////////////////////////////////////////
  

  
  
  //ELEMENTS ALONG MAIN AXIS///////////////////////////////////////////////////////////////////////////
  push() 
      noStroke();  
      translate(largeCircXPos, halfHeight); //to large circle
      rotate(axisRotation);
       
      
  
      //SECONDARY CIRCLE WITH ELEMENTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      push() 
          translate(secondaryCircRelPos,0); //from large circle to desired point
              
  
              //JOINING LINE________________________________
              push(); 
                rotate(-45 * cursorX);
                translate(-width/3 ,-width/3);      
                rotate(45);
                strokeWeight(6);
                stroke(joiningLineStrokeColor)
                line(width/4,0,width/2.13,0);
              pop();  
  
              push(); 
                rotate(-45 * cursorX);
                translate(-width/3 ,width/3);      
                rotate(-45);
              pop();  
              //JOINING LINE________________________________
  
  
              //ORBIT________________________________
              push()
                  noFill();
                  strokeWeight(orbitStroke);  
                  stroke(orbitStrokeColor);
                  strokeCap(SQUARE);
                  setLineDash([10, 10]);
                  rotate(millis()/100);       
                  circle(0, 0, width/4.5 +cursorX*50);
              pop();
              //ORBIT________________________________
  
  
              //RECTANGLE____________________________________
              push()
                  fill(DC1[0], DC1[1], DC1[2], 220);
                  stroke(LC2[0], LC2[1], LC2[2], 100);
                  strokeWeight(axisRectStroke);  
                  rectMode(CORNER);
                  rect(-width/6.85 + imOffset*1.6,-rectWidth/2, width*2 , rectWidth, width/400);
              pop();
              //RECTANGLE____________________________________  
              
  
              //AN/A TEXT ____________________________________________________________________
              push()
                  translate((width/4.5 + cursorX*50)/2,0); //from secondary circle to desired point
  
                  translate(-aOffset,0); //X offset for 'a'
                  noStroke();                
                  textFont(boldFont);
                  fill(W,list.aTransp);//control 'a' transparency here
                  textSize(anTSize);
                  textAlign(CENTER, CENTER);
                  text("a", 0, (-anTSize)/fontHeightOffset );
  
  
                  translate(2* aOffset,0); //X offset for 'n'               
                  fill(W,list.nTransp); //control 'n' transparency here
                  text("n", 0, (-anTSize)/fontHeightOffset );
  
              pop();
              //AN/A TEXT _______________________________________________________________________ 

  
              //I'M CIRCLE WITH TEXT ______________________________
              push();
                translate(imOffset,0);
                strokeWeight(imCircleStroke);
                stroke(LC1[0], LC1[1], LC1[2]);
                fill(DC1[0], DC1[1], DC1[2], 180)
                circle(0, 0, width/7.6); // I'm CIRCLE

                noStroke();
                textFont(boldFont);
                fill(W);  
                textSize(imTSize);
                textAlign(CENTER, CENTER);
                text("I'm", 0, (-imTSize)/8 ); 
              pop();
              //I'M CIRCLE WITH TEXT ______________________________
  
  
  
            //HELLO RECTANGLE WITH ELEMENTS _______________________________________________________
            push() 
                
                rotate(-45 * cursorX);
                translate(-width/3 ,-width/3);      
                rotate(45);

  
                  //CIRCLE ARRAY SMALL____________________________________________
                  push();
                      translate(width/200 + sin(millis()/10)*width/60, -cursorX * width/6);
                      noStroke();  
                        for (let c of circlesSmall)
                          { 
                          fill(DC1[0], DC1[1], DC1[2], 30);
                          circle(c[0], c[1], sArrayCircRadius);
                          }
                  pop();
                  //CIRCLE ARRAY SMALL____________________________________________
  
  
            fill(DC1[0], DC1[1], DC1[2], 70);
            rectMode(CENTER);
            rect(0,0,helloRectSize, helloRectSize) //Main Rectangle
 
                  
                  //BOTTOM BORDER LINE ______________________  
                  push();
                    rotate(-90);
                    fill(MC3[0], MC3[1], MC3[2]);  
                    translate(0 ,helloRectSize/2)
                    rect(0,0,helloRectSize,10);
                  pop();
                  //BOTTOM BORDER LINE ______________________  
                push();
                rotate(-90);
                translate(-width/4.3 ,width/4.8 - width/12 + width/12*cursorX  )
                textFont(boldFont);
                fill(helloFillColor); 
                textSize(helloTsize);
                textAlign(LEFT, CENTER);
                text("Hello,", 0, -helloTsize/fontHeightOffset);
                pop();
        
                push();
                rotate(-90);
                translate(-width/4.3 + width/5.8 * cursorX ,width/4.8)
                textFont(boldFont);
                fill(helloFillColor);
                textSize(helloTsize);
                textAlign(LEFT, CENTER);
                text("I'm", 0, -helloTsize/fontHeightOffset);
                pop();
  
                push();
                rotate(-90);
                translate(-width/4.3 + width/7 + width/8.0* cursorX, width/4.8)
                textFont(boldFont);
                fill(dennisFillColor);
                textSize(helloTsize);
                textAlign(LEFT, CENTER);
                text("Dennis", 0, -helloTsize/fontHeightOffset);
                pop();
  
                
              pop() 
            //HELLO RECTANGLE WITH ELEMENTS _______________________________________________________
  
  
    

  
        pop()
      //SECONDARY CIRCLE WITH ELEMENTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  
  
      //LIST OF WORDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        push() 
          translate(largeCircRadius/2 + width/80 + cursorX*20 ,0); //from large circle to desired point
          
          textFont(mediumFont);
          fill(W); 
          textSize(listTSize);
          translate(0,-listTSize/fontHeightOffset);
          textAlign(LEFT, CENTER);
  

          nonlOff = basePosY +(-(tHSize)*3) + (tHSize) * list.nonlYOffset;
          desOff = basePosY + (-(tHSize)*2) + (tHSize) *list.desYOffset;
          tinkOff = basePosY + (-tHSize) + (tHSize) *list.tinkYOffset;
          archOff = basePosY  + (tHSize) *list.archYOffset;
          artOff = basePosY + (tHSize) + (tHSize) *list.artYOffset;
          prodOff = basePosY + ((tHSize)*2) + (tHSize) *list.prodYOffset;
          someOff = basePosY + ((tHSize)*3) + (tHSize) *list.someYOffset;

          curvature = width/70 + cursorX* width/20;
          sinRatio = 10;
  
          angleMode(RADIANS);
          nonlSinFunc = sin(PI * abs(list.nonlYOffset-3)/sinRatio) * curvature;
          desSinFunc = sin(PI * abs(list.desYOffset-2)/sinRatio)* curvature;
          tinkSinFunc = sin(PI * abs(list.tinkYOffset-1)/sinRatio)* curvature;
          archSinFunc = sin(PI * abs(list.archYOffset)/sinRatio)* curvature;
          artSinFunc = sin(PI * abs(list.artYOffset+1)/sinRatio)* curvature;
          prodSinFunc = sin(PI * abs(list.prodYOffset+2)/sinRatio)* curvature;
          someSinFunc = sin(PI * abs(list.someYOffset+3)/sinRatio)* curvature;
          angleMode(DEGREES);


              fill(list.nonlRGB,list.nonlAlpha)
              text("non-linear", basePosX - nonlSinFunc, nonlOff);

              fill(list.desRGB,list.desAlpha)
              text("designer", basePosX- desSinFunc, desOff);

              fill(list.tinkRGB,list.tinkAlpha)
              text("tinkerer", basePosX- tinkSinFunc, tinkOff);

              fill(list.archRGB,list.archAlpha)
              text("architect", basePosX- archSinFunc, archOff);

              fill(list.artRGB,list.artAlpha)
              text("artist", basePosX- artSinFunc, artOff);

              fill(list.prodRGB,list.prodAlpha)
              text("music producer", basePosX- prodSinFunc, prodOff);

              fill(list.someRGB,list.someAlpha)
              text("creative coder", basePosX- someSinFunc, someOff);
 
        pop() 
      //LIST OF WORDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  
    
    pop() 
  //ELEMENTS ALONG MAIN AXIS///////////////////////////////////////////////////////////////////////////
  
    
}

//__________________________________________________________________________________________________

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  tSize = width/24;
  tHSize = tSize * 1.4;
  
  halfHeight = height/2;
  halfWidth = width/2;
  
  basePosX = 0;
  basePosY = 0;
  
circles = [];

circlesSmall = [];
  
          //ARRAY OF CIRCLE LARGE///////////////////////////////////////////
            // columns
            for (let c =0; c<=halfWidth; c+=width/60)
          {
            // rows
            for (let r =0; r<=halfWidth; r+=width/60)
            {
            circles.push([r, c]);
            }
          }
        //ARRAY OF CIRCLE LARGE///////////////////////////////////////////
  
  
  
        //ARRAY OF CIRCLE SMALL///////////////////////////////////////////
            // columns
            for (let c =0; c<=width/3; c+=width/60)
          {
            // rows
            for (let r =0; r<=width/6; r+=width/60)
            {
            circlesSmall.push([r, c]);
            }
          }
        //ARRAY OF CIRCLE SMALL///////////////////////////////////////////
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

