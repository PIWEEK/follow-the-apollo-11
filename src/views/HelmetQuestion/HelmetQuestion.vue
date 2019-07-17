<template src="./HelmetQuestion.html"></template>
<style src="./HelmetQuestion.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'

export default {
  name: 'HelmetQuestion',
  components: {
    'fta-textbox': TextBox,
    'svg-arrow': arrowSvg,
    'svg-question': questionSvg
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage',
      addHelmetToInventory: 'game/addHelmetToInventory'

    }),
    checkAnswer (answer) {
      if (answer === 'mc') {
        this.$refs.mc.classList.add('answer-ok')
      } else {
        this.$refs[answer].classList.add('answer-error')
        this.$refs.mc.classList.add('answer-ok')
      }
      this.$refs.nextStep.hidden = false
    },
    goNext () {
      this.nextStage()
      this.addHelmetToInventory()
      this.$router.push({ name: 'game:find' })
    }
  }
}
</script>
