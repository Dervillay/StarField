var stars = []
var planets = []
var speed = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    for (var i = 0; i < 200; i++) {
        stars[i] = new Star();
				planets[i] = new Planet();
    }
}

function draw() {

    fill(0, 100);
    rect(0, 0, width, height);
    translate(width / 2, height / 2);

    for (var i = 0; i < stars.length; i++) {
				fill(255);
        stars[i].update();
        stars[i].show();

			if (i % 100 == 0) {
					planets[i].update();
					planets[i].show();
				}
    }
}

function Star() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

    this.update = function() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    this.show = function() {
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 5, 0);
        ellipse(sx, sy, r, r);
    }
}

function Planet() {
		this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

    this.update = function() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    this.show = function() {
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 20, 0);
        ellipse(sx, sy, r, r);
    }
}
