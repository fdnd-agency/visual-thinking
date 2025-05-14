<script>
  import { Breadcrumb, Introduction, Methods } from "$lib/index.js";
  export let data;

  const {page, methods, categories} = data;
</script>

<Breadcrumb titel="Tekenmethodes" backgroundColor="var(--color-quinary)" />
<Introduction {page} />
<Methods {methods} {categories}/>
