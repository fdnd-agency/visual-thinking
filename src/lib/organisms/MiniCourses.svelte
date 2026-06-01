<script>
  let { miniCourses } = $props();

  // Afbeeldingen koppelen aan slugs
  const imageMap = {
    'structuur-en-kleur': 'structuur-kleur.png',
    'mensen-tekenen': 'mensen_tekenen.png',
    'handlettering': 'handlettering.png',
    'basisvormen': 'basisvormen.png'
  };

  function getImageFilename(slug) {
    return imageMap[slug] ?? 'placeholder.png';
  }
</script>

<section>
  <h2 class="screenreader-only">Kies hier een minicursus</h2>
  <ul>
    {#if miniCourses && miniCourses.length > 0}
      {#each miniCourses as course}
        <li>
          <a href={`/minicursussen/${course.slug}`} class="course-card">
            <img
              src={`/images/${getImageFilename(course.slug)}`}
              alt={`Afbeelding voor minicursus ${course.title}`}
              class="course-image"
              loading="lazy"
              decoding="async"
            />
            <span class="course-title">{course.title}</span>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: center;
}

.course-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: var(--color-senary-20);
  color: var(--color-tertiary);
  text-decoration: none;
  font-weight: 700;
  width: 14rem;
  height: 14rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.25s ease;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  border-bottom: 0.3rem solid transparent;
}

.course-card:hover,
.course-card:focus-visible {
  background-color: var(--color-septenary-40);
  border-bottom-color: var(--color-senary);
  color: var(--color-tertiary);
}

.course-image {
  width: 100%;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.3rem;
}

.course-title {
  margin-top: 0.5rem;
  font-size: 1rem;
}

@media (max-width: 48rem) {
  ul {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
  }

  .course-card {
    width: 100%;
    height: auto;
  }

  .course-image {
    height: 10rem;
  }
}
</style>
