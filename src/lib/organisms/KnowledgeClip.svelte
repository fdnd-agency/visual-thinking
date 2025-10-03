<script>
  import { Breadcrumb } from "$lib/index.js";
  export let clip;
</script>

<Breadcrumb titel="Kennisclip" backgroundColor="var(--color-quaternary)" />

<article class="knowledge-clip">
  <h1>{clip.title}</h1>

  {#if clip.youTubeLink}
    <iframe
      class="youtubelink"
      title={clip.title}
      src={clip.youTubeLink}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  {/if}

  {#if clip.content}
    <div class="richtext">
      {@html clip.content.html}
    </div>
  {/if}
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
