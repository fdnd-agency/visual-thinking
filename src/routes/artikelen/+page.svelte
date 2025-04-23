<script>
  import { Articles, Breadcrumb, Introduction } from "$lib/index.js";

  export let data;

  const {page, articles} = data
</script>

<Breadcrumb titel="Artikelen" bgc="var(--color-tertiary-80)" />
<Introduction data={page}/>
<Articles data={articles}/>


