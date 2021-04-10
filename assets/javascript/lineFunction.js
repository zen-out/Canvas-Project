class LineFunction extends MouseMethods {
  constructor(context) {
    super();
    this.context = context;
  }
  // this part will be in every class
  applyStyling() {
    this.context.strokeStyle = colorStroke;
    this.context.fillStyle = colorFill;
    this.context.lineWidth = width;
  }
  /**********************************************
   * When the user moves the mouse, what happens to the context?
   * ==================================
   ***********************************************/
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.applyStyling();
    this.context.moveTo(xCoordinate, yCoordinate);
  }
  /**********************************************
   * When the user presses and moves the mouse, what happens to the context?
   * ==================================
   ***********************************************/
  onMouseDrag() {}
  /**********************************************
   * When the user moves the mouse, what happens to the context?
   * ==================================
   ***********************************************/
  onMouseMove([xCoordinate, yCoordinate], event) {
    this.applyStyling();
    if (dragging) {
      this.context.lineTo(xCoordinate, yCoordinate);
      this.context.stroke();
    }
  }
  onMouseUp([xCoordinate, yCoordinate], event) {
    this.applyStyling();
    dragging = false;
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}
