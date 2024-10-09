<script>
  export let text = "Default tet";
  export let bgColor = "--vtGrey-50";
  export let color = "#000";
  // export let size = "10rem";
  
  export let href = null;
  export let img = null;
</script>

{#if href}
  <a {href} style="--bg: var({bgColor}); --color: {color}" class="hover">
    {#if img}
      <img src={img.src} alt={img.alt} />
    {:else}
      <span>{text}</span>
    {/if}
  </a>
{:else}
  <div style="--bg: var({bgColor}); --color: {color}">
    {#if img}
      <img src={img.src} alt={img.alt} />
    {:else}
      <span>{text}</span>
    {/if}
  </div>
{/if}

<style>
  a,
  div {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background: var(--bg);
    display: grid;
    align-items: center;
    justify-items: center;
    text-decoration: none;
    color: var(--color);
    padding: 2rem 0;
    font-size: 1.25em;
    height: 100%;
    transition: 0.15s;
  }

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }

  span {
    text-align: center;
  }

  .hover:hover {
    transform: scale(1.05);
  }
</style>
