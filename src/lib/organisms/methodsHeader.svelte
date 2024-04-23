<script>
  export let data;
  const method = data.methods[0]
</script>

<header>

  <h1>{method.title}</h1>

  <nav>
    <ul>
        <li>
          <a href="/tekenmethodes/{method.slug}">
            <h2>Beschrijving</h2>
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/stappenplan">
            <h2>Stappenplan</h2>
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/voorbeelden">
            <h2 class="bottom">Voorbeelden</h2>
          </a>
        </li>

        {#if method.pdf}
          <a href="{method.pdf.url}" download="{method.slug}.pdf" target="blank" class="button-pdf">Download</a>
        {/if}
      
    </ul>
  </nav>
</header>

<style>
  header {
    margin:0 -1rem 1rem;
    background-color: var(--vtGrey-10);
  }

  h1 {
    font-size: 1.7rem;
    padding-top: 1rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
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
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    padding-right: 10px;
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
  }

  li a[href^="/tekenmethodes/{method.slug}"] {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  h2 {
    color: var(--vtSec-DarkBlue);
    font-size: 20px;
    font-weight: 100;
  }

  .button-pdf {
	  color: white;
	  font-family: var(--vtPrimaryFont);
	  background-color: var(--vtDarkBlue);
    padding: 0.5em 0.4em ;
	  border-radius: 0.2em;
	  margin-left: 1em;
    margin-bottom: 0.5em;
	}
  
	:hover .button-pdf {
	  color: var(--vtDarkBlue);
	  background-color: rgb(188, 188, 188);
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

    nav ul {
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
