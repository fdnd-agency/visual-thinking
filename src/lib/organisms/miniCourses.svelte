<script>
  export let data;
</script>

<section>
  <h2 class="sr-only">Kies hier een minicursus</h2>
  <ul>
    {#if data && data.length > 0}
      {#each data as course, index}
        <li><a href="/minicursussen/{course.slug}"><span>{course.title}</span></a></li>
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

    --tx: 0.365;
    --ch: 0.74;

    --cc: 1;
    --rc: 4;

    display: grid;
    grid-template-columns: repeat(var(--cc), var(--size));
    grid-template-rows: repeat(
      var(--rc),
      calc(var(--size) * var(--ch) + var(--gap) * 1)
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

  ul li a {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background: var(--vtRed);
    display: grid;
    text-decoration: none;
    color: #fff;
    padding: 2rem 0;
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
    height: 100%;
    font-family: var(--vtPrimaryFont);
    transition:.25s;
  }

    ul li:nth-of-type(2) a {
      background: var(--vtLightBlue);
    }

    ul li:nth-of-type(3) a {
      background: var(--vtYellow);
    }

    ul li:nth-of-type(4) a {
      background: var(--vtDarkBlue);
    }

  ul li a span {
    place-self: center;
  }

  @media (width > 35rem) {
    ul {
      --rc: 2;
      --cc: 2;
    }
  }

  @media (width > 60em) {
    ul {
      --gap: 2rem;
      --size: 14em;

      --tx: 0.55;
      --ch: 0.71;

      --cc: 4;
      --rc: 2;
      margin-top: -28vh;
    }
    
    ul li a:hover {
      transform: scale(1.1);
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 1;
      transform: translateX(calc(var(--size) * var(--tx)));
    }

    ul li:nth-of-type(2) {
      grid-column-start: 4;
      grid-row-start: 1;
      transform: translateX(calc(var(--size) * var(--tx) * -1));
    }

    ul li:nth-of-type(3) {
      grid-column-start: 2;
      grid-row-start: 2;
      transform: translateX(0);
    }

    ul li:nth-of-type(4) {
      grid-column-start: 3;
      grid-row-start: 2;
      transform: translateX(0);
    }
  }
</style>
