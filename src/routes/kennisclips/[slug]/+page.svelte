<script>
  import KnowledgeClip from "$lib/organisms/KnowledgeClip.svelte";
  export let data;
</script>

{#if data}
  <KnowledgeClip clip={data} />
{:else}
  <p>Geen kennisclip gevonden.</p>
{/if}