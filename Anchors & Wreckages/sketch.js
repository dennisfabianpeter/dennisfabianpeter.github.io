
var canvas;
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
var amp;

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
  _loadingText.style('display', 'none');
  _readyText.style('display', 'block');
  button.style('display', 'block');
  slider.style('display', 'block');
  timer.style('display', 'block');
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight,WEBGL);
    angleMode(DEGREES); 
    frameRate(60);

    song = loadSound("Anchors_Wreckages.mp3", soundLoaded) 
    amp = new p5.Amplitude();
    
   
    timer = createP('TIMER : ');
    timer.position(300, windowHeight-68, 'fixed');
    timer.style('font-size', '17px');
    timer.style('font-weight', 'bold');
    timer.style('font-family', 'Arial, Helvetica, sans-serif');
    timer.style('display', 'none');

    slider = createSlider(0,1,0.7,0.05);
    slider.position(120, windowHeight-52, 'fixed');
    slider.style('display', 'none');

    button = createButton(" PLAY ");
    button.position(30, windowHeight-56, 'fixed');
    button.style('background-color', '#FAFAFA');
    button.style('display', 'none');
    button.style('font-family', 'inherit');
    button.style('font-family', 'Arial, Helvetica, sans-serif');
    button.style('font-size', '17px');
    button.style('font-weight', 'bold');
    button.style('padding-left', '10px');
    button.style('padding-right', '10px');
    button.style('line-height', '30px');
    button.style('color', '#141414');
    button.style('border', 'none');
    button.mousePressed(togglePlaying);
    button.mouseOver(mouseOverPlay);
    button.mouseOut(mouseOutPlay);

    _loadingText = createP('LOADING...');
    _loadingText.position(windowWidth/2 -80, windowHeight/2 - 45, 'fixed');
    _loadingText.style('font-family', 'Arial, Helvetica, sans-serif');
    _loadingText.style('font-size', '30px');
    _loadingText.style('font-weight', 'bold');
    _loadingText.style('color', '#606060');

    _readyText = createP('PRESS PLAY');
    _readyText.style('display', 'none');
    _readyText.position(windowWidth/2 - 97, windowHeight/2 - 45, 'fixed');
    _readyText.style('font-family', 'Arial, Helvetica, sans-serif');
    _readyText.style('font-size', '30px');
    _readyText.style('font-weight', 'bold');
    _readyText.style('color', '#141414');  
    
    camMoving = createCamera();
    camHome = createCamera();
    camHome.setPosition(0,0,700);
    camHome.lookAt(0, 0, 0);

    cursor(CROSS);
}

function draw() {

    background(250);
    song.setVolume(slider.value());
    console.log(frameRate());
    let vol = amp.getLevel();
    let boxweight = map(vol,0,1,1,10)

 
    if(toggleState){
        camMoving.camera (0,0,(counter/2), 0, 0,0,0,1,0);
        camMoving.tilt(-rotateVertical);
        camMoving.pan(rotateHorizontal);
        
        push();
          translate (0,0,-50);
          strokeWeight(boxweight);
          stroke(0,0,0);
          fill(0,0,0,0)
          box(150);
        pop();
    }

    else{
      var Yrot = map(mouseX, 0, windowWidth, 1, -1);
      var Xrot = map(mouseY, 0, windowHeight, -1, 1);
      _readyText.style('transform', `rotate3d(${Xrot},${Yrot},0,25deg)`);
      _loadingText.style('transform', `rotate3d(${Xrot},${Yrot},0,25deg)`);

      strokeWeight(3);
      stroke('red');
      line (0,0,0,mouseX - (width/2), mouseY - (height/2),75);
    }

}


function togglePlaying(){
  if(toggleState == false){
    song.play();
    button.html("PAUSE");
    toggleState = true;
    interval = setInterval(timeline,10);
    setCamera(camMoving);
    _readyText.style('display', 'none');
  }
  
  else{
    song.pause();
    button.html("PLAY");
    toggleState = false;
    clearInterval(interval);
    setCamera(camHome);
    _readyText.style('display', 'block');
  }
  
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

function keyTyped() { 
  if (key == 'g') { 
      song.play(); 
  } 
} 
  
function keyReleased() { 
  if (key == 'g') { 
      song.pause(); 
  } 
} 