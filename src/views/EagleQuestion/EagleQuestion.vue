<template src="./EagleQuestion.html"></template>
<style src="./EagleQuestion.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'

export default {
  name: 'EagleQuestion',
  components: {
    'fta-textbox': TextBox,
    'svg-arrow': arrowSvg,
    'svg-question': questionSvg
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage',
      addEagleToInventory: 'game/addEagleToInventory'

    }),
    checkAnswer (answer) {
      if (answer === 'luna') {
        this.$refs.luna.classList.add('answer-ok')
      } else {
        this.$refs[answer].classList.add('answer-error')
        this.$refs.luna.classList.add('answer-ok')
      }
      this.$refs.nextStep.hidden = false
    },
    goNext () {
      this.nextStage()
      this.addEagleToInventory()
      this.$router.push({ name: 'game:find' })
    }
  }
}
</script>
