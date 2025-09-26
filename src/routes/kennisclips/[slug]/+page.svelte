<script>
import { KnowledgeClip } from "$lib/index.js";

	let { data } = $props();
const clip = data.categories;
</script>


<KnowledgeClip {clip} />