<script>
  import {Breadcrumb, MethodHeader} from "$lib/index.js"
  export let data;
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  bgc="var(--color-quinary)"
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
    padding-right: 1rem;
  }

  section img {
    border: 1px solid var(--color-tertiary-90);
  }

  p {
    margin-top: -1rem;
    margin-left: 2rem;
  }

  @media (min-width: 43.5em) {
    section {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }
  }

</style>
