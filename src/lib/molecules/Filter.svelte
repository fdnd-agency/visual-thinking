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
        <Icons name='closeButton' color='#FFF'/>
      </div>
    </div>
  </label>
  {/each}
</fieldset>

<style>
  fieldset {
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
    background-color: tomato;


    & .close-button {
      display: flex;
      align-items: center;   
      }
  }

  fieldset label div {
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

  fieldset label:nth-of-type(1) div {
    border-color: var(--button-color-1);
    background-color: var(--button-color-1);

  }

  fieldset label:nth-of-type(2) div {
    border-color: var(--button-color-2);
    background-color: var(--button-color-2);

  }

  fieldset label:nth-of-type(3) div {
    border-color: var(--button-color-3);
    background-color: var(--button-color-3);
  }

  fieldset label:nth-of-type(4) div {
    border-color: var(--button-color-4);
    background-color: var(--button-color-4);
  }

  fieldset label:nth-of-type(5) div {
    border-color: var(--button-color-5);
    background-color: var(--button-color-5);
  }

  fieldset label:nth-of-type(6) div {
    border-color: var(--button-color-6);
    background-color: var(--button-color-6);
  }

  fieldset label:nth-of-type(7) div {
    border-color: var(--button-color-7);
    background-color: var(--button-color-7);
  }

  fieldset label:nth-of-type(8) div {
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