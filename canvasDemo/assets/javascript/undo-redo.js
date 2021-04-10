const undoArray = [];
const redoArray = [];
let counter = -1;

function beforeDraw() {
  let lastMove = canvasReal.toDataURL("image/png");
  undoArray.push(lastMove);
  counter++;
  let imagedata = contextReal.getImageData(
    0,
    0,
    canvasReal.width,
    canvasReal.height
  );
  console.log(imagedata);
  console.log(imagedata.data);
}

$("#undo").click(function undo() {
  counter--;

  // must remember to clear the image or it will overlap with the one we actually draw meaning it will look like nothing happened
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  let undoneImage = undoArray.pop();
  redoArray.push(undoneImage);

  let lastStep = new Image();
  lastStep.src = undoArray[counter];
  lastStep.onload = function () {
    contextReal.drawImage(lastStep, 0, 0);
  };

  console.log(redoArray);
});

// just need to fix the order that we render the array.
$("#redo").click(function redo() {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  let lastStep = new Image();
  console.log(lastStep.src);
  lastStep.src = redoArray[counter];
  lastStep.onload = function () {
    contextReal.drawImage(lastStep, 0, 0);
  };
  let redoneImage = redoArray.pop();
  undoArray.push(redoneImage);
});
