<template src="./Game.html"></template>
<style src="./Game.css" scoped></style>

<script>
import { mapGetters, mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import { EventBus } from '@/main'

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
            if (cmp.showHelmetMarker) {
              setTimeout(() => {
                cmp.nextStage()
                cmp.$router.push({ name: 'game:helmet:question' })
              }, 1500)
              marker.removeEventListener('markerFound', markerFound)
            }
          }
          const markerLost = () => {
            if (cmp.showHelmetMarker) {
              marker.object3D.visible = true
            }
          }

          EventBus.$on('closeHelmet', () => {
            marker.object3D.children[0].visible = false
            marker.object3D.children[1].visible = true
            setTimeout(() => {
              marker.object3D.visible = false
              marker.object3D.children[0].visible = true
              marker.object3D.children[1].visible = false
              marker.removeEventListener('markerLost', markerLost)
            }, 1200)
          })

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
              setTimeout(() => {
                cmp.$router.push({ name: 'game:find' })
              }, 4000)
            }
          }
          const markerLost = () => {
            if (cmp.showRocketMarker) {
              marker.object3D.visible = true
            }
          }

          EventBus.$on('closeRocket', () => {
            marker.object3D.children[0].visible = false
            marker.object3D.children[1].visible = true
            setTimeout(() => {
              marker.object3D.visible = false
              marker.object3D.children[0].visible = true
              marker.object3D.children[1].visible = false
              marker.removeEventListener('markerLost', markerLost)
            }, 1200)
          })

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
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 4000)
            }
          }
          const markerLost = () => {
            if (cmp.showTrajectoryMarker) {
              marker.object3D.visible = true
            }
          }

          EventBus.$on('closeTrajectory', () => {
            marker.object3D.children[0].visible = false
            marker.object3D.children[1].visible = true
            setTimeout(() => {
              marker.object3D.visible = false
              marker.object3D.children[0].visible = true
              marker.object3D.children[1].visible = false
              marker.removeEventListener('markerLost', markerLost)
            }, 1200)
          })

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
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 4000)
            }
          }
          const markerLost = () => {
            if (cmp.showEagleMarker) {
              marker.object3D.visible = true
            }
          }

          EventBus.$on('closeEagle', () => {
            marker.object3D.children[0].visible = false
            marker.object3D.children[1].visible = true
            setTimeout(() => {
              marker.object3D.visible = false
              marker.object3D.children[0].visible = true
              marker.object3D.children[1].visible = false
              marker.removeEventListener('markerLost', markerLost)
            }, 1200)
          })

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
              setTimeout(() => { cmp.$router.push({ name: 'game:find' }) }, 4000)
            }
          }
          const markerLost = () => {
            if (cmp.showMapMarker) {
              marker.object3D.visible = true
            }
          }

          EventBus.$on('closeMap', () => {
            marker.object3D.children[0].visible = false
            marker.object3D.children[1].visible = true
            setTimeout(() => {
              marker.object3D.visible = false
              marker.object3D.children[0].visible = true
              marker.object3D.children[1].visible = false
              marker.removeEventListener('markerLost', markerLost)
            }, 1200)
          })

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
