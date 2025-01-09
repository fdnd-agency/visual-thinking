<script>
  export let data;

  const {title, content} = data
</script>


<header>
  <h1>{title}</h1>
    
  {@html content.html}
</header>

<style>
  header {
      max-width: 40rem;
      margin: 0 auto 2rem;
  }

  h1 {
      font-size: 1.7rem;
  }
  @media screen and (min-width: 36em) {

    header {
      width: 75%;
    }

    h1 {
      font-size: 3.157rem;
      text-align: center;
    }

    /* Hexagons positionering */
    :global(main) {
      position: relative;
    }

    :global(.hexagons header) {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }

    :global(.minicourse header) {
      top: 1.2rem; /* Breadcrum height */
    }
  }
</style>