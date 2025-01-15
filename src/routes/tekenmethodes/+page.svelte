<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";
  import Filter from "$lib/molecules/filter.svelte";

  import Methods from "$lib/organisms/methods.svelte";

  export let data;

  const {page, methods} = data;
</script>

<Breadcrumb titel="Tekenmethodes" bgc="var(--vtYellow)" />
<Introduction data={page}/>

<Filter {data} />
<Methods data={methods}/>
