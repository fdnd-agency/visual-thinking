<script>
  import Method from "../molecules/Method.svelte";

  $: scrollY = 0;
  let bodyHeight = 0;

  const getBodyHeight = (body) => {
    bodyHeight = body.clientHeight;
  };

  export let data;
</script>

<svelte:body use:getBodyHeight />
<svelte:window bind:scrollY />

<section class="grid">
  <h2>Alle methodes ({data.length})</h2>
  {#if data && data.length > 0}
    {#each data as method, index}
      {#if scrollY > (bodyHeight / data.length) * index}
        <Method {method} />
      {/if}
    {/each}
  {/if}
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1rem 0;
    height: 500vh;
    /* background-color: rgba(255, 0, 0, 0.2); */
  }

  h2 {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 36em) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 60em) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
