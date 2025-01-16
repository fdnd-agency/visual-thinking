<script>
  export let page;

  const {title, content} = page;
</script>

<section>
  <h1>{title}</h1>
    
  {@html content.html}
</section>

<style>
  section {
      max-width: 40rem;
      margin: 0 auto 2rem;
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
</style>