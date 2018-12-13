var s;

function setup(starD, planetD, maxS, planetLabels) {
    s = new StarField(starD, planetD, maxS, planetLabels);
}

function draw() {
  s.draw();
}
