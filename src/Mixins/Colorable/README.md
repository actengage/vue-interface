# Colorable

A mixin that adds `text-color`, `bg-color`, and `bg-gradient-color` classes
to the component.


## Props
All properties are Boolean.

text-primary
text-secondary
text-success
text-danger
text-warning
text-info
text-dark
text-light
text-muted

bg-primary
bg-secondary
bg-success
bg-danger
bg-warning
bg-info
bg-dark
bg-light
bg-muted

bg-gradient-primary
bg-gradient-secondary
bg-gradient-success
bg-gradient-danger
bg-gradient-warning
bg-gradient-info
bg-gradient-dark
bg-gradient-light
bg-gradient-muted

## Methods

### textColor()
Returns an array of text color classes
@return Array

### bgColor()
Returns an array of background color classes
@return Array

### bgGradientColor()
Returns an array of background gradient color classes
@return Array


## Computed

### textColorClasses
Returns a joined string of the text color classes
@return String

### bgColorClasses
Returns a joined string of the background color classes
@return String

### bgGradientColorClasses
Returns a joined string of the background gradient color classes
@return String

### colorableClasses
Returns an object of all the color classes.
@return Object
