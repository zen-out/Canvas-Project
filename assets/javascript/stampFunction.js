class RyanStamp extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.stamp(xCoordinate, yCoordinate);
    addToHistory();
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    this.stamp(xCoordinate, yCoordinate);
    addToHistory();
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {}
  onMouseLeave([xCoordinate, yCoordinate], event) {}
  stamp(x, y) {
    let image = new Image();
    image.src =
      "https://www.cerclemagazine.com/wp-content/uploads/2017/10/316_N-Atlantic-Ocean-Cliffs-of-Moher-1989.jpg";
    image.onload = () => {
      this.context.drawImage(image, x, y, 50, 50);
    };
  }
}
class KellyStamp extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.stamp(xCoordinate, yCoordinate);
    addToHistory();
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    this.stamp(xCoordinate, yCoordinate);
    addToHistory();
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {}
  onMouseLeave([xCoordinate, yCoordinate], event) {}
  stamp(x, y) {
    let image = new Image();
    image.src =
      "https://www.cerclemagazine.com/wp-content/uploads/2017/10/316_N-Atlantic-Ocean-Cliffs-of-Moher-1989.jpg";
    image.onload = () => {
      this.context.drawImage(image, x, y, 50, 50);
    };
  }
}
$("#ryanStampButton").click(function () {
  console.log("Circle Button clicked");
  currentFunction = new RyanStamp(context, contextDraft);
});
$("#kellyStampButton").click(function () {
  console.log("Circle Button clicked");
  currentFunction = new KellyStamp(context, contextDraft);
});
