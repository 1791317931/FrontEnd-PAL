<template>
  <ErrorContent :src="src" code="500" desc="Oh~~鬼知道服务器经历了什么~"/>
</template>

<script>
import error404 from '@/assets/images/error-page/error-500.svg'
import ErrorContent from './ErrorContent.vue'

export default {
  name: 'Error500',
  components: {
    ErrorContent
  },
  data() {
    return {
      src: error404
    }
  }
}
</script>
