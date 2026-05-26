<script>
  import { Breadcrumb, Introduction, Methods } from "$lib/index.js";
  let { data } = $props();
  const page = $derived(data.page);
  const methods = $derived(data.methods);
  const categories = $derived(data.categories);
</script>

<Breadcrumb title="Tekenmethodes" backgroundColor="var(--color-quinary)" />
<Introduction {page} />
<Methods {methods} {categories} />
