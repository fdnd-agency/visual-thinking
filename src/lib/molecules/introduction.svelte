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
  }
</style>