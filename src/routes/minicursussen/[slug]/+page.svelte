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
        left: newIndex * window.innerWidth,
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
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="minicourse">
  <header>
    <h1>{data.miniCourse?.title}</h1>

    <input id="hideProgress" type="checkbox" hidden />
    <label
      class="progress"
      for="hideProgress"
      title="Klik om voortgang te verbergen"
    >
      <span class="bar" style="--progress:{((currentIndex + 1) / total) * 100}%"
      ></span>
      <span class="close">×</span>
    </label>
  </header>

  {#if total > 0}
    <div class="carousel-wrapper">
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

      
        <button
          class="scroll-btn prev"
          aria-label="Vorige dia"
          on:click={scrollPrev}
        >
          Vorige
        </button>
        <button
          class="scroll-btn next"
          aria-label="Volgende dia"
          on:click={scrollNext}
        >
          Volgende
        </button>
      
    </div>
  {/if}
</div>

<style>
  :global(html, body) {
    margin: 0;
    height: 100%;
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

  .progress {
    display: block;
    position: relative;
    margin-top: 0.5rem;
    height: 1.5rem;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    max-width: 100rem;
    margin-inline: auto;
  }

  .bar {
    position: absolute;
    inset: 0;
    background: var(--color-senary);
    width: var(--progress, 0%);
    transition: width 0.3s ease;
  }

  .close {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    pointer-events: none;
    background-color: var(--color-primary);
  }

  #hideProgress:checked + .progress {
    display: none;
  }

.carousel-wrapper {
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
}

.carousel {
  flex: 1;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
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
  position: relative;
}

.slide-content {
  max-width: 50rem;
  height: 100%;
  text-align: left;
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.scroll-btn {
  position: absolute;
  bottom: 0;
  z-index: 5;
  background: var(--color-primary);
  color: var(--color-tertiary);
  font-family: var(--font-family-primary);
  border: none;
  width: 6rem;
  height: 3.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.scroll-btn.prev {
  left: 1rem;
}

.scroll-btn.next {
  right: 1rem;
}

.scroll-btn:hover,
.scroll-btn:focus-visible {
  background: var(--color-quinary);
  color: var(--color-primary);
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

  @supports selector(::scroll-button) {
    .carousel::scroll-button {
      appearance: auto;
      background: var(--color-quinary);
      color: #fff;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
    }

    .carousel::scroll-button:single-button:start {
      content: "‹";
    }

    .carousel::scroll-button:single-button:end {
      content: "›";
    }
  }
</style>
