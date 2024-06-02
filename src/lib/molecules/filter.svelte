<script>
  import { page } from "$app/stores";

  export let data;

  let filter = $page.url.searchParams.getAll("categorie") || [];
  let isLoading = false;

  function applyFilter() {
    return function (event) {
      event.preventDefault();
      isLoading = true; // Start loading animation
      const formData = new FormData(event.target);
      const categorie = formData.getAll("categorie");
      const url = new URL(window.location);
      url.searchParams.delete("categorie");
      categorie.forEach((slug) => url.searchParams.append("categorie", slug));

      setTimeout(() => {
        window.location = url;
      }, 1000);
    };
  }
</script>

<section>
  <h2 id="methodes">Filter op categorie</h2>

  <form method="GET" action="/tekenmethodes#methodes" on:submit={applyFilter()}>
    {#each data.categories as category}
      <label for={category.slug}>
        <input
          type="checkbox"
          id={category.slug}
          value={category.slug}
          checked={filter.includes(category.slug)}
          name="categorie"
          tabindex="0"
        />
        {category.title}
      </label>
    {/each}
    {#if isLoading}
      <div class="loading-spinner"></div>
    {:else}
      <button type="submit"> Pas filters toe </button>
    {/if}
  </form>
</section>

<style>
  h2 {
    font-size: 1em;
  }

  #methodes {
    padding: 20px;
    background-color: var(--vtGrey-5);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  section form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }

  section input[type="checkbox"] {
    margin-right: 8px;
  }

  section button {
    background-color: var(--vtYellow);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }

  section button:hover {
    background-color: var(--vtYellow-80);
  }

  .loading-spinner {
    border: 4px solid var(--vtGrey-50);
    border-top: 4px solid var(--vtYellow);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
