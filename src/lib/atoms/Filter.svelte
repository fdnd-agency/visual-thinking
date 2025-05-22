<script>
  import { Icons } from '$lib/index.js';
  let { categories } = $props();

 let form = $state();
</script>

<!--  bind:this={form} will create some kind of query selector :) -->
<form bind:this={form} action="/tekenmethodes" method="get">
  <legend>Filter</legend>
  {#each categories as category}
  <label for={category.slug}>
      {category.title}
      <Icons name=closeButton />
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
  <button type="submit" class="filter-button">toepassen</button>
</form>

<style>

  form label {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 1rem;

    border: .4em solid var(--color-quinary);
    border-radius: 3rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-quinary);
    background: var(--color-quinary);
    margin: 0;
}

input[type="checkbox"]:checked {
    background: var(--color-quinary);
}

</style>