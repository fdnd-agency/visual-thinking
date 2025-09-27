<script>
  import { Breadcrumb } from "$lib/index.js";

  let { data } = $props();

  const {title} = data.category
</script>

<Breadcrumb titel="Kennisclip"  backgroundColor="var(--color-tertiary)" />

<header>
  <h1>{title}</h1>  
</header>
