<script>
<<<<<<< HEAD
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";

=======
  import {Breadcrumb, Introduction} from "$lib/index.js";
>>>>>>> dev
  export let data;

  const {page} = data
</script>

<<<<<<< HEAD
<Breadcrumb titel="Over" backgroundColor="var(--vtSec-DarkBlue)" />
<Introduction {page}/>
=======
<Breadcrumb titel="Over" bgc="var(--color-tertiary-90)" />
<Introduction data={page}/>
>>>>>>> dev
