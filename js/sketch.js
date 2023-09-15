let t = 0;
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch');
}

function draw() {
  background(0);
  // fill(255);
    

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Wave {
  constructor(startX,startY,endX, endY) {
    this.start = createVector(startX,startY)
    this.end = createVector(endX,endY)
    this.points = []
    this.numPoints = 100
  }

  


}


