# StarField

An adapted component from a p5.js project, originally forked from Ning Shen's [Starfield](https://www.openprocessing.org/sketch/429790), licensed under [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/)



# Methods and Parameters



## starfield.js

The component consists of 3 classes: **StarField**, **Planet** and **Star**:



### StarField



#### constructor()

  The constructor takes 4 optional parameters, `starDensity`, `planetDensity`, `maxSpeed` and `objectLabelling`, expecting a boolean value for `objectLabelling` and integers for all others. If no values are specified, then they will default to 50, 400, 40 and false respectively. These values are then passed to variables of the same name. The constructor then initialises multiple other variables, `speed`, `mX`, `mY`, and two empty lists named `stars` and `planets`.  

  

  `speed` is used to set the default scrolling speed of the StarField when the mouse is not pressed, by default, this is set to 1. `mX` and `mY` represent translated versions of the current x and y coordinates of the mouse, where mX is the current x coordinate minus half the width of the window the component is rendered in, and mY is the current y coordinate minus half the height of the window. (The reason for this translation is explained in `draw()`  

  

  The background is then set to the default greyscale value of 100 with `background(100)`, producing a translucent black, allowing us to achieve the trailing effect behind stars and planets when the component is rendered.  

  

  `noStroke()` stops the component from drawing outlines.

   

  `createCanvas(windowWidth, windowHeight)` initialises a canvas with width and height equal to that of the window that the component is being initialised in. 

  

  The constructor finally populates the lists `stars` and `planets` by intialising new instances of the classes `Star` and `Planet`, storing each instance as an element in the list. It creates as many stars as the value of `starDensity` and as many planets as the value of `planetDensity`.

  

#### getters and setters

Getters and setters exist for all variables in the following form

~~~~

get speed() {

  return this._speed;

}

~~~~

~~~~

set speed(speed) {

  this._speed = speed;

}

~~~~



#### draw()

The `draw()` function begins by drawing a translucent greyscale rectangle the size of the canvas using `fill(0,100)` and `rect(0, 0, width, height)`. As mentioned above, this translucency creates the trailing effect of stars and planets.



 `translate(width/2, height/2)` is then used to translate all proceeding graphics, this allows the StarField effect to appear to come from the center.

 

 Since the `draw` function is called every frame, we update the variables `mX` and `mY` so the component is always aware of where the mouse is, allowing functionality for star and planet labelling.

 

 For loops are then used to draw and update the positions of each star and planet. This is done for each item in the lists `stars` and `planets`, using the `star` and `planet` methods `update()` and `show()`. The for loops also check if the mouse's X and Y posititon are within 10 pixels of the graphic, and if `objectLabelling` equals `true`. If so, the method `label()` is called.

 

 Finally an if statement checks whether or not the mouse is pressed. If it is, whilst the value of `speed` is less than `maxSpeed`, it increases `speed` by increments of 0.005. If the mouse is not pressed, whilst the value of `speed` is greater than zero, it decreases `speed` by decrements of 0.1.

 

### Planet



#### constructor()



Initialises the variables `x`, `y`, `z`, `red`, `green`, `blue`, `sx`, `sy`, `r`, `gods`, `numerals` and `name`.

`x`, `y` and `z` are randomly generated numbers, representing the 3D coordinates of each graphic, with `x` between `-width/2` and `width/2`, `y` between `-height/2` and `height/2`, and `z` between 0 and `width`, where `height` and `width` are the height and width of the canvas.  



`red`, `green` and `blue` are all RGB values between 0 and 130 (stopping the planets from becoming too vibrant) and determining the colour of the planet.



`sx` maps the value of `x/z` from between 0 and 1, to between 0 and `width`. Similarly `sy` maps the value of `y/z` from between 0 and 1 to between 0 and *`height`. These mappings allow stars and planets to be rendered in positions as if they were moving towards the screen in 3D space, creating the 3D, scrolling feel of the StarField.



`r` maps `z` from between 0 and `width` to between 10 and 0, allowing the radius of the graphics to change in relation to `z`, creating the effect that they are moving towards the screen.



The variables `gods` and `numerals` are lists of strings containing the names of Greek gods and Roman Numerals, respectively. These lists are used to randomly generate the names of planets.



`name` is where each planet's name is generated. Using the `random()` method of JavaScript's `Math` object, random numbers corresponding to the indices of list elements are generated, and `name` is created as a concatenation of the god and numeral at the generated indices.



#### getters and setters

Getters and setters are defined for all variables using the format depicted above in the **StarField** class.



#### label()

The label method uses `fill(30)` to set the fill colour to a translucent grey. Then `ellipse(this.sx, this.sy, 15)` is called, drawing a circle with radius 15 and centre at x and y positions equal to `sx` and `sy`, which are the current coordinates of the planet.



`rect(this.sx - 35, this.sy - 40, 70, 25, 3, 3, 3, 3)` is used to draw a rectangle above the current position of the planet, which is then used to hold the text of the planet's name. The parameters with value 3 specify the radius of curvature of the rectangle's corners, creating a sleeker look. Similarly `triangle(this.sx, this.sy - 10, this.sx - 7, this.sy - 16, this.sx + 7, this.sy - 16)` is used to draw a triangle below the rectangle, giving the graphics the appearance of a label. 



`fill(255)` is used to set the fill colour to white. `textSize(12)` sets the text size to 12, `textFont("Arial")` sets the font to Arial, and `textAlign(CENTER)` makes it such that any text is drawn with its centre at the x and y coordinates provided.



`text(this.name, this.sx, this.sy -23)` draws the planet's name at the centre of the previously drawn rectangle. 



#### update()

`z` is decremented by the current value of `speed`, allowing each planet to move towards the screen proportionally to the value of speed. Once `z` becomes less than 1 (i.e the planet has appeared to reach the screen) `x`, `y` and `z` are then reset to new values in the same way as before in the constructor, so the next time the planet is drawn it will appear to be in the distance as a new graphic. By doing this, the StarField appears endless and continues indefinitely. 



#### show()

`sx`, `sy` and `r` are mapped as before in the constructor to update the 3D position of each planet. `fill(this.red, this.green, this.blue)` is used to set the fill colour equal to the random RGB value generated in the constructor, and `ellipse(this.sx, this.sy, this.r)` is used to draw the planet with centre at the coordinates represented by `sx` and `sy` and radius `r`.



### Star



#### constructor()



The **Star** constructor contains similar variables to those in **Planet**, excluding `red`, `green` and `blue`, since each star is the same colour. Instead of `gods` and `numerals`, each star is given 2 strings named `chars` and `nums`, where `chars` contains every letter of the alphabet in both upper and lower case, and `nums` contains each digit from 0 to 9.



`name` is then generated using for loops to select 5 random characters from `chars` and 2 random digits form `nums`, using the same `random()` method from the `Math` object as before, and by concatenating the resulting strings.



The variables `x`, `y`, `z`, `sx` and `sy` are identical to in **Planet** and `r` is almost identical, but instead of mapping `z` to between 10 and 0, it maps to between 5 and 0. This makes stars smaller than planets, and therefore easier for a user to distinguish between the two (despite stars being larger in the real world).



#### getters and setters

Getters and setters exist for all variables in the class and are written in the same format as that shown under **StarField** above.



#### label()

This method is identical to that of **Planet** mentioned above.



#### update()

This method is also identical to that of **Planet**, and is explained above.



#### show()

This method is very similar to that of **Planet** but uses `fill(255)` as opposed to `fill(this.red, this.green, this.blue)` to set the fill colour to white, since all stars are the same colour.



# Example 



## index.html



index.html consists of HTML form controls that allow interaction with the DOM. 3 sliders exist for **Star Density**, **Planet Density** and **Max Speed**, each of which controls the numerical value of the parameters fed to an instance of the `StarField` class. **Star Density** allows a range between 0 and 2000 defaulting at 400, whereas **Planet Density** takes values of the same range, but defaults at 40. **Max Speed** can take anywhere from 1 to 100, but defaults at 70 to avoid the sketch behaving too erratically.



Since the **StarField** populates the `stars` and `planets` lists in the constructor, there is a generate button that creates a new instance of the sketch with the parameters specified by the form controls. It does this by using an event listener to check for a button press, and when it receives one, runs the JavaScript function `generate()`. This retrieves the current numerical value of the form controls, stores them in variables, and then passes these variables as parameters to the `setup()` function in **index.js**, creating a new instance of **StarField** with the values specified. The code for doing so is as follows

~~~~

var starDensity = document.getElementById("starDensity").value;

var planetDensity = document.getElementById("planetDensity").value;

var maxSpeed = document.getElementById("maxSpeed").value;

var labellingOn = document.getElementById("labellingOn").checked;



function generate() {

    starDensity = document.getElementById("starDensity").value;

    planetDensity = document.getElementById("planetDensity").value;

    maxSpeed = document.getElementById("maxSpeed").value;

    labellingOn = document.getElementById("labellingOn").checked;

    setup(starDensity, planetDensity, maxSpeed, labellingOn);

      }

~~~~



## index.js

 The component can be easily embedded in an HTML page through the use of an additional **index.js** file. In **index.html** we import the **starfield.js** code containing the class, allowing us to define an instance of it in **index.js** as follows

~~~~

var s;





function setup(starDensity, planetDensity, maxSpeed, objectLabelling) {

    s = new StarField(starDensity, planetDensity, maxSpeed, objectLabelling);

}



function draw() {

  s.draw();

}

~~~~

This allows the use of the generate button (mentioned above) in **index.html**, and the creation of new instances of **StarField** through calls to `setup()`.













 









