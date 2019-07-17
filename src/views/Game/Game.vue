<template src="./Game.html"></template>
<style src="./Game.css" scoped></style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Game',

  computed: {
    ...mapGetters({
      showHelmetMarker: 'game/showHelmetMarker',
      showRocketMarker: 'game/showRocketMarker',
      showTrajectoryMarker: 'game/showTrajectoryMarker',
      showEagleMarker: 'game/showEagleMarker',
      showMapMarker: 'game/showMapMarker'
    })
  },

  mounted () {
    const cmp = this

    // helmet
    window.AFRAME.registerComponent(
      'registerevents-helmet', {
        init: function () {
          const marker = this.el

          const markerFound = () => {
            console.log('>>> Marker helmet Found', marker)
            setTimeout(() => {
              console.log('Go to helmet question', cmp.$router)
              cmp.$router.push({ name: 'game:helmet:question' })
            }, 1500)
          }
          const markerLost = () => { console.log('>>> Marker helmet Lost', marker) }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
  }
}
</script>
