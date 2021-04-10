// Start the application with a current function so that users can interact straight aware, this current function variable is very important it sets the strategy patterns that we have

currentFunction = new DrawingRectangle(contextReal, contextDraft);

$("#drawingLine").on("click", function () {
  currentFunction = new DrawingLine(contextReal, contextDraft);
});

$("#drawingRect").on("click", function () {
  currentFunction = new DrawingRectangle(contextReal, contextDraft);
});

$("#drawingStraight").on("click", function () {
  currentFunction = new DrawingStraight(contextReal, contextDraft);
});

$("#fill").on("click", function () {
  currentFunction = new FillBucket(contextReal);
});
// console.log($(window).height())
// console.log($(window).width())

// let width = $(window).width()
// let height = $(window).height()

// console.log($('#canvas-real'))

// $('#canvas-real')[0].width = width
// $('#canvas-draft')[0].width = width
// $('#canvas-real')[0].height = height
// $('#canvas-draft')[0].height = height
