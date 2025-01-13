<script>
  export let titel;
  export let url;
  export let backgroundColor;
</script>

<div class="breadcrumb" style="--background-color:{backgroundColor}">
  {#if url}
    <a href="{url}">{titel}</a>
  {:else}
    <span>{titel}</span>
  {/if}
</div>
<style>
  div {
    background-color: var(--background-color);
    margin: 0 -1rem;
  }

  /* MOBILE - STYLING */
  a, span {
    text-transform: uppercase;
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.8rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    margin-top: 0%;
    width: 100vw;
    display: flex;
    align-items: center;
    text-decoration:none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
