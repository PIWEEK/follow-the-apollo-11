<template>
  <div class="object3D">
    <p>Tip: Ctrl + Alt + i</p>
    <a-scene light="defaultLightsEnabled: false">

      <a-assets>
        <a-asset-item id="rocket" src="img/models/rocket.gltf" >
        </a-asset-item>
        <a-asset-item id="eagle" src="img/models/eagle.gltf" >
        </a-asset-item>
        <a-asset-item id="helmet" src="img/models/helmet.gltf" >
        </a-asset-item>
      </a-assets>

      <a-marker type='pattern' url='img/markers/rocket.patt' v-pre>
        <a-gltf-model src="#rocket" rotation="-90 0 0" scale="1 2 1" animation-mixer='loop: repeat;'></a-gltf-model>
      </a-marker>

      <a-marker type='pattern' url='img/markers/eagle.patt' v-pre>
        <a-gltf-model src="#eagle" rotation="-90 0 0" scale="1 2 1" animation-mixer='loop: repeat;'></a-gltf-model>
      </a-marker>

      <a-marker type='pattern' url='img/markers/helmet.patt' v-pre>
        <a-gltf-model src="#helmet" rotation="-90 0 0" scale="1 2 1" animation-mixer='loop: repeat;'></a-gltf-model>
      </a-marker>

      <a-entity light="type: ambient; color: #ccc;"></a-entity>
      <a-entity light="type: directional; color: #ccc; intensity: 3;" position="0 4 0"></a-entity>
      <a-entity light="type: directional; color: #ccc; intensity: 2;" position="0 0 4"></a-entity>
      <a-entity light="type: directional; color: #ccc; intensity: 2;" position="0 0 -4"></a-entity>

      <a-entity camera></a-entity>

    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'object3D'
}
</script>

<style scoped>
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
