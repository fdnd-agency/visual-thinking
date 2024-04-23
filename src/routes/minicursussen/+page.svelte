<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";
  import MiniCourses from "$lib/organisms/miniCourses.svelte";
  
  export let data;

  const {page, miniCourses} = data;
</script>

<Breadcrumb titel="Minicursussen" bgc="var(--vtRed)" />

<div class="hexagons">
  <Introduction data={page}/>
  <MiniCourses data={miniCourses} />
</div>

