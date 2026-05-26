<script>
  import { Breadcrumb } from "$lib/index.js";
  export let clip;
</script>

<Breadcrumb title="Kennisclip" backgroundColor="var(--color-quaternary)" />

<article class="knowledge-clip">
  <h1>{clip.titel}</h1>

  {#if clip.youtube_link}
    <iframe
      class="youtubelink"
      title={clip.titel}
      src={clip.youtube_link}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  {/if}

  {#if clip.beschrijving}
    <div class="richtext">
      {@html clip.beschrijving}
    </div>
  {/if}

  <a href="/kennisclips">Terug naar alle kennisclips</a>
</article>

<style>
  .knowledge-clip {
    max-width: var(--grid-max-width);
    margin: auto;
    padding: 2rem 1rem;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    margin-bottom: 2rem;
  }
</style>
