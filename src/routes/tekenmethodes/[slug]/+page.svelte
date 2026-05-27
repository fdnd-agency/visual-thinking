<script>
  import { Breadcrumb, MethodHeader } from "$lib/index.js";
  const { data } = $props();
  const { titel, slug, sjabloon, beschrijving, pdf } = data;
</script>

<Breadcrumb
  title="Overzicht"
  url="/tekenmethodes"
  backgroundColor="var(--color-quinary)"
/>
<MethodHeader title={titel} {slug} {pdf} />
<section class="section-wrapper">
  <img src={sjabloon?.url} alt="template_image" loading="lazy" />
  <p>
    {@html beschrijving}
  </p>
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
    border: 1px solid var(--color-tertiary);
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
