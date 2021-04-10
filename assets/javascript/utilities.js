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
  console.log(
    "counter should always be one below history length"
  );
  console.log("current counter:", counter);
  console.log("current history length:", history.length);
  let image = new Image();
  if (counter > 0) {
    image.src = history[counter - 1];
  } else if (counter === 0) {
    // image.src = history[counter];
    context.clearRect(0, 0, canvas.width, canvas.height);
    history = new Array();
    counter = -1;
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    counter = -1;
    history = new Array();
  }
  image.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, 500, 500);
    history.pop();
    if (counter > -1) {
      counter--;
    }
  };
});
$("#downloadButton").click(function () {
  console.log("download button clicked");
  const downloadLink = document.createElement("a");
  downloadLink.setAttribute(
    "download",
    "CanvasAsImage.png"
  );

  canvas.toBlob(function (blob) {
    const url = URL.createObjectURL(blob);
    downloadLink.setAttribute("href", url);
    downloadLink.click();
  });
});
$("#uploadButton").click(function () {
  console.log("upload button clicked");
});

$("#clearButton").click(function () {
  console.log("clear button clicked");
  context.clearRect(0, 0, canvas.width, canvas.height);
  contextDraft.clearRect(
    0,
    0,
    canvasDraft.width,
    canvasDraft.height
  );
});
