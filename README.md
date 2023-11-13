# Assignment

### Task 1 : 

1. Make a simple page with 1 Image, 1 button, 1 form Input text box and try to apply these events .

2. Image :  onMouseOver : when you hover on image. Image should increase in size. Think of any way where you can do it. Also, try that when you "move out" the mouse, it should be back to normal size.

3. Button : onDoubleClick: when you doubleClick a button. show some alert box. Also make a console.log for single click event. Is console.log printed twice on double click ? check this ?

4. Input Textbox : onFocus, onBlur are 2 events which occur when you enter or exit an input text box by click of mouse etc. Use it to display some console.log, which print "focused on the textbox", "out of textbox".


---
- ### Note : 

- **`onFocus` event:**
  - Occurs when an element (like an input field) becomes the active element, typically by being clicked on or selected through keyboard navigation.
  - In the context of a text input, it triggers when the cursor is placed inside the input field.

- **`onBlur` event:**
  - Occurs when an element loses focus, meaning it is no longer the active element.
  - In the context of a text input, it triggers when you click outside of the input field or tab away from it.
---


5. onCopy, onCut, onPaste are 3 events which you can use on any text value etc. try to use it on a paragraph and just alert the user that something is copied, cut or pasted.

---

### Task 2  

Make a form using < Form> tag and put an textbox and button inside this form. try to click the button after entering into textbox. Does form reloads ? Can you try to stop is using e.preventDefault. Try it.

---

### Task 3 

use an Input Textbox : after you enter some text. try to press ENTER button and show the an alert or console.log. You can capture the onKeyPress event, how you will you make it work only for "Enter" key ? It should not work on pressing of other keys. 

---

### Task 4 

 This is continuation of previous project/assignment RESUME Builder.

Add a print button to print the current resume. You can use a DOM method window.print to print the PDF.
Assignment 5 : Can you try the challenge of passing the function in one Prop like onPlay and the message inside that function to be accessed from other prop message [ As shown in Chapter Video ]