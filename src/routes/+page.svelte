<script>
  import { Introduction, Homepage } from "$lib/index.js";
  let { data } = $props();

  const {page} = data;
</script>

<div class="hexagons">
  <Introduction {page} class="hexagons"/>
  <Homepage />
</div>

