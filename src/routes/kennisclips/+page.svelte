<script>
  import { Breadcrumb, Introduction, KnowledgeClips } from "$lib/index.js";
   let { data } = $props();

   console.log(data)

  const {page, clips} = data

</script>

<Breadcrumb titel="Kennisclips" backgroundColor="var(--color-quaternary)" />
<Introduction {page}/>
<KnowledgeClips {clips} />

