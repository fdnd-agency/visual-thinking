<script>
  import { Breadcrumb } from "$lib/index.js";
  export let clips;
</script>

<Breadcrumb titel="Kennisclips" backgroundColor="var(--color-quaternary)" />

<main>
  <h1 class="screenreader-only">Alle kennisclips</h1>

  <section class="clips-overview">
    {#each clips as clip}
      <a class="clip-card" href={`/kennisclips/${clip.slug}`}>
        <iframe
          class="youtubelink"
          title={clip.title}
          src={clip.youTubeLink}
        ></iframe>

        <h2>{clip.title}</h2>
        {#if clip.content}
          <p>{@html clip.content.html}</p>
        {/if}
      </a>
    {/each}
  </section>
</main>

<style>
  .clips-overview {
    display: grid;
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: var(--grid-max-width);
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .clip-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--color-septenary-40);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .clip-card:hover,
  .clip-card:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
  }

  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid var(--color-tertiary);
  }

  h2 {
    color: var(--color-tertiary);
    font-size: 1.25rem;
    margin: 0;
    font-family: var(--font-family-primary);
  }

  p {
    font-family: var(--font-family-secondary);
    line-height: 1.4;
    font-size: 0.9rem;
    color: var(--color-text, #333);
    margin: 0;
  }
</style>
