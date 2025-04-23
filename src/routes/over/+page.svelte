<script>
  import {Breadcrumb, Introduction} from "$lib/index.js";
  export let data;

  const {page} = data
</script>

<Breadcrumb titel="Over" bgc="var(--color-tertiary-90)" />
<Introduction data={page}/>
