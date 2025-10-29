<script>
  import { Breadcrumb } from "$lib/index.js";
  import { onMount } from "svelte";
  export let data;

  let carousel;
  let currentIndex = 0;

  const total = data?.miniCourse?.slides?.length ?? 0;

  function updateIndex(newIndex) {
    if (newIndex >= 0 && newIndex < total) {
      currentIndex = newIndex;
      carousel.scrollTo({
        left: newIndex * carousel.clientWidth,
        behavior: "smooth",
      });
    }
  }

  function scrollNext() {
    updateIndex(currentIndex + 1);
  }

  function scrollPrev() {
    updateIndex(currentIndex - 1);
  }

  function handleKeydown(event) {
    if (event.key === "ArrowRight") {
      scrollNext();
    } else if (event.key === "ArrowLeft") {
      scrollPrev();
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);

    // Zorg dat elke slide de juiste breedte heeft bij resize
    const resizeHandler = () => {
      if (!carousel) return;
      Array.from(carousel.children).forEach(slide => {
        slide.style.minWidth = `${carousel.clientWidth}px`;
      });
      carousel.scrollTo({ left: currentIndex * carousel.clientWidth });
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", resizeHandler);
    };
  });
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="minicourse">
  <header>
    <h1>{data.miniCourse?.title}</h1>
  </header>

  {#if total > 0}
    <div class="carousel-wrapper">
      <!-- Sticky bovenbalk -->
      <div class="carousel-header">
        <button class="scroll-btn prev" aria-label="Vorige dia" on:click={scrollPrev}>Vorige</button>

        <label class="progress" for="hideProgress" title="Klik om voortgang te verbergen">
          <span class="bar" style="--progress:{((currentIndex + 1) / total) * 100}%"></span>
        </label>

        <button class="scroll-btn next" aria-label="Volgende dia" on:click={scrollNext}>Volgende</button>
      </div>

      <!-- Slider -->
      <div class="carousel" bind:this={carousel}>
        {#each data.miniCourse.slides as slide}
          <article class="slide">
            <h2>{slide.title}</h2>
            <div class="slide-content">{@html slide.content.html}</div>
            {#if slide.image?.url}
              <img src={slide.image.url} alt={slide.image.alt ?? ""} />
            {/if}
          </article>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  :global(html, body) {
    margin: 0;
    height: 100%;
  }

  .minicourse {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-background, #fff);
    text-align: center;
    height: 100dvh;
  }

  header {
    padding: 1rem;
    z-index: 10;
    background: var(--color-background);
  }

  h1 {
    margin: 0;
    font-size: 1.6rem;
  }

  .carousel-header {
    display: grid;
    grid-template-columns: 5rem 1fr 5rem;
    align-items: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    width: min(90%, 80rem);
    margin-inline: auto;
    z-index: 15;
    backdrop-filter: blur(10px);
    background-color: color-mix(
      in srgb,
      var(--color-background) 80%,
      transparent
    );
    padding: 0.5rem;
    border-radius: 0.75rem;
  }

  .progress {
    position: relative;
    height: 1.2rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;
    margin: 0 2.5rem;
  }

  .bar {
    position: absolute;
    inset: 0;
    background: var(--color-senary);
    width: var(--progress, 0%);
    transition: width 0.3s ease;
  }

  .carousel-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: min(90%, 80rem);
    height: 70dvh;
    border-radius: 1rem;
    background: var(--color-tertiary);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  .carousel::-webkit-scrollbar {
    display: none;
  }

  .slide {
    flex: 0 0 auto;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    color: var(--color-primary);
  }

  .slide-content {
    max-width: 50rem;
    text-align: left;
  }

:global(.slide-content a) {
  color: #fff;
  text-decoration: underline;
}

:global(.slide-content p) {
  color: #fff;
}

:global(.slide-content a:hover),
:global(.slide-content a:focus-visible) {
  color: var(--color-senary);
}

:global(.slide-content ul),
:global(.slide-content ol) {
  list-style-type: none;
  padding-left: 0;
  margin: 0.5rem 0;
}

:global(.slide-content li) {
  margin-bottom: 0.25rem;
}

  img {
    max-width: 100%;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }

  .scroll-btn {
    position: sticky;
    top: 0.5rem;
    z-index: 20;
    background: var(--color-primary);
    color: var(--color-tertiary);
    font-family: var(--font-family-primary);
    border: 2px solid var(--color-senary);
    width: 5rem;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: bold;
    display: grid;
    place-items: center;
    cursor: pointer;
    border-radius: 0.5rem;
    opacity: 0.9;
    transition: all 0.2s ease;
  }

  .scroll-btn.prev {
    align-self: flex-start;
    margin-left: calc(5% + 1rem);
  }

  .scroll-btn.next {
    align-self: flex-end;
    margin-right: calc(5% + 1rem);
  }

  .scroll-btn:hover,
  .scroll-btn:focus-visible {
    background: var(--color-quinary);
    color: var(--color-primary);
    opacity: 1;
  }

  .carousel::scroll-button {
    appearance: auto;
    background: var(--color-quinary);
    color: #fff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    opacity: 0.9;
    transition: opacity 0.2s;
  }

  .carousel::scroll-button:hover {
    opacity: 1;
  }

  .carousel::scroll-button:single-button:start {
    content: "‹";
  }

  .carousel::scroll-button:single-button:end {
    content: "›";
  }

@supports selector(::scroll-button(left)) {
  .carousel::scroll-button {
    appearance: auto;
    background: var(--color-quinary);
    color: #fff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    opacity: 0.9;
    transition: opacity 0.2s, transform 0.2s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }

  .carousel::scroll-button:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.05);
  }

  .carousel::scroll-button(left) {
    content: "‹";
    left: 0.75rem;
  }

  .carousel::scroll-button(right) {
    content: "›";
    right: 0.75rem;
  }
}

</style>
