<template src="./TrajectoryQuestion.html"></template>
<style src="./TrajectoryQuestion.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'

export default {
  name: 'TrajectoryQuestion',
  components: {
    'fta-textbox': TextBox,
    'svg-arrow': arrowSvg,
    'svg-question': questionSvg
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage',
      addTrajectoryToInventory: 'game/addTrajectoryToInventory'

    }),
    checkAnswer (answer) {
      if (answer === 'stem') {
        this.$refs.stem.classList.add('answer-ok')
      } else {
        this.$refs[answer].classList.add('answer-error')
        this.$refs.stem.classList.add('answer-ok')
      }
      this.$refs.nextStep.hidden = false
    },
    goNext () {
      this.nextStage()
      this.addTrajectoryToInventory()
      this.$router.push({ name: 'game:find' })
    }
  }
}
</script>
