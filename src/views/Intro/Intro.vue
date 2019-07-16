<template src="./Intro.html"></template>
<style src="./Intro.css" scoped></style>

<script>

import TextBox from '@/components/TextBox/TextBox.vue'

export default {
  name: 'Intro',
  components: {
    'fta-textbox': TextBox
  },
  methods: {
    onClickStartButton () {
      this.$router.push('/find')
    }
  }
}
</script>
