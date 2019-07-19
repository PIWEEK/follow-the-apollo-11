<template src="./RocketQuestion.html"></template>
<style src="./RocketQuestion.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'
import { EventBus } from '@/main'

export default {
  name: 'RocketQuestion',
  data: () => ({
    showNextStep: false
  }),
  components: {
    'fta-textbox': TextBox,
    'svg-arrow': arrowSvg,
    'svg-question': questionSvg
  },
  methods: {
    ...mapMutations({
      nextStage: 'game/nextStage',
      addRocketToInventory: 'game/addRocketToInventory'

    }),
    checkAnswer (answer) {
      if (answer === 'iiww') {
        this.$refs.iiww.classList.add('answer-ok')
      } else {
        this.$refs[answer].classList.add('answer-error')
        this.$refs.iiww.classList.add('answer-ok')
      }
      this.showNextStep = true
    },
    goNext () {
      EventBus.$emit('closeRocket')
      this.nextStage()
      this.addRocketToInventory()
      this.$router.push({ name: 'game:find' })
    }
  }
}
</script>
