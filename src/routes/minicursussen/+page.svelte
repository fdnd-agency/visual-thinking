<script>
  import { Breadcrumb, Introduction, MiniCourses } from "$lib/index.js";
  let { data } = $props();

  const {page, miniCourses} = data;
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="hexagons minicourse">
  <Introduction {page} class="minicourse"/>
  <MiniCourses {miniCourses}/>
</div>