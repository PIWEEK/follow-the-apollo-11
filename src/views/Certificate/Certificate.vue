<template src="./Certificate.html"></template>
<style src="./Certificate.css" scoped></style>

<script>
import TextBox from '@/components/TextBox/TextBox.vue'
import certificateSvg from '@/assets/svgs/certificate.svg' // eslint-disable-next-line
import congratulationsSvg from '@/assets/svgs/congratulations.svg'

export default {
  name: 'Certificate',
  data: () => ({
    astroName: '',
    showCertificate: false
  }),
  components: {
    'fta-textbox': TextBox,
    'svg-certificate': certificateSvg,
    'svg-congratulations': congratulationsSvg
  },
  methods: {
    generateCertificate () {
      const now = new Date()
      const today = now.toLocaleDateString()
      this.showCertificate = true
      this.$refs.certificate.children[8].children[0].textContent = this.astroName
      this.$refs.certificate.children[20].children[0].textContent = today
    }
  }
}
</script>
