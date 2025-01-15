<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";

  let index = 0;

  export let data;

  const nextButton = () => {
    index = index + 1;
  };

  const previousButton = () => {
    index = index - 1;
  };
</script>

<Breadcrumb titel="Kennisclips" backgroundColor="var(--vtSec-LightBlue)" />

<main>
  <h1 class="screenreader-only">Alle kennisclips</h1>
  <section class="clips-container">
    <button on:click={previousButton}>
      <img
        class="left-arrow"
        src="./images/arrows.svg"
        alt="Naar vorige video"
      />
    </button>

    <iframe
      class="youtubelink"
      title="kennisclips"
      src={data.categories[index].youTubeLink}
    ></iframe>

    <button on:click={nextButton}>
      <img
        class="right-arrow"
        src="./images/arrows.svg"
        alt="Naar volgende video"
      />
    </button>
  </section>

  <section class="text-container">
    <h2>{data.categories[index].title}</h2>
    <p>{@html data.categories[index].content.html}</p>
  </section>
</main>

<style>

  /* Header styling */
  h2 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    text-align: center;
  }

  /* Kennisclip teksten */
  p {
    line-height: 1.5rem;
    font-family: var(--vtSecondaryFont);
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
    background-color: var(--vtGrey-10);
  }

  /* buttons */
  button {
    background-color: transparent;
    border: transparent;
    padding: 2em;
  }

  .right-arrow {
    cursor: pointer;
    border: none;
  }

  .left-arrow {
    cursor: pointer;
    transform: rotate(180deg);
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
