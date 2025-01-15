<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte"
  import { onMount } from "svelte";

  // Voer code uit na het renderen van de component
  onMount(() => {
    // Haal het canvas, de toolbar en de 2D-context op
    const canvas = document.getElementById("drawing-board");
    const toolbar = document.getElementById("toolbar");
    const ctx = canvas.getContext("2d");

    // Bepaal de offset van het canvas ten opzichte van het document
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    // Stel de breedte en hoogte van het canvas in op het vensterformaat
    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    // Initialiseer variabelen voor schilderen
    let isPainting = false;
    let lineWidth = 5;
    let startX;
    let startY;

    toolbar.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // Voeg een click eventlistener toe aan de toolbar voor wissen
    toolbar.addEventListener("click", (e) => {
      if (e.target.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    // Voeg een change eventlistener toe aan de toolbar voor kleur en lijnbreedte
    toolbar.addEventListener("change", (e) => {
      if (e.target.id === "stroke") {
        // Stel de lijnkleur in op de geselecteerde waarde
        ctx.strokeStyle = e.target.value;
      }
      if (e.target.id === "lineWidth") {
        // Stel de lijnbreedte in op de geselecteerde waarde
        lineWidth = e.target.value;
      }
    });

    // Functie om tekenen te implementeren
    const draw = (e) => {
      if (!isPainting) {
        return;
      }

      // Bepaal de x- en y-positie op het canvas
      const x =
        (e.clientX || e.touches[0].clientX) -
        canvas.getBoundingClientRect().left;
      const y =
        (e.clientY || e.touches[0].clientY) -
        canvas.getBoundingClientRect().top;

      // Configureer de lijnparameters en teken de lijn
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    // Functie om tekenen te starten
    const start = (e) => {
      isPainting = true;
      startX = e.clientX || e.touches[0].clientX;
      startY = e.clientY || e.touches[0].clientY;
    };

    // Functie om tekenen te beëindigen
    const end = (e) => {
      isPainting = false;
      ctx.stroke();
      ctx.beginPath();
    };

    // Voeg eventlisteners toe voor mousedown, mouseup, mousemove, touchstart, touchend en touchmove
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("touchstart", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("touchend", end);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);
  });
</script>

<Breadcrumb titel= "Tekenruimte" bgc="var(--vtGrey)" />

<header class="sr-only">
  <h1>Teken hier!</h1>
  <p class="disclaimer"><span class="attention">Let op:</span> deze functie is momenteel in een experimentele fase</p>
</header>
    
<section>
  <header id="toolbar">
    <h2 class="sr-only">Tekentools</h2>

    <form>
      <label for="stroke">Kleur</label>
      <input id="stroke" name="stroke" type="color" />
      
      <label for="lineWidth">Pen dikte</label>
      <input id="lineWidth" name="lineWidth" type="number" value="5" />
      
      <button id="clear">Wissen</button>
    </form>
  </header>

  <div class="drawing-board">
    <canvas id="drawing-board" />
  </div>
</section>

<style>
  h1 {
    font-size: 1.7rem;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    margin:.25rem;
  }

  p.disclaimer {
    text-align: center; 
  }

  p span.attention {
    color: var(--vtYellow);
  }

  section {
    font-family: var(--vtPrimaryFont);
    justify-items: center;
    width: 100vw;
    margin:0 -1rem;
  }

  section header {
    font-weight: 800;
    padding: .25em 1rem;
    background-color: var(--vtGrey-50);
    height:3rem;
  }

  section form {
    display: flex;
    align-items: center;
    margin:.25rem;
    gap: 0.5em; 
  }

  .drawing-board {
    border: none;
    background-color: var(--vtGrey-10);
    cursor: pointer;
    box-shadow: inset 0 0 15px 3px rgba(0,0,0,0.1);
    height: calc(100vh - 3rem);
    cursor: url('/images/pencil.svg'), auto;
  }

  label {
    white-space: nowrap;
  }

  input {
    width: 25%;
    border-radius: 4px;
    padding:5px;
    font-weight: bold;
  }
  input[type=color] {
    padding:0;
  }

  input#lineWidth {
    border: none;
    border-radius: 4px;
  }

  button {
    border: none;
    border-radius: 4px;
    padding: 4px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: var(--vtWhite);
    background:var(--vtDarkBlue);
    font-family: inherit;
    font-weight: bold;
  }

  button:hover {
    color: var(--vtDarkBlue);
    background:var(--vtGrey-10)
  }  
</style>
