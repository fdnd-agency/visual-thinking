<script>

  // Give the ability to pass classes to children
  /**
   * @typedef {Object} Props
   * @property {string} [text]
   * @property {string} [backgroundColor]
   * @property {string} [color]
   * @property {any} [href] - If href is given, the hexagon will be clickable
   * @property {any} [img] - Image expects an object with a src and alt property
   * @property {string} [class]
   */

  /** @type {Props} */
  let {
    text = "Default text",
    backgroundColor = "--color-septenary-40",
    color = "--font-color",
    href = null,
    img = null,
    class: className = ""
  } = $props();
  
</script>

<!-- Check if it's a clickable hexagon or not. If not, render a <div> instead of an <a> -->
{#if href}
  <a
    {href}
    style="--background-color: var({backgroundColor}); --color: var({color})"
    class={`hover ${className}`}
  >
    <!-- Check if an image was given. If it was, use the image as the hexagon's content rather than the text -->
    {#if img}
      <img src={img.src} alt={img.alt} />
    {:else}
      <span>{text}</span>
    {/if}
  </a>
{:else}
  <div
    style="--background-color: var({backgroundColor}); --color: var({color})"
    class={className}
  >
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
    padding: 2rem;
    font-size: 1.25rem;
    height: 100%;
    transition: 0.15s;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  span {
    text-align: center;
  }
  .hover:hover,
  .hover:focus-visible {
    transform: scale(1.05);
    outline: unset;
  }
</style>