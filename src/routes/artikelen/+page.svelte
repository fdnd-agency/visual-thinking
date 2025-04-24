<script>
  import Articles from "$lib/organisms/Articles.svelte";
  import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
  import Introduction from "$lib/molecules/Introduction.svelte";

  export let data;

  const {page, articles} = data
</script>

<Breadcrumb titel="Artikelen" backgroundColor="var(--color-tertiary)" />
<Introduction {page}/>
<Articles {articles}/>


