<script>
  import KnowledgeClip from "$lib/organisms/KnowledgeClip.svelte";
  export let data;
</script>

{#if data?.clip}
  <KnowledgeClip clip={data.clip} />
{:else}
  <p>Geen kennisclip gevonden.</p>
{/if}
