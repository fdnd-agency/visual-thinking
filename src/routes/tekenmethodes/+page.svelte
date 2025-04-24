<script>
  import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
  import Introduction from "$lib/molecules/Introduction.svelte";
  import Filter from "$lib/molecules/Filter.svelte";

  import Methods from "$lib/organisms/Methods.svelte";

  export let data;

  const {page, methods, categories} = data;
</script>

<Breadcrumb titel="Tekenmethodes" backgroundColor="var(--vtYellow)" />
<Introduction {page} />

<Filter {categories} />
<Methods {methods} />
