<script>
  import Introduction from "$lib/molecules/introduction.svelte";
  import Homepage from "$lib/organisms/homepage.svelte";

  export let data

  const {page} = data;
</script>

<div class="hexagons">
  <Introduction data={page}/>
  <Homepage />
</div>

