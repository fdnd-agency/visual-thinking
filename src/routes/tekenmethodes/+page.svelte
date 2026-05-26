<script>
  import { Breadcrumb, Introduction, Methods } from "$lib/index.js";
  let { data } = $props();
</script>

<Breadcrumb title="Tekenmethodes" backgroundColor="var(--color-quinary)" />
<Introduction page={data.page} />
<Methods methods={data.methods} categories={data.categories} />
