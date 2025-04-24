<script>
  import { Articles, Breadcrumb, Introduction } from "$lib/index.js";
  export let data;

  const {page, articles} = data
</script>

<Breadcrumb titel="Artikelen" backgroundColor="var(--vtDarkBlue)" />
<Introduction {page}/>
<Articles {articles}/>


