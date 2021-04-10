class UndoFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {}
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {}

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {
    if (counter > 0) {
      counter--;
      const canvasPic = new Image();
      canvasPic.src = history[counter];
      context.clearRect(
        0,
        0,
        context.canvas.width,
        context.canvas.height
      );
      canvasPic.onload = function () {
        context.drawImage(canvasPic, 0, 0);
      };
    }
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}

class RedoFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    if (counter < history.length - 1) {
      counter++;
      var canvasPic = new Image();
      canvasPic.src = history[counter];
      console.log(history[counter]);
      context.clearRect(
        0,
        0,
        context.canvas.width,
        context.canvas.height
      );
      canvasPic.onload = function () {
        console.log("Draw this back");
        context.drawImage(canvasPic, 0, 0);
      };
    }
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {}

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {
    // if (counter < history.length - 1) {
    //   counter++;
    //   var canvasPic = new Image();
    //   canvasPic.src = history[counter];
    //   context.clearRect(
    //     0,
    //     0,
    //     context.canvas.width,
    //     context.canvas.height
    //   );
    //   canvasPic.onload = function () {
    //     context.drawImage(canvasPic, 0, 0);
    //   };
    // }
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}
// $("#undoButton").click(function () {
//   console.log("pressed undo");
//   console.log("current counter:", counter);
//   //   console.log("history length", history.length - 1);
//   var canvasPic = new Image();

//   canvasPic.src = history[counter];
//   //   console.log(history[counter]);
//   context.clearRect(
//     0,
//     0,
//     context.canvas.width,
//     context.canvas.height
//   );
//   canvasPic.onload = function () {
//     console.log("Draw this back");
//     context.drawImage(canvasPic.src, 0, 0);
//     // not sure about this counter here
//     counter--;
//   };

//   //   currentFunction = new UndoFunction(context, contextDraft);
// });
// $("#redoButton").click(function () {
//   console.log("pressed redo");
//   console.log(history, counter);
//   currentFunction = new RedoFunction(context, contextDraft);
// });
