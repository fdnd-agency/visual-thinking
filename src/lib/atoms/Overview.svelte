<script>
  export let methods;
  export let checkboxes = [];

  $: filteredMethods = checkboxes.length
    ? methods.filter(method =>
        method.categories?.some(cat => checkboxes.includes(cat.title))
      )
    : methods;
    console.log(methods[0].categories)
</script>

<section class="grid">
  <h2>Alle methodes ({filteredMethods.length})</h2>
    <ul class="grid">
      {#each filteredMethods as method}
        <li>
          <a href="/tekenmethodes/{method.slug}">
            <picture>
              <source srcset={method.template.url.replace(":webp", ":avif")}/>
              <source srcset={method.template.url} />
              <img src={method.template.url.replace(":webp", ":png")} alt={"Voorbeeld van " + method.title} />
            </picture>
            <h3>{method.title}</h3>
          </a>
        </li>
      {/each}
    </ul>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 1rem 0;
    max-width: var(--grid-max-width);
    margin: auto;
    align-items: start; /* Ensure items align properly within the grid */
  }

  h2 {
    grid-column: 1 / -1;
  }

  h3 {
    font-family: var(--font-family-primary);
    color: var(--color-tertiary);
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
    color: var(--font-color);
    padding: 0.8rem 0.8rem 0.25rem 0.8rem;
    display: block; 
  }

  li {
    display: flex;
    flex-direction: column;
    transition: 0.1s;
    margin: -0.8rem;
    border-bottom: 0.3rem solid transparent;
    background-color: var(--color-background); 
  }

  li img {
    border: 1px solid #ccc;
    width: 100%;
    height: auto;
  }

  li:hover {
    border-bottom: 0.3rem solid var(--color-quinary);
    background-color: var(--color-septenary-40);
  }
</style>
