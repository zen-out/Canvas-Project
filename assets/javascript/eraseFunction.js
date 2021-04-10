class EraseFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.context.strokeStyle = "white";
    this.context.fillStyle = "white";
    this.context.lineWidth = width;
    this.context.beginPath();
    this.context.moveTo(xCoordinate, yCoordinate);
    this.draw(xCoordinate, yCoordinate);
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    this.draw(xCoordinate, yCoordinate);
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {
    addToHistory();
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
$("#eraseButton").click(function () {
  console.log("Line button clicked");
  currentFunction = new EraseFunction(
    context,
    contextDraft
  );
});
