<template src="./Game.html"></template>
<style src="./Game.css" scoped></style>

<script>
import { mapGetters, mapMutations } from 'vuex'

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
            setTimeout(() => {
              cmp.nextStage()
              cmp.$router.push({ name: 'game:helmet:question' })
            }, 1500)
            marker.removeEventListener('markerFound', markerFound)
          }
          const markerLost = () => { }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
    // rocket
    window.AFRAME.registerComponent(
      'registerevents-rocket', {
        init: function () {
          const marker = this.el

          const markerFound = () => {
            setTimeout(() => {
              cmp.nextStage()
              cmp.$router.push({ name: 'game:rocket:question' })
            }, 1500)

            marker.removeEventListener('markerFound', markerFound)
          }
          const markerLost = () => { }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage'
    })
  }
}
</script>
