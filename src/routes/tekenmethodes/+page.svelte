<script>
  import {Breadcrumb, Introduction, Filter, Methods} from "$lib/index.js";

  export let data;

  const {page, methods} = data;
</script>

<Breadcrumb titel="Tekenmethodes" bgc="var(--color-quinary)" />
<Introduction data={page}/>

<Filter {data} />
<Methods data={methods}/>
