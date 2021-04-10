# Canvas

### Variable Names

For more information, check out the github page at:https://lezzles11.github.io/Canvas-Project/

Canvas Assignment

- #canvas
- .coordinateX
- .coordinateY

### Global Variables

##### html

- #lineButton
- #rectButton
- #colorButton
- #eraseButton
- #textButton
- #downloadButton
- #uploadButton
- #undoButton
- #redoButton
- #contrastRange
- #brightnessRange
- #strokeRange
- #circleButton

##### javascript

**properties**

- canvas
  - stroke
  - fill
  - font
  - fontSize
  - lineJoin
  - lineCap
  - width
- context

**actions**

- currentFunction (which will be applied to the new class)
- dragging (boolean)

**information**

- xCoordinate
- yCoordinate
- actions (array) that keeps track of undo and redo
- title (string) -
- subtitle (string)

### Frontend Cool Examples (what I like)

- Filter: http://canvas-api-22.surge.sh/

  - Contrast
  - Brightness

- Cleanliness of the fill buttons: http://canvas-project-g2.surge.sh/

  - Fill Color
  - Outline Color
  - Text Size
  - Line Size

- Hover Functionality: http://nostalgic-paint.surge.sh/
  - Styling

### Backend Examples

The purpose of this section is to identify class patterns that make it easier for the developer to add, remove and edit functionality.

- Having a class that adjusts for styles (as this applies to )
- Having a class for each functionality
  - What is the constructor of the class?
- Having a parent class that can be extended by the functionalities (e.g., onMouseDown, onMouseDrag, onMouseUp)
- File that handles buttons and keyboard
-

```
- MouseMethods

  - constructor()
  - applyStyling() {
      //  this.contextReal.strokeStyle = curStroke
      //   this.contextReal.fillStyle = curFill;
      //   this.contextReal.lineWidth = curWidth;
  }
  - onDragging()
  - onMouseDown()
  - onMouseMove()
  - onMouseDrag()
  - onMouseUp()
```

- javascript

  - canvas

    - canvas-common.js
      - adds width and height attributes to canvas-real, canvas-draft and canvas-select
      - grabs the drawing-canvas class
        - makes dragging true
    - canvas-functions.js
      - grabs .valueSpan2
      - grabs #customerRange
        - applies #customRange to .valueSpan2
        - Undo
        - Draw dotted line
        - Draw rectangle
        - Greyscale
        - sepia
        - invert
        - contrast
        - brightness
        - paintBucketFill
    -
    - canvas-variables.js

  - drawing
    - 01-default
      - drawing-eraser
      - drawing-fill-bucket
      - drawing-selection
      - drawing-stamp
      - drawing-text
      - drawing-transform
      -
    - 02-
    - 03
    - 04
    - 05
    - 06
    -
  - toolbar (connects the classes to the button)

    - toolbar-button-04

  - vendor
  - init.js
