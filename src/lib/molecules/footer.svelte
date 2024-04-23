<footer>
  <nav>
    <a href="/">
      <img
        src="/images/visual-thinking-hbo-logo-footer.svg"
        class="logo-footer"
        alt="Visual thinking logo"
      />
    </a>

    <div>
      <ul>
        <li>
          <a href="https://www.instagram.com/charley_muhren/">
            <img src="/images/instagram.svg" alt="instagram" class="icon" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa"
          >
            <img src="/images/youtube.svg" alt="youtube" class="icon" />
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charleymuhren/">
            <img src="/images/linkedin.svg" alt="linkedIn" class="icon" />
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
    padding: 10px;
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

  @media (max-width: 425px) {
    div span {
      display: none;
    }

    .logo-footer {
      width: 60%;
    }
  }

  @media (min-width: 768px) {
    footer nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .logo-footer {
      height: auto;
      width: 70%;
    }

    .icon {
      width: 30px;
      height: 30px;
    }
  }
</style>
