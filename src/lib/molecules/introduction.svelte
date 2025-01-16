<script>
  export let page;
  const {title, content} = page;

  // Give the ability to pass classes to children
  let className = "";
  export { className as class };
</script>

<section class={className}>
  <h1>{title}</h1>

  {@html content.html}
</section>

<style>
  section {
    max-width: var(--text-max-width);
    margin: 0 auto 2rem auto;
  }

  h1 {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 36rem) {
    section {
          width: 75%;
      }
      h1 {
          font-size: 3.157rem;
          text-align: center;
      }
  }

  @media screen and (min-width: 70rem) {
      /* Hexagons positionering */
    .hexagons {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }

    .minicourse {
      top: 1.2rem; /* Breadcrum height */
    }
  }
</style>