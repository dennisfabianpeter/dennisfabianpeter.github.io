var H =0;
var V =0;

var orthoDelta = 0;
var orthoWidth;

rotateHorizontal = 0;
rotateVertical = 0.52;
 
lastRotateAmountX = 0 ;
lastRotateAmountY = 0 ;

newRotateAmountX = 0;
newRotateAmountY = 0;

newRotationX = 0;
newRotationY = 0;

rotationXforkey = 0;
rotationYforkey = 0;

newRotateAmountXColor = 80;

permutations=[];  

var   button;
order1=0;
order2=1;
order3=2;
order4=3;
order5=4;
order6=5;
order7=6;
order8=7;
order9=8;
order10=9;
order11=10;
order12=11;
order13=10;
order14=9;
order15=8;
order16=7;
order17=6;
order18=5;
order19=4;
order20=3;
order21=2;
order22=1;
order23=0;
order24=3;
order25=9;
order26=4;
order27=10;
order28=1;
order29=0;
order30=8;



function preload() {
  P1 = loadModel('V1.obj');
  P2 = loadModel('V2.obj');
  P3 = loadModel('V3.obj');
  P4 = loadModel('V4.obj');
 // P5 = loadModel('V5.obj');
  P6 = loadModel('V6.obj');
  P7 = loadModel('V7.obj');
  P8 = loadModel('V8.obj');
  P9 = loadModel('V9.obj');
  P10 = loadModel('V10.obj');
  P11 = loadModel('V11.obj');
  P12 = loadModel('V12.obj');
  P13 = loadModel('V13.obj');
  P14 = loadModel('V14.obj');
  P15 = loadModel('V15.obj');
  P16 = loadModel('V16.obj');
  P17 = loadModel('V17.obj');
  P18 = loadModel('V18.obj');
  P19 = loadModel('V19.obj');
  P20 = loadModel('V20.obj');
  P21 = loadModel('V21.obj');
  P22 = loadModel('V22.obj');
  P23 = loadModel('V23.obj');
  P24 = loadModel('V24.obj');
  P25 = loadModel('V25.obj');
  P26 = loadModel('V26.obj');
  P27 = loadModel('V27.obj');
  P28 = loadModel('V28.obj');
  P29 = loadModel('V29.obj');
  P30 = loadModel('V30.obj');
}

function setup() {

canvas = createCanvas(windowWidth, windowHeight, WEBGL);

button =createButton('Change Permutation');
button.position(10,10);
button.style('background-color', '#000');
button.style('color', '#fff');
button.style('border', 'solid');
button.style('border-color', '#fff');
button.style('border-radius', '3px');

button.mouseClicked(ChangeOrder);
button.mousePressed(ChangeButtonColor);
button.mouseReleased(RevertButtonColor);
 
}


function draw() {


background(200,newRotateAmountXColor,150);
rotateX(rotateVertical);
rotateY(rotateHorizontal);
noStroke();

  orthoWidth = windowWidth/(20 + orthoDelta);
  
  
if(windowWidth<900){
    ortho(-width / orthoWidth/1.3, width /orthoWidth/1.3, height/ orthoWidth/1.3, -height/ orthoWidth/1.3, -100000, 100000);
}

else{
        ortho(-width / orthoWidth, width /orthoWidth, height / orthoWidth, -height / orthoWidth, -100000, 100000);
  }


    if(windowWidth<900){  
H = ((rotationY));
V = ((rotationX)-50);}

else{
  H= rotationXforkey;
  V= rotationYforkey;}
  
permutations = [createVector(H,0,0),
                createVector(-H,0,0),
                createVector(V,0,0),
                createVector(-V,0,0),
                createVector(0,H,0),
                createVector(0,-H,0),
                createVector(0,V,0),
                createVector(0,-V,0),
                createVector(0,0,H),
                createVector(0,0,-H),
                createVector(0,0,V),
                createVector(0,0,-V)];
  
translate(-2.5,-7,0);
angleMode(DEGREES);
rotateY(-45);
angleMode(RADIANS);
  
push();   
  normalMaterial();
  angleMode(DEGREES);
  rotateX(newRotationX * 10);
  angleMode(RADIANS);
  model(P1);
pop();
  
push();   
  normalMaterial();
  angleMode(DEGREES);
  rotateZ(newRotationX * 10);
  angleMode(RADIANS);
  model(P2);
pop();
  
push();   
  normalMaterial();
  angleMode(DEGREES);
  rotateX(-newRotationX * 10);
  angleMode(RADIANS);
  model(P3);
pop();
  
push();   
  normalMaterial();
    angleMode(DEGREES);
  rotateZ(-newRotationX * 10);
  angleMode(RADIANS);
  model(P4);
pop();

// push();   
//   normalMaterial();
//   translate(permutations[order5])
//   model(P5);
// pop();
  
  push();   
  normalMaterial();
  translate(permutations[order5])
  model(P6);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order7])
  model(P7);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order8])
  model(P8);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order9])
  model(P9);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order10])
  model(P10);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order11])
  model(P11);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order12])
  model(P12);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order13])
  model(P13);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order14])
  model(P14);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order15])
  model(P15);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order16])
  model(P16);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order17])
  model(P17);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order18])
  model(P18);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order19])
  model(P19);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order20])
  model(P20);
pop();
  
  push();   
  normalMaterial();
  translate(permutations[order21])
  model(P21);
pop();
  
    push();   
  normalMaterial();
  translate(permutations[order22])
  model(P22);
pop();
  
    push();   
  normalMaterial();
  translate(permutations[order23])
  model(P23);
pop();
  
    push();   
  normalMaterial();
  translate(permutations[order24])
  model(P24);
pop();
  
    push();   
  normalMaterial();
  translate(permutations[order25])
  model(P25);
pop();
  
      push();   
  normalMaterial();
  translate(permutations[order26])
  model(P26);
pop();
  

  
}

function keyPressed() {
if (keyCode === LEFT_ARROW){
rotationXforkey=newRotationX + 3;
newRotationX = rotationXforkey;
}

else if (keyCode === RIGHT_ARROW){
rotationXforkey=newRotationX - 3;
newRotationX = rotationXforkey;}
  
else if (keyCode === UP_ARROW){
rotationYforkey=newRotationY + 3;
newRotationY = rotationYforkey;}
  
else if (keyCode === DOWN_ARROW){
rotationYforkey=newRotationY - 3;
newRotationY = rotationYforkey;
}

}


function touchMoved() {

  rotateAmountX = (mouseX - pmouseX);
  rotateAmountY = (mouseY - pmouseY);
 
newRotateAmountX = lastRotateAmountX + rotateAmountX;
newRotateAmountY = lastRotateAmountY + rotateAmountY;
  

rotateHorizontal = 0 +(newRotateAmountX/100);
rotateVertical = 0.52+((newRotateAmountY)/200);

lastRotateAmountX = newRotateAmountX;
lastRotateAmountY = newRotateAmountY;

newRotateAmountXColor =  80 + (newRotateAmountX * 0.1);

//if(newRotateAmountX>=255){  
//newRotateAmountXColor = 255 - //(newRotateAmountX - 255);  
//}


}

function windowResized(){
resizeCanvas(windowWidth, windowHeight,WEBGL);
}

function ChangeOrder(){
possibilites = [0,1,2,3,4,5,6,7,8,9,10,11];

order1=random(possibilites);
order2=random(possibilites);
order3=random(possibilites);
order4=random(possibilites);
order5=random(possibilites);
order6=random(possibilites);
order7=random(possibilites);
order8=random(possibilites);
order9=random(possibilites);
order10=random(possibilites);
order11=random(possibilites);
order12=random(possibilites);
order13=random(possibilites);
order14=random(possibilites);
order15=random(possibilites);
order16=random(possibilites);
order17=random(possibilites);
order18=random(possibilites);
order19=random(possibilites);
order20=random(possibilites);
order21=random(possibilites);
order22=random(possibilites);
order23=random(possibilites);
order24=random(possibilites);
order25=random(possibilites);
}

function ChangeButtonColor(){
button.style('background-color', '#fff');
button.style('color', '#000');
button.style('border', 'solid');
button.style('border-color', '#000');  
}


function RevertButtonColor(){
button.style('background-color', '#000');
button.style('color', '#fff');
button.style('border', 'solid');
button.style('border-color', '#fff');  
}

function mouseWheel(event) {
  orthoDelta += event.delta/10;

}
