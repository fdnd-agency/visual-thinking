<script>
  let { steps } = $props();
</script>

<section>
  {#each steps as step, stepIndex}
    <details open={stepIndex === 0}>
      <summary>{step.titel}</summary>
      <div>
        {#if step?.visualisaties?.length > 0}
          {#each step.visualisaties as visual}
            <img
              class="carrousel-img"
              src={visual?.url}
              alt="image_voorbeeld"
              loading="lazy"
            />
          {/each}
        {:else}
          <p>Geen visualisaties</p>
        {/if}
        {@html step?.beschrijving}
      </div>
    </details>
  {/each}
</section>

<style>
  details {
    margin-bottom: 0.25rem;
    width: 100%;
    overflow: hidden;
  }

  summary {
    font-family: var(--font-family-primary);
    background-color: var(--color-tertiary);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: var(--color-primary);
    padding: 0.5rem;
    cursor: pointer;
    user-select: none;
  }

  summary:hover {
    background-color: var(--color-quinary-80);
    color: black;
  }

  div {
    padding: 0.5rem;
    background-color: var(--color-primary);
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 0.25rem;
  }

  div img {
    width: 100%;
    height: 100%;
  }
</style>
