/**********************************************
 * Global Variables
 * ==================================
 ***********************************************/
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let currentFunction;
let dragging = false;
let colorStroke = "rgba(255, 0, 0, 1)";
let colorFill = "rgba(128, 0, 128, 1)";
let colorBg = "white";
let font = "50px Arial";
let fontSize = 50;
let lineJoin = "round";
let lineCap = "round";
let width = 3;
let title = "Welcome";
let subtitle = "Whaddup";
context.strokeStyle = colorStroke;

/**********************************************
 * Keep Track of Coordinates
 * ==================================
 ***********************************************/
let xCoordinateDiv = $(`.xCoordinate`);
let yCoordinateDiv = $(`.yCoordinate`);
function getMousePosition(
  canvas,
  elementOne,
  elementTwo,
  event
) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  elementOne.html("Coordinate X: " + x);
  elementTwo.html("Coordinate Y: " + y);
}

canvas.addEventListener("mousedown", function (event) {
  getMousePosition(
    canvas,
    xCoordinateDiv,
    yCoordinateDiv,
    event
  );
});

function captureMouseEvent(event) {
  this.xCoordinate = event.offsetX;
  this.yCoordinate = event.offsetY;
  console.log(
    "X Coordinate",
    xCoordinate,
    "Y Coordinate",
    yCoordinate
  );
}

function drawStraight(x1, y1, x2, y2, ctx) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
/**********************************************
 * Event Listener on Canvas
 * ==================================
 * - mousedown
 * - mousemove
 * - mouseup
 * - mouseleave
 ***********************************************/
// when user presses the mouse

currentFunction = new LineFunction(context);
$("#canvas").mousedown(function (event) {
  console.log("Mouse Down: when user presses mouse");
  captureMouseEvent(event);
  currentFunction.onMouseDown(
    [xCoordinate, yCoordinate],
    event
  );
  dragging = true;
});
$("#canvas").mousemove(function (event) {
  console.log("Mouse Move: when user is moving mouse");
  captureMouseEvent(event);

  currentFunction.onMouseMove(
    [xCoordinate, yCoordinate],
    event
  );
});
// when user released mouse
$("#canvas").mouseup(function (event) {
  console.log("Mouse Up: when user releases mouse");
  captureMouseEvent(event);
  currentFunction.onMouseUp(
    [xCoordinate, yCoordinate],
    event
  );
  dragging = false;
});
// when user's cursor leaves the element
$("#canvas").mouseleave(function (event) {
  console.log(
    "Mouse Leave: when user's cursor leaves the element"
  );
  captureMouseEvent(event);
  currentFunction.onMouseLeave(
    [xCoordinate, yCoordinate],
    event
  );
  dragging = false;
});

/**********************************************
 * Will move this out
 * ==================================
 ***********************************************/
// color

/**********************************************
 * Color 
 * ==================================
 * 1. Add the html
 * #colorFill
 * #colorStroke
 * #colorBg
 * 
 * Add options 


3. pickr.on(event:String, cb:Function):Pickr - Appends an event listener to the given corresponding event-name (see section Events).

4. Convert color 

hsva.toRGBA() - Converts the object to a rgba array.

5. Ensure that the color can be applied to the line functionality 

6. Repeat for fill functionality 

7. Repeat for background functionality 

8. Repeat for text functionality 


 ***********************************************/

function createPickr(tag) {
  return new Pickr({
    el: tag,
    theme: "classic",
    swatches: [
      "rgba(244, 67, 54, 1)",
      "rgba(233, 30, 99, 0.95)",
      "rgba(156, 39, 176, 0.9)",
      "rgba(103, 58, 183, 0.85)",
      "rgba(63, 81, 181, 0.8)",
      "rgba(33, 150, 243, 0.75)",
      "rgba(3, 169, 244, 0.7)",
      "rgba(0, 188, 212, 0.7)",
      "rgba(0, 150, 136, 0.75)",
      "rgba(76, 175, 80, 0.8)",
      "rgba(139, 195, 74, 0.85)",
      "rgba(205, 220, 57, 0.9)",
      "rgba(255, 235, 59, 0.95)",
      "rgba(255, 193, 7, 1)",
    ],
    components: {
      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
        hex: true,
        rgba: true,
        hsla: true,
        hsva: true,
        cmyk: true,
        input: true,
        clear: true,
        save: true,
      },
    },
  });
}
let colorFillPickr = createPickr("#colorFillDiv");
let colorBgPickr = createPickr("#colorBgDiv");
let colorStrokePickr = createPickr("#colorStrokeDiv");

colorFillPickr.on("change", (color, instance) => {
  const rgbaColorStroke = color.toRGBA().toString();
  colorFill = rgbaColorStroke;
  console.log(colorStroke);
});

colorBgPickr.on("change", (color, instance) => {
  const rgbaColorStroke = color.toRGBA().toString();
  colorBg = rgbaColorStroke;
  console.log(colorStroke);
});

colorStrokePickr.on("change", (color, instance) => {
  const rgbaColorStroke = color.toRGBA().toString();
  colorStroke = rgbaColorStroke;
  console.log(colorStroke);
});
