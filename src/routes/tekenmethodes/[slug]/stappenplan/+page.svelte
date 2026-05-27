<script>
  import { Breadcrumb, MethodHeader, MethodTags, Steps } from "$lib/index.js";

  let { data } = $props();
  const { titel, slug, pdf, duur, stappen, categorieen, materialen } = data;
</script>

<Breadcrumb
  title="Overzicht"
  url="/tekenmethodes"
  backgroundColor="var(--color-quinary)"
/>
<MethodHeader title={titel} {slug} {pdf} />
<section>
  <div class="sticky">
    <MethodTags
      categories={categorieen}
      duration={duur}
      materials={materialen}
    />
  </div>
  <Steps steps={stappen} />
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
    width: 100%;
  }
  @media (min-width: 74.125em) {
    .sticky {
      position: sticky;
      top: 0;
    }
  }
</style>
