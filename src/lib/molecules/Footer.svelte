<footer>
  <nav>
    <a href="/" class="footer-content">
      <img
        src="/images/visual-thinking-hbo-logo.svg"
        class="logo-footer"
        alt=""
      />
      <h2>Visual Thinking in het hbo</h2>
    </a>

    <div class="socials">
      <ul>
        <li>
          <a href="https://www.instagram.com/charley_muhren/">
            <img src="/images/instagram.svg" alt="Instagram" class="icon" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa"
          >
            <img src="/images/youtube.svg" alt="YouTube" class="icon" />
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charleymuhren/">
            <img src="/images/linkedin.svg" alt="LinkedIn" class="icon" />
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
    margin: 0 0.5rem;
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

  .icon {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 2px 0 0;
  }

  li:hover {
    transform: scale(1.1);
  }

  .logo-footer {
    padding-top: 1rem;
  }

  h2 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-weight: 600;
    font-size: 2rem;
    text-align: left;
    max-width: 8rem;
  }

  .footer-content {
    display: flex;
    gap: 2rem;
    padding-left: 5rem;
    margin-top: -1rem;
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

    .logo-footer {
      width: 2.5rem;
      margin-top: -1rem;
    }

    h2 {
      font-size: 1rem;
      text-align: left;
      max-width: 8rem;
    }

    .footer-content {
      display: flex;
      gap: 2rem;
      padding-left: 1rem;
      padding-top: 1rem;
    }
  }

  @media (min-width: 21rem) and (max-width: 38rem) {

    footer nav {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .logo-footer {
      width: 3.5rem;
      margin-top: -1rem;
    }

    h2 {
      font-size: 1.5rem;
      text-align: left;
    }

    .footer-content {
      display: flex;
      gap: 2rem;
      margin-top: -1rem;
      padding-top: 1rem;
    }
  }

  @media (min-width: 38rem) {
    footer nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    .footer-content {
      padding-left: 5rem;
    }

  }

  @media (min-width: 38rem) and (max-width: 50rem) {
    h2 {
      font-size: 1.5rem;
    }

    .footer-content {
      margin-left: -3rem;
      padding-left: 4rem;
    }

    .logo-footer {
      width: 3.5rem;
      margin-top: -0.8rem;
    }
    
    .socials {
      padding-right: -3rem;
    }
  }

  @media (min-width: 50rem) {
    .logo-footer {
      width: 4.8rem;
      margin-top: -0.8rem;
    }
  }

  @media (min-width: 50rem) and (max-width: 60rem){
    .footer-content {
      margin-left: -2rem;
    }
  }
</style>
