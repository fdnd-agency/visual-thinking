<script>
  import { page } from '$app/stores';
	import { goto } from '$app/navigation';
  import { onMount } from "svelte";
  
  let { categories } = $props();
  let form = $state();

  let width = "16";
  let height = "16";
  let color = "#000";

  let javascript = $state({ enabled: false });

  onMount(() => {
    javascript.enabled = true;
  });
</script>

<form
  bind:this={form}
  action="/tekenmethodes"
  method="get"
  class:js-on={javascript.enabled}
  data-sveltekit-preserve-scroll 
  data-sveltekit-keepfocus
>
  <fieldset>
    <details>
      <summary>
        <legend>Filter tekenmethodes</legend>
      </summary>
    
      {#each categories as category}
        <div>
          <input
            type="checkbox"
            id={category.slug}
            name="filter"
            value={category.slug}
            onchange={() => {
              form.requestSubmit();
            }}
          />

          <label for={category.slug}>
            <span>{category.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              {width}
              {height}
              viewBox="0 0 384 512"
              class="close-button"
            >
              <path
                fill={color}
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </label>

          
        </div>
      {/each}
    </details>
  </fieldset>
  <button type="submit" class="filter-button">toepassen</button>
</form>

<style>
  form {
    max-width: var(--grid-max-width);
    margin: 0 auto -2rem;
    align-items: start;
    display: grid;
    gap: 1rem;
    

    & .close-button {
      display: none;
    }

    @container (min-width:35rem) {
      position:absolute;
      top:-1rem;
      right:-1rem;
    }
  }

  form fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    border-style: none;
    border: none;
    border-image: none;
    padding:0;

    @container (min-width:35rem) {
      padding-block: 1rem;
      padding-inline: 0.75em;
    }
  }

  form fieldset div {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin:0 -1rem;
    padding: 0.5rem 1rem;

    cursor: pointer;
    border-bottom: 0.4em solid var(--color-primary);
    transition: all 200ms 100ms ease-in-out;

    border-radius: 0;

    .close-button {
      display: none;
    }

    &:hover {
      background-color: var(--color-septenary-40);
      border-bottom: 0.4em solid var(--color-quinary-80);
    }

    & input[type="checkbox"] {
      border: 1em solid var(--color-quinary);
      background-color: var(--color-quinary);
      width: 0.8rem;
      height: 0.8rem;
      cursor: pointer;
      height:1px;
      width:1px;
      visibility: hidden;

      &::before {
        border: 0.1rem solid var(--color-quinary);
        background-color: var(--color-primary);
      }
    }
  }

  form fieldset div:has(input:checked) {
    background-color: transparent;
    border-bottom-color: #fff;
  }

  form button {
    width: fit-content;
    padding: 0.3rem;
    font: inherit;
    border: 0.15rem solid var(--color-septenary);
    border-radius: 0.3rem;
    transition: all 0.2s ease-in-out;
    margin-left: auto;
  }

  .js-on {
    & fieldset {
      flex-direction: row;
      gap: 1rem;
    }

    & button {
      display: none;
    }
    & div {
      /* padding: 0.5rem 0.8rem 0.5rem 2rem; */

      &:hover {
        background-color: none;
        border-color: var(--color-quinary);
      }
    }

    & label {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items:center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .close-button {
      display: block;
      visibility: hidden;
    }

    & input[type="checkbox"] {
      margin: 0;

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

  legend {
    position: relative;
  }

  details {
    padding:1rem;
    width:calc(100vw - 2rem);

    @container (min-width:35rem){
      width:16rem;
    }
  }

  details[open] {
    border: 1px solid;
    background:#fff
  }

  details summary {
    list-style: none;
    position: relative;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  details summary legend::before {
    content: " "; /* closed icon */
    background: url("/images/caret-down.svg") no-repeat center / contain;
    position: absolute;
    right: -.35rem;
    top: .25rem;
    height:1.5rem;
    width:1.5rem;
    transform-origin: center center;
    transition: transform .2s;
  }

  details[open] legend::before {
    transform: rotate(180deg); /* rotate when open */
  }
</style>
