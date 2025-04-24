<script>
  import IconAuthor from "../atoms/icons/IconAuthor.svelte";
  import IconCategories from "../atoms/icons/IconCategories.svelte";
  import IconDuration from "../atoms/icons/IconDuration.svelte";
  import IconMaterials from "../atoms/icons/IconMaterials.svelte";

  export let categories;
  export let materials;
  export let duration;

  // Functie om underscores te verwijderen en de eerste letter van het eerste woord hoofdletter te maken
  function formatMaterial(material) {
    // Verwijder underscores
    let formatted = material.replace(/_/g, " ");
    // Zet de eerste letter van de string in hoofdletters
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
</script>

<ul class="tags-container">
  <!-- Categories Section -->
  <li class="tags-group">
    <IconCategories />
    <div class="span-box">
      {#each categories as category}
        <p>{category.title}</p>
      {/each}
    </div>
  </li>
  <!-- Materials Section -->
  <li class="tags-group">
    <IconMaterials />

    {#each materials as material}
      <div class="span-box">
        <p>{formatMaterial(material)}</p>
      </div>
    {/each}
  </li>
  <!-- Duration Section -->
  <li class="tags-group">
    <IconDuration />

    <div class="span-box">
      <p>{duration}</p>
    </div>
  </li>
  <!-- Author Section -->
  <li class="tags-group">
    <IconAuthor />

    <div class="span-box">
      <p>Charley Muhren</p>
    </div>
  </li>
</ul>

<style>
  .tags-container {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .tags-group {
    display: flex;
    margin-bottom: 0.5rem;
  }

  .span-box {
    display: flex;
    flex-flow: row wrap;
  }

  p {
    background-color: var(--color-quinary-80);
    color: var(--color-tertiary);
    font-family: var(--font-family-primary);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.1rem 0.4rem;
    margin-right: 0;
    margin: 0.7rem -0.3rem 0.7rem 0.7rem;
    max-width: fit-content;
  }

  .tags-container :global(svg) {
    flex-shrink: 0;
  }

  @media (min-width: 58rem) {
    .tags-container {
      position: -webkit-sticky; /* Voor Safari */
      position: sticky;
      padding: 0;
      top: 0;
      z-index: 1;
    }
  }
</style>
