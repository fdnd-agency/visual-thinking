<script>

  let { miniCourses } = $props();
</script>

<section>
  <h2 class="screenreader-only">Kies hier een minicursus</h2>
  <ul>
    {#if miniCourses && miniCourses.length > 0}
      {#each miniCourses as course}
        <li>
          <a href="/minicursussen/{course.slug}" class="course-card">
            {course.title}
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    padding: 2rem 0;
    margin: auto;
    max-width: var(--grid-max-width);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 14rem);
    grid-auto-rows: auto;
    gap: 2rem;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    width: 100%;
  }

  .course-card {
    display: block;
    background-color: var(--color-senary);
    border-bottom: 0.3rem solid transparent;
    color: var(--color-primary);
    padding: 2rem;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      border-color 0.2s ease;
  }

  .course-card:hover,
  .course-card:focus-visible {
    background-color: var(--color-septenary-40);
    border-bottom-color: var(--color-tertiary);
    color: var(--color-tertiary);
  
  }

  @media (max-width: 50rem) {
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
