<script>
  let variant = Math.floor(Math.random() * 6);
</script>

<img
  src={`/images/flowers/left${variant}.png`}
  alt="Flower"
  style={`
    position: absolute; 
    bottom: 2rem;
    left: 0;
    height: auto; 
    width: 6rem;
    transform: rotateZ(-10deg);
  `}
/>
