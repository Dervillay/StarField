var stars = []
var planets = []
var speed = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    for (var i = 0; i < 400; i++) {
        stars[i] = new Star();
				planets[i] = new Planet();
    }
}

function draw() {

    fill(0, 100);
    rect(0, 0, width, height);
    translate(width / 2, height / 2);

    for (var i = 0; i < stars.length; i++) {
        fill(255)
        stars[i].update();
        stars[i].show();

			if (i % 25 == 0) {
					planets[i].update();
					planets[i].show();
				}
    }

		if (mouseIsPressed) {
				for (var i = 0; i < 8; i++) {
					speed = speed + 0.1;
				}
		} else if (mouseIsPressed === false) {
		    for (var i = 0; i < speed-1; i++) {
				    if (speed > 0) {
							     speed = speed - 0.1;
		        } else {
							     speed = 1;
			      }
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
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

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
        var r = map(this.z, 0, width, 7, 0);
        fill(this.r, this.g, this.b);
        ellipse(sx, sy, r, r);
    }
}
