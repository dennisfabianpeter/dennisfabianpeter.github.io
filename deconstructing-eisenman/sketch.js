var H =0;
var V =0;

rotateHorizontal = 0.785;
rotateVertical = 0.52;
 
lastRotateAmountX = 0 ;
lastRotateAmountY = 0 ;

newRotateAmountX = 0;
newRotateAmountY = 0;

newRotationX = 0;
newRotationY = 0;

rotationXforkey = 0;
rotationYforkey = 0;

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
order24=1;



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
ortho(-width / (windowWidth/6.3), width /(windowWidth/6.3), height / (windowWidth/6.3), -height / (windowWidth/6.3), 0, 1000);

button =createButton('Change Iteration');
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


background('#fcb900');
rotateX(rotateVertical);
rotateY(rotateHorizontal);
noStroke();
normalMaterial();



if(windowWidth<900){
    ortho(-width / (windowWidth/7), width /(windowWidth/7), height / (windowWidth/7), -height / (windowWidth/7), 0, 1000);
}

else{
        ortho(-width / (windowWidth/13), width /(windowWidth/13), height / (windowWidth/13), -height / (windowWidth/13), 0, 1000);
  }


    if(windowWidth<900){  
H = ((rotationY)/10);
V = ((rotationX)/10) - 3;}

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

push();      
  translate(permutations[order1]);
  model(P1);
pop();


push();
  translate(permutations[order2])
  model(P2);
pop();

  push();
  translate(permutations[order3])
  model(P3);
pop();

  push();
  translate(permutations[order4])
  model(P4);
pop();

  push();
  translate(permutations[order5])
  model(P5);
pop();

  push();
  translate(permutations[order6])
  model(P6);
pop();

  push();
  translate(permutations[order7])
  model(P7);
pop();

  push();
  translate(permutations[order8])
  model(P8);
pop();

  push();
  translate(permutations[order9])
  model(P9);
pop();

  push();
  translate(permutations[order10])
  model(P10);
pop();

  push();
  translate(permutations[order11])
  model(P11);
pop();

 push();
  translate(permutations[order12])
  model(P12);
pop();

  push();
  translate(permutations[order13])
  model(P13);
pop();

  push();
  translate(permutations[order14])
  model(P14);
pop();

  push();
  translate(permutations[order15])
  model(P15);
pop();

  push();
  translate(permutations[order16])
  model(P16);
pop();

  push();
  translate(permutations[order17])
  model(P17);
pop();

  push();
  translate(permutations[order18])
  model(P18);
pop();

  push();
  translate(permutations[order19])
  model(P19);
pop();

  push();
  translate(permutations[order20])
  model(P20);
pop();

  push();
  translate(permutations[order21])
  model(P21);
pop();

  push();
  translate(permutations[order22])
  model(P22);
pop();

  push();
  translate(permutations[order23])
  model(P23);
pop();

  push();
  translate(permutations[order24])
  model(P24);
pop();

}

function keyPressed() {
if (keyCode === LEFT_ARROW){
rotationXforkey=newRotationX + 0.4;
newRotationX = rotationXforkey;
}

else if (keyCode === RIGHT_ARROW){
rotationXforkey=newRotationX - 0.4;
newRotationX = rotationXforkey;}
  
else if (keyCode === UP_ARROW){
rotationYforkey=newRotationY + 0.4;
newRotationY = rotationYforkey;}
  
else if (keyCode === DOWN_ARROW){
rotationYforkey=newRotationY - 0.4;
newRotationY = rotationYforkey;
}

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
      ortho(-width / (windowWidth/6.3), width /(windowWidth/6.3), height / (windowWidth/6.3), -height / (windowWidth/6.3), 0, 1000);
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
