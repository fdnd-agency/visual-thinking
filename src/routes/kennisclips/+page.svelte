<script>
  import { Breadcrumb } from "$lib/index.js";
  export let data;
  const clips = data.clips;
</script>

<Breadcrumb titel="Kennisclips" backgroundColor="var(--color-quaternary)" />

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
      </a>

      <h2>{clip.title}</h2>

      {#if clip.introduction}
        <div class="clip-description">
          {clip.introduction}
          <a href={`/kennisclips/${clip.slug}`}>Lees meer</a>
        </div>
      {/if}
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
    padding: 2rem 1rem;
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
    border: 1px solid var(--color-septenary-40);
    background-color: var(--color-septenary-20);
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .clip-card:hover {
    border-bottom: 0.3rem solid var(--color-quaternary);
    background-color: var(--color-septenary-40);
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

  .clip-description {
    flex: 1;
    font-family: var(--font-family-secondary);
    line-height: 1.5rem;
    color: var(--color-tertiary);
    padding: 0 1rem 1.5rem;
    text-wrap: balance;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .clip-description a {
    align-self: flex-start;
    margin-top: 1rem;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 0.15rem solid var(--color-quaternary);
    transition: color 0.2s, border-color 0.2s;
  }

  .clip-description a:hover,
  .clip-description a:focus-visible {
    color: var(--color-quaternary);
    border-color: var(--color-tertiary);
  }
</style>
