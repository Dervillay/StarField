var s;
// var g;

function setup(starDensity, planetDensity, maxSpeed, objectLabelling) {
    s = new StarField(starDensity, planetDensity, maxSpeed, objectLabelling);
    // g = createGraphics(x, y)
}

function draw() {
  s.draw();
  // s.draw(g);
}
