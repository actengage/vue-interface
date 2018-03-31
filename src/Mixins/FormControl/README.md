# FormControl

A mixin that that adds the necessary properties for a form input control.

## Props

### id
The field id attribute value.
@property String

### label
The value of label element. If no value, no label will appear.
@property String

### name
The field name attribute value.
@property String

### value
The field id attribute value.
@default  null
@property String

### placeholder
The placeholder attribute value.
@property String

### required
Is the field required.
@property Boolean

### pattern
The regex pattern for validation.
@property String

### error
An inline field validation error.
@property String

### errors
An inline field validation errors passed as object with key/value pairs. If
errors passed as an object, the form name will be used for the key.
@property [Object, Array]

### bindEvents
An array of event names that correlate with callback functions
@default  ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress']
@property Array

### defaultControlClass
The default class name assigned to the control element
@default  'form-control'
@property String

### hideLabel
Hide the label for browsers, but leave it for screen readers.
@property Boolean

### spacing
Additional margin/padding classes for fine control of spacing
@property String

### size
The size of the form control. Possible values: sm, md, lg
@default  'md'
@property String

### inline
Display the form field inline
@property Boolean

### plaintext
If the form control is plaintext?
@property Boolean

### readonly
If the form control is readonly?
@property Boolean

### disabled
Is the form control disabled?
@property Boolean

### helpText
Some instructions to appear under the field label
@property String

### feedback
Some feedback to add to the field once the field is successfully valid.
@property [String, Array]

## Directives

### bindEvents
Bind an array of events to a DOM node an emit the callback on the component.


## Methods

### getInputField()
Return the input element.
@return  Object

### getFieldErrors()
Return the field errors
@return  Object|Array

### updated(value, event)
Emit the update event on the component


## Computed

### callbacks
An array of callback for the bind-events directive
@return Array

### invalidFeedback
A string of invalid feedback (if invalid)
@return String

### validFeedback
A string of valid feedback (if valid)
@return String

### controlClass
A class name for the form control
@return String

### controlSizeClass
A class name for the form control size
@return String
