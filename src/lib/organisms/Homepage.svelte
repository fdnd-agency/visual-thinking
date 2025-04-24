<script>
  import { Hexagon } from "$lib/index.js";

</script>
<section>
  <h2 class="screenreader-only">Visual Thinking Onderwerpen</h2>
  <ul>
    <li>
      <Hexagon
        class="hide-on-mobile"
        img={{
          src: "/images/man.svg",
          alt: "Illustratie van een denkend persoon"
        }}
      />
    </li>
    <li>
      <Hexagon
        class="hide-on-mobile"
        img={{
          src: "/images/pencil.svg",
          alt: "Illustratie van een potlood"
        }}
      />
    </li>
    <li>
      <Hexagon
        href="/over"
        backgroundColor="--vtSec-DarkBlue"
        color="--vtWhite"
        text="Over Visual Thinking"
      />
    </li>
    <li>
      <Hexagon
        href="/tekenmethodes"
        backgroundColor="--vtYellow"
        color="--vtWhite"
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
        href="/minicursussen"
        backgroundColor="--vtRed"
        color="--vtWhite"
        text="Minicursussen"
      />
    </li>
    <li>
      <Hexagon
        href="/kennisclips"
        backgroundColor="--vtLightBlue"
        color="--vtWhite"
        text="Kennisclips"
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
    --size: 10rem;

    --translateX: 0.265;
    --column-height: 0.74;

    --column-count: 2;
    --row-column: 6;

    display: grid;
    grid-template-columns: repeat(var(--column-count), var(--size));
    grid-template-rows: repeat(
      var(--row-column),
      calc(var(--size) * var(--column-height) + var(--gap) * 1)
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
    transform: translateX(calc(var(--size) * var(--translateX) * -0.1));
  }

  ul li:nth-of-type(2) {
    grid-column-start: 2;
    grid-row-start: 3;
    transform: translateX(calc(var(--size) * var(--translateX) * 0.1));
  }

  ul li:nth-of-type(3) {
    transform: translateX(calc(var(--size) * var(--translateX)));
  }

  ul li:nth-of-type(4) {
    grid-column-start: 2;
    grid-row-start: 2;

    transform: translateX(calc(var(--size) * var(--translateX) * -1));
  }

  ul li:nth-of-type(5) {
    grid-column-start: 1;
    grid-row-start: 5;
    transform: translateX(calc(var(--size) * var(--translateX)));
  }

  ul li:nth-of-type(6) {
    grid-column-start: 2;
    grid-row-start: 4;
    transform: translateX(calc(var(--size) * var(--translateX) * -1));
  }

  ul li:nth-of-type(7) {
    grid-column-start: 1;
    grid-row-start: 3;
    transform: translateX(calc(var(--size) * var(--translateX)));
  }

  ul li:nth-of-type(8) {
    grid-column-start: 2;
    grid-row-start: 6;
    transform: translateX(calc(var(--size) * var(--translateX) * -1));
  }

  /* tablet mini */
  @media (width > 40rem) {
    ul {
      --gap: 1.2rem;
      --translateX: 0.275;
      --column-height: 0.725;
    }
  }

  /* tablet groot */

  @media (width > 44rem) {
    ul {
      --gap: 1.4rem;
      --size: 12rem;

      --translateX: 0.55;
      --column-height: 0.71;

      --column-count: 3;
      --row-column: 4;
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 3;
      transform: translateX(0);
    }

    ul li:nth-of-type(2) {
      grid-column-start: 3;
      grid-row-start: 3;
      transform: translateX(0);
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
      transform: translateX(calc(var(--size) * var(--translateX)));
    }

    ul li:nth-of-type(6) {
      grid-column-start: 1;
      grid-row-start: 2;
      transform: translateX(calc(var(--size) * var(--translateX)));
    }

    ul li:nth-of-type(7) {
      grid-column-start: 3;
      grid-row-start: 2;
      transform: translateX(calc(var(--size) * var(--translateX) * -1));
    }

    ul li:nth-of-type(8) {
      grid-column-start: 3;
      grid-row-start: 4;
      transform: translateX(calc(var(--size) * var(--translateX) * -1));
    }
  }

  /* Desktop */
  @media (width > 70rem) {
    ul {
      --gap: 1.3rem;
      --size: 13rem;
      
      --column-count: 4;
      --row-column: 2;
      --translateX: 0.55;
      --column-height: 0.71;
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 1;
      transform: translateX(0);
    }

    ul li:nth-of-type(2) {
      grid-column-start: 4;
      grid-row-start: 1;
      transform: translateX(0);
    }

    ul li:nth-of-type(3) {
      grid-column-start: 1;
      grid-row-start: 2;
      transform: translateX(calc(var(--size) * var(--translateX)));
    }

    ul li:nth-of-type(4) {
      grid-column-start: 4;
      grid-row-start: 2;

      transform: translateX(calc(var(--size) * var(--translateX) * -1));
    }

    ul li:nth-of-type(5) {
      grid-column-start: 1;
      grid-row-start: 3;
      transform: translateX(0);
    }

    ul li:nth-of-type(7) {
      grid-column-start: 3;
      grid-row-start: 3;
      transform: translateX(0);
    }

    ul li:nth-of-type(6) {
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
</style>