<script>
  import { Introduction, Homepage } from "$lib/index.js";
  let { data } = $props();
</script>

<div class="hexagons">
  <Introduction page={data} class="hexagons"/>
  <Homepage />
</div>

