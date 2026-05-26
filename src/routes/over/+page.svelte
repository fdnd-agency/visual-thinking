<script>
  import { Breadcrumb, Introduction } from "$lib/index.js";
  let { data } = $props();

  const page = data.adconnect_aboutpage;
</script>

<Breadcrumb title="Over" backgroundColor="var(--color-tertiary-80)" />
<Introduction {page} />
