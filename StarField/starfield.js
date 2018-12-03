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
		var mX = mouseX - width/2;
		var mY = mouseY - height/2;

    for (var i = 0; i < stars.length; i++) {

        stars[i].update();

				fill(100);

				if ((Math.abs(stars[i].sx - mX) <= 5) && (Math.abs(stars[i].sy - mY) <= 5) && !mouseIsPressed) {
					ellipse(stars[i].sx, stars[i].sy, 15, 15);
					fill(70, 70, 70);
					rect(stars[i].sx - 25, stars[i].sy - 30, 50, 15, 3, 3, 3, 3);
					triangle(stars[i].sx, stars[i].sy - 10, stars[i].sx - 7, stars[i].sy - 16, stars[i].sx + 7, stars[i].sy - 16);
				} else if ((Math.abs(planets[i].sx - mX) <= 5) && (Math.abs(planets[i].sy - mY) <= 5)) {
					ellipse(planets[i].sx, planets[i].sy, 15, 15);
				}

        stars[i].show();

			if (i % 100 == 0) {
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

				this.sx = sx;
				this.sy = sy;

				fill(255);
        ellipse(sx, sy, r, r);
    }
}

function Planet() {
		this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);
    this.r = random(130);
    this.g = random(130);
    this.b = random(130);

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
        var r = map(this.z, 0, width, 10, 0);

				this.sx = sx;
				this.sy = sy;

        fill(this.r, this.g, this.b);
        ellipse(sx, sy, r, r);
    }
}

function nameStar() {
  var name;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var nums = "0123456789";

  for (var i = 0; i < 5; i++) {
    name += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	name += "_";

	for (var i = 0; i < 2; i++) {
		name += nums.charAt(Math.floor(Math.random()* nums.length));
	}

  return name;
}

function namePlanet() {
  var name;
  var gods = ["Zeus", "Hera", "Poseidon", "Hades", "Athena", "Apollo", "Artemis", "Aphrodite", "Hermes", "Ares" ];
	var numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

    name = gods[Math.floor(Math.random() * gods.length)] + "_" + numerals[Math.floor(Math.random() * numerals.length)];
  return name;
}
