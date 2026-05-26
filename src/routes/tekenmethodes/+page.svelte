<script>
  import { Breadcrumb, Introduction, Methods } from "$lib/index.js";
  let { data } = $props();
  const page = data.adconnect_tekenmethodes;
  const categories = data.categories;
  // const {page, categories} = data;

  console.log(data);
</script>

<Breadcrumb titel="Tekenmethodes" backgroundColor="var(--color-quinary)" />
<Introduction {page} />
<Methods methods={data.methods} {categories} />
