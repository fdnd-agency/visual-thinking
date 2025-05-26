<script>

  let { categories } = $props();
  let form = $state();

  let width = "24";
  let height = "24";   
  let color = '#000';

  // checks if javascript is enabled
  let javascript = $state({ enabled: false });
</script>

<!--  bind:this={form} will create some kind of query selector :) -->
<form bind:this={form} action="/tekenmethodes" method="get">
  <legend>Filter</legend>
  <div>
    {#each categories as category}
      <label for={category.slug}>
          {category.title}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 384 512"
            class = "close-button"
          >

          <path 
            fill={color} 
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />

        </svg>
      </label>

    <!-- 
      value={category.slug} is important to loop through the hygraph data. 
    This makes it so that its visible and can be filtered
    -->

    <!-- 
        on:change={() => is a syntax that is being used as a event listener in svelte. 
    -->
        <input 
        type="checkbox"
        id={category.slug}
        name="filter"
        value={category.slug}
        onchange={() => {
          form.requestSubmit();
        }}
        />
      {/each}
    </div>
  <button type="submit" class="filter-button">toepassen</button>

</form>

<style>

  form {
    max-width: var(--grid-max-width);
    margin: auto;
    align-items: start;
    display: grid;
  }

  form div {
    display: flex;
    flex-direction: row;
    gap: .5rem;
    flex-wrap: wrap;
  }
  form label {
    padding: 0.5rem .8rem 0.5rem 2rem;
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: .5rem;

    border: .4em solid var(--color-quinary);
    border-radius: 3rem;
    cursor: pointer;

    .close-button {
      visibility: hidden;
    }
  }


  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-quinary);
    background: var(--color-quinary);
    margin: 0;
  }

  input[type="checkbox"]:checked + label {
    background: var(--color-quinary);

    .close-button {
      visibility: visible;
    }
  }
</style>