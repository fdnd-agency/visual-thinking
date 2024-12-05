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

<div  class="wrapper " style="--x: {x} --a:{a}">
<main>
    <div bind:this={box} on:scroll={scrollOffset} class="liquid-acid-theme">
        <slot/>
    </div>
</main>
</div>
<svg  width="0" height="0" viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
    <defs>
        <filter id="noise">
            <feTurbulence  type="fractalNoise" id="turbulence" baseFrequency="{x}" numOctaves="1" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="300" />
        </filter>
        <filter id="noise-background">
            <feTurbulence  type="fractalNoise" id="turbulence" baseFrequency="0.0" numOctaves="2" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="300" />
        </filter>
    </defs>
</svg>


<Footer />


<style>
    main {
        background-color: white;
    }

    @property --angle {
        syntax:"<angle>";
        inherits:false;
        initial-value:0deg;
    }

    .wrapper {
        width: 100%;
        height: calc(100vh - 104.5px);
        animation: draaien 10s infinite linear;

        scroll-timeline: scrollTimeline vertical;
        animation: draaien 10s linear infinite;

        @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) { 
                background-color: black;
                background: 
                radial-gradient(circle at 50% 55%, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 100%),
                repeating-conic-gradient(
                    from var(--angle, 0deg) at 50% 55%, 					 
                    orange 0deg,
                    dodgerblue,
                    deeppink,
                    orange 60deg
                );
                background-size: cover, cover;
                background-position: center, center;
                box-shadow: inset 0px 0px 1000px 100px #000;
            }
        }
    }


    @keyframes draaien {
        0%   { --angle:0deg; }
        100% { --angle:360deg; }
    }
    /* LIQUID ACID THEME */

    @supports (animation-timeline: view()) {
        @media (prefers-reduced-motion: no-preference) { 
            .liquid-acid-theme {
                margin: 0;
                left: 0;
                filter: url('#noise');
                position: absolute;
                width: 100%;
                height: 100%;
                overflow-y: auto;
                /* filter: blur(calc(10px * var(--x))); */
                /* background-color: blue; */

                scroll-timeline: --squareTimeline y;
                scroll-timeline: --squareTimeline vertical;
                animation-name: rotateAnimation, draaien;
                animation-duration: 1ms;
                animation-timing-function: ease-out;
                animation-timeline: --squareTimeline;  
            }

            @keyframes rotateAnimation {
                0% {
                    --angle:0deg; 
                    transform: rotate(0deg);
                    background-color: white;
                    scale: 1;
                    transform-origin: center;
                }

                50% {
                    transform: rotate(40deg) ;
                }

                60% {
                    transform: rotate(-40deg);
                }

                100% {
                    --angle:360deg;
                    transform: rotate(0deg);
                    /* background-color: black; */
                    background-color: white;
                    scale: 0.1;
                    
                }

            }
        }
    }



</style>

