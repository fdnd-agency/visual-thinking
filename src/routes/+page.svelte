<script>
  import Introduction from "$lib/molecules/Introduction.svelte";
  import Homepage from "$lib/organisms/Homepage.svelte";

  export let data

  const {page} = data;
</script>

<div class="hexagons">
  <Introduction {page} class="hexagons"/>
  <Homepage />
</div>

