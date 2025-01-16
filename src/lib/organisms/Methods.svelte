<script>
  export let methods;
</script>

<section class="grid">
  <h2>Alle methodes ({methods.length})</h2>
  {#if methods && methods.length > 0}
    {#each methods as method, index}
      <article class="methods-container">
        <a href="/tekenmethodes/{method.slug}">
          {#if method.template && method.template.url}
            <picture>
              <source srcset={method.template.url.replace(":webp", ":avif")} />
              <source srcset={method.template.url} />
              <img
                src={method.template.url.replace(":webp", ":png")}
                alt={"Voorbeeld van " + method.title}
              />
            </picture>
          {:else}
            <img src="/placeholder.webp" alt="Placeholder" />
          {/if}
          <h3>{method.title}</h3>
        </a>
      </article>
    {/each}
  {/if}
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1rem 0;
  }

  h2 {
    grid-column: 1 / -1;
  }

  h3 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--vtBlack);
    padding: 0.8rem 0.8rem 0.25rem 0.8rem;
  }

  article {
    display: flex;
    flex-direction: column;
    transition: 0.1s;
    margin: -0.8rem;
    border-bottom: 0.3rem solid transparent;
  }

  article img {
    border: 1px solid #ccc;
    width: 100%;
    height: auto;
  }

  article:hover {
    border-bottom: 0.3rem solid var(--vtYellow);
    background-color: var(--vtGrey-10);
  }

  @media screen and (min-width: 36rem) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 60rem) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
