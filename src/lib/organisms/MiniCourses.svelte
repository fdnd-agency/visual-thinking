<script>
  import Hexagon from "$lib/atoms/Hexagon.svelte";

  export let data;
</script>

<section>
  <h2 class="screenreader-only">Kies hier een minicursus</h2>
  <ul>
    {#if data && data.length > 0}
      {#each data as course, index}
        <li>
          <Hexagon
            href="/minicursussen/{course.slug}"
            backgroundColor="var(--background-color)"
            color="#fff"
            text="{course.title}"
          />
        </li>
      {/each}
    {/if}
  </ul>
</section>

<style>
  section {
    padding:0 0 8rem;
  }

  ul {
    --gap: 3rem;
    --size: 12em;

    --translateX: 0.365;
    --column-height: 0.74;

    --column-count: 1;
    --row-count: 4;

    display: grid;
    grid-template-columns: repeat(var(--column-count), var(--size));
    grid-template-rows: repeat(
      var(--row-count),
      calc(var(--size) * var(--column-height) + var(--gap) * 1)
    );
    justify-content: center;
    list-style: none;
    padding: 0;
    width: 100%;
    align-items: stretch;
    gap: var(--gap);
  }

  ul li {
    width: var(--size);
    height: calc(var(--size) * 1.1);
  }

  ul li {
    --background-color: var(--vtRed);
  }

  ul li:nth-of-type(2) {
    --background-color: var(--vtLightBlue);
  }

  ul li:nth-of-type(3) {
    --background-color: var(--vtYellow);
  }

  ul li:nth-of-type(4) {
    --background-color: var(--vtDarkBlue);
  }

  @media (width > 35rem) {
    ul {
      --row-count: 2;
      --column-count: 2;
    }
  }

  @media (width > 60em) {
    ul {
      --gap: 2rem;
      --size: 14em;

      --translateX: 0.55;
      --column-height: 0.71;

      --column-count: 4;
      --row-count: 2;
      margin-top: -28vh;
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 1;
      transform: translateX(calc(var(--size) * var(--translateX)));
    }

    ul li:nth-of-type(2) {
      grid-column-start: 4;
      grid-row-start: 1;
      transform: translateX(calc(var(--size) * var(--translateX) * -1));
    }

    ul li:nth-of-type(3) {
      grid-column-start: 2;
      grid-row-start: 2;
    }

    ul li:nth-of-type(4) {
      grid-column-start: 3;
      grid-row-start: 2;
    }
  }
</style>
