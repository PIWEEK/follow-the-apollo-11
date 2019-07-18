<template src="./ErrorQuestion.html"></template>
<style src="./ErrorQuestion.css" scoped></style>

<script>
import TextBox from '@/components/TextBox/TextBox.vue'
import alertSvg from '@/assets/svgs/alert.svg'

export default {
  name: 'ErrorQuestion',
  components: {
    'fta-textbox': TextBox,
    'svg-alert': alertSvg
  }
}
</script>
