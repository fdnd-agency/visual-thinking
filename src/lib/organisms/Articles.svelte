<script>
  export let articles;
</script>

<section class="grid">
  {#each articles as article}
    <a href="/artikelen/{article.slug}">
      <article>
        <img
          src={article.visual.url}
          alt={article.title}
          width="200"
          height="200"
        />
        <h2>{article.title}</h2>
      </article>
    </a>
  {/each}
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    padding: 2rem 0;
    gap: 0.5rem;
    max-width: var(--page-max-width);
    margin: auto;
  }

  a {
    text-decoration: none;
    border: 1px solid transparent;
    border-bottom: 0.3rem solid transparent;
    padding: 0.3rem;
    margin: -0.3rem;
  }

  a:hover,
  a:focus-visible {
    border-bottom: 0.3rem solid var(--vtDarkBlue);
    background-color: var(--vtGrey-10);
  }

  article {
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }

  img {
    border: 1px solid var(--vtDarkBlue);
    object-fit: cover;
    width: 100%;
  }

  h2 {
    color: var(--vtDarkBlue);
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: normal;
    text-wrap: balance;
  }

  /* TABLET - STYLING */
  @media screen and (min-width: 36rem) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      margin: 2rem auto;
    }
  }

  /* DESKTOP - STYLING */
  @media screen and (min-width: 60rem) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
