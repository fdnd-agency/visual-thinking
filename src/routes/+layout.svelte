<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";
	import PageTransition from "$lib/atoms/pageTransition.svelte";
    
    import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});



	export let x = 'green';
	let pageTransition

</script>

<Header />

<main><slot />
	<!-- <PageTransition	x="yellow"/> -->
</main>

<Footer />

<div class="svg-animation"></div>

<!-- <div bind:this="{pageTransition}" class="page-transition" style="--page-transition-clr: {x};"></div> -->

<style>

</style>