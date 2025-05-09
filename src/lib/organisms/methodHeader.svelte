<script>
  export let title;
  export let slug;
  export let pdf;
</script>

<header>
  <h1>{title}</h1>
  <nav>
    <ul>
      <li>
        <a href="/tekenmethodes/{slug}">Beschrijving </a>
      </li>
      <li>
        <a href="/tekenmethodes/{slug}/stappenplan">Stappenplan </a>
      </li>
      <li>
        <a href="/tekenmethodes/{slug}/voorbeelden">Voorbeelden </a>
      </li>
    </ul>
    {#if pdf}
    <a
      href={pdf.url}
      download="{slug}.pdf"
      target="blank"
      class="vt-standard-button">
      Download PDF
    </a>
  {/if}
  </nav>

</header>

<style>
  header {
    margin: 0 -1rem;
    margin-top: -0.3rem;
    background-color: var(--color-septenary-40);
  }

  h1 {
    font-size: 1.7rem;
    padding-top: 1rem;
    font-family: var(--font-family-primary);
    color: var(--color-tertiary);
    margin: 0 1rem;
  }

  ul {
    justify-content: flex-start;
    overflow-y: hidden;
    padding: 0;
    margin: 0 1rem;
    gap: 2rem;
  }

  ul li a {
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: var(--color-tertiary-80);
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ul {
    display: flex;
    list-style: none;
    align-items: center;
    align-self: center;
  }

  nav li {
    text-transform: uppercase;
    font-family: var(--font-family-primary);
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

  @media (min-width: 80rem) {
    header {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    nav {
      margin-top: 0.75rem;
    }

    nav ul {
      display: flex;
      list-style: none;
      justify-content: center;
    }

    h1 {
      margin-top: auto;
      text-align: start;
      max-width: 40rem;
      font-size: 3.157rem;
    }
  }
</style>