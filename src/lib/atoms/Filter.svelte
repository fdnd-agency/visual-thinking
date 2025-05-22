<script>
  import { Icons } from '$lib/index.js';
  export let categories;

 let form;
</script>

<!--  bind:this={form} will create some kind of query selector :) -->
<form bind:this={form} action="/tekenmethodes" method="get">
  <legend>Filter</legend>
  {#each categories as category}
  <label for={category.slug}>
      {category.title}
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
    on:change={() => {
      form.requestSubmit();
    }}
    />
  {/each}
  <button type="submit" class="filter-button">toepassen</button>
</form>

<style>
  input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
}

</style>