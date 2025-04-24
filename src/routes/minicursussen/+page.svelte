<script>
  import Breadcrumb from "$lib/atoms/Breadcrumb.svelte";
  import Introduction from "$lib/molecules/Introduction.svelte";
  import MiniCourses from "$lib/organisms/MiniCourses.svelte";
  
  export let data;

  const {page, miniCourses} = data;
</script>

<Breadcrumb titel="Minicursussen" backgroundColor="var(--color-senary)" />

<div class="hexagons minicourse">
  <Introduction {page} class="hexagons minicourse"/>
  <MiniCourses {miniCourses}/>
</div>