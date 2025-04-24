<script>
  export let data;
</script>

<div class="steps">
    <!-- Loop through each method -->
    {#each data.methods as method, methodIndex}
      <!-- Loop through each step in the method -->
      {#each method.steps as step, stepIndex}
        <details class="accordion-item" open={methodIndex === 0 && stepIndex === 0}>
          <summary class="step-title">{step.title}</summary>
          <div class="accordion-content">
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
    {/each}
</div>
  
  
<style>
  .accordion-item {
    margin-bottom: 5px;
    width: 100%;
    overflow: hidden;
  }

  .step-title {
    font-family: var(--vtPrimaryFont);
    background-color: var(--vtDarkBlue);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);;
    color: var(--vtWhite);
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }

  .step-title:hover {
    background-color: var(--vtYellow-80);
    color: black;
  }

  .accordion-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 5px;
  }

  .accordion-content img {
    width: 100%;
    height: 100%;
  }
</style>
