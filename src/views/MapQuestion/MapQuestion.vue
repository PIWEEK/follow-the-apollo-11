<template src="./MapQuestion.html"></template>
<style src="./MapQuestion.css" scoped></style>

<script>
import { mapMutations } from 'vuex'
import TextBox from '@/components/TextBox/TextBox.vue'
import arrowSvg from '@/assets/svgs/arrow.svg'
import questionSvg from '@/assets/svgs/question.svg'
import { EventBus } from '@/main'

export default {
  name: 'MapQuestion',
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
      addMapToInventory: 'game/addMapToInventory'

    }),
    checkAnswer (answer) {
      if (answer === 'selenografia') {
        this.$refs.selenografia.classList.add('answer-ok')
      } else {
        this.$refs[answer].classList.add('answer-error')
        this.$refs.selenografia.classList.add('answer-ok')
      }
      this.showNextStep = true
    },
    goNext () {
      EventBus.$emit('closeMap')
      this.nextStage()
      this.addMapToInventory()
      document.getElementsByTagName('video')[0].remove()
      this.$router.push({ name: 'certificate' })
    }
  }
}
</script>
