<script>
  import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
  import MethodHeader from "$lib/organisms/MethodHeader.svelte";
  import StepsTags from "$lib/molecules/StepsTags.svelte";
  import Steps from "$lib/molecules/Steps.svelte";

  export let data;
  // Extract the relevant values into a seperate variables so we can give these selectively to their components
  const { steps, categories, material, duration, title, slug, pdf } = data.methods[0];
</script>

<Breadcrumb titel="Overzicht" url="/tekenmethodes" backgroundColor="var(--vtYellow)" />

<MethodHeader {title} {slug} {pdf} />

<section class="grid">
  <div class="sticky">
    <StepsTags {categories} {duration} materials={material} />
  </div>
  <Steps {steps} />
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
    width: 100%;
  }
  @media (min-width: 74.125em) {
    .sticky{
      position: sticky;
      top: 0;
    }
  }

  @media (min-width: 74em) {
    .grid {
      grid-template-columns: 1fr 1fr;
      max-width: 80%;
    }

  }
</style>
