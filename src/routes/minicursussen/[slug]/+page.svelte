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
      Array.from(carousel.children).forEach((slide) => {
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
        <button
          class="scroll-btn prev"
          aria-label="Vorige dia"
          on:click={scrollPrev}>Vorige</button
        >

        <label
          class="progress"
          for="hideProgress"
          title="Klik om voortgang te verbergen"
        >
          <span
            class="bar"
            style="--progress:{((currentIndex + 1) / total) * 100}%"
          ></span>
        </label>

        <button
          class="scroll-btn next"
          aria-label="Volgende dia"
          on:click={scrollNext}>Volgende</button
        >
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
:global(html, body, main) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.minicourse {
  width: 100vw;
  height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto; /* header | carousel-wrapper | eventuele footer */
  overflow: hidden;
  background: var(--color-background, #fff);
  text-align: center;
}

header {
  padding: 1rem;
  background: var(--color-tertiary);
  z-index: 10;
}

h1 {
  margin: 0;
  font-size: 1.6rem;
  color: var(--color-primary);
}

.carousel-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto; /* carousel-title | carousel | carousel-controls */
  width: 100%;
  height: 100%;
  background: var(--color-tertiary);
}

.carousel {
  display: flex; /* slides horizontaal scrollbaar */
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  background: var(--color-tertiary);
  margin: 0;
  padding: 0;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: grid;
  grid-template-rows: auto 1fr; /* slide titel boven, content midden */
  justify-items: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  color: var(--color-primary);
}

.slide-content {
  max-width: 60rem;
  width: 90%;
  text-align: left;
  margin: 1rem auto;
}

:global(.slide-content a) {
  color: #fff;
  text-decoration: underline;
  list-style-type: none;
}

:global(.minicursus-quotes) {
  color: var(--color-primary);
}

:global(ul li) {
  list-style-type: none;
}

:global(.slide-content a:hover),
:global(.slide-content a:focus-visible) {
  color: var(--color-senary);
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

/* Carousel controls / progress */
.carousel-header {
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.5rem;
  backdrop-filter: blur(10px);
  background-color: color-mix(
    in srgb,
    var(--color-background) 80%,
    transparent
  );
  border-radius: 0.75rem;
  z-index: 10;
  align-self: end; 
}

.progress {
  position: relative;
  height: 1.2rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  margin: 0 1rem;
}

.bar {
  position: absolute;
  inset: 0;
  background: var(--color-senary);
  width: var(--progress, 0%);
  transition: width 0.3s ease;
}

.scroll-btn {
  background: var(--color-primary);
  color: var(--color-tertiary);
  font-family: var(--font-family-primary);
  border: none;
  width: 5rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.2s ease;
}

.scroll-btn:hover,
.scroll-btn:focus-visible {
  background: var(--color-septenary-40);
  color: var(--color-primary);
  opacity: 1;
}

@media (max-width: 768px) {
  .slide-content {
    width: 95%;
  }


}

/* scroll-button styles blijven zoals eerder, optioneel */
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
  visibility: hidden;
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
    visibility: hidden;
  }

  .carousel::scroll-button:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.05);
  }

  .carousel::scroll-button(left) {
    content: "‹";
    left: 0.75rem;
    visibility: hidden;
  }

  .carousel::scroll-button(right) {
    content: "›";
    right: 0.75rem;
    visibility: hidden;
  }
}

</style>
