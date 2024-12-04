<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    export let x = 0.005;

    let box;

    function scrollOffset(){
        x = 0.00001 * box.scrollTop;
        console.log(x);
    }
    
</script>

<Header />

<div bind:this={box} on:scroll={scrollOffset} class="wrapper liquid-acid-theme" style="--x: {x}">
<main><slot /></main>

<g>
    <svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
        <defs>
            <filter id="noise">
                <feTurbulence  type="fractalNoise" id="turbulence" baseFrequency="{x}" numOctaves="1" result="noise" seed="0"/>
                <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="300" />
            </filter> 
        </defs>
    </svg>
</g>


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
        /* background: rgba(0,0,0, var(--x)); */
        /* filter: blur(calc(10px * var(--x))); */
        /* background-color: blue;         */
    }


    
    
    @keyframes colorChanceX {
        0% {
            filter: blur(0px);
        }
        100% {
            filter: blur(calc(10px * var(--x)));
        }
    }
    

    @keyframes xAnimation {
        from {
            --x: 0.0;
        }
        to {
            --x: 0.5;
        }
    }



</style>

