<script>
  import { Breadcrumb } from "$lib/index.js";
  export let data;

  let carousel;

  function scrollNext() {
    carousel.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  }

  function scrollPrev() {
    carousel.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  }
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="minicourse">
  <header>
    <h1>{data.miniCourse?.title}</h1>
    
  </header>

  {#if data.miniCourse?.slides?.length}
    <div class="carousel-wrapper">
      <div id="progress"></div>
      <button class="scroll-btn prev" on:click={scrollPrev}>Vorige</button>

      <div class="carousel" bind:this={carousel}>
        {#each data.miniCourse.slides as slide}
          <article class="slide">
            <h2>{slide.title}</h2>
            <div class="slide-content">{@html slide.content.html}</div>
            {#if slide.image?.url}
              <img src={slide.image.url} alt={slide.title} />
            {/if}
          </article>
        {/each}
      </div>

      <button class="scroll-btn next" on:click={scrollNext}>Volgende</button>
    </div>
  {/if}
</div>

<style>
  :global(html) {
    scroll-timeline: --page-scroll block;
  }

  @keyframes grow-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  #progress {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1em;
    background: red;

    transform-origin: 0 50%;
    animation: grow-progress auto linear;
    animation-timeline: --page-scroll;
  }

  .minicourse {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background: var(--color-background, #fff);
  }
  

  header {
    text-align: center;
    padding: 1rem;
  }

  h1 {
    margin: 0;
    font-size: 1.6rem;
  }

  .carousel {
    scroll-timeline: --scrollx inline;
  }

  @keyframes grow {
    from {
      scale: 0 1;
    }
    to {
      scale: 1 1;
    }
  }

  .carousel-wrapper {
    position: relative;
    flex: 1;
    overflow: hidden;
  }

  .carousel {
    height: 100%;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    color: var(--color-primary);
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .slide {
    flex: 0 0 100%;
    height: 100%;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    background-color: var(--color-tertiary);
    color: var(--color-primary);
  }

  .slide-content {
    max-width: 50rem;
    text-align: left;
  }

  img {
    max-width: 80%;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }

  .scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    background: var(--color-primary);
    color: var(--color-tertiary);
    border: none;
    width: 6rem;
    height: 3rem;
    cursor: pointer;
    font-size:1.1rem;
    opacity: 1;
    transition: opacity 0.2s;
    font-family: var(--font-family-primary);
  }

  .scroll-btn:hover {
    opacity: 1;
  }

  .scroll-btn.prev {
    left: 1rem;
  }
  .scroll-btn.next {
    right: 1rem;
  }

  .carousel::scroll-button {
    appearance: auto;
    background: var(--color-quinary);
    color: white;
    border-radius: 50%;
  }

  .carousel::scroll-button:single-button:start {
    content: "←";
  }
  .carousel::scroll-button:single-button:end {
    content: "→";
  }
</style>
