
var song;
let toggleState = false;
let loadedText;
let loading = true;
var timer;
var counter = 0;
var interval;
var textColor = 20;
var camHome;
var camMoving;


let _loadingText;
let _readyText;

let rotateAmountX;
let rotateAmountY;
let newRotateAmountX;
let newRotateAmountY;
let lastRotateAmountX = 0;
let lastRotateAmountY = 0;
let rotateHorizontal = 0;
let rotateVertical = 0;

function soundLoaded(){
  console.log("song loaded");
  loading = false;
}


function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    angleMode(DEGREES); 
    frameRate(60);

    song = createAudio("Anchors_Wreckages.mp3", soundLoaded) 
   
    timer = createP('TIMER : ');
    timer.position(300, windowHeight-68, 'fixed');
    timer.style('font-size', '17px');
    timer.style('font-weight', 'bold');
    timer.style('font-family', 'Arial, Helvetica, sans-serif');

    slider = createSlider(0,1,0.7,0.05);
    slider.position(120, windowHeight-52, 'fixed');

    button = createButton(" PLAY ");
    button.position(30, windowHeight-56, 'fixed');
    button.style('background-color', '#FAFAFA');
    button.style('font-family', 'inherit');
    button.style('font-family', 'Arial, Helvetica, sans-serif');
    button.style('font-size', '17px');
    button.style('font-weight', 'bold');
    button.style('display', 'inline-flex')
    button.style('padding-left', '10px');
    button.style('padding-right', '10px');
    button.style('line-height', '30px');
    button.style('color', '#141414');
    button.style('border', 'none');
    button.mousePressed(togglePlaying);
    button.mouseOver(mouseOverPlay);
    button.mouseOut(mouseOutPlay);

    _loadingText = createGraphics(width, height);
    _loadingText.textSize(20);
    _loadingText.fill(20);
    _loadingText.text('LOADING TRACK...', (width/2)-80, (height/2)+15);

    _readyText = createGraphics(width, height);
    _readyText.textSize(25);
    _readyText.background(255,255,255,0);
    _readyText.fill(textColor);
    _readyText.text('PRESS PLAY', (width/2)-75, (height/2)+15); 
    
    camMoving = createCamera();
    camHome = createCamera();
    camHome.setPosition(0,0,700);
    camHome.lookAt(0, 0, 0);

    cursor(CROSS);
}

function draw() {

    background(250);
    song.volume(slider.value());
    console.log(frameRate());
 
    if(loading){
        push();  
          noStroke();
          texture(_loadingText);
          rotateY(map(mouseX, 0, width, -45, 45));
          rotateX(map(mouseY, 0, height, 45, -45));
          plane(width, height);
        pop();
    } 

    else if(!loading && !toggleState ){   
        push();
          noStroke();
          texture(_readyText);
          rotateY(map(mouseX, 0, width, -45, 45));
          rotateX(map(mouseY, 0, height, 45, -45));
          plane(width, height);
          pop();
    }

    else{
        camMoving.camera (0,0,(counter/2), 0, 0,0,0,1,0);
        camMoving.tilt(-rotateVertical);
        camMoving.pan(rotateHorizontal);
        
        push();
          translate (0,0,-50);
          strokeWeight(1);
          fill(0,0,0,0)
          box(150);
        pop();
    }
}




function togglePlaying(){
  if(toggleState == false){
    song.play();
    button.html("PAUSE");
    toggleState = true;
    interval = setInterval(timeline,10);
    setCamera(camMoving);
  }
  
  else{
    song.pause();
    button.html("PLAY");
    toggleState = false;
    clearInterval(interval);
    setCamera(camHome);
  }
  
}

function touchMoved() {
  rotateAmountX = (mouseX - pmouseX);
  rotateAmountY = (mouseY - pmouseY);
  
  newRotateAmountX = lastRotateAmountX + rotateAmountX;
  newRotateAmountY = lastRotateAmountY + rotateAmountY;

  if(newRotateAmountX>= 900){
    newRotateAmountX = 900;
  }
  else if(newRotateAmountX<= -900){
    newRotateAmountX = -900;
  }

  if(newRotateAmountY>= 900){
    newRotateAmountY = 900;
  }
  else if(newRotateAmountY<= -900){
    newRotateAmountY = -900;
  }
    
  rotateHorizontal = (newRotateAmountX/10);
  rotateVertical = (newRotateAmountY/10);

  lastRotateAmountX = newRotateAmountX;
  lastRotateAmountY = newRotateAmountY;
}


// function keyPressed() {
//   if (keyCode === 32) { if(toggleState == false){
//     song.play();
//     button.html("PAUSE");
//     toggleState = true;
//     interval = setInterval(timeline,10);
//     setCamera(camMoving);
//   }
  
//   else{
//     song.pause();
//     button.html("PLAY");
//     toggleState = false;
//     clearInterval(interval);
//     setCamera(camHome);
//   }
// }
// }

function mouseOverPlay(){
  button.style('color', '#bebebe');
}

function mouseOutPlay(){
  button.style('color', '#141414');
}

function timeline(){
  timer.html(counter);
  counter++;
}