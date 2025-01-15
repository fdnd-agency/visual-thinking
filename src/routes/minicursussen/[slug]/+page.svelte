<script>
  import { slide } from "svelte/transition";
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";

  export let data;
</script>

<Breadcrumb titel="Minicursussen" bgc="var(--vtRed)" />

<div>
  <header>
    <h1>{data.miniCourse?.title}</h1>
  </header>

  {#if data.miniCourse && data.miniCourse.slides}
    {#each data.miniCourse.slides as slide, index}
      <article>
        <h2>{slide.title}</h2>
        <div class="slide-content">
          {@html slide.content.html}
        </div>
        {#if slide.image && slide.image.url.length > 0}
          <img src={slide.image.url} alt="gifs" />
        {/if}
      </article>
    {/each}
  {/if}
</div>

<style>
  div {
    max-width: 43.75em;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.7em;
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.25em;
    text-align: center; 
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: stretch; 
    line-height: 1.5;
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid var(--vtDarkBlue);
  }

  .slide-content {
    text-align: left;
    width: 100%;
  }

  img {
    display: block;
    margin: 1rem auto; /* Center image */
    max-width: 100%;
  }
</style>
