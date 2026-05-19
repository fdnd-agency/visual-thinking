<script>
  import { KnowledgeClip } from "$lib/index.js";
  export let data;
</script>

{#if data?.clip}
  <KnowledgeClip clip={data.clip} />
{:else}
  <p>Geen kennisclip gevonden.</p>
{/if}
