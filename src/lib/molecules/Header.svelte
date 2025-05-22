<script>
  import { page } from "$app/stores";
  import { Icons } from "$lib/index.js";

  const logoSize = 80;
  // Used for the active state for the menu links
  let activeRoute = $derived($page.route.id);
   // 
</script>

<header>
  <a href="/" class="logo">
    <Icons name="VisualThinkingLogo" width={logoSize} height={logoSize}/>
  </a>

  <nav>
    <ul>
      <li><a href="/tekenmethodes" class:active={activeRoute == "/tekenmethodes"}>Tekenmethodes</a></li>
      <li><a href="/over" class:active={activeRoute == "/over"}>Over</a></li>
      <li><a href="/minicursussen" class:active={activeRoute == "/minicursussen"}>Minicursussen</a></li>
      <li><a href="/kennisclips" class:active={activeRoute == "/kennisclips"}>Kennisclips</a></li>
      <li><a href="/artikelen" class:active={activeRoute == "/artikelen"}>Artikelen</a></li>
      <li><a href="/tekenruimte" class:active={activeRoute == "/tekenruimte"}>Tekenruimte</a></li>
    </ul>
  </nav>
</header>


<style>
  a {
    --background: var(--color-quinary);
    color: var(--color-tertiary);
    text-decoration: none;
    cursor: pointer;
    font-size: clamp(.8rem, -1.5rem + 8vw, 1rem);
    padding: .25rem;
  }

  a.logo {
    --background: var(--color-tertiary);
    padding: 1rem .25rem 0;
    margin-top: -.75rem;
    position:absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    transition: .25s;
  }

  a.logo:hover,
  a.logo:focus-visible {
    background: none;
    outline: none;
    scale: 1.1
  }

  nav {
    --horizontal-spacing: 1rem;
    padding: 1rem 1rem 1rem 3.5rem;
    position: relative;
    overflow: hidden;
  }

  nav::before,
  nav::after {
    content: "";
    position: absolute;
    top: 0;
    left: 3.5rem;
    width: 3rem;
    height: 100%;

    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
  }

  nav::after {
    left: auto;
    right: -1rem;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  }

  ul {
    list-style-type: none;
    display: flex;
    color: transparent;
    font-family: var(--font-family-primary);
    font-weight: 700;
    padding: 1rem;
    margin: 0 1rem;
    align-items: center;
    gap: 4vw;
    overflow-x: auto;
    width: 100%;
  }

  ul li a:hover,
  ul li a:focus-visible,
  ul li a.active {
    --state-color: var(--color-tertiary-80);
    text-decoration: underline;
    text-decoration-color: var(--state-color);
    text-underline-offset: 0.25rem;
    outline: none;
  }

  li:nth-child(1) a:hover,
  ul li:nth-child(1) a:focus-visible,
  ul li:nth-child(1) a.active {
    --state-color: var(--color-quinary);
  }

  li:nth-child(2) a:hover,
  ul li:nth-child(2) a:focus-visible,
  ul li:nth-child(2) a.active {
    --state-color: var(--color-tertiary-80);
  }

  li:nth-child(3) a:hover,
  ul li:nth-child(3) a:focus-visible,
  ul li:nth-child(3) a.active {
    --state-color: var(--color-senary);
  }

  li:nth-child(4) a:hover,
  ul li:nth-child(4) a:focus-visible,
  ul li:nth-child(4) a.active {
    --state-color: var(--color-quaternary);
  }

  li:nth-child(5) a:hover,
  ul li:nth-child(5) a:focus-visible,
  ul li:nth-child(5) a.active {
    --state-color: var(--color-tertiary);
  }

  li:nth-child(6) a:hover,
  ul li:nth-child(6) a:focus-visible,
  ul li:nth-child(6) a.active {
    --state-color: var(--color-septenary);
  }

  @media (min-width: 80rem) {
    a.logo {
      position: absolute;
      z-index: 1;
      left: calc(50% - 2rem);
      top: .5rem;
    }

    nav {
      --horizontal-spacing: 10vw;
      padding-left: 1rem;
    }

    nav::before,
    nav::after {
      display: none;
    }

    ul {
      --spacing-logo: 6rem;
      justify-content: center;
    }

    li:nth-of-type(3) {
      margin-right: var(--spacing-logo);
    }

    li:nth-of-type(4) {
      margin-left: var(--spacing-logo);
    }
  }
</style>
