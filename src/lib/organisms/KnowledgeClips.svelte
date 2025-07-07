<script>
  import { Breadcrumb, Icons } from "$lib/index.js";

  const iconSize = 50;
  let index = $state(0);

  let { clips } = $props();

  const nextButton = () => {
    index = index + 1;
  };

  const previousButton = () => {
    index = index - 1;
  };
</script>

<Breadcrumb titel="Kennisclips" backgroundColor="var(--color-quaternary)" />

<main>
  <h1 class="screenreader-only">Alle kennisclips</h1>
  <section class="clips-container">
    <button onclick={previousButton}>
      <Icons name="arrowLeft" width={iconSize} height={iconSize}/>
    </button>

    <iframe
      class="youtubelink"
      title="kennisclips"
      src={clips[index].youTubeLink}
    ></iframe>

    <button onclick={nextButton}>
      <Icons name="arrowRight" width={iconSize} height={iconSize}/>
    </button>
  </section>

  <section class="text-container">
    <h2>{clips[index].title}</h2>
    <p>{@html clips[index].content.html}</p>
  </section>
</main>

<style>

  /* Header styling */
  h2 {
    font-size: 3.157rem;
    font-family: var(--font-family-primary);
    color: var(--color-tertiary);
    text-align: center;
  }

  /* Kennisclip teksten */
  p {
    line-height: 1.5rem;
    font-family: var(--font-family-secondary);
    margin: 0 auto;
    max-width: 700px;
    text-transform: none;
    padding-bottom: 3rem;
  }

  /* clips */
  .clips-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.3rem 0;
    margin:0 -1rem;
    background-color: var(--color-septenary-40);
  }

  /* buttons */
  button {
    background-color: transparent;
    border: transparent;
    padding: 2rem;
  }
  
  /* responsive clips */
  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in;
  }

  /* desktop */
  @media screen and (min-width: 56rem) {
    .youtubelink {
      width: 44.2rem;
      height: 24.85rem;
    }
  }
</style>
