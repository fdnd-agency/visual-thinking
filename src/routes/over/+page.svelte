<script>
  import { Breadcrumb, Introduction } from "$lib/index.js";
  export let data;

  const {page} = data
</script>

<Breadcrumb titel="Over" backgroundColor="var(--color-tertiary-80)" />
<Introduction {page}/>
