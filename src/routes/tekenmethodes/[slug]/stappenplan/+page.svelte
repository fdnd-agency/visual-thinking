<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import MethodHeader from "$lib/organisms/methodHeader.svelte";
  import TagsPlan from "$lib/molecules/tagsPlan.svelte";
  import Steps from "$lib/molecules/steps.svelte";

  export let data;
  // Extract the steps into a seperate variable so we can give these to the steps component
  const steps = data.methods[0].steps;
</script>

<Breadcrumb titel="Overzicht" url="/tekenmethodes" backgroundColor="var(--vtYellow)" />

<MethodHeader {data} />

<section class="grid">
  <div class="sticky">
    <TagsPlan {data} />
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
