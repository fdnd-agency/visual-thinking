<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import MethodHeader from "$lib/organisms/methodHeader.svelte";
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    const carrousel = document.querySelector("#js-carrousel .carrousel");
    const prevButton = document.getElementById("button-prev");
    const nextButton = document.getElementById("button-next");

    const handleButtonClick = (scrollAmount) => {
      carrousel.scrollBy({ left: scrollAmount });
    };

    prevButton.addEventListener("click", () =>
      handleButtonClick(-1 * carrousel.offsetWidth - 15)
    );
    nextButton.addEventListener("click", () =>
      handleButtonClick(carrousel.offsetWidth + 15)
    );

    document.querySelector(".js-disable")?.classList.remove("js-disable");
  });
</script>

<Breadcrumb titel="Overzicht" url="/tekenmethodes" bgc="var(--vtYellow)" />
<MethodHeader {data} />

<section class="images-buttons">
  <div class="js-disable">
    <div class="scroll-btn">
      {#if data.methods[0].examples.length > 0}
        <div id="button-prev" class="carousel-btn prev-btn">
          <button class="icon-button">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              ><path
                d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
              /></svg
            >
          </button>
        </div>
        <div id="button-next" class="carousel-btn next-btn">
          <button class="icon-button">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              ><path
                d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
              /></svg
            >
          </button>
        </div>
      {/if}
    </div>
  </div>

  <div id="js-carrousel">
    <div class="carrousel" id="scrollbar">
      {#each data.methods as method}
        {#if method.examples.length > 0}
          {#each method.examples as example}
            <img
              class="carrousel-img"
              src={example.url}
              alt="Example Slide"
              loading="lazy"
            />
          {/each}
        {:else}
          <p class="carrousel-missing">Geen voorbeelden</p>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .js-disable {
    display: none;
  }

  /* Carousel */

  .carrousel {
    display: flex;
    align-items: center;
    max-width: 31em;
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 20px;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }


  .images-buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .carrousel-img {
    width: 100%;
    height: auto;
    max-height:20rem; 
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
  }

  .scroll-btn {
    display: -webkit-flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
  }

  .icon-button:hover {
    background-color: var(--vtYellow);
    transition: 0.2s;
  }

  .carousel-btn {
    border-radius: 23px;
    border: 1px solid var(--vtYellow);
    cursor: pointer;
  }

  .next-btn {
    margin-inline-start: 15px;
  }

  .icon-button {
    height: 40px;
    width: 60px;
    border-radius: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    border: none;
  }

  /* text als er geen voorbeelden zijn */
  .carrousel-missing {
    font-size: 2.5rem;
    margin-top: 4em;
    margin-bottom: 4em;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  /* Scrollbar */
  #scrollbar::-webkit-scrollbar {
    width: 10px;
    /* height: 7px; */
    background-color: var(--vtGrey-50);
  }

  #scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--vtYellow);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }

  /*------------------------------------------------ DESKTOP ---*/
  @media (min-width: 74em) {
    .carrousel {
      max-width: 38em;
      gap: 15px;
    }
  }

  /*----------------------------------------- MOBILE---*/
  @media (max-width: 31em) {
    .carrousel {
      max-width: 17em;
      gap: 15px;
    }

    /* .carrousel-img {
      width: 300px;
      height: auto;
    } */

    .carrousel-missing {
      font-size: 1.4rem;
      padding: 20px;
    }
  }
</style>
