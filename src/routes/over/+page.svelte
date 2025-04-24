<script>
  import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
  import Introduction from "$lib/molecules/Introduction.svelte";

  export let data;

  const {page} = data
</script>

<Breadcrumb titel="Over" backgroundColor="var(--color-tertiary-80)" />
<Introduction {page}/>
