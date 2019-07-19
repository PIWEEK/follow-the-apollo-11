<template>
  <div class="object3D">
    <p>Tip: Ctrl + Alt + i</p>
    <a-scene light="defaultLightsEnabled: false">

      <a-assets>
        <a-asset-item id="rocket" src="img/models/rocket.gltf" >
        </a-asset-item>
        <a-asset-item id="rocket_animate" src="img/models/rocket_animate.gltf" >
        </a-asset-item>
        <a-asset-item id="eagle" src="img/models/eagle.gltf" >
        </a-asset-item>
        <a-asset-item id="eagle_animate" src="img/models/eagle_animate.gltf" >
        </a-asset-item>
        <a-asset-item id="helmet" src="img/models/helmet.gltf" >
        </a-asset-item>
        <a-asset-item id="helmet_animate" src="img/models/helmet_animate.gltf" >
        </a-asset-item>
        <a-asset-item id="trajectory" src="img/models/trajectory.gltf" >
        </a-asset-item>
        <a-asset-item id="trajectory_animate" src="img/models/trajectory_animate.gltf" >
        </a-asset-item>
        <a-asset-item id="map" src="img/models/map.gltf" >
        </a-asset-item>
        <a-asset-item id="map_animate" src="img/models/map_animate.gltf" >
        </a-asset-item>
      </a-assets>

      <a-marker type='pattern' url='img/markers/rocket.patt' v-pre>
        <a-gltf-model
          src="#rocket"
          rotation="-90 0 0"
          scale="1 1 1"
          position="0 1 0"></a-gltf-model>
      </a-marker>

      <!-- <a-gltf-model
        src="#rocket_animate"
        rotation="0 0 0"
        scale="1 1 1"
        position="0 1 -10"
        animation-mixer
        >
      </a-gltf-model> -->

      <a-marker type='pattern' url='img/markers/eagle.patt' v-pre>
        <a-gltf-model
          src="#eagle"
          rotation="-90 0 0"
          position="0 2 0"
          scale="1 1 1"></a-gltf-model>
      </a-marker>

      <!-- <a-gltf-model
        src="#eagle_animate"
        rotation="0 0 0"
        scale="1 1 1"
        position="0 1 -10"
        animation-mixer
        >
      </a-gltf-model> -->

      <a-marker type='pattern' url='img/markers/helmet.patt' v-pre>
        <a-gltf-model
          src="#helmet"
         rotation="-90 0 0"
          scale="1 1 1"
          position="0 1 0">
        </a-gltf-model>
      </a-marker>

      <!-- <a-gltf-model
        src="#helmet_animate"
        rotation="0 0 0"
        scale="1 1 1"
        position="0 1 -10"
        animation-mixer
        >
      </a-gltf-model> -->

      <a-marker type='pattern' url='img/markers/trajectory.patt' v-pre>
        <a-gltf-model
          src="#trajectory"
          rotation="-90 0 0"
          scale="1 1 1"
          position="0 1 0"
          >
        </a-gltf-model>
      </a-marker>

      <!-- <a-gltf-model
        src="#trajectory_animate"
        rotation="0 0 0"
        scale="1 1 1"
        position="0 1 -10"
        animation-mixer
        >
      </a-gltf-model> -->

      <a-marker type='pattern' url='img/markers/map.patt' v-pre>
        <a-gltf-model
          src="#map"
          rotation="-65 0 0"
          scale="1 1 1"
          position="0 1 0"
          >
        </a-gltf-model>
      </a-marker>

      <!-- <a-gltf-model
        src="#map_animate"
        rotation="0 0 0"
        scale="1 1 1"
        position="0 1 -10"
        animation-mixer
        >
      </a-gltf-model> -->

      <a-entity light="type: ambient; color: #ccc;"></a-entity>
      <a-entity light="type: directional; color: #ccc; intensity: 2.5;" position="0 14 0"></a-entity>
      <a-entity light="type: directional; color: #ccc; intensity: 1.5;" position="0 0 14"></a-entity>
      <a-entity light="type: directional; color: #ccc; intensity: 1.5;" position="0 0 -14"></a-entity>

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
