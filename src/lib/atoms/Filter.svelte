<script>
  import { onMount } from 'svelte';
  let { categories } = $props();
  let form = $state();

  let width = "24";
  let height = "24";   
  let color = '#000';

  let javascript = $state({ enabled: false });

  onMount(() => {
    javascript.enabled = true;
  });
</script>

<form bind:this={form} 
  action="/tekenmethodes" 
  method="get"
  class:js-on={javascript.enabled}
  >


  <fieldset>
      <legend>Filter op categorie</legend>
    {#each categories as category}
      <div>
        <label for={category.slug} >
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

        <input 
            type="checkbox"
            id={category.slug}
            name="filter"
            value={category.slug}
            onchange={() => {
              form.requestSubmit();
            }}
          />
      </div>
      {/each}
    </fieldset>
    <button type="submit" class="filter-button">toepassen</button>

</form>

<style>
  :global(html) {
    scrollbar-gutter: stable;
    overflow-y: scroll;
  }

  form {
    max-width: var(--grid-max-width);
    margin: auto;
    align-items: start;
    display: grid;
    gap: 1rem;

    & .close-button {
      display: none
    }
  }

  form fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .5rem;

    border-style: none;
    border: none;
    border-image: none;
    padding-block: 1rem;
    padding-inline: 0.75em;
  }

  form fieldset div {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    gap: .5rem;
    width: fit-content;
    padding: 0.5rem 0.8rem;

    cursor: pointer;
    border-bottom: .4em solid var(--color-primary);
    transition: all 200ms 100ms ease-in-out;

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
      width: .8rem;
      height: .8rem;

      &::before {
        border: .1rem solid var(--color-quinary);
        background-color: var(--color-primary);
      }
    }
  } 
  
  form fieldset div:has(input:checked) {
    background-color: var(--color-septenary-40);
    border-bottom: .4em solid var(--color-quinary);
  }

  form button {
    width: fit-content;
    padding: .3rem;
    font: inherit;
    border: .15rem solid var(--color-septenary);
    border-radius: .3rem;
    transition: all .2s ease-in-out;
    margin-left: auto;

    &:hover {
      transform: scale(1.1);
    }
  }

  .js-on {
    & fieldset {
      flex-direction: row;
      gap: 1rem;
      justify-content: center;
    }

    & button {
      display: none;
    }
    & div {
      border: .3em solid var(--color-quinary);
      border-radius: 3rem;
      padding: 0.5rem .8rem 0.5rem 2rem;

        &:hover {
        background-color: none;
        border-color: var(--color-quinary);
        transform: scale(1.05);
      }
    }

    & label {
      display: flex;
      flex-direction: row;
      width: fit-content;
      gap: .5rem;
    }

    .close-button {
      display: block;
      visibility: hidden;
    }

    & input[type="checkbox"] {
      appearance: none;
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
      margin: 0;
      pointer-events: none;
    }
  }

    .js-on div:has(input:checked) {
    background-color: var(--color-quinary);

    .close-button {
      visibility: visible;
    }
  }

  .js-on div:has(input[type="checkbox"]:focus-visible) {
  outline: var(--focus-outline);
  outline-offset: var(--focus-offset);
  border-radius: 1rem;
}

</style>