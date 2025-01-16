<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";

  export let data;

  const {page} = data
</script>

<Breadcrumb titel="Over" backgroundColor="var(--vtSec-DarkBlue)" />
<Introduction {page}/>
