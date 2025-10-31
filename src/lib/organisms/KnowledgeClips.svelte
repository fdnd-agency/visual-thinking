<script>
  let { clips } = $props();
</script>

<section class="clips-overview">
  {#each clips as clip}
    <article class="clip-card">
      <a href={`/kennisclips/${clip.slug}`}>
        {#if clip.youTubeLink}
          <iframe
            class="youtubelink"
            title={clip.title}
            src={clip.youTubeLink}
          ></iframe>
        {/if}

        <h2>{clip.title}</h2>
      </a>
    </article>
    
  {/each}
</section>

<style>
  .clips-overview {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: var(--grid-max-width);
    margin: auto;
    padding: 2rem 0;
    align-items: start;
  }

  /* ✅ vanaf 56rem (ongeveer 896px): drie naast elkaar */
  @media screen and (min-width: 56rem) {
    .clips-overview {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .clip-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .clip-card a {
    border-bottom: 0.3rem solid transparent;
  }

  .clip-card a:hover {
    border-color: var(--color-quaternary);
    background-color: var(--color-septenary-40);
    text-decoration:none;
  }

  .clip-card a {
    display: block;
  }

  iframe.youtubelink {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
    border: none;
  }

  h2 {
    font-size: 1.2rem;
    color: var(--color-tertiary);
    margin: 1rem 1rem 0.5rem;
    text-align: left;
    text-wrap: balance;
  }
</style>
