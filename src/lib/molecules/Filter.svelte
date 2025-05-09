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
    gap: 0.5rem;
  }

  fieldset label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
  }

  fieldset label input[type="checkbox"] {
    display: none;
  }

  fieldset label input[type="checkbox"]:checked + p {
    background-color: deeppink;
    color: white;
    border-radius: 1rem;
    padding: 0.5rem;
  }

  fieldset label p {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    border-radius: 1rem;
    transition: all 0.3s ease;
  }

  fieldset label:hover p {
    background-color: hotpink;
    color: white;
  }
</style>