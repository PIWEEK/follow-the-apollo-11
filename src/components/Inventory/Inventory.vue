<template src="./Inventory.html"></template>
<style src="./Inventory.css" scoped></style>

<script>
import helmetSvg from '@/assets/svgs/helmet.svg'
import rocketSvg from '@/assets/svgs/rocket.svg'
import trajectorySvg from '@/assets/svgs/trajectory.svg'
import eagleSvg from '@/assets/svgs/eagle.svg'
import mapSvg from '@/assets/svgs/map.svg'

import { mapGetters } from 'vuex'

export default {
  name: 'Inventory',
  computed: {
    ...mapGetters({
      haveHelmet: 'game/haveHelmet',
      haveRocket: 'game/haveRocket',
      haveTrajectory: 'game/haveTrajectory',
      haveEagle: 'game/haveEagle',
      haveMap: 'game/haveMap'
    })
  },
  components: {
    'svg-helmet': helmetSvg,
    'svg-rocket': rocketSvg,
    'svg-trajectory': trajectorySvg,
    'svg-eagle': eagleSvg,
    'svg-map': mapSvg
  }
}
</script>
