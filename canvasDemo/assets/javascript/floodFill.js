// let offScreenCVS = document.createElement("canvas");
// offScreenCVS.width = 10;
// offScreenCVS.height = 10;
// // console.log(offScreenCVS);
// let offScreenCTX = offScreenCVS.getContext("2d");

// let points = [];
// let brushColour = { color: "rgba(255, 0, 0, 255)", r: 255, g: 0, b: 0, a: 255 };
// let img = new Image();
// let source = offScreenCVS.toDataURL();
// let toolType = "pencil";

// function actionFill(startX, startY, brushColour) {
//   let colourLayer = offScreenCTX.getImageData(
//     0,
//     0,
//     offScreenCVS.width,
//     offScreenCVS.height
//   );
//   let startPos = (startY * offScreenCVS.width + startX) * 4;

//   let startR = colourLayer.data[startPos];
//   let startG = colourLayer.data[startPos + 1];
//   let startB = colourLayer.data[startPos + 2];

//   // console.log(startR);
//   // console.log(startG);
//   // console.log(startB);

//   let currentColor = brushColour;
//   // console.log(currentColor);
//   if (
//     currentColor.r === startR &&
//     currentColor.g === startG &&
//     currentColor.b === startB
//   ) {
//     // console.log("Same Colour");
//     return;
//   }

//   let pixelStack = [[startX, startY]];
//   let newPos, x, y, pixelPos, reachLeft, reachRight;
//   floodFill();
//   function floodFill() {
//     // console.log("starting");
//     newPos = pixelStack.pop();
//     x = newPos[0];
//     y = newPos[1];

//     pixelPos = (y * offScreenCVS.width + x) * 4;

//     while (y >= 0 && matchStartColor(pixelPos)) {
//       y--;
//       pixelPos -= offScreenCVS.width * 4;
//     }
//     pixelPos += offScreenCVS.width * 4;
//     y++;
//     reachLeft = false;
//     reachRight = false;

//     while (y < offScreenCVS.height && matchStartColor(pixelPos)) {
//       colourPixel(pixelPos);

//       if (x > 0) {
//         if (matchStartColor(pixelPos - 4)) {
//           if (!reachLeft) {
//             pixelStack.push([x - 1, y]);
//             reachLeft = true;
//           }
//         } else if (reachLeft) {
//           reachLeft = false;
//         }
//       }

//       if (x < offScreenCVS.width - 1) {
//         if (matchStartColor(pixelPos + 4)) {
//           if (!reachRight) {
//             pixelStack.push([x + 1, y]);
//             reachRight = true;
//           }
//         } else if (reachRight) {
//           reachRight = false;
//         }
//       }
//       y++;
//       pixelPos += offScreenCVS.width * 4;
//     }
//     if (pixelStack.length) {
//       // console.log("finishing?");
//       floodFill();
//     }
//   }
//   offScreenCTX.putImageData(colourLayer, 0, 0);

//   function matchStartColor(pixelPos) {
//     let r = colourLayer.data[pixelPos];
//     let g = colourLayer.data[pixelPos + 1];
//     let b = colourLayer.data[pixelPos + 2];
//     return r === startR && g === startG && b === startB;
//   }

//   function colourPixel(pixelPos) {
//     colourLayer.data[pixelPos] = currentColor.r;
//     colourLayer.data[pixelPos + 1] = currentColor.g;
//     colourLayer.data[pixelPos + 2] = currentColor.b;
//     colourLayer.data[pixelPos + 3] = 255;
//   }
// }

// function renderImage() {
//   img.src = source;
//   img.onload = () => {
//     contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
//     drawCanvas();
//   };
// }
// function drawCanvas() {
//   contextReal.imageSmoothingEnabled = false;
//   contextReal.drawImage(img, 0, 0, canvasReal.width, canvasReal.height);
// }

// class FloodFill extends PaintFunction {
//   constructor(contextReal, contextDraft) {
//     super();
//     this.contextReal = contextReal;
//     this.contextDraft = contextDraft;
//   }

//   onMouseDown(coord, event) {
//     let trueRatio = canvasReal.offsetWidth / offScreenCVS.width;
//     let mouseX = Math.floor(coord[0] / trueRatio);
//     let mouseY = Math.floor(coord[1] / trueRatio);

//     actionFill(mouseX, mouseY, "#000000");
//     points.push({
//       x: coord[0],
//       y: coord[1],
//       colour: { ...brushColour },
//       mode: toolType,
//     });
//     source = offScreenCVS.toDataURL();
//     renderImage();
//   }
//   onDragging(coord, event) {}
//   onMouseMove() {}
//   onMouseUp(coord) {}
//   onMouseLeave() {}
//   onMouseEnter() {}
// }

class FillBucket extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown(coord) {
    let canvasWidth = canvasReal.width;
    let canvasHeight = canvasReal.height;

    //Filll bucket logic
    function fillBucket(coord, context) {
      let imgData = context.getImageData(0, 0, canvasWidth, canvasHeight);
      let pixelData = context.getImageData(coord[0], coord[1], 1, 1);
      console.log(pixelData);
      let pixelStack = [coord];

      let startR = pixelData.data[0];
      let startG = pixelData.data[1];
      let startB = pixelData.data[2];

      let currentFillRGBA = curFillColor
        .replace(/\s+/g, "")
        .split("(")[1]
        .split(")")[0]
        .split(".");

      while (pixelStack.length) {
        let newPos, x, y, pixelPos, reachLeft, reachRight;
        newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];

        pixelPos = (y * canvasWidth + x) * 4;

        while (
          y-- >= 0 &&
          matchStartColour(pixelPos, startR, startG, startB, imgData)
        ) {
          pixelPos -= canvasWidth * 4;
        }
        pixelPos += canvasWidth * 4;
        y++;
        reachLeft = false;
        reachRight = false;

        while (
          y++ <= canvasHeight - 1 &&
          matchStartColour(pixelPos, startR, startG, startB, imgData)
        ) {
          colorPixel(pixelPos, imgData, currentFillRGBA);

          if (x > 0) {
            if (
              matchStartColour(pixelPos - 4, startR, startG, startB, imgData)
            ) {
              if (!reachLeft) {
                pixelStack.push([x - 1, y]);
                reachLeft = true;
              }
            } else if (reachLeft) {
              reachLeft = false;
            }
          }

          if (x < canvasWidth - 1) {
            if (
              matchStartColour(pixelPos + 4, startR, startG, startB, imgData)
            ) {
              if (!reachRight) {
                pixelStack.push([x + 1, y]);

                reachRight = true;
              }
            } else if (reachRight) {
              reachRight = false;
            }
          }
          pixelPos += canvasWidth * 4;
        }
      }
      context.putImageData(imgData, 0, 0);
    }
    fillBucket(coord, contextReal);

    function matchStartColour(pixelPos, startR, startG, startB, imgData) {
      var red = imgData.data[pixelPos];
      var green = imgData.data[pixelPos + 1];
      var blue = imgData.data[pixelPos + 2];
      // console.log(red == startR && green == startG && blue == startB);

      return red == startR && green == startG && blue == startB;
    }

    function colorPixel(pixelPos, imgData, currentFillRGBA) {
      console.log(currentFillRGBA);
      imgData.data[pixelPos] = currentFillRGBA[0];
      imgData.data[pixelPos + 1] = currentFillRGBA[1];
      imgData.data[pixelPos + 2] = currentFillRGBA[2];
    }
  }
}
