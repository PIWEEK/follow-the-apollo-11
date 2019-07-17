<template src="./MapQuestion.html"></template>
<style src="./MapQuestion.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'

export default {
  name: 'MapQuestion',
  components: {
    'fta-textbox': TextBox,
    'svg-arrow': arrowSvg,
    'svg-question': questionSvg
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage',
      addMapToInventory: 'game/addMapToInventory'

    }),
    checkAnswer (answer) {
      if (answer === 'selenografia') {
        this.$refs.selenografia.classList.add('answer-ok')
      } else {
        this.$refs[answer].classList.add('answer-error')
        this.$refs.selenografia.classList.add('answer-ok')
      }
      this.$refs.nextStep.hidden = false
    },
    goNext () {
      this.nextStage()
      this.addMapToInventory()
      this.$router.push({ name: 'certificate' })
    }
  }
}
</script>
