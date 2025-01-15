<script>
import KnowledgeClips from "$lib/organisms/knowledgeClips.svelte";

export let data
const clips = data.categories;
</script>


<KnowledgeClips {clips} />
