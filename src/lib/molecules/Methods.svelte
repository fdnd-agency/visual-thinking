<script>
  import { Filter, Overview } from '$lib/index.js';
  export let methods;
  export let categories;
  let checkboxes = []
</script>

<Filter {categories} bind:checkboxes/>
<Overview {methods} {checkboxes}/>