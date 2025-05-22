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
  form {
  --button-color-1:#0a7c52;
  --button-color-2:#314695;
  --button-color-3:#2b5e70;
  --button-color-4:#356654;
  --button-color-5:#8B3C13;
  --button-color-6:#AE1818;
  --button-color-7:#b5591f;
  --button-color-8:#805141;


    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  form label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  form label input[type="checkbox"] {
    display: none;
  }

  form label input[type="checkbox"]:checked + div {
    color: white;
    background-color: tomato;


    & .close-button {
      display: flex;
      align-items: center;   
      }
  }

  form label div {
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 1rem;
    height: 1em;
    border: .2rem solid black;
    border-radius: 1rem;
  }

  form label:nth-of-type(1) div {
    border-color: var(--button-color-1);
    background-color: var(--button-color-1);

  }

  form label:nth-of-type(2) div {
    border-color: var(--button-color-2);
    background-color: var(--button-color-2);

  }

  form label:nth-of-type(3) div {
    border-color: var(--button-color-3);
    background-color: var(--button-color-3);
  }

  form label:nth-of-type(4) div {
    border-color: var(--button-color-4);
    background-color: var(--button-color-4);
  }

  form label:nth-of-type(5) div {
    border-color: var(--button-color-5);
    background-color: var(--button-color-5);
  }

  form label:nth-of-type(6) div {
    border-color: var(--button-color-6);
    background-color: var(--button-color-6);
  }

  form label:nth-of-type(7) div {
    border-color: var(--button-color-7);
    background-color: var(--button-color-7);
  }

  form label:nth-of-type(8) div {
    border-color: var(--button-color-8);
    background-color: var(--button-color-8);
  }

  .close-button {
    display: hidden;
    height: fit-content;
    padding: 0;
    background-color: none;
    border: none;
  }

</style>