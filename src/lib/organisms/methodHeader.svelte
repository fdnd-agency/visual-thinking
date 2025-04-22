<script>
  export let data;
  const method = data.methods[0]
  console.log(data);
</script>

<header>
  <h1>{method.title}</h1>
  <section>
    <ul>
        <li>
          <a href="/tekenmethodes/{method.slug}">Beschrijving
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/stappenplan">Stappenplan
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/voorbeelden">Voorbeelden
          </a>
        </li> 

        {#if method.pdf}
        <a href="{method.pdf.url}" download="{method.slug}.pdf" target="blank" class="vt-standard-button">Download PDF</a>
        {/if}
    </ul>
  </section>
</header>

<style>
  header {
    margin:0 -1rem;
    margin-top: -0.3em;
    background-color: var(--color-septenary-10);
  }

  h1 {
    font-size: 1.7rem;
    padding-top: 1rem;
    font-family: var(--font-family-primary);
    color: var(--color-tertiary);
    margin: 0 1rem;
  }

  ul {
    transform: translateY(0);
    justify-content: flex-start;
    overflow-y: hidden;
    transition: transform 0.3s ease;
    padding:0;
    margin: 0 1rem;
    gap:1.5rem;
  }


  a {
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: var(--color-tertiary-90);
  }

  section ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  section li {
    padding-right: 10px;
    text-transform: uppercase;
    font-family: var(--font-family-primary);
  }

  li a[href^="/tekenmethodes/{method.slug}"] {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  .vt-standard-button {
	  color: white;
	  font-family: var(--font-family-primary);
	  background-color: var(--color-tertiary);
    padding: 0.5em 0.5em;
	  border-radius: 2em;
	  margin-left: 1em;
    font-size: 1em;
	}
  
	:hover.vt-standard-button {
	  color: var(--color-tertiary);
	  background-color: hsl(0, 0%, 74%);
	}
  
  @media (min-width: 31em) {
    h1 {
      padding-top: 2rem;
    }

    ul {
      transform: translateY(0);
    }

    header {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 45em) {
    h1 {
      font-size: 3.157rem;
      text-align: center;
      padding: 1rem 0;
    }
    ul {
      justify-content: center;
    }

  }

  @media (min-width: 74em) {
    header {
      display:flex;
      flex-direction: row;
      align-items: center;
    }

    section ul {
      display: flex;
      list-style: none;
      justify-content: center;
      margin-top: 0.75rem;
    }

    h1 {
      margin-top: auto;
      text-align: start;
      max-width: 800px;
      font-size: 3.157rem;
    }
  }
</style>
