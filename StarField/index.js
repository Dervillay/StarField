var s;

function setup(starDensity, planetDensity, maxSpeed, objectLabelling) {
    s = new StarField(starDensity, planetDensity, maxSpeed, objectLabelling);
}

function draw() {
  s.draw();
}
