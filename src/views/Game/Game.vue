<template src="./Game.html"></template>
<style src="./Game.css" scoped></style>

<script>
import { mapGetters, mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'

export default {
  name: 'Game',
  components: {
    'fta-textbox': TextBox
  },
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
            if (cmp.showRocketMarker) {
              setTimeout(() => {
                cmp.nextStage()
                cmp.$router.push({ name: 'game:rocket:question' })
              }, 1500)

              marker.removeEventListener('markerFound', markerFound)
            } else {
              cmp.$router.push({ name: 'game:error:question' })
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 2000)
            }
          }
          const markerLost = () => { }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
    // trajectory
    window.AFRAME.registerComponent(
      'registerevents-trajectory', {
        init: function () {
          const marker = this.el

          const markerFound = () => {
            if (cmp.showTrajectoryMarker) {
              setTimeout(() => {
                cmp.nextStage()
                cmp.$router.push({ name: 'game:trajectory:question' })
              }, 1500)
              marker.removeEventListener('markerFound', markerFound)
            } else {
              cmp.$router.push({ name: 'game:error:question' })
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 2000)
            }
          }
          const markerLost = () => { }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
    // eagle
    window.AFRAME.registerComponent(
      'registerevents-eagle', {
        init: function () {
          const marker = this.el

          const markerFound = () => {
            if (cmp.showEagleMarker) {
              setTimeout(() => {
                cmp.nextStage()
                cmp.$router.push({ name: 'game:eagle:question' })
              }, 1500)
              marker.removeEventListener('markerFound', markerFound)
            } else {
              cmp.$router.push({ name: 'game:error:question' })
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 2000)
            }
          }
          const markerLost = () => { }

          marker.addEventListener('markerFound', markerFound)
          marker.addEventListener('markerLost', markerLost)
        }
      }
    )
    // map
    window.AFRAME.registerComponent(
      'registerevents-map', {
        init: function () {
          const marker = this.el

          const markerFound = () => {
            if (cmp.showMapMarker) {
              setTimeout(() => {
                cmp.nextStage()
                cmp.$router.push({ name: 'game:map:question' })
              }, 1500)
              marker.removeEventListener('markerFound', markerFound)
            } else {
              cmp.$router.push({ name: 'game:error:question' })
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 2000)
            }
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
