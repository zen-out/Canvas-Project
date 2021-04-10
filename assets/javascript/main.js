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
let textInput = $("#textInput");
let textContent = "";
let font = "50px Arial";
let fontSize = 50;
let lineJoin = "round";
let lineCap = "round";
let width = 3;
let fontWidth = 3;
let title = "Welcome";
let subtitle = "Whaddup";
let history = new Array();
let counter = -1;

function addToHistory() {
  let currentSnapshot = new Image();
  currentSnapshot = canvas.toDataURL();
  console.log("saved to history");
  history.push(currentSnapshot);

  counter++;
  console.log("Current counter:", counter);
  console.log("Current array length", history.length);
  console.log(history);
}
$("#undoButton").click(function () {
  console.log("pressed undo");
  console.log("current counter:", counter);
  let image = new Image();
  if (counter === 0) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    image.src = history[counter - 1];
  }
  //   console.log(history[counter - 2]);
  //   let image2 = new Image();
  //   image2.src = history[counter - 1];
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  image.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, 500, 500);
    history.pop();
    counter--;
  };

  //   image.onload = function () {
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     context.drawImage(image, 0, 0);
  //   };
  //   console.log("history length", history.length - 1);
  //   console.log(history[counter]);
  //   let image = history[counter];
  //   let newImage = new Image();
  //   newImage.src = history[counter].currentSrc;
  //   console.log(image);
  //   //   let image = new Image();
  //   //   image.currentSrc = history[counter].currentSrc;
  //   newImage.onload = function () {

  //     console.log("Draw this back");
  //     context.drawImage(newImage, 0, 0);
  //     // not sure about this counter here
  //     counter--;
  //   };

  //   currentFunction = new UndoFunction(context, contextDraft);
});

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
