<script>
  import { Articles, Breadcrumb, Introduction } from "$lib/index.js";
  export let data;

  const {page, articles} = data
</script>

<Breadcrumb titel="Artikelen" backgroundColor="var(--color-tertiary)" />
<Introduction {page}/>
<Articles {articles}/>


