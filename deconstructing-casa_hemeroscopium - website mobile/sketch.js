var H =0;
var V =0;

rotateHorizontal = -0.785;
rotateVertical = 0.52;
 
lastRotateAmountX = 0 ;
lastRotateAmountY = 0 ;

newRotateAmountX = 0;
newRotateAmountY = 0;

newRotationX = 0;
newRotationY = 0;

rotationXforMouse = 0;
rotationYforMouse = 0;

gyroX = 0;
gyroY=0;

newRotateAmountXColor = 124;

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
order26=6;



function preload() {
  P1 = loadModel('P1.obj');
  P2 = loadModel('P2.obj');
  P3T = loadModel('P3T.obj');
  P4 = loadModel('P4.obj');
  P5T = loadModel('P5T.obj');
  P6 = loadModel('P6.obj');
  P7 = loadModel('P7.obj');
  P8 = loadModel('P8.obj');
  P9 = loadModel('P9.obj');
  P10T = loadModel('P10T.obj');
  P11T = loadModel('P11T.obj');
  P12 = loadModel('P12.obj');
  P13 = loadModel('P13.obj');
  P14 = loadModel('P14.obj');
  P15 = loadModel('P15.obj');
  P16T = loadModel('P16T.obj');
  P17 = loadModel('P17.obj');
  P18 = loadModel('P18.obj');
  P19 = loadModel('P19.obj');
  P20 = loadModel('P20.obj');
  P21T = loadModel('P21T.obj');
  P22 = loadModel('P22.obj');
  P23 = loadModel('P23.obj');
  P24 = loadModel('P24.obj');
  P25T = loadModel('P25T.obj');
  P26 = loadModel('P26.obj');




}

function setup() {

canvas = createCanvas(windowWidth, windowHeight, WEBGL);
ortho(-width / (windowWidth/6.3), width /(windowWidth/6.3), height / (windowWidth/6.3), -height / (windowWidth/6.3), 0, 1000);

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

setMoveThreshold(0.1);
 
}


function draw() {

background(newRotateAmountXColor, 210,255);
rotateX(rotateVertical);
rotateY(rotateHorizontal);
noStroke();
glassMaterial = specularMaterial(200, 200, 200, 150);



if(windowWidth<900){
    ortho(-width / (windowWidth/32000), width /(windowWidth/32000), height/ (windowWidth/32000), -height/ (windowWidth/32000), -100000, 100000);
}

else{
        ortho(-width / (windowWidth/35000), width /(windowWidth/35000), height / (windowWidth/35000), -height / (windowWidth/35000), -100000, 100000);
  }

  H = ((gyroX) + rotationXforMouse );
  V = ((gyroY) + rotationYforMouse);
  
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
  
  translate(0,-5000,5000);

push();   
  normalMaterial();
  translate(permutations[order1]);
  model(P1);
pop();


push();
  normalMaterial();
  translate(permutations[order2])
  model(P2);
pop();

  push();
  normalMaterial();
  translate(9000,0,4000)
  rotateY(H/4500)
  translate(permutations[order4])
  translate(-9000,0,-4000)
  model(P4);
pop();

  push();
  normalMaterial();
  translate(-13500,0,-16500)
  rotateY(-H/4500)
  translate(permutations[order4])
  translate(13500,0,16500)
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
  translate(10000,5000,-15000)
  rotateX(-H/4500)
  translate(permutations[order4])
  translate(-10000,-5000,15000)
  model(P17);
pop();

  push();
  normalMaterial();
  translate(1000,0,-3000)
  rotateY(-H/4500)
  //translate(permutations[order4])
  translate(-1000,0,3000)
  model(P18);
pop();

  push();
  normalMaterial();
  translate(0,8000,-16000)
  rotateX(H/4500)
  //translate(permutations[order4])
  translate(0,-8000,16000)
  model(P19);
pop();

  push();  
  normalMaterial();
  translate(permutations[order20])
  model(P20);
pop();

  push();
  normalMaterial();
  translate(permutations[order22])
  model(P22);
pop();

  push();
  normalMaterial();
  translate(1000,0,-3000)
  rotateY(-H/4500)
  //translate(permutations[order4])
  translate(-1000,0,3000)
  model(P23);
pop();

  push();
  normalMaterial();
  translate(permutations[order24])
  model(P24);
pop();
  
   push();
  normalMaterial();
  translate(permutations[order26])
  model(P26);
pop();

  push();
  glassMaterial;
  translate(permutations[order3])
  model(P3T);
pop();  
  
    push();
  glassMaterial;
  translate(permutations[order21])
  model(P21T);
pop();
    
  push();
  glassMaterial;
  translate(permutations[order16])
  model(P16T);
pop();
  
    push();
  glassMaterial;
  translate(permutations[order11])
  model(P11T);
pop();

    push();
  glassMaterial;
  translate(permutations[order10])
  model(P10T);
pop();

    push();
  glassMaterial;
  translate(permutations[order5])
  model(P5T);
pop();
  
    push();
  glassMaterial;
  translate(permutations[order25])
  model(P25T);
pop();
  
}


function touchMoved() {

  rotateAmountX = (mouseX - pmouseX);
  rotateAmountY = (mouseY - pmouseY);
 
newRotateAmountX = lastRotateAmountX + rotateAmountX;
newRotateAmountY = lastRotateAmountY + rotateAmountY;
  

rotateHorizontal = -0.785 +(newRotateAmountX/100);
rotateVertical = 0.52+((newRotateAmountY)/200);

lastRotateAmountX = newRotateAmountX;
lastRotateAmountY = newRotateAmountY;

newRotateAmountXColor =  124 + (newRotateAmountX * 0.1);

//if(newRotateAmountX>=255){  
//newRotateAmountXColor = 255 - //(newRotateAmountX - 255);  
//}

}


function mouseMoved() {
  if (mouseIsPressed === false){
    rotationXforMouse = (mouseX - (windowWidth/2))*25;
    rotationYforMouse = (mouseY - (windowHeight/2))*25;  
    }
  }
  
  function deviceMoved() {
    gyroX = rotationX;
    gyroY = rotationY-50;
  }


function windowResized(){
resizeCanvas(windowWidth, windowHeight,WEBGL);
      ortho(-width / (windowWidth/100), width /(windowWidth/100), height / (windowWidth/100), -height / (windowWidth/100), 0, 10000);
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
