<script>
  import { Breadcrumb, Introduction, MiniCourses } from "$lib/index.js";
  let { data } = $props();

  const page = data.page;
  const miniCourses = data.cursussen;
  const directusUrl = data.directusUrl;
</script>

<Breadcrumb title="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="hexagons minicourse">
  <Introduction {page} class="minicourse" />
  <MiniCourses {miniCourses} {directusUrl} />
</div>
