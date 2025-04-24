<script>
import KnowledgeClips from "$lib/organisms/KnowledgeClips.svelte";

export let data
const clips = data.categories;
</script>


<KnowledgeClips {clips} />
