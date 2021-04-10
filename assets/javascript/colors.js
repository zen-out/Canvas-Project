/**********************************************
 * Adjust for color and stroke
 * ==================================
 ***********************************************/
const strokepickr = Pickr.create({
  // el: '.Strokecolor-picker', //element use for the square thing that will pop up in
  el: "#pstrokecolour",
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    // sample colour selection
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    // preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      input: true,
      // save:true,
      // clear: true,
    },
  },
});

strokepickr.on("change", (color, instance) => {
  const rgbaColorStroke = color.toRGBA().toString();
  stroke = rgbaColorStroke;
  console.log("Stroke", stroke);
  $(".flaticon-stop").css("color", `${curStroke}`);
});
const Fillpickr = Pickr.create({
  el: "#fillcolor", // element use for the square thing that will pop up in
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    // sample colour selection
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    // preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      input: true,
      // save:true,
      // clear: true,
    },
  },
});

Fillpickr.on("change", (color, instance) => {
  const rgbaColorFill = color.toRGBA().toString();
  curFill = rgbaColorFill;
  $(".text-style").css("color", `${rgbaColorFill}`);
  $(".flaticon-rounded-black-square-shape").css(
    "color",
    `${curFill}`
  );
});
