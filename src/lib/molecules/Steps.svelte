<script>
  export let steps;
</script>

<section>
  <!-- Loop through each step in the method -->
  {#each steps as step, stepIndex}
    <details class="step" open={stepIndex === 0}>
      <summary class="step-title">{step.title}</summary>
      <div class="step-content">
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
  .step {
    margin-bottom: 0.25rem;
    width: 100%;
    overflow: hidden;
  }

  .step-title {
    font-family: var(--vtPrimaryFont);
    background-color: var(--vtDarkBlue);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: var(--vtWhite);
    padding: 0.5rem;
    cursor: pointer;
    user-select: none;
  }

  .step-title:hover {
    background-color: var(--vtYellow-80);
    color: black;
  }

  .step-content {
    padding: 0.5rem;
    background-color: var(--vtWhite);
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 0.25rem;
  }

  .step-content img {
    width: 100%;
    height: 100%;
  }
</style>
