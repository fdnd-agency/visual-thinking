<script>
  import { page } from "$app/stores";

  let { categories } = $props();

  // Read all categorie query parameters from the URL and store them in an array
  let filter = $page.url.searchParams.getAll("categorie") || [];
  let isLoading = $state(false);
  

  function applyFilter() {
    return function (event) {
      event.preventDefault();
      isLoading = true; // Start loading animation
      const formData = new FormData(event.target);
      const categorie = formData.getAll("categorie"); // Get all checked categories
      const url = new URL(window.location);
      url.searchParams.delete("categorie"); // Remove all categorie query parameters from previous URL
      categorie.forEach((slug) => url.searchParams.append("categorie", slug)); // Add all checked categories to create new URL

      // Redirect to new URL, giving the loading spinner time to show
      setTimeout(() => {
        window.location = url;
      }, 1000);
    };
  }
</script>

<section>
  <h2>Filter op categorie</h2>

  <form method="GET" action="/tekenmethodes#methodes" onsubmit={applyFilter()}>
    {#each categories as category}
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
  section {
    max-width: var(--grid-max-width);
    margin: auto;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1rem;
    padding: 1rem;
    background-color: var(--color-septenary-40);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  section form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;
    padding: 0.3rem;
    border-bottom: 0.3rem solid transparent;
  }

  label:hover, 
  label:focus-visible, 
  label:active {
    background: var(--color-septenary-40);
    border-bottom: 0.3rem solid var(--color-quinary);
    transition: 0.05s;
  }

  section input[type="checkbox"] {
    margin-right: 0.4rem;
  }

  section button {
    background-color: var(--color-quinary);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  section button:hover {
    background-color: var(--color-quinary-80);
  }

  .loading-spinner {
    border: 4px solid var(--color-septenary-40);
    border-top: 4px solid var(--color-quinary);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
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
