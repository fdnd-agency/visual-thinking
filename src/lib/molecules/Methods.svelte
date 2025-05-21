<script>
  import { Filter, Overview } from '$lib/index.js';

  export let methods;
  export let categories;

</script>

<Filter {categories} />
<Overview {methods} />