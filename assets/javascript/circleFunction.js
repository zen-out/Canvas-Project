class CircleFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.context.fillStyle = colorFill;
    this.context.strokeStyle = colorStroke;
    this.context.lineWidth = width;
    this.startingX = xCoordinate;
    this.startingY = yCoordinate;
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    this.contextDraft.fillStyle = colorFill;
    this.contextDraft.strokeStyle = colorStroke;
    this.contextDraft.lineWidth = width;
    this.contextDraft.beginPath();

    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.arc(
      this.startingX,
      this.startingY,
      Math.abs(yCoordinate - this.startingY / 2),
      0,
      2 * Math.PI
    );
    this.contextDraft.fill();
    this.contextDraft.stroke();
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {
    this.context.beginPath();
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.context.arc(
      this.startingX,
      this.startingY,
      Math.abs(yCoordinate - this.startingY / 2),
      0,
      2 * Math.PI
    );
    this.context.lineWidth = width;
    this.context.fill();
    this.context.stroke();
    addToHistory();
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}

$("#circleButton").click(function () {
  console.log("Circle Button clicked");
  currentFunction = new CircleFunction(
    context,
    contextDraft
  );
});
