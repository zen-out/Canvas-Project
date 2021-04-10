class TextFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  applyStyling() {}
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.contextDraft.strokeStyle = colorStroke;
    this.contextDraft.fillStyle = colorFill;
    this.contextDraft.lineWidth = width;
    this.contextDraft.font = font;

    this.startingX = xCoordinate;
    this.startingY = yCoordinate;
    let xPixels = `${xCoordinate} px`;
    let yPixels = `${yCoordinate} px`;
    xPixels = $("#textInput").css("left");
    yPixels = $("#textInput").css("top");

    textContent = $("#textInput").val();
    console.log(textContent);
    let six = 6;
    six = $("#textInput").css("z-index");
    textInput.value = "";

    this.contextDraft.fillText(
      textContent,
      this.startingX,
      this.startingX
    );
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    // this.contextDraft.font = `${fontWidth}px Arial`;
    // console.log($("#textInput").val());
    // this.contextDraft.fillText(
    //   $("#textInput").val(),
    //   this.startingX,
    //   this.startingY
    // );
    // this.contextDraft.fillStyle = colorFill;
    // this.startingX = xCoordinate;
    // this.startingY = yCoordinate;
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

    this.context.strokeStyle = colorStroke;
    this.context.fillStyle = colorFill;
    this.context.lineWidth = width;
    this.context.font = font;

    this.startingX = xCoordinate;
    this.startingY = yCoordinate;
    let xPixels = `${xCoordinate} px`;
    let yPixels = `${yCoordinate} px`;
    xPixels = $("#textInput").css("left");
    yPixels = $("#textInput").css("top");

    textContent = $("#textInput").val();
    console.log(textContent);
    let one = 1;
    one = $("#textInput").css("z-index");
    textInput.value = "";
    this.context.fillText(
      textContent,
      this.startingX,
      this.startingY + fontSize * 1.05
    );
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}

$("#textButton").click(function () {
  currentFunction = new TextFunction(context, contextDraft);
});
