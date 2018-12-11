class StarField {

	constructor(starDensity, planetDensity, maxSpeed) {
		this.speed = 1;
		this.maxSpeed = maxSpeed || 50;
		this.stars = [];
		this.starDensity = starDensity || 400;
		this.planets = [];
		this.planetDensity = planetDensity || 40;
		this.mX = mouseX - width/2;
		this.mY = mouseY - height/2;

		background(100);
		noStroke();
		createCanvas(windowWidth, windowHeight);

		for (var i = 0; i < this.starDensity; i++) {
			this.stars[i] = new Star();
			this.stars[i].makeName();
		}

		for (var i = 0; i < this.planetDensity; i++) {
			this.planets[i] = new Planet();
			this.planets[i].makeName();
		}
	}

	draw() {
		fill(0, 100);
		rect(0, 0, width, height);
		translate(width / 2, height / 2);
		this.mX = mouseX - width/2;
		this.mY = mouseY - height/2;

		for (var i = 0; i < this.stars.length; i++) {
			if ((Math.abs(this.stars[i].sx - this.mX) <= 10) && (Math.abs(this.stars[i].sy - this.mY) <= 10) && !mouseIsPressed) {
				this.stars[i].label();
			}
			this.stars[i].update(this.speed);
			this.stars[i].show();
		}

		for (var i = 0; i < this.planets.length; i++) {
			if ((Math.abs(this.planets[i].sx - this.mX) <= 10) && (Math.abs(this.planets[i].sy - this.mY) <= 10) && !mouseIsPressed) {
				this.planets[i].label();
			}
			this.planets[i].update(this.speed);
			this.planets[i].show();
		}

		if (mouseIsPressed) {
			for (var i = 0; i < this.maxSpeed; i++) {
				if (this.speed <= this.maxSpeed) {
					this.speed += 0.005;
				}
			}
		} else if (mouseIsPressed === false) {
			for (var i = 0; i < this.speed-0.3; i++) {
				if (this.speed > 0) {
					this.speed -= 0.1;
				}
			}
		}
	}
}

class Planet {

	constructor () {
		    this.x = random(-width / 2, width / 2);
        this.y = random(-height / 2, height / 2);
        this.z = random(width);
        this.r = random(130);
        this.g = random(130);
        this.b = random(130);
        this.sx = map(this.x / this.z, 0, 1, 0, width);
        this.sy = map(this.y / this.z, 0, 1, 0, height);
        this.r = map(this.z, 0, width, 10, 0);
        this.gods = ["Zeus", "Hera", "Poseidon", "Hades", "Athena", "Apollo", "Artemis", "Aphrodite", "Hermes", "Ares" ];
        this.numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
    }

    makeName() {
		    this.name = this.gods[Math.floor(Math.random() * this.gods.length)] + " " + this.numerals[Math.floor(Math.random() * this.numerals.length)];
    }

    label() {
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

    update(speed) {
        this.z -= speed;
        if (this.z < 1) {
			this.z = width;
            this.x = random(-width / 2, width / 2);
			this.y = random(-height / 2, height / 2);
        }
    }

    show() {
		this.sx = map(this.x / this.z, 0, 1, 0, width);
		this.sy = map(this.y / this.z, 0, 1, 0, height);
		this.r = map(this.z, 0, width, 10, 0);
        fill(this.r, this.g, this.b);
        ellipse(this.sx, this.sy, this.r);
    }
}

 class Star {

    constructor() {
		this.x = random(-width / 2, width / 2);
        this.y = random(-height / 2, height / 2);
        this.z = random(width);
        this.sx = map(this.x / this.z, 0, 1, 0, width);
        this.sy = map(this.y / this.z, 0, 1, 0, height);
        this.r = map(this.z, 0, width, 5, 0);
        this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        this.nums = "0123456789";
    }

    makeName() {
        for (var i = 0; i < 5; i++) {
			       this.name += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
        }

		    this.name += " ";

		    for (var i = 0; i < 2; i++) {
			       this.name += this.nums.charAt(Math.floor(Math.random()* this.nums.length));
		    }

		    this.name = this.name.substring('undefined'.length);
    }

        label() {
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

    update(speed) {
		    this.z -= speed;
        if (this.z < 1) {
			      this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    show() {
		    this.sx = map(this.x / this.z, 0, 1, 0, width);
		    this.sy = map(this.y / this.z, 0, 1, 0, height);
		    this.r = map(this.z, 0, width, 5, 0);
        fill(255);
        ellipse(this.sx, this.sy, this.r);
    }
}
