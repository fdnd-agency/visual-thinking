<script>
  import { onMount } from "svelte";

  // Run code after rendering the component
  onMount(() => {
    // Imports the canvas, toolbar and the 2d element
    const canvas = document.getElementById("drawing-board");
    const toolbar = document.getElementById("toolbar");
    const ctx = canvas.getContext("2d");

    // Determine the offset of the canvas relative to the document
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    // Set the width and height of the canvas to the window size
    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    // Initialize variables for painting
    let isPainting = false;
    let lineWidth = 5;
    let startX;
    let startY;

    toolbar.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // Add a click event listener to the toolbar for clearing
    toolbar.addEventListener("click", (e) => {
      if (e.target.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    // Add a change event listener to the toolbar for color and line width
    toolbar.addEventListener("change", (e) => {
      if (e.target.id === "stroke") {
        // Set the line color to the selected value
        ctx.strokeStyle = e.target.value;
      }
      if (e.target.id === "lineWidth") {
        // Set the line width to the selected value
        lineWidth = e.target.value;
      }
    });

    // Function to implement drawing
    const draw = (e) => {
      if (!isPainting) {
        return;
      }

      // Determine the x and y position on the canvas
      const x =
        (e.clientX || e.touches[0].clientX) -
        canvas.getBoundingClientRect().left;
      const y =
        (e.clientY || e.touches[0].clientY) -
        canvas.getBoundingClientRect().top;

      // Configure the line parameters and draw the line
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    // Function to start drawing
    const start = (e) => {
      isPainting = true;
      startX = e.clientX || e.touches[0].clientX;
      startY = e.clientY || e.touches[0].clientY;
    };

    // Function to end drawing
    const end = (e) => {
      isPainting = false;
      ctx.stroke();
      ctx.beginPath();
    };

    // Add event listeners for mousedown, mouseup, mousemove, touchstart, touchend, and touchmove
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("touchstart", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("touchend", end);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);
  });
</script>
