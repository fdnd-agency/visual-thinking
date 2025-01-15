<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";
  import MiniCourses from "$lib/organisms/miniCourses.svelte";
  
  export let data;

  const {page, miniCourses} = data;
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--vtRed)" />

<div class="hexagons">
  <Introduction {page}/>
  <MiniCourses {miniCourses} />
</div>

