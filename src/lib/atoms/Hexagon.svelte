<script>
  export let text = "Default text";
  export let backgroundColor = "--vtGrey-50";
  export let color = "--vtBlack";

  // If href is given, the hexagon will be clickable
  export let href = null;

  // Image expects an object with a src and alt property
  export let img = null;
</script>

<!-- Check if it's a clickable hexagon or not. If not, render a <div> instead of an <a> -->
{#if href}
  <a {href} style="--background-color: var({backgroundColor}); --color: var({color})" class="hover">
    <!-- Check if an image was given. If it was, use the image as the hexagon's content rather than the text -->
    {#if img}
      <img src={img.src} alt={img.alt} />
    {:else}
      <span>{text}</span>
    {/if}
  </a>
{:else}
  <div style="--background-color: var({backgroundColor}); --color: {color}">
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
    /* Clip path in the shape of a hexagon */
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background: var(--background-color);
    display: grid;
    align-items: center;
    justify-items: center;
    text-decoration: none;
    color: var(--color);
    padding: 2rem 0;
    font-size: 1.25rem;
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
