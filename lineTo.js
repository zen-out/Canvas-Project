window.onload = function () {
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;
  var context = canvas.getContext("2d");

  // moves the path to the specific point
  context.moveTo(100, 100);

  // adds a straight line to the current path by connecting the last point to the specified coordinates
  context.lineTo(300, 300);

  // adds a straight line to the current path by connecting the last point to the specified coordinates
  context.lineTo(100, 500);

  // the width of the line
  context.lineWidth = 5;

  context.strokeStyle = "#AA394C";

  // actually draw the line on the canvas
  context.stroke();

  context.moveTo(300, 100);
  context.lineTo(500, 300);
  context.lineTo(300, 500);
  context.lineWidth = 5;
  context.strokeStyle = "blue";
  context.stroke();

  context.moveTo(500, 100);
  context.lineTo(700, 300);
  context.lineTo(500, 500);
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.stroke();
};
