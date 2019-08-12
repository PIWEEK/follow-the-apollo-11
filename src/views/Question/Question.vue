<template src="./Question.html"></template>
<style src="./Question.css" scoped></style>

<script>
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'
import { EventBus } from '@/main'
import store from '@/store'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  data: () => ({
    showNextStep: false
  }),
  components: {
    'fta-textbox': TextBox,
    'svg-arrow': arrowSvg,
    'svg-question': questionSvg
  },
  methods: {
    checkAnswer (answer) {
      if (answer.key !== this.question.validAnswerKey) {
        this.$refs[answer.key][0].classList.add('answer-error')
      }
      this.$refs[this.question.validAnswerKey][0].classList.add('answer-ok')
      this.showNextStep = true
    },
    goNext () {
      EventBus.$emit(this.question.nextStep.event)
      store.commit('game/nextStage')
      store.commit(this.question.nextStep.awardMutation)
      this.$router.push({ name: this.question.nextStep.goToRouterName })
    }
  }
}
</script>
