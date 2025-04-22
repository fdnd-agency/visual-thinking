<script>
  import { Breadcrumb, Icons } from "$lib/index.js";
  const iconSize = 50;

  let index = 0;
  export let data;
  const nextButton = () => {
    index = index + 1;
  };
  const previousButton = () => {
    index = index - 1;
  };

</script>

<Breadcrumb titel="Kennisclips" bgc="var(--vtSec-LightBlue)" />
<section>
  <h1 class="sr-only">Alle kennisclips</h1>
  <div class="clips-container">
    <button on:click={previousButton} aria-label="Vorige Video">
      <Icons name="arrowRight" width={iconSize} height={iconSize}/>
    </button>

    <iframe
      class="youtubelink"
      title="kennisclips"
      src={data.categories[index].youTubeLink}>
    </iframe>

    <button on:click={nextButton} aria-label="Volgende Video">
      <Icons name="arrowLeft" width={iconSize} height={iconSize}/>
    </button>
  </div>

  <div class="text-container">
    <h2>{data.categories[index].title}</h2>
    <p>{@html data.categories[index].content.html}</p>
  </div>
</section>

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
    padding-bottom: 3em;
  }

  /* clips */
  .clips-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.3em 0;
    margin:0 -1rem;
    background-color: var(--color-septenary-10);
  }

  /* buttons */
  button {
    background-color: transparent;
    border: transparent;
    padding: 2em;
    cursor: pointer;
  }

  /* responsive clips */
  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in;
  }

  /* desktop */
  @media screen and (min-width: 1120px) {
    .youtubelink {
      width: 884px;
      height: 497px;
    }
  }
</style>
