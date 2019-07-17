<template src="./Intro.html"></template>
<style src="./Intro.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'

export default {
  name: 'Intro',
  components: {
    'fta-textbox': TextBox
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
