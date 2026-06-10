<script>
  import { Breadcrumb, Introduction } from "$lib/index.js";

  let { data } = $props();
</script>

<Breadcrumb title="Over" backgroundColor="var(--color-tertiary-80)" />

<Introduction page={data.page} />
