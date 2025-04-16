<script>
  import {Breadcrumb, Introduction, MiniCourses} from "$lib/index.js";
  export let data;

  const {page, miniCourses} = data;
</script>

<Breadcrumb titel="Minicursussen" bgc="var(--vtRed)" />

<div class="hexagons">
  <Introduction data={page}/>
  <MiniCourses data={miniCourses} />
</div>

