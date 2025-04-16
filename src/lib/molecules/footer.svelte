<script>
  import { Icons } from "$lib/index.js";
  const dimension = 'width="26" height="26"';

</script>
<footer>
  <nav>
    <a href="/" class="footer-content">
      <Icons name="VisualThinkingLogoFooter" {dimension}/>
      <h1>Visual Thinking in het hbo</h1>
    </a>

    <div class="icons-nav">
      <ul>
        <li>
          <a href="https://www.instagram.com/charley_muhren/">
            <Icons name="instagram" {dimension}/>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa">
            <Icons name="youtube" {dimension}/>
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charleymuhren/">
            <Icons name="linkedin" {dimension}/>
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
    margin: 0 10px;
  }

  div a {
    display: flex;
    text-decoration: none;
    color: var(--vtDarkBlue);
    align-items: center;
  }

  span {
    margin-left: 5px;
    font-size: 14px;
    color: #555;
  }

  div p {
    font-size: 14px;
  }

  .icon {
    width: 26px;
    height: 26px;
    margin: 0 2px 0 0;
  }

  li:hover {
    transform: scale(1.1);
  }

  .logo-footer {
    padding-top: 1em;
  }

  h1 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-weight: 600;
    font-size: 2em;
    text-align: left;
    max-width: 8em;
  }

  .footer-content {
    display: flex;
    gap: 2em;
    padding-left: 5em;
    margin-top: -1em;
  }

  @media (max-width: 425px) {

    footer nav {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    div span {
      display: none;
    }

    .logo-footer {
      width: 2.5em;
      margin-top: -1em;
    }

    h1 {
      font-size: 1em;
      text-align: left;
      max-width: 8em;
    }

    .footer-content {
      display: flex;
      gap: 2em;
      padding-left: 1em;
      padding-top: 1em;
    }
  }

  @media (min-width: 425px) and (max-width: 768px) {

    footer nav {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .logo-footer {
      width: 3.5em;
      margin-top: -1em;
    }

    h1 {
      font-size: 1.5em;
      text-align: left;
    }

    .footer-content {
      display: flex;
      gap: 2em;
      margin-top: -1em;
      padding-top: 1em;
    }
  }

  @media (min-width: 768px) {
    footer nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .icon {
      width: 30px;
      height: 30px;
    }

    .footer-content {
      padding-left: 5em;
    }

  }

  @media (min-width: 768px) and (max-width: 1000px) {
    h1 {
      font-size: 1.5em;
    }

    .footer-content {
      margin-left: -3em;
      padding-left: 4em;
    }

    .logo-footer {
      width: 3.5em;
      margin-top: -0.8em;
    }
    
    .icons-nav {
      padding-right: -3em;
    }
  }

  @media (min-width: 1000px) {
    .logo-footer {
      width: 4.8em;
      margin-top: -0.8em;
    }
  }

  @media (min-width: 1000px) and (max-width: 1200px){
    .footer-content {
      margin-left: -2em;
    }
  }
</style>
