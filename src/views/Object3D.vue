<template>
  <div class="object3D">
    <p>Tip: Ctrl + Alt + i / {{ loading }}</p>
    <a-scene>
      <a-assets>
        <a-asset-item id="saturn" src="img/models/saturn5.gltf" >
        </a-asset-item>
        <a-asset-item id="lunar-module" src="img/models/lunar-module.gltf" >
        </a-asset-item>
      </a-assets>
      <a-marker preset='hiro'>
        <a-gltf-model src="#lunar-module" scale='0.2 0.2 0.2' position='0 0 0'></a-gltf-model>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'object3D',
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.loading = true
  }
}
</script>

<style>
p {
  color: #fff;
  position: fixed;
  right: .2rem;
  top: 0;
  background-color: #92374d;
  z-index: 20;
  padding: .5rem;
  border: 1px solid;
  font-size: .87rem;
}
</style>
