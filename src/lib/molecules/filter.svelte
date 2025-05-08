<script>
  export let categories;
</script>

<fieldset>
  <legend>Filter</legend>
  {#each categories as category}
  <label for={category.slug}>  
    <input type="checkbox" id="filter" name="filter" />
    {category.title}
  </label>
  {/each}
</fieldset>

<style>
  fieldset label {
    display: flex;
    flex-direction: row;
  }
  fieldset label input[type="checkbox"] {
    display: none;
  }
</style>