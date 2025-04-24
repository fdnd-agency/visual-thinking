<script>
  import { Breadcrumb, MethodHeader } from "$lib/index.js";

  export let data;
  // Extract the relevant values into seperate variables so we can give these selectively to MethodHeader
  const { title, slug, pdf } = data.methods[0];
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  backgroundColor="var(--vtYellow)"
/>

<MethodHeader {title} {slug} {pdf} />

<section class="section-wrapper">
  {#each data.methods as method}
    <img src={method?.template?.url} alt="template_image" loading="lazy" />
    <p>
      {@html method?.description.html}
    </p>
  {/each}
</section>

<style>
  /* Sections & wrapper styling */
  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-bottom: 20px;
    margin-bottom: 1.5rem;
    padding-right: 1rem;
  }

  section img {
    border: 1px solid var(--vtDarkBlue);
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
