<script>
    import { Breadcrumb } from "$lib/index.js";

    export let clip;
    
</script>

<Breadcrumb titel="Kennisclip" backgroundColor="var(--color-quaternary)" />

<article class="knowledge-clip">
    {#if clip.youTubeLink}
        <iframe
            class="youtubelink"
            title="kennisclip"
            src={clip.youTubeLink}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    {/if}
</article>