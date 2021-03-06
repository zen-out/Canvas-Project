class RectFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.context.fillStyle = colorFill;
    this.contextDraft.fillStyle = colorFill;
    this.startingX = xCoordinate;
    this.startingY = yCoordinate;
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.fillRect(
      this.startingX,
      this.startingY,
      xCoordinate - this.startingX,
      yCoordinate - this.startingY
    );
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.context.fillRect(
      this.startingX,
      this.startingY,
      xCoordinate - this.startingX,
      yCoordinate - this.startingY
    );
    addToHistory();
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}

$("#rectButton").click(function () {
  console.log("Rectangle Button clicked");
  currentFunction = new RectFunction(context, contextDraft);
});
