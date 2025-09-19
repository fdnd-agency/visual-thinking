<script>
import { KnowledgeClips } from "$lib/index.js";

	let { data } = $props();
const clips = data.categories;
</script>


<KnowledgeClips {clips} />