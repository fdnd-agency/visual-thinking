<script>

  let { categories } = $props();
  let form = $state();

  let width = "24";
  let height = "24";   
  let color = '#000';

</script>

<!--  bind:this={form} will create some kind of query selector :) -->
<form bind:this={form} action="/tekenmethodes" method="get">
  <legend>Filter</legend>
  <div>
    {#each categories as category}
    <!-- 
    value={category.slug} is important to loop through the hygraph data. 
    This makes it so that its visible and can be filtered
    -->
      <label for={category.slug} class='js-off'>
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

      </label>
      {/each}
    </div>
  <button type="submit" class="filter-button">toepassen</button>

</form>

<style>

  /* basic styling */

  form {
    max-width: var(--grid-max-width);
    margin: auto;
    align-items: start;
    display: grid;
    gap: 1rem;
  }

  form div {
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
  }

  form label {
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: .5rem;

    cursor: pointer;
  }

  form button {
    width: fit-content;
    padding: .5rem 1rem;
    font: inherit;
    border: .15rem solid var(--color-septenary);
    border-radius: .3rem;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  .js-on {
    border: .4em solid var(--color-quinary);
    border-radius: 3rem;
  }

  .js-off {
    padding: 0.5rem .8rem ;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    border-bottom: .4em solid var(--color-primary);

    .close-button {
        display: none;
    }

    &:hover {
      background-color: var(--color-septenary-40);
      border-bottom: .4em solid var(--color-quinary-80);
    }

    & input[type="checkbox"] {
      border: 1em solid var(--color-quinary);
      background-color: var(--color-quinary);
      width: .5rem;
      height: .5rem;

      &::before {
        border: .1rem solid var(--color-quinary);
        background-color: var(--color-primary);

      }
    }
  }

  .js-off:has(input:checked) {
    background-color: var(--color-septenary-40);
    border-bottom: .4em solid var(--color-quinary);
  }
</style>