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

### Task 4 :

Create a Dropdown (< Select >) menu which is formed by a nations array. You can push to this array new items using a 2 input textbox (for country name and code) and button. On selection of the any option from dropdown, its value(code) should be displayed on screen.

```js
const  nations  = [
  { name:  'India', code:  'IN' },
  { name:  'Pak', code:  'PK' },
  { name:  'Bangladesh', code:  'BG' },
] 
```

---
### Task 5

#### FILTERED LIST :

Make a List of something using an Array (a list can of cricket player /countries/ movie name etc). Now make this list it searchable, you have to put a input textbox at top of list. When you type in textbox it should only show you items matching from text typed. For example - If you type only "in" it should show things like "India" / "China" as both have in in it.

#### FILTERED LIST : 

Make above List as separate components for List, Input form and pass the states from each other using concepts learnt till now.

---