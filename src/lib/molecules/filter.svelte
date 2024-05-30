<script>
    import IconResearch from "$lib/atoms/icons/iconResearch.svelte";
    import IconOrganise from "$lib/atoms/icons/iconOrganise.svelte";
    import IconLearnAboutYourself from "$lib/atoms/icons/iconLearnAboutYourself.svelte";
    import IconLearnAboutOthers from "$lib/atoms/icons/iconLearnAboutOthers.svelte";
    import IconCommunicate from "$lib/atoms/icons/iconCommunicate.svelte";
    import IconCreativeThinking from "$lib/atoms/icons/iconCreativeThinking.svelte";

    import { page } from "$app/stores";

    let filter;
    $: filter = $page.url.searchParams.get("categorie");
</script>

<section>
    <h2 id="methodes">Filter op categorie</h2>
  
    <ul>
      <li>
        <a
          href="?categorie=onderzoeken-en-begrijpen#methodes"
          class:active={filter == "onderzoeken-en-begrijpen"}
          ><IconResearch /> Onderzoeken en begrijpen</a
        >
      </li>
      <li>
        <a
          href="?categorie=organiseren-en-plannen#methodes"
          class:active={filter == "organiseren-en-plannen"}
          ><IconOrganise /> Organiseren en plannen</a
        >
      </li>
      <li>
        <a
          href="?categorie=leren-over-anderen#methodes"
          class:active={filter == "leren-over-anderen"}
          ><IconLearnAboutOthers /> Leren over anderen</a
        >
      </li>
      <li>
        <a
          href="?categorie=leren-over-jezelf#methodes"
          class:active={filter == "leren-over-jezelf"}
          ><IconLearnAboutYourself /> Leren over jezelf</a
        >
      </li>
      <li>
        <a
          href="?categorie=communiceren-en-presenteren#methodes"
          class:active={filter == "communiceren-en-presenteren"}
          ><IconCommunicate /> Communiceren en presenteren</a
        >
      </li>
      <li>
        <a
          href="?categorie=creatief-denken#methodes"
          class:active={filter == "creatief-denken"}
          ><IconCreativeThinking />Creatief denken</a
        >
      </li>
    </ul>
</section>
  
<style>
  h2 {
      font-size: 1em;
      padding-bottom: 1rem;
  }
  ul {
      list-style: none;
      margin-top: -1.7rem;
      margin-bottom: 0;
      padding-left: 0;
      display: flex;
      gap: 0.5rem;
      overflow-x: auto;
  }

  li a {
      display: flex;
      white-space: nowrap;
      padding: 10px;
      border: 1px solid transparent;
      align-items: center;
      transition: 0.25s;
  }

  li a:hover,
  li a:focus-visible,
  li a.active {
      border-color: var(--vtGrey);
      background: var(--vtGrey-10);
  }

  @media screen and (min-width: 36em) {
      ul {
          /flex-wrap: wrap;
      }
  }
</style>