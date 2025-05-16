<script>
  import { Icons } from "$lib/index.js";
</script>

<form action="POST">
  <input 
    type="submit" 
    id="like" 
    class="like-button" 
    hidden 
  />

  <label for="like" aria-label="Like this post" class="like-label">
    <Icons name="like" />
  </label>
</form>
