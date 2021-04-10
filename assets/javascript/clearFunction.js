class ClearFunction extends MouseMethods {
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
    context.clearRect(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
    contextDraft.clearRect(
      0,
      0,
      contextDraft.canvas.width,
      contextDraft.canvas.height
    );
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}
$("#clearButton").click(function () {
  console.log("clear button clicked");
  currentFunction = new ClearFunction(
    context,
    contextDraft
  );
});
