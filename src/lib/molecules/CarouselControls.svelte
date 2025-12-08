<script>
  import Progressbar from "$lib/atoms/ProgressBar.svelte";
  export let currentIndex = 0;
  export let total = 1;
  export let scrollPrev;
  export let scrollNext;
</script>

<div class="carousel-controls">
  <button class="scroll-btn prev" on:click={scrollPrev}>Vorige</button>
  <Progressbar currentIndex={currentIndex} total={total} />
  <button class="scroll-btn next" on:click={scrollNext}>Volgende</button>
</div>

<style>
.carousel-controls {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  backdrop-filter: blur(5px);
  background-color: color-mix(in srgb, var(--color-background) 85%, transparent);
  z-index: 20;
}

.scroll-btn {
  background: var(--color-primary);
  color: var(--color-tertiary);
  border: none;
  width: 5rem;
  height: 1.8rem;
  font-weight: bold;
  font-family: var(--font-family-primary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.scroll-btn:hover,
.scroll-btn:focus-visible {
  background: var(--color-tertiary-40);
  color: var(--color-primary);
}

.scroll-btn:focus-within {
  outline: 3px solid var(--color-senary);
}
</style>
