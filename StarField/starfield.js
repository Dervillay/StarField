var speed = 1;
var stars = []
var planets = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    starDensity = createSlider(10, 2000);
    starDensity.position(20, 20);
    planetDensity = createSlider(10, 2000);
    planetDensity.position(20, 60);
    button = createButton("Generate Star Field");
    button.position(30,90);
    button.mousePressed(generate);
}

function generate() {
  background(0);
  noStroke();
  stars = [];
  planets = [];
  
  for (var i = 0; i < starDensity.value(); i++) {
      stars[i] = new Star();
  }

  for (var i = 0; i < planetDensity.value(); i++) {
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

				if ((Math.abs(stars[i].sx - mX) <= 5) && (Math.abs(stars[i].sy - mY) <= 5) && !mouseIsPressed) {
					stars[i].label();
        }

        stars[i].show();
    }

    for (var i = 0; i < planets.length; i++) {

        planets[i].update();

        if ((Math.abs(planets[i].sx - mX) <= 5) && (Math.abs(planets[i].sy - mY) <= 5) && !mouseIsPressed) {
          planets[i].label();
        }

        planets[i].show();
    }

		if (mouseIsPressed) {
				for (var i = 0; i < 8; i++) {
					if (speed < 70) {
						speed = speed + 0.1;
					}
				}
		} else if (mouseIsPressed === false) {
		    for (var i = 0; i < speed-0.4; i++) {
				    if (speed > 0) {
							     speed = speed - 0.1;
		        }
		    }
		}
}

function Star() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

		this.makeName = function() {
			var name;
			var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			var nums = "0123456789";

			for (var i = 0; i < 5; i++) {
				name += chars.charAt(Math.floor(Math.random() * chars.length));
			}

			name += " ";

			for (var i = 0; i < 2; i++) {
				name += nums.charAt(Math.floor(Math.random()* nums.length));
			}

			return name;
		}

		this.name = this.makeName().substring('undefined'.length);

		this.label = function() {
			fill(30, 30, 30);
			ellipse(this.sx, this.sy, 15, 15);
			rect(this.sx - 35, this.sy - 40, 70, 25, 3, 3, 3, 3);
			triangle(this.sx, this.sy - 10, this.sx - 7, this.sy - 16, this.sx + 7, this.sy - 16);
			fill(255);
			textSize(12);
			textFont("Arial");
			textAlign(CENTER);
			text(this.name, this.sx, this.sy - 23)
		}

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

		this.makeName = function() {
			var name;
  		var gods = ["Zeus", "Hera", "Poseidon", "Hades", "Athena", "Apollo", "Artemis", "Aphrodite", "Hermes", "Ares" ];
			var numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

    	name = gods[Math.floor(Math.random() * gods.length)] + " " + numerals[Math.floor(Math.random() * numerals.length)];
  		return name;
		}

		this.name = this.makeName();

		this.label = function() {
			fill(30, 30, 30);
			ellipse(this.sx, this.sy, 15, 15);
			rect(this.sx - 35, this.sy - 40, 70, 25, 3, 3, 3, 3);
			triangle(this.sx, this.sy - 10, this.sx - 7, this.sy - 16, this.sx + 7, this.sy - 16);
			fill(255);
			textSize(12);
			textFont("Arial");
			textAlign(CENTER);
			text(this.name, this.sx, this.sy - 23)
		}

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
