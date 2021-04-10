/**********************************************
 * Global Variables
 * ==================================
 ***********************************************/
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let canvasDraft = document.getElementById("canvasDraft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let colorStroke = "#42445A";
let colorFill = "#42445A";
let colorBg = "white";
let font = "50px Arial";
let fontSize = 50;
let lineJoin = "round";
let lineCap = "round";
let width = 3;
let title = "Welcome";
let subtitle = "Whaddup";

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
}

function drawStraight(x1, y1, x2, y2, ctx) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

/**********************************************
 * Will move this out: do one thing at a time
 * ==================================
 ***********************************************/
// rectangle

/**********************************************
 * Event Listener on Canvas
 * ==================================
 * - mousedown
 * - mousemove
 * - mouseup
 * - mouseleave

/**********************************************
 * Always at bottom
 * ==================================
 ***********************************************/
$("#canvas").mousedown(function (event) {
  dragging = true;
  console.log("Mouse Down: when user presses mouse");
  captureMouseEvent(event);
  currentFunction.onMouseDown(
    [xCoordinate, yCoordinate],
    event
  );
});
$("#canvas").mousemove(function (event) {
  //   console.log("Mouse Move: when user is moving mouse");
  captureMouseEvent(event);

  if (dragging != true) {
    currentFunction.onMouseMove(
      [xCoordinate, yCoordinate],
      event
    );
  } else {
    console.log("Dragging");
    currentFunction.onMouseDrag(
      [xCoordinate, yCoordinate],
      event
    );
  }
});
// when user released mouse
$("#canvas").mouseup(function (event) {
  dragging = false;
  console.log("Mouse Up: when user releases mouse");
  captureMouseEvent(event);
  currentFunction.onMouseUp(
    [xCoordinate, yCoordinate],
    event
  );
});
// when user's cursor leaves the element
$("#canvas").mouseleave(function (event) {
  dragging = false;
  console.log(
    "Mouse Leave: when user's cursor leaves the element"
  );
  captureMouseEvent(event);
  currentFunction.onMouseLeave(
    [xCoordinate, yCoordinate],
    event
  );
});
