<script>
  import { Icons } from "$lib/index.js";
  const iconSize = 26;
  const logoSize = 80;

</script>
<footer>
  <section>
    
    <a href="/" class="footer-content">
      <Icons name="VisualThinkingLogo" width={logoSize} height={logoSize}/>
      <h1>Visual Thinking in het hbo</h1>
    </a>

    <div class="icons-footer">
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

  </section>
</footer>

<style>
  footer section {
    background-color: var(--color-septenary-40);
    font-family: var(--font-family-primary);
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
    color: var(--color-tertiary);
    align-items: center;
  }

  div p {
    font-size: 14px;
  }

  span {
    margin-left: 5px;
    font-size: 14px;
    color: var(--blockquote-color);
  }

  li:hover {
    transform: scale(1.1);
  }

  h1 {
    font-family: var(--font-family-primary);
    color: var(--color-tertiary);
    font-weight: 600;
    font-size: 2em;
    text-align: left;
    max-width: 8em;
  }

  .footer-content {
    display: flex;
    gap: 1em;
    padding-left: 5em;
    margin-top: -1em;
    align-items: center;
  }

  @media (max-width: 425px) {

    footer section {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    div span {
      display: none;
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

    footer section {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
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
    footer section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
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
    
    .icons-footer {
      padding-right: -3em;
    }
  }

  @media (min-width: 1000px) and (max-width: 1200px){
    .footer-content {
      margin-left: -2em;
    }
  }
</style>
