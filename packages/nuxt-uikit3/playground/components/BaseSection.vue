<script setup lang="ts">
import { onMounted } from '#imports'
const uikit3 = useUIkit3()

uikit3?.notification({
  message: 'my-message!',
  status: 'primary',
  pos: 'top-right',
  timeout: 5000
})

onMounted(() => {
  uikit3?.modal.confirm('UIkit confirm!').then(
    function () {
      console.log('Confirmed.')
    },
    function () {
      console.log('Rejected.')
    }
  )
})
</script>

<template>
  <section class="section">Some text</section>
</template>

<style lang="scss" scoped>
.section {
  background: $global-primary-background;
}
</style>
