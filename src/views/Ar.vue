<template>
  <div class="ar">
    <p>AR</p>
    <a-scene arjs='sourceType: webcam;' v-pre>
      <a-box position='0 0.5 0' material='opacity: 0.5; color: yellow;' v-pre></a-box>
      <a-marker-camera type='pattern' url='./img/markers/cobete.patt' v-pre></a-marker-camera>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'ar'
}
</script>
