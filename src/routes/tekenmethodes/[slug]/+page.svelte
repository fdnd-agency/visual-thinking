<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte"
  import MethodHeader from "$lib/organisms/methodHeader.svelte";

  export let data;
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  bgc="var(--vtYellow)"
/>

<MethodHeader {data} />

<section class="section-wrapper">
  {#each data.methods as method}
    <img src={method?.template?.url} alt="template_image" loading="lazy" />

  <p>
    {@html method?.description.html}
  </p>
  {/each}
 
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
