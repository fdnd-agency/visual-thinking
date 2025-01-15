<script>
  export let methods;
</script>

<section class="grid">
  <h2>Alle methodes ({methods.length})</h2>
  {#if methods && methods.length > 0}
    {#each methods as method, index}
      <div class="methods-focus-state">
        <article class="methods-container">
          <a href="/tekenmethodes/{method.slug}">
            {#if method.template && method.template.url}
              <picture>
                <img
                  src={method.template.url.replace(":webp", ":png")}
                  alt={"Voorbeeld van " + method.title}
                />
              </picture>
            {:else}
              <img
                src="/placeholder.webp"
                alt="Placeholder"
              />
            {/if}
          </a>
        </article>
        <h3>{method.title}</h3>
      </div>
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
    margin-bottom: 0.25rem;
  }

  article {
    display: flex;
    flex-direction: column;
    transition: 0.25s;
    border: 1px solid #ccc;
  }

  article img {
    width: 100%;
    height: auto;
  }

  .methods-focus-state {
    border-bottom: 0.3rem solid transparent;
    padding: 0.8rem;
    margin: -0.8rem;
  }
  .methods-focus-state:hover {
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
