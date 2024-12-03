<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    
    
</script>

<Header />

<div class="liquid-acid-theme">
<main><slot /></main>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
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
  </svg>

<Footer />
</div>

