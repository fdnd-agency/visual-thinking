<script>
  import { onMount } from "svelte";
  import { Breadcrumb, CarouselControls, Slide } from "$lib/index.js";
  export let data;

  let carousel;
  let currentIndex = 0;

  const slides = data?.miniCourse?.slides ?? [];
  const total = slides.length;

  // Update index en scroll carousel
  function updateIndex(newIndex) {
    if (newIndex < 0 || newIndex >= total) return;
    currentIndex = newIndex;
    carousel.scrollTo({
      left: newIndex * carousel.clientWidth,
      behavior: "smooth",
    });
  }

  const scrollNext = () => updateIndex(currentIndex + 1);
  const scrollPrev = () => updateIndex(currentIndex - 1);

  // Keyboard navigatie
  function handleKeydown(e) {
    if (e.key === "ArrowRight") scrollNext();
    if (e.key === "ArrowLeft") scrollPrev();
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);

    const resizeHandler = () => {
      if (!carousel) return;
      const isMobile = window.innerWidth <= 768;

      Array.from(carousel.children).forEach((slide) => {
        slide.style.minWidth = isMobile ? "100%" : `${carousel.clientWidth}px`;
        slide.style.width = isMobile ? "100%" : `${carousel.clientWidth}px`;
      });

      if (!isMobile) {
        carousel.scrollTo({
          left: currentIndex * carousel.clientWidth,
        });
      } else {
        carousel.scrollTop = 0;
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("keydown", handleKeydown);
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
      <!-- Carousel -->
      <div class="carousel" bind:this={carousel}>
        {#each slides as slide}
          <Slide {slide} />
        {/each}
      </div>

      <!-- Controls -->
      <CarouselControls
        {scrollPrev}
        {scrollNext}
        {currentIndex}
        {total}
      />
    </div>
  {/if}
</div>

<style>
  :global(main, .minicursus-quotes) {
    margin: 0;
    padding: 0;
    color: var(--color-primary);
  }

.minicourse {
  width: 100vw;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--color-tertiary);
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
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  background: var(--color-tertiary);
  width: 100%;
  flex: 1;
}

.carousel::-webkit-scrollbar {
  display: none;
}
</style>
