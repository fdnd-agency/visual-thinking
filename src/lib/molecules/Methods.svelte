<script>
  import { Filter, Overview } from '$lib/index.js';

  let { methods, categories } = $props();

</script>

<Filter {categories} />
<Overview {methods} />