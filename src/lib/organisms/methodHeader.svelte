<script>
  export let data;

  console.log(data);
  const method = data.method;
</script>

<header>

  <h1>{method.title}</h1>

  <nav>
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
        <li>
        {#if method.pdf}
          <a href="{method.pdf.url}" download="{method.slug}.pdf" target="blank" class="vt-standard-button">Download</a>
        {/if}
      </li>
      
    </ul>
  </nav>
</header>

<style>
  header {
    margin:0 -1rem 0rem;
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
    gap: 1.5rem;
  }


  a {
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: var(--vtSec-DarkBlue);
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

  .vt-standard-button {
	  color: white;
	  font-family: var(--vtPrimaryFont);
	  background-color: var(--vtDarkBlue);
    padding: 1em 0.5em;
	  border-radius: 2em;
	  margin-left: 1em;
	}
  
	.vt-standard-button:hover {
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
