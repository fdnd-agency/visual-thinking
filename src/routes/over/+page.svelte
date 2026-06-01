<script>
  import { Breadcrumb, Introduction } from "$lib/index.js";
  let { data } = $props();

  const {page} = data
</script>

<Breadcrumb titel="Over" backgroundColor="var(--color-tertiary-80)" />
<Introduction {page}/>
