<script>
  let { page } = $props();
  const {title, content} = page;

</script>

<section class="intro">
  <h1>{title}</h1>
  {@html content.html}
</section>

<style>
  section {
    max-width: var(--text-max-width);
    margin: 0 auto;
  }

  h1 {
    font-size: 1.7rem;
  }
  
  @media screen and (min-width: 36rem) {
    section {
          max-width: 75%;
      }
      h1 {
          font-size: 3.157rem;
          text-align: center;
      }
  }
</style>