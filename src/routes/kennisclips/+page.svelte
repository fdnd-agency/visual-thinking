<script>
  import { Breadcrumb, Introduction, KnowledgeClips } from "$lib/index.js";
  let { data } = $props();
  const { page, clips } = data;
</script>

<Breadcrumb title="Kennisclips" backgroundColor="var(--color-quaternary)" />
<Introduction {page} />
<KnowledgeClips {clips} />
