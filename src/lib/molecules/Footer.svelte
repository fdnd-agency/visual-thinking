<footer>
  <nav>
    <a href="/">
      <img
        src="/images/visual-thinking-hbo-logo-footer.svg"
        class="logo-footer"
        alt=""
      />
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
    padding: 2rem 0 2rem 1rem;
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

  .icon {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 2px 0 0;
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

    .logo-footer {
      height: 3rem;
    }
  }

  @media (min-width: 44rem) {

    footer nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }


    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (min-width: 38rem) and (max-width: 50rem) {    
    .socials {
      padding-right: -3rem;
    }
  }

  @media (min-width: 50rem) {
    footer nav {
      padding: 2rem 0 2rem 5rem;
    }
    .logo-footer {
      height: 5.7rem;
    }
  }

  @media (min-width: 50rem) and (max-width: 60rem){
  }
</style>
