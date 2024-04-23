<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte"
  import MethodsHeader from "$lib/organisms/methodsHeader.svelte";

  export let data;
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  bgc="var(--vtYellow)"
/>

<MethodsHeader {data} />

<section class="section-wrapper">
  {#each data.methods as method}
    <img src={method?.template?.url} alt="template_image" loading="lazy" />
  {/each}

  <p>
    {#each data.methods as method}
      {@html method?.description.html}
    {/each}
  </p>
</section>



<style>

  /* Section's & wrapper styling */
  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-bottom: 20px;
    margin-bottom: 1.5rem;
  }

  section img {
    border: 1px solid var(--vtDarkBlue);
  }

  p {
    margin-top: -1rem;
  }

  @media (min-width: 43.5em) {
    section {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }
  }

 

</style>
