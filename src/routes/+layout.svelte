<script>
    import { onMount } from 'svelte';
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";


    let documentHeight;
    
    onMount(() => {
        documentHeight = document.documentElement.scrollHeight;
        console.log('De totale documenthoogte is:', documentHeight);

        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
        }, false);

    });

    export let x = 0.0;
    export let a = 1;

    let box;
    
    function scrollOffset(){
        let scrollTop = box.scrollTop
        let boxHeight = box.clientHeight

        console.log('scrolltop:' + scrollTop)

        console.log(documentHeight)

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
<main>
    <slot/>
</main>

<svg  width="0" height="0" viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
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
    main {
        background-color: white;
    }
    /* LIQUID ACID THEME */

    @supports (animation-timeline: view()) {
        @media (prefers-reduced-motion: no-preference) { 
            .liquid-acid-theme {
                filter: url('#noise');
                position: absolute;
                width: 100%;
                height: 100%;
                overflow-y: auto;
                /* filter: blur(calc(10px * var(--x))); */
                /* background-color: blue; */

                scroll-timeline: --squareTimeline y;
                scroll-timeline: --squareTimeline vertical;
                animation-name: rotateAnimation, blurAnimation;
                animation-duration: 1ms;
                animation-timing-function: ease-out;
                animation-timeline: --squareTimeline;            
            }

            @keyframes rotateAnimation {
                0% {
                    transform: rotate(0deg);
                    background-color: white;
                    box-shadow: inset 0px 0px 10px 10px white;
                    scale: 1;
                    transform-origin: top;
                }

                50% {
                    transform:rotate(40deg) ;
                }

                60% {
                    transform: rotate(-40deg);
                }

                100% {
                    transform-origin: bottom;
                    transform: rotate(0deg);
                    background-color: black;
                    box-shadow: inset 0px 0px 10px 20px white;
                    scale: 0.1;
                }
            }
        }
    }



</style>

