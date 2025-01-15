<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";

  export let data;

  const {page} = data
</script>

<Breadcrumb titel="Over" bgc="var(--vtSec-DarkBlue)" />
<Introduction data={page}/>
