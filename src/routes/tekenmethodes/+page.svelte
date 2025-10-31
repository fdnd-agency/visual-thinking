<script>
  import { Breadcrumb, Introduction, Methods } from "$lib/index.js";
  let { data } = $props();

  const {page, categories} = data;
</script>

<Breadcrumb titel="Tekenmethodes" backgroundColor="var(--color-quinary)" />
<Introduction {page} />
<Methods methods={data.methods} {categories}/>

