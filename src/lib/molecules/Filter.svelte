<script>
  import { Icons } from '$lib/index.js';
  export let categories;
</script>

<fieldset>
  <legend>Filter</legend>
  {#each categories as category}
  <label for={category.slug}>
    <input type="checkbox" id={category.slug} name="filter" />
    <div>
      <span>{category.title}</span>
      <div class="close-button">
        <Icons name='closeButton' />
      </div>
    </div>
  </label>
  {/each}
</fieldset>

<style>
  fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  fieldset label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  fieldset label input[type="checkbox"] {
    display: none;
  }

  fieldset label input[type="checkbox"]:checked + div {
    color: white;

    & .close-button {
      display: flex;
        align-items: center;    
      }
  }

  fieldset label div {
    background-color: tomato;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: 1rem;
    padding: 1rem;
    height: 1em;

    &.close-button {
      padding: 0;
    }
  }

  .close-button {
    display: none;
    height: fit-content;
  }

  fieldset label:hover div {
    background-color: hotpink;
    color: white;
  }
</style>