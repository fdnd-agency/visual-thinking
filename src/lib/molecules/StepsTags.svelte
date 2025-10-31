<script>
  import { IconAuthor, IconCategories, IconDuration, IconMaterials } from "$lib/index.js";
  let { categories, materials, duration } = $props();

  // Functie om underscores te verwijderen en de eerste letter van het eerste woord hoofdletter te maken
  function formatMaterial(material) {
    // Verwijder underscores
    let formatted = material.replace(/_/g, " ");
    // Zet de eerste letter van de string in hoofdletters
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
</script>

<ul>
  <!-- Categories Section -->
  <li>
    <IconCategories />
    <div>
      {#each categories as category}
        <p>{category.title}</p>
      {/each}
    </div>
  </li>
  <!-- Materials Section -->
  <li>
    <IconMaterials />

    {#each materials as material}
      <div>
        <p>{formatMaterial(material)}</p>
      </div>
    {/each}
  </li>
  <!-- Duration Section -->
  <li>
    <IconDuration />

    <div>
      <p>{duration}</p>
    </div>
  </li>
  <!-- Author Section -->
  <li>
    <IconAuthor />

    <div>
      <p>Charley Muhren</p>
    </div>
  </li>
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  li {
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

  div :global(svg) {
    flex-shrink: 0;
  }

  @media (min-width: 58rem) {
    li {
      position: -webkit-sticky; /* Voor Safari */
      position: sticky;
      padding: 0;
      top: 0;
      z-index: 1;
    }
  }
</style>
