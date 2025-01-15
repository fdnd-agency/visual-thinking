<script>
  export let data;
  const method = data.methods[0];
</script>

<header>
  <h1>{method.title}</h1>

  <nav>
    <ul>
      <li>
        <a href="/tekenmethodes/{method.slug}">Beschrijving</a>
      </li>
      <li>
        <a href="/tekenmethodes/{method.slug}/stappenplan">Stappenplan</a>
      </li>
      <li>
        <a href="/tekenmethodes/{method.slug}/voorbeelden">Voorbeelden</a>
      </li>

    </ul>
  </nav>
  {#if method.pdf}
    <a
      href={method.pdf.url}
      download="{method.slug}.pdf"
      target="blank"
      class="vt-standard-button">Download PDF</a
    >
  {/if}
</header>

<style>
  header {
    margin: 0 -1rem;
    margin-top: -0.3em;
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
    justify-content: flex-start;
    overflow-y: hidden;
    padding: 0;
    margin: 0 1rem;
    gap: 2rem;
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
    align-items: center;
  }

  nav li {
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
  }

  li a[href^="/tekenmethodes/{method.slug}"] {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  @media (min-width: 31em) {
    h1 {
      padding-top: 2rem;
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
      display: flex;
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
