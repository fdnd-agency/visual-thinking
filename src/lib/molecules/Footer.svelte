<script>
  import { Icons } from "$lib/index.js";

  const iconSize = 26;
  const logoSize = 80;
</script>

<footer>
  <nav>
    <a href="/" class="footer-content">
      <Icons name="VisualThinkingLogo" width={logoSize} height={logoSize}/>
      <h1>Visual Thinking in het hbo</h1>
    </a>

    <div class="socials">
      <ul>
        <li>
          <a href="https://www.instagram.com/charley_muhren/">
            <Icons name="instagram" width={iconSize} height={iconSize}/>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa">
            <Icons name="youtube" width={iconSize} height={iconSize}/>
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charleymuhren/">
            <Icons name="linkedin" width={iconSize} height={iconSize}/>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
      <p>© Charley Muhren, 2024</p>
    </div>
  </nav>
</footer>

<style>
  footer nav {
    background-color: var(--vtGrey-10);
    font-family: var(--vtPrimaryFont);
    text-align: center;
    padding: 1rem 0 2rem 1rem;
  }

  div ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div li {
    text-align: center;
    list-style-type: none;
    transition: 0.25s;
    margin: 0 0.5rem;
  }

  li:hover {
    transform: scale(1.1);
  }

  a {
    width: fit-content;
  }

  div a {
    display: flex;
    text-decoration: none;
    color: var(--vtDarkBlue);
    align-items: center;
  }


  span {
    margin-left: 0.25rem;
    color: #555;
  }

  span, 
  div p {
    font-size: 0.7rem;
  }

  @media (max-width: 21rem) {

    footer nav {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    div span {
      display: none;
    }
  }

  @media (min-width: 21rem) and (max-width: 44rem) {
    footer nav {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (min-width: 44rem) {

    footer nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  @media (min-width: 38rem) and (max-width: 50rem) {    
    .socials {
      padding-right: -3rem;
    }
  }

  @media (min-width: 50rem) {
    footer nav {
      padding: 1rem 0 2rem 5rem;
    }
  }
</style>
