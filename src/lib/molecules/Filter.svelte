<script>
  import { Icons } from '$lib/index.js';
  export let categories;
</script>

<fieldset>
  <legend>Filter</legend>
  {#each categories as category}
  <label for={category.slug}>
    <input type="checkbox" id={category.slug} name="filter" />
    <p>{category.title}</p>
    <Icons name='closeButton' />
  </label>
  {/each}
</fieldset>

<style>

  fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .5rem;
  }
  fieldset label {
    display: flex;
    flex-direction: row;
    background-color: magenta;
    padding: .5rem;
    border-radius: 1rem;
  }
  fieldset label input[type="checkbox"] {
    display: none;
  }
  
  fieldset label input[type="checkbox"]:checked {
    box-shadow: inset 2px 2px 3px rgb(0, 0, 0);
    color: black;
}
</style>