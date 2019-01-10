var s;
var g;

function setup(starDensity, planetDensity, maxSpeed, objectLabelling, drawBox) {
  /*
  if(drawBox) {
    createCanvas(windowWidth, windowHeight, WEBGL);
    g = createGraphics(windowWidth, windowHeight);
  } else {
    createCanvas(windowWidth,windowHeight);
  }
  */
  s = new StarField(starDensity, planetDensity, maxSpeed, objectLabelling, drawBox);
}

function draw(g) {
    s.draw(g);
}
