<script>
  import Hexagon from "$lib/atoms/Hexagon.svelte";
</script>

<section>
  <h2 class="sr-only">Visual Thinking Onderwerpen</h2>
  <ul>
    <li>
      <Hexagon
        img={{
          src: "/images/man.svg",
          alt: "Illustratie van een denkend persoon"
        }}
      />
    </li>
    <li>
      <Hexagon
        img={{
          src: "/images/pencil.svg",
          alt: "Illustratie van een potlood"
        }}
      />
    </li>
    <li>
      <Hexagon
        href="/over"
        bgColor="--vtSec-DarkBlue"
        color="#fff"
        text="Over Visual Thinking"
      />
    </li>
    <li>
      <Hexagon
        href="/tekenmethodes"
        bgColor="--vtYellow"
        color="#fff"
        text="Ontdek de Visual Thinking methodes"
      />
    </li>
    <li>
      <Hexagon
        href="/artikelen"
        text="Artikelen"
      />
    </li>
    <li>
      <Hexagon
        href="/kennisclips"
        bgColor="--vtLightBlue"
        color="#fff"
        text="Kennisclips"
      />
    </li>
    <li>
      <Hexagon
        href="/minicursussen"
        bgColor="--vtRed"
        color="#fff"
        text="Minicursussen"
      />
    </li>
    <li>
      <Hexagon
        href="/tekenruimte"
        text="Tekenruimte"
      />
    </li>
  </ul>
</section>


<style>
  ul {
    --gap: 1rem;
    --size: 10em;
    --tx: 0.265;
    --ch: 0.74;
    --cc: 2;
    --rc: 6;
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
    margin-bottom: 5rem;
  }

  ul li {
    width: var(--size);
    height: calc(var(--size) * 1.1);
  }

  /* mobile */

  ul li:nth-of-type(1) {
    grid-column-start: 1;
    grid-row-start: 2;
    transform: translateX(calc(var(--size) * var(--tx) * -0.1));
  }

  ul li:nth-of-type(2) {
    grid-column-start: 2;
    grid-row-start: 3;
    transform: translateX(calc(var(--size) * var(--tx) * 0.1));
  }

  ul li:nth-of-type(3) {
    transform: translateX(calc(var(--size) * var(--tx)));
  }

  ul li:nth-of-type(4) {
    grid-column-start: 2;
    grid-row-start: 2;

    transform: translateX(calc(var(--size) * var(--tx) * -1));
  }

  ul li:nth-of-type(5) {
    grid-column-start: 1;
    grid-row-start: 5;
    transform: translateX(calc(var(--size) * var(--tx)));
  }

  ul li:nth-of-type(6) {
    grid-column-start: 2;
    grid-row-start: 4;
    transform: translateX(calc(var(--size) * var(--tx) * -1));
  }

  ul li:nth-of-type(7) {
    grid-column-start: 1;
    grid-row-start: 3;
    transform: translateX(calc(var(--size) * var(--tx)));
  }

  ul li:nth-of-type(8) {
    grid-column-start: 2;
    grid-row-start: 6;
    transform: translateX(calc(var(--size) * var(--tx) * -1));
  }

  /* tablet mini */
  @media (width > 40em) {
    ul {
      --gap: 1.2rem;
      --tx: 0.275;
      --ch: 0.725;
    }
  }
  
  /* tablet groot */
  @media (width > 44em) {
    ul {
      --gap: 1.4rem;
      --size: 12em;

      --tx: 0.55;
      --ch: 0.71;

      --cc: 3;
      --rc: 4;
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 3;
      --bg: #e0dedc;

      transform: translateX(0);
    }

    ul li:nth-of-type(2) {
      grid-column-start: 3;
      grid-row-start: 3;
      transform: translateX(0);
      --bg: #e0dedc;
    }

    ul li:nth-of-type(3) {
      grid-column-start: 2;
      grid-row-start: 1;
      transform: translateX(0);
    }

    ul li:nth-of-type(4) {
      grid-column-start: 2;
      grid-row-start: 3;

      transform: translateX(0);
    }

    ul li:nth-of-type(5) {
      grid-column-start: 1;
      grid-row-start: 4;
      transform: translateX(calc(var(--size) * var(--tx)));
    }

    ul li:nth-of-type(6) {
      grid-column-start: 1;
      grid-row-start: 2;
      transform: translateX(calc(var(--size) * var(--tx)));
    }

    ul li:nth-of-type(7) {
      grid-column-start: 3;
      grid-row-start: 2;
      transform: translateX(calc(var(--size) * var(--tx) * -1));
    }

    ul li:nth-of-type(8) {
      grid-column-start: 3;
      grid-row-start: 4;
      transform: translateX(calc(var(--size) * var(--tx) * -1));
    }
  }

  /* desktop */
  @media (width > 70em) {
    ul {
      --gap: 1rem;
      --size: 14em;
      --cc: 4;
      --rc: 2;
      margin-top: -60vh;
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 1;
      --bg: #e0dedc;
      transform: translateX(0);
    }

    ul li:nth-of-type(2) {
      grid-column-start: 4;
      grid-row-start: 1;
      transform: translateX(0);
      --bg: #e0dedc;
    }

    ul li:nth-of-type(3) {
      grid-column-start: 1;
      grid-row-start: 2;
      transform: translateX(calc(var(--size) * var(--tx)));
    }

    ul li:nth-of-type(4) {
      grid-column-start: 4;
      grid-row-start: 2;

      transform: translateX(calc(var(--size) * var(--tx) * -1));
    }

    ul li:nth-of-type(5) {
      grid-column-start: 1;
      grid-row-start: 3;
      transform: translateX(0);
    }

    ul li:nth-of-type(6) {
      grid-column-start: 3;
      grid-row-start: 3;
      transform: translateX(0);
    }

    ul li:nth-of-type(7) {
      grid-column-start: 2;
      grid-row-start: 3;
      transform: translateX(0);
    }

    ul li:nth-of-type(8) {
      grid-column-start: 4;
      grid-row-start: 3;
      transform: translateX(0);
    }
  }

  @media (width > 68em) {
    ul {
      --gap: 1.3rem;
      --size: 13em;
      --tx: 0.55;
      --ch: 0.71;
      /* --rc:2; */
    }
  }
</style>