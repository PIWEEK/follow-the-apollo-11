<template src="./Intro.html"></template>
<style src="./Intro.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import titleSvg from '@/assets/svgs/title.svg'

export default {
  name: 'Intro',
  components: {
    'fta-textbox': TextBox,
    'svg-title': titleSvg
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage'
    }),
    onClickStartButton () {
      this.nextStage()
      this.$router.push({ name: 'game:find' })
    }
  }
}
</script>
