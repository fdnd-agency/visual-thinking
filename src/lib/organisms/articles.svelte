<script>
  export let data;
</script>

<div class="grid">
  {#each data as article}
  <a href="/artikelen/{article.slug}">
    <article>
      <img src={article.visual.url} alt="{article.title}" width="300px" height="200" />
      <h2>{article.title}</h2>
    </article>
  </a>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    padding:2rem 0;
    gap:.5rem;
  }

  a {
    text-decoration: none;
    border: 1px solid transparent; 
    transition:.25s
  }

  a:hover,
  a:focus-visible {
    border-color:var(--vtDarkBlue);
    outline:none;
    background:var(--vtDarkBlue-10);
  }

  article {
    padding: 1rem;
    display:flex;
    flex-direction:column;
  }

  img {
    border: 1px solid var(--vtDarkBlue);
    object-fit: cover;
    width:100%;
  }  

  h2 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-size: 1em;
    margin-bottom: 0;
    font-weight: normal;
    text-wrap:balance
  }

  /* TABLET - STYLING */
  @media screen and (min-width: 36em) {   
    .grid {
      grid-template-columns: repeat(2, 1fr); 
      margin:2rem auto;
    }
  }

  /* DESKTOP - STYLING */
  @media screen and (min-width: 60em) {
    .grid {
      grid-template-columns: repeat(3, 1fr); 
    }
  }
</style>
