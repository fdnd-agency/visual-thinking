<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    export let x = 0.003;

    
    
</script>

<Header />

<div class="liquid-acid-theme">
<main><slot /></main>

<svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
    <defs>
        <filter id="noise">
            <feTurbulence style="--x: {x}" type="fractalNoise" id="turbulence" baseFrequency="{x}"  numOctaves="1" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="300" />
        </filter> 
    </defs>
    <!-- <rect width="1728" height="851" fill="green"/> -->
</svg>

<!-- <svg viewBox="0 0 1728 852" version="1.1">
    <defs>
      <filter id="noise">
        <feTurbulence type="fractalNoise" id="turbulence" baseFrequency="0.000" numOctaves="5" result="noise" seed="0"/>
        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="300" />
      </filter>   
      
      <filter id="contrast">
        <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" result="matrix" />
        <feComposite in="SourceGraphic" in2="matrix" operator="atop"/> 
      </filter>  
    </defs>
  </svg> -->

<Footer />
</div>

<style>
    @property --x {
        syntax: '<number>';
        inherit: false;
        initial-value: 0.0;
    }

    .liquid-acid-theme {
        animation: xAnimation 1s linear;
        --x: 0.5;
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

