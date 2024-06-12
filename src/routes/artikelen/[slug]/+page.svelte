<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";

  export let data;

  const {title, visual, intro, content} = data.article
</script>

<Breadcrumb titel="Overzicht" url="/artikelen" bgc="var(--vtDarkBlue)" />

<header>
  <div>
    <p>Gepost op <time>26 maart 2019<time></p>
    <p>Door <strong>Charley Muhren</strong></p>
  </div>

  <h1>{title}</h1>
  
  <ul>
    <li><a href="/">Creatief denken</a></li>
    <li><a href="/">Onderwijs</a></li>
  </ul>
</header>

<div class="content">
  {#if visual.url} 
    <img src="{visual.url}" alt="{title}" />
  {/if}
  

  <p class="intro">
    {intro}
  </p>

  <div class="rich-text">
    {@html content.html}
  </div> 
  
</div>

<style>
  header {
    margin-top: 1rem;
  }
  header h1 {
    font-size: 2.5rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    margin-left: 0em;
    margin-top: 1rem;
    text-wrap: balance;
  }
  header > ul {
    grid-column: 2 / -1;
    display:flex;
    padding-left: 0;
    list-style:none;
    gap:1rem;
    
  }
  header > ul li {
    background-color: var(--vtYellow);
  }
  header > ul li a {
    text-decoration: none;
    padding:.5rem;
    color:inherit
  }
  header p {
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
    margin:0;
  }

  time {
    font-weight: bold;
  }


  

  /* tablet */
  @media (min-width: 50em) {
    header {
      display:grid;
      grid-template-columns: 20rem 10fr;
      gap:0 2rem;
      background-color: var(--vtGrey-10);
      padding:2rem 0 0;
      margin: 0 -1rem 2rem;
    }
    header > div {
      padding:0 2rem;
      align-self:flex-end;
      border-right:1px solid var(--vtGrey);
      text-align:right;
      flex-shrink:0;
    }
    header > div p {
      margin:0;
    }
    header > div p * {
      font-weight: bold;
      display:block;
      color: var(--vtDarkBlue)
    }
    header h1 {
      align-self:flex-end;
      margin:0
    }
    
    div.content {
      padding-left:20rem;
      padding-right:2rem;
      max-width:50em;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    h1 {
      font-size: 1.7rem;
    }
  }
</style>
