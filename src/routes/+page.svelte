<script>
  import { Introduction, Homepage } from "$lib/index.js";
  export let data

  const {page} = data;
</script>

<div class="hexagons">
  <Introduction {page} class="hexagons"/>
  <Homepage />
</div>

