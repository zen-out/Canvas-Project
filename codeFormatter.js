/**********************************************
 * JS To HTML
 * ==================================
 * Code Formatter
 ***********************************************/

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  let htmlX = $(".coordinateX");
  let htmlY = $(".coordinateY");
  htmlX.html("Coordinate X: " + x);
  htmlY.html("Coordinate Y: " + y);
}

function JSToHTML(code) {
  for (let i = 0; i < code.length; i++) {
    console.log(code[i]);
  }
}
JSToHTML(getMousePosition);
