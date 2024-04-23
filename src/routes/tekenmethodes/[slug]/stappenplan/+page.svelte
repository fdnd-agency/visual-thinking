<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import MethodsHeader from "$lib/organisms/methodsHeader.svelte";

  export let data;

  // Variabele om de zichtbaarheid van stappenplan te regelen
  let toon = false;

  // Variabele voor de stappenplan knop
  let stappenplanButton;

  // Functie om stappenplan zichtbaarheid te toggelen
  function toonStappenplan() {
    toon = !toon;
  }

  // Uitvoeren bij het laden van de component
  function setup() {
    // Koppel stappenplanButton aan het DOM-element met id "stappenplanbutton"
    stappenplanButton = document.getElementById("stappenplanbutton");

    // Voeg klik eventlistener toe aan stappenplanButton
    stappenplanButton.addEventListener("click", toonStappenplan);
  }

  // Wordt uitgevoerd bij het sluiten van de component
  function teardown() {
    // Verwijder klik eventlistener om geheugenlekken te voorkomen
    stappenplanButton.removeEventListener("click", toonStappenplan);
  }
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  bgc="var(--vtYellow)"
/>

<MethodsHeader {data} />


<article class="grid">
  <div class="flex-s">
    <div class="tags-b">

      <img class="icon" src="/icon1.svg" alt="icon" />
      <div class="wrapper-methods">

      <img class="icon" src="/images/category.svg" alt="icon" />

      {#each data.methods as method}
        {#each method.categories as category}
          <h3 class="tag">
            {@html category.title}
          </h3>
        {/each}
      {/each}
    </div>
    </div>

    <div class="tags-b">
      <img class="icon" src="/images/materials.svg" alt="icon" />
      <h3 class="tag">
        {#each data.methods as method}
          {method.material}
        {/each}
      </h3>
    </div>

    <div class="tags-b">
      <img class="icon" src="/images/duration.svg" alt="icon" />
      <h3 class="tag">
        {#each data.methods as method}
          {method.duration}
        {/each}
      </h3>
    </div>

    <div class="tags-b">
      <img class="icon" src="/images/author.svg" alt="icon" />
      <h3 class="tag">Charley Muhren</h3>
    </div>
  </div>

  <section class="steps">
    {#each data.methods as method}
      {#each method.steps as step}
        <details class="accordion-item">
          <summary class="step-title">{step.title}</summary>
          <div class="accordion-content">
            <!-- {#each step.visual as visual} -->

            {#if step.visual[0]}
              <div class="step-visual">
                <img src={step.visual[0].url} alt="image_voorbeeld" />
              </div>
            {/if}
            <!-- {/each} -->

            {#if typeof step.description === "object"}
              <p class="step-description">{@html step.description.html}</p>
            {:else}
              <p>{step.description}</p>
            {/if}
          </div>
        </details>
      {/each}
    {/each}
  </section>
</article>

<style>

  .wrapper-methods {
    margin-left: 0em;
  }

  /* img binnen de steps */

  .step-visual img {
    width: 100%;
    height: 100%;
  }

  /* Grid -Article */

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
  }

  .grid,
  .steps {
    width: 100%;
  }

  .flex-s {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .tags-b {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .tag {
    flex-wrap: wrap;
  }

  /* tags styling */

  .tag {
    background-color: var(--vtYellow-80);
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 0.7rem;
    padding: 0.1rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    margin-left: 0.8rem;
    max-width: fit-content;
  }

  .icon {
    width: 50px;
    height: 55px;
  }

  /* Accordion styling */

  .accordion-item {
    margin-bottom: 5px;
    width: 100%;
    overflow: hidden;
  }

  .step-title {
    font-family: var(--vtPrimaryFont);
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }

  .step-title:hover {
    background-color: var(--vtYellow-80);
    color: black;
  }

  .accordion-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .step-description {
    margin: 0;
  }

  /* ----------------------------------------------- DESKTOP */

  @media (min-width: 74em) {

    /* Accordion  */
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 80%;
      margin: 0 auto;
    }

    .accordion-item {
      margin-bottom: 5px;
      width: 100%;
      overflow: hidden;
    }

    .accordion-content {
      padding: 10px;
      background-color: #fff;
    }

    .step-description {
      margin: 0;
    }

    .tag {
      font-size: 0.9rem;
    }
  }





</style>
