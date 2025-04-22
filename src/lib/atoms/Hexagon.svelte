<script>
  export let text = "Default text";
  export let bgColor = "--color-septenary-50";
  export let color = "--color-primary";

  // If href is given, the hexagon will be clickable
  export let href = null;

  // Image expects an object with a src and alt property
  export let img = null;
</script>

<!-- Check if it's a clickable hexagon or not. If not, render a <div> instead of an <a> -->
{#if href}
  <a {href} style="--bg: var({bgColor}); --color: var({color})" class="hover">
    <!-- Check if an image was given. If it was, use the image as the hexagon's content rather than the text -->
    {#if img}
      <img src={img.src} alt={img.alt} />
    {:else}
      <span>{text}</span>
    {/if}
  </a>
{:else}
  <div style="--bg: var({bgColor}); --color: var({color})">
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
    color: var(--color);
    display: grid;
    align-items: center;
    justify-items: center;
    text-decoration: none;
    padding: 2rem;
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