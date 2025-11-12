<script>
  export let slide;
</script>

<article class="slide">
  <h2>{slide.title}</h2>
  <div class="slide-content">{@html slide.content.html}</div>
  {#if slide.image?.url}
    <img src={slide.image.url} alt={slide.image.alt ?? ""} />
  {/if}
</article>

<style>
.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  color: var(--color-primary);
}

.slide-content {
  max-width: 60rem;
  width: 100%;
  text-align: left;
  margin: 1rem auto 2rem auto;
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
