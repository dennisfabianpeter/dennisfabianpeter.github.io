function preload() {
    P1 = loadModel('P1.obj');
    P2 = loadModel('P2.obj');
    P3 = loadModel('P3.obj');
    P4 = loadModel('P4.obj');
    P5 = loadModel('P5.obj');
    P6 = loadModel('P6.obj');
    P7 = loadModel('P7.obj');
    P8 = loadModel('P8.obj');
    P9 = loadModel('P9.obj');
    P10 = loadModel('P10.obj');
    P11 = loadModel('P11.obj');
    P12 = loadModel('P12.obj');
    P13 = loadModel('P13.obj');
    P14 = loadModel('P14.obj');
    P15 = loadModel('P15.obj');
    P16 = loadModel('P16.obj');
    P17 = loadModel('P17.obj');
    P18 = loadModel('P18.obj');
    P19 = loadModel('P19.obj');
    P20 = loadModel('P20.obj');
    P21 = loadModel('P21.obj');
    P22 = loadModel('P22.obj');
    P23 = loadModel('P23.obj');
    P24 = loadModel('P24.obj');
  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  //canvas.mousePressed(changeMaterial);
  ortho(-width / (windowWidth/6.3), width /(windowWidth/6.3), height / (windowWidth/6.3), -height / (windowWidth/6.3), 0, 1000);
  
  rotateHorizontal = 0.785;
  rotateVertical = 0.52;
   
  lastRotateAmountX = 0 ;
  lastRotateAmountY = 0 ;
  
  newRotateAmountX = 0;
  newRotateAmountY = 0;
  
}

function draw() {
  
  background('#fcb900');
  rotateX(rotateVertical);
  rotateY(rotateHorizontal);
  noStroke();
  normalMaterial();
  

  
      
  H = ((rotationY)/10);
  V = ((rotationX)/10) - 3;
  


    
  push();   
    translate(0,H,0);
    model(P1);
  pop();
 
  
  push();
    translate(0, 0, V)
    model(P2);
  pop();
 
    push();
    translate(0, -V, 0)
    model(P3);
  pop();
 
    push();
    translate(H, 0, 0)
    model(P4);
  pop();
 
    push();
    translate(0, 0, V)
    model(P5);
  pop();
 
    push();
    translate(0, -H, 0)
    model(P6);
  pop();
 
    push();
    translate(-V, 0, 0)
    model(P7);
  pop();
 
    push();
    translate(0, H, 0)
    model(P8);
  pop();
 
    push();
    translate(0, 0, V)
    model(P9);
  pop();
 
    push();
    translate(H, 0, 0)
    model(P10);
  pop();
 
    push();
    translate(0, -H, 0)
    model(P11);
  pop();
  
   push();
    translate(0, 0, V)
    model(P12);
  pop();
 
    push();
    translate(0, V, 0)
    model(P13);
  pop();
 
    push();
    translate(0, 0, 0)
    model(P14);
  pop();
 
    push();
    translate(-V, 0, 0)
    model(P15);
  pop();
 
    push();
    translate(0, H, 0)
    model(P16);
  pop();
 
    push();
    translate(0, 0, H)
    model(P17);
  pop();
 
    push();
    translate(0, 0, 0)
    model(P18);
  pop();
 
    push();
    translate(0, V, 0)
    model(P19);
  pop();
 
    push();
    translate(-V, 0, 0)
    model(P20);
  pop();
 
    push();
    translate(0, -H, 0)
    model(P21);
  pop();
 
    push();
    translate(0, 0, -H)
    model(P22);
  pop();
 
    push();
    translate(0, V, 0)
    model(P23);
  pop();
 
    push();
    translate(-H, 0, 0)
    model(P24);
  pop();
  
}



function touchMoved() {
  
    rotateAmountX = (mouseX - pmouseX);
    rotateAmountY = (mouseY - pmouseY);
   
  newRotateAmountX = lastRotateAmountX + rotateAmountX;
  newRotateAmountY = lastRotateAmountY + rotateAmountY;
    
  
  rotateHorizontal = 0.785 +(newRotateAmountX/100);
  rotateVertical = 0.52+((newRotateAmountY)/200);
  
  lastRotateAmountX = newRotateAmountX;
  lastRotateAmountY = newRotateAmountY;
  
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight,WEBGL);
  ortho(-width / 55, width /55, height / 55, -height / 55, 0, 1000);
}
