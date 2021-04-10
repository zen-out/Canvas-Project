window.onload = function () {
  var moveTo = document.getElementById("moveTo");
  moveTo.width = 800;
  moveTo.height = 600;
  var moveToContext = moveTo.getContext("2d");

  moveToContext.moveTo(100, 100);
  moveToContext.lineTo(500, 500);
  moveToContext.lineWidth = 5;
  moveToContext.strokeStyle = "#AA394C";
  moveToContext.stroke();
};
