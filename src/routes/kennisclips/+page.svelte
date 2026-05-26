<script>
  import { Breadcrumb, Introduction, KnowledgeClips } from "$lib/index.js";
  let { data } = $props();
  const page = $derived(data.page);
  const clips = $derived(data.clips);
</script>

<Breadcrumb title="Kennisclips" backgroundColor="var(--color-quaternary)" />
<Introduction {page} />
<KnowledgeClips {clips} />
