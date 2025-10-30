<script>
  import { page } from "$app/state";
  import { Icons } from "$lib/index.js";

  const logoSize = 80;
  // Used for the active state for the menu links
  let activeRoute = $derived(page.route.id);
  //
</script>

<header>
  <nav>
    
    <ul>
      <li>
        <a href="/" class="logo">
          <Icons name="VisualThinkingLogo" width={logoSize} height={logoSize} />
        </a>
      </li>
      <li>
        <a href="/tekenmethodes" class:active={activeRoute == "/tekenmethodes"}
          >Tekenmethodes</a
        >
      </li>
      
      <li>
        <a href="/kennisclips" class:active={activeRoute == "/kennisclips"}
          >Kennisclips</a
        >
      </li>
      <li>
        <a href="/artikelen" class:active={activeRoute == "/artikelen"}
          >Artikelen</a
        >
      </li>
      <li>
        <a href="/minicursussen" class:active={activeRoute == "/minicursussen"}
          >Minicursussen</a
        >
      </li>
    </ul>
  </nav>
</header>

<style>
  a {
    --background: var(--color-quaternary);
    color: var(--color-tertiary);
    text-decoration: none;
    cursor: pointer;
    font-size: clamp(0.8rem, -1.5rem + 8vw, 1rem);
    padding: 0.25rem;
  }
  
  nav {
    --horizontal-spacing: 1rem;
    padding: 1rem 1rem 1rem 3.5rem;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 2rem;
      width: 3rem;
      height: 100%;

      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      left: auto;
      right: 0rem;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 50%
      );
    }

    @container (min-width: 65em) {
      padding: 0;

      &::before,
      &::after {
        display:none;
      }
    }

  }

  ul {
    list-style-type: none;
    display: flex;
    color: transparent;
    font-family: var(--font-family-primary);
    font-weight: 700;
    padding: 1rem;
    margin: 0;
    align-items: center;
    justify-content: space-around;
    gap: 2vw;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    ::-webkit-scrollbar { 
        display: none;  /* Older Safari and Chromium */
    }


    a.logo {
      --background: var(--color-tertiary);
    }

    a.logo:hover,
    a.logo:focus-visible {
      background: none;
      outline: none;
    }

    li:nth-child(1) {
      order: 3;
      position:absolute;
      top:rem;
      left:.25rem;
      scale:.75;
    }

    @container (min-width: 65em) {
      justify-content: center;
      gap: 4vw;

      li {
        min-width:8rem;
        text-align:center;
      }

      li:nth-child(1) {
        order: 3;
        position:relative;
        top:auto;
        left:auto;
        scale:1;
      }

      li:nth-child(2) {
        order: 1;
      }

      li:nth-child(3) {
        order: 2;
      }

      li:nth-child(4) {
        order: 4;
      }

      li:nth-child(5) {
        order: 5;
      }
    }
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
    --state-color: var(--color-quinary);
  }

  li:nth-child(3) a:hover,
  ul li:nth-child(3) a:focus-visible,
  ul li:nth-child(3) a.active {
    --state-color: var(--color-quaternary);
  }

  li:nth-child(4) a:hover,
  ul li:nth-child(4) a:focus-visible,
  ul li:nth-child(4) a.active {
    --state-color: var(--color-tertiary);
  }


  
</style>
