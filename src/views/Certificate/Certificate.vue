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
    'svg-congratulations': congratulationsSvg,
    'svg-certificate': certificateSvg
  },
  methods: {
    generateCertificate () {
      const now = new Date()
      const today = now.toLocaleDateString()
      this.showCertificate = true
      this.$refs.certificate.children[8].children[0].textContent = this.astroName
      this.$refs.certificate.children[20].children[0].textContent = today

      this._generateAndDownloadPngFromSvg(this.$refs.certificate)
    },
    _generateAndDownloadPngFromSvg (svg) {
      var canvas = document.createElement('canvas')
      var svgSize = svg.getBoundingClientRect()
      console.log('SVG', svg)
      canvas.width = svgSize.width
      canvas.height = svgSize.height
      canvas.style.width = svgSize.width
      canvas.style.height = svgSize.height
      svg.setAttribute('height', canvas.height)
      svg.setAttribute('width', canvas.width)
      var ctx = canvas.getContext('2d')
      var data = (new XMLSerializer()).serializeToString(svg)
      var DOMURL = window.URL || window.webkitURL || window

      var ns = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'
      var svgBlob = new Blob([ns + data], { type: 'image/svg+xml;charset=utf-8' })
      var url = DOMURL.createObjectURL(svgBlob)

      var img = new Image()
      img.onload = function () {
        ctx.drawImage(img, 0, 0)
        DOMURL.revokeObjectURL(url)

        var imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream')

        var evt = new MouseEvent('click', {
          view: window,
          bubbles: false,
          cancelable: true
        })

        var a = document.createElement('a')
        a.setAttribute('download', 'diploma-apolo-11.png')
        a.setAttribute('href', imgURI)
        a.setAttribute('target', '_blank')

        a.dispatchEvent(evt)
      }
      img.src = url
    }
  }
}
</script>
