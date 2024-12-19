<script>
  export let data;

  const {title, content} = data

  let newTitle = title.replace(/a/g, 'A');
</script>

<header>
  <h1>{newTitle}</h1>
    
  <!-- {@html content.html} -->
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
          font-size: 3.8rem;
          text-align: center;
      }
  }
</style>