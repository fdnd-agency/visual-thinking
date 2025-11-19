<script>
  export let currentIndex = 0;
  export let total = 1;
</script>

<progress value={currentIndex + 1} max={total}></progress>

<style>
progress {
  width: 100%;
  height: 1.8rem;
  appearance: none;
  border: none;
  background-color: var(--color-primary-20);
}

progress::-webkit-progress-value {
  background-color: var(--color-senary);
  transition: width 0.3s ease;
}

progress::-webkit-progress-bar {
  background-color: transparent;
}

progress::-moz-progress-bar {
  background-color: var(--color-senary);
}
</style>
