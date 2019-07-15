<template>
  <div class="object3D">
    <a-scene background="color: #ECECEC">
      <a-assets>
        <a-asset-item id="cube" src="./assets/cube.gltf"></a-asset-item>
      </a-assets>
      <a-entity gltf-model="#cube"></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'object3D'
}
</script>
