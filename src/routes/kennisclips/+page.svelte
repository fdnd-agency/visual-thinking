<script>
  export let data;
  const clips = data.clips;
</script>

<section class="clips-overview">
  {#each clips as clip}
    <a href={`/kennisclips/${clip.slug}`} class="clip-card">
      <h2>{clip.title}</h2>

      {#if clip.youTubeLink}
        <iframe
          class="youtubelink"
          title={clip.title}
          src={clip.youTubeLink}
        ></iframe>
      {/if}

      {#if clip.content}
        <div class="clip-description">
          {@html clip.content.html}
        </div>
      {/if}
    </a>
  {/each}
</section>

<style>
  .clips-overview {
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    gap: 2rem;
    max-width: var(--grid-max-width);
    margin: auto;
    padding: 2rem 1rem;
  }

  @media screen and (min-width: 56rem) {
    .clips-overview {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .clip-card {
    cursor: pointer;
    border: 1px solid var(--color-septenary-40);
    background-color: var(--color-septenary-20);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .clip-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  h2 {
    font-size: 1.2rem;
    color: var(--color-tertiary);
    margin-bottom: 1rem;
    text-align: center;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 1rem;
    border: none;
  }

  .clip-description {
    font-family: var(--font-family-secondary);
    line-height: 1.5rem;
    color: var(--color-tertiary);
    margin-top: 0.5rem;
  }
</style>
