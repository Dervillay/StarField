# StarField
An adapted component from a p5.js project, originally forked from Ning Shen's [Starfield](https://www.openprocessing.org/sketch/429790), licensed under [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

## starfield.js
The component consists of 3 classes: **StarField**, **Planet** and **Star**:

### StarField

#### constructor
  The constructor takes 4 optional parameters, *starDensity*, *planetDensity*, *maxSpeed* and *objectLabelling*, expecting a boolean value for *objectLabelling* and integers for all others. If no values are specified, then they will default to *50*, *400*, *40* and *false* respectively. These values are then passed to variables of the same name. The constructor then initialises multiple other variables, *speed*, *mX*, *mY*, and two empty lists named *stars* and *planets*.  
  
  *speed* is used to set the default scrolling speed of the StarField when the mouse is not pressed, by default, this is set to 1. *mX* and *mY* represent translated versions of the current x and y coordinates of the mouse, where mX is the current x coordinate minus half the width of the window the component is rendered in, and mY is the current y coordinate minus half the height of the window. (The reason for this translation is explained in *draw()*)  
  
  The background is then set to the default greyscale value of 100 with *background(100)*, producing a translucent black, allowing us to achieve the trailing effect behind stars and planets when the component is rendered.  
  
  *noStroke()* stops the component from drawing outlines.
   
  *createCanvas(windowWidth, windowHeight)* initialises a canvas with width and height equal to that of the window that the component is being initialised in. 
  
  The constructor finally populates the lists *stars* and *planets* by intialising new instances of the classes *Star* and *Planet*, storing each instance as an element in the list. It creates as many stars as the value of *starDensity* and as many planets as the value of *planetDensity*.
  
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

#### draw
The *draw* function begins by drawing a translucent greyscale rectangle the size of the canvas using *fill(0,100)* and *rect(0, 0, width, height)*. As mentioned above, this translucency creates the trailing effect of stars and planets.

 *translate(width/2, height/2)* is then used to translate all proceeding graphics, this allows the StarField effect to appear to come from the center.
 
 Since the *draw* function is called every frame, we update the variables *mX* and *mY* so the component is always aware of where the mouse is, allowing functionality for star and planet labelling.
 
 For loops are then used to draw and update the positions of each star and planet. This is done for each item in the lists *stars* and *planets*, using the *star* and *planet* methods *update* and *show*. The for loops also check if the the mouse's X and Y posititon are within 10 pixels of the graphic, and if *objectLabelling* is *true*. If so, the method *label* is called.
 
 Finally an if statement checks whether or not the mouse is pressed. If it is, whilst the value of *speed* is less than *maxSpeed*, it increases *speed* by increments of 0.005. If the mouse is not pressed, whilst the value of *speed* is greater than zero, it decreases *speed* by decrements of 0.1.
 
### Planet

#### constructor

Initialises the variables *x*, *y*, *z*, *red*, *green*, *blue*, *sx*, *sy*, *r*, *gods*, *numerals* and *name*.
*x*, *y* and *z* are randomly generated numbers, representing the 3D coordinates of each graphic, with *x* between -width/2 and width/2, *y* between -height/2 and height/2, and *z* between 0 to width, where height and width are the height and width of the canvas.  
*red*, *green* and *blue* are all RGB values between 0 and 130 (stopping the planets from becoming too vibrant) and determining the colour of the planet.
*sx* maps the value of *x/z* from between 0 and 1, to between 0 and *width*. Similarly *sy* maps the value of *y/z* from between 0 and 1 to between 0 and *height*. These mappings allow stars and planets to be rendered in positions as if they were moving towards the screen in 3D space, creating the 3D, scrolling feel of the StarField.
*r* maps *z* from between 0 and width to 10 and 0, allowing the radius of the graphics to change in relation to *z*, creating the effect that they are moving towards the screen.



 





