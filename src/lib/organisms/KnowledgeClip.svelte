<script>
    import { Breadcrumb } from "$lib/index.js";

    let index = $state(0);

    let clip = $props();
    const {title} = data.category;
</script>

<Breadcrumb titel="Kennisclips" backgroundColor="var(--color-quaternary)" />
<main>

    <iframe
        class="youtubelink"
        title="kennisclips"
        src={clip[index].youTubeLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>

</main>