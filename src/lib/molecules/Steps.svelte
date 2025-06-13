<script>
  let { steps } = $props();
</script>

<section>
  <!-- Loop through each step in the method -->
  {#each steps as step, stepIndex}
    <details open={stepIndex === 0}>
      <summary>{step.title}</summary>
      <div>
        <!-- Check if visual content exists -->
        {#if step.visual[0]}
          <img src={step.visual[0].url} alt="image_voorbeeld" />
        {/if}
        <!-- Check if description is HTML or plain text -->
        {#if typeof step.description === "object"}
          <!-- i used {@html} for injecting HTML content without the html tags -->
          {@html step.description.html}
        {:else}
          <!-- text description -->
          <p>{step.description}</p>
        {/if}
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
