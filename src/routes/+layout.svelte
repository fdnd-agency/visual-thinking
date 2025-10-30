<script>
    import { Header, Footer } from "$lib/index.js";

    let { children } = $props();
</script>

<Header />

<main>{@render children?.()}</main>

<Footer />

