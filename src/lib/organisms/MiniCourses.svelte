<script>
  import { Hexagon } from "$lib/index.js";

  export let miniCourses;
</script>

<section>
  <h2 class="screenreader-only">Kies hier een minicursus</h2>
  <ul>
    {#if miniCourses && miniCourses.length > 0}
      {#each miniCourses as course, index}
        <li>
          <Hexagon
            href="/minicursussen/{course.slug}"
            backgroundColor="var(--background-color)"
            color="--color-primary"
            text="{course.title}"
          />
        </li>
      {/each}
    {/if}
  </ul>
</section>

<style>
  section {
    padding: 0 0 8rem;
  }

  ul {
    --gap: 3rem;
    --size: 12rem;

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
    --background-color: var(--color-senary);
  }

  ul li:nth-of-type(2) {
    --background-color: var(--color-quaternary);
  }

  ul li:nth-of-type(3) {
    --background-color: var(--color-quinary);
  }

  ul li:nth-of-type(4) {
    --background-color: var(--color-tertiary-80);
  }

  @media (width > 36rem) {
    ul {
      --row-count: 2;
      --column-count: 2;
    }
  }

  @media (width > 70rem) {
    ul {
      --gap: 2rem;
      --size: 14rem;

      --translateX: 0.55;
      --column-height: 0.71;

      --cc: 4;
      --rc: 2;
      
      --column-count: 4;
      --row-count: 2;
      margin-top: calc(1.2rem + 3.157rem); /* breadcrumheight + h1 height */
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
