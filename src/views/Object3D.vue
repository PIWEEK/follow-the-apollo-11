<template>
  <div class="object3D">
    <p>Tip: Ctrl + Alt + i</p>
    <a-scene light="defaultLightsEnabled: false">

      <a-assets>
        <a-asset-item id="rocket" src="img/models/rocket.gltf" >
        </a-asset-item>
        <a-asset-item id="eagle" src="img/models/eagle.gltf" >
        </a-asset-item>
      </a-assets>

      <a-marker-camera preset='hiro'>
        <a-entity rotation="-90 0 0" animation="property: rotation; to:-90 360 0; loop: true; dur: 10000">
          <a-gltf-model src="#eagle" scale="0.2 0.2 0.2" position="0 0 0" ></a-gltf-model>
        </a-entity>
      </a-marker-camera>

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
