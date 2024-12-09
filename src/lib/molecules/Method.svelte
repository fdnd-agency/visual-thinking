<script>
  export let method;
</script>

<div class="methods-focus-state">
  <article class="methods-container">
    <a href="/tekenmethodes/{method.slug}">
      {#if method.template && method.template.url}
        <picture loading="lazy">
          <source
            srcset={method.template.url.replace(":webp", ":avif")}
            type="image/avif"
          />
          <source srcset={method.template.url} type="image/webp" />
          <img
            src={method.template.url.replace(":webp", ":png")}
            alt={"Voorbeeld van " + method.title}
          />
        </picture>
      {:else}
        <img
          class={method.categories[0].title.replaceAll(" ", "-")}
          src="/placeholder.webp"
          alt="Placeholder"
        />
      {/if}
    </a>
  </article>
  <h3>{method.title}</h3>
</div>

<style>
  h3 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-size: 19px;
    font-weight: 400;
    margin: 0;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: black;
    margin-bottom: 5px;
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
    border-bottom: 0.3em solid transparent;
    padding: 0.8em;
    margin: -0.8em;
  }
  .methods-focus-state:hover {
    border-bottom: 0.3em solid var(--vtYellow);
    background-color: var(--vtGrey-10);
  }
</style>
