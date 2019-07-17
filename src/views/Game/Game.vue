<template src="./Game.html"></template>
<style src="./Game.css" scoped></style>

<script>
export default {
  name: 'Game',
  mounted () {
    window.AFRAME.registerComponent(
      'registereventsrocket', {
        init: function () {
          const marker = this.el

          const markerFound = () => {
            console.log('>>> Marker Found', marker)
          }

          const markerLost = () => {
            console.log('>>> Marker Lost', marker)
          }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
  }
}
</script>
