<script>
  export let data;
  const method = data.methods[0];
</script>

<header>
  <h1>{method.title}</h1>
  <nav>
    <ul>
      <li>
        <a href="/tekenmethodes/{method.slug}">Beschrijving </a>
      </li>
      <li>
        <a href="/tekenmethodes/{method.slug}/stappenplan">Stappenplan </a>
      </li>
      <li>
        <a href="/tekenmethodes/{method.slug}/voorbeelden">Voorbeelden </a>
      </li>

      {#if method.pdf}
        <a
          href={method.pdf.url}
          download="{method.slug}.pdf"
          target="blank"
          class="vt-standard-button">Download PDF</a
        >
      {/if}
    </ul>
  </nav>
</header>

<style>
  header {
    margin: 0 -1rem;
    margin-top: -0.3rem;
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
    transition: transform 0.3s ease;
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

  .vt-standard-button {
    color: white;
    font-family: var(--vtPrimaryFont);
    background-color: var(--vtDarkBlue);
    padding: 0.5rem 0.5rem;
    border-radius: 2rem;
    margin-left: 1rem;
    font-size: 1rem;
  }

  :hover.vt-standard-button {
    color: var(--vtDarkBlue);
    background-color: rgb(188, 188, 188);
  }

  @media (min-width: 31rem) {
    h1 {
      padding-top: 2rem;
    }

    header {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 45rem) {
    h1 {
      font-size: 3.157rem;
      text-align: center;
      padding: 1rem 0;
    }
    ul {
      justify-content: center;
    }
  }

  @media (min-width: 74rem) {
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
