<template>
  <div name="termly-embed" data-id="0adccc05-5b9e-4017-b944-a33d8db211fa" data-type="iframe"></div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Federa | Cookies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Federa Cookies`
        }
      ]
    }
  },
  created() {
    if (process.client && document) {
      ;(function(d, s, id) {
        try {
          var js,
            tjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src = 'https://app.termly.io/embed-policy.min.js'
          tjs.parentNode.insertBefore(js, tjs)
        } catch (error) {
          console.log(error)
        }
      })(document, 'script', 'termly-jssdk')
    }
  }
}
</script>