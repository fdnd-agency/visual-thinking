<script>
  import { Breadcrumb, Introduction, MiniCourses } from "$lib/index.js";
  export let data;

  const {page, miniCourses} = data;
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="hexagons minicourse">
  <Introduction {page} class="hexagons minicourse"/>
  <MiniCourses {miniCourses}/>
</div>