<script>
  export let page;
</script>

<section>
  <a href={page}>Lees meer</a>
</section>

<style>
  section {
    text-align: center; 
  }

  a {
    font-size: 14px;
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    display: inline-block; 
    padding: 10px 20px; 
    text-decoration: none; 
    border-radius: 5px;
    transition: background-color 0.3s ease; 
  }

  a:hover {
    background-color: var(--vtRed);
  }
</style>
