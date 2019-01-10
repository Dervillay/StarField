var s;

function setup(starDensity, planetDensity, maxSpeed, objectLabelling, cube, sphere) {
  s = new StarField(starDensity, planetDensity, maxSpeed, objectLabelling, cube, sphere);
}

function draw() {
    s.draw();
}
