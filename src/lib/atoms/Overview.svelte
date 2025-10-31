<script>
  import { Filter } from '$lib/index.js';
  let { methods, categories } = $props();
</script>

<section>
  <Filter {categories} />
  <h2>Alle methodes <small>({methods.length})</small></h2>
    <ul>
      {#each methods as method}
        <li>
          <a href="/tekenmethodes/{method.slug}">
            <picture>

              <source 
              srcset={method.template.webp}
              type="image/webp" 
              />

              <source 
              srcset={method.template.avif}
              type="image/avif" 
              />

              <img 
              src={method.template.png}
              alt={"Voorbeeld van " + method.title} 
              width="300"
              height="225"
              loading="lazy"
              />
            </picture>
            <h3>{method.title}</h3>
          </a>
        </li>
      {/each}
    </ul>
</section>

<style>
  section {
    margin: auto;
    max-width: var(--grid-max-width);
    width: 100%;
    padding:0;
    position:relative;

    @container {
      padding: 0 1rem; 
    }
  }

  small {
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 1.5rem;
    width: 100%;
    padding-bottom: 1rem;
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
