<template>
  <div class="ar">
    <p>AR</p>
    <a-scene arjs='sourceType: webcam;'>
      <a-box position='0 0.5 0' material='opacity: 0.5; color: yellow;'></a-box>
      <a-marker-camera preset='hiro'></a-marker-camera>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'ar'
}
</script>
