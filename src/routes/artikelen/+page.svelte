<script>
  import { Articles, Breadcrumb, Introduction } from "$lib/index.js";
  let { data } = $props();

  const { page, articles } = data;
</script>

<Breadcrumb title="Artikelen" backgroundColor="var(--color-tertiary)" />
<Introduction {page} />
<Articles {articles} />
