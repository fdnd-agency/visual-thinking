<script>
    import { onMount } from 'svelte';
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    onMount(() => {
        console.log('De component is gemonteerd');
        console.log('De hoogte van de box:', box.clientHeight);
    });

    export let x = 0.0;
    export let a = 1;

    let box;
    
    function scrollOffset(){
        x = 0.000001 * box.scrollTop
        // boxHeight = box.clientHeight

        a = 0.1 * box.scrollTop

        if(x > 0.003) {
            x = 0.003
        }
    }
</script>

<Header />

<div bind:this={box} on:scroll={scrollOffset} class="wrapper liquid-acid-theme" style="--x: {x} --a:{a}">
<main><slot /></main>

<svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
    <defs>
        <filter id="noise">
            <feTurbulence  type="fractalNoise" id="turbulence" baseFrequency="{x}" numOctaves="1" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="300" />
        </filter>
    </defs>
</svg>


<Footer />
</div>

<style>

    /* LIQUID ACID THEME */
    /* @property --x {
        syntax: '<number>';
        inherit: false;
        initial-value: 0.0;
    } */
    .liquid-acid-theme {
        filter: url('#noise');
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background: rgba(0,0,0, var(--a));
        /* filter: blur(calc(10px * var(--x))); */
        /* background-color: blue; */
    }

    @keyframes colorChanceX {
        0% {
            
        }
        100% {
            
        }
    }



</style>

