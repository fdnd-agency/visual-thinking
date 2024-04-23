<section>
  <h2 class="sr-only">Visual Thinking Onderwerpen</h2>
  <ul>
    <li>
      <a href="/"><span><img src="/images/man.svg" alt="man_image" /></span></a>
    </li>
    <li>
      <a href="/"><span><img src="/images/pencil.svg" alt="pencil_image" /></span></a>
    </li>
    <li>
      <a href="/over" style="--bg:#3F439D" class="highlight"
        ><span>Over Visual Thinking</span></a
      >
    </li>
    <li>
      <a href="/tekenmethodes" style="--bg:#feb51e" class="highlight"
        ><span>Ontdek de Visual Thinking methodes</span></a
      >
    </li>
    <li>
      <a href="/artikelen" style="--bg:#e0dedc"><span>Artikelen</span></a>
    </li>
    <li>
      <a href="/kennisclips" style="--bg:#67c5d1" class="highlight"
        ><span>Kennisclips</span></a
      >
    </li>
    <li>
      <a href="/minicursussen" style="--bg:#f96c4f" class="highlight"
        ><span>Minicursussen</span></a
      >
    </li>
    <li>
      <a href="/tekenruimte" style="--bg:#e0dedc"><span>Tekenruimte</span></a>
    </li>
  </ul>
</section>


<style>
  ul li a {
    /* --bg: #e0dedc; */
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background: var(--bg);
    /*   aspect-ratio: 1 / 1; */
    display: grid;
    text-decoration: none;
    color: inherit;
    padding: 2rem 0;
    text-align: center;
    font-size: 1.25em;
    height: 100%;
    transition:.25s;
  }

  ul li a.highlight {
    color: #fff;
  }

  ul li a span {
    place-self: center;
  }

  /* ul li a:hover{
    transform: scale(1.1);
  } */

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
    margin-bottom:5rem;
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

  ul li:nth-of-type(1) img {
    width: 150px;
    height: auto;
  }

  ul li:nth-of-type(2) {
    grid-column-start: 2;
    grid-row-start: 3;
    transform: translateX(calc(var(--size) * var(--tx) * 0.1));
  }

  ul li:nth-of-type(2) img {
    width: 50px;
    height: auto;
  }

  ul li:nth-of-type(3) {
    transform: translateX(calc(var(--size) * var(--tx)));
  }

  ul li a:nth-of-type(3) {
    background-color: #3f439d;
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
    h1 {
      font-size: 3.157rem;
    }

    p {
      max-width: 24rem;
    }

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
    article {
      margin-bottom: 20px;
    }

    p {
      max-width: 15rem;
      font-size: 22px;
    }

    ul {
      --gap: 1rem;
      --size: 14em;

      /* --tx:.55; */
      /* --ch:.71; */

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

    /* Hover effect voor de li -items  */

    ul li a:hover {
      transform: scale(1.1);
    }

    /* zodat de img <li> geen hover effect krijgen */

    ul li:nth-of-type(1):not(:hover),
    ul li:nth-of-type(2):not(:hover) {
      pointer-events: none;
    }
  }
</style>
