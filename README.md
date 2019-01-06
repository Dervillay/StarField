# StarField
An adapted component from a p5.js project, originally forked from Ning Shen's [Starfield](https://www.openprocessing.org/sketch/429790), licensed under [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

## starfield.js
The component consists of 3 classes: **StarField**, **Planet** and **Star**:

### StarField

#### constructor:
  The constructor takes 4 optional parameters, *starDensity*, *planetDensity*, *maxSpeed* and *objectLabelling*, expecting a boolean value for *objectLabelling* and integers for all others. If no values are specified, then they will default to *50*, *400*, *40* and *false* respectively. These values are then passed to variables of the same name. The constructor then initialises multiple other variables, *speed*, *mX*, *mY*, and two empty lists named *stars* and *planets*.  
  
  *speed* is used to set the default scrolling speed of the StarField when the mouse is not pressed, by default, this is set to 1. *mX* and *mY* represent translated versions of the current x and y coordinates of the mouse, where mX is the current x coordinate minus half the width of the window the component is rendered in, and mY is the current y coordinate minus half the height of the window. (The reason for this translation is explained in *draw()*)  
  
  The background is then set to the default greyscale value of 100 with *background(100)*, producing a translucent black, allowing us to achieve the trailing effect behind stars and planets when the component is rendered.  
  
  *noStroke()* stops the component from drawing outlines.
   
  *createCanvas(windowWidth, windowHeight)* initialises a canvas with width and height equal to that of the window that the component is being initialised in. 
  
  The constructor finally populates the lists *stars* and *planets* by intialising new instances of the classes *Star* and *Planet*, storing each instance as an element in the list. It creates as many stars as the value of *starDensity* and as many planets as the value of *planetDensity*
  
