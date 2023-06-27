<script setup lang="ts">
import { onMounted } from '#imports'
const uikit3 = useUIkit3()

onMounted(() => {
  uikit3.modal.confirm('UIkit confirm!').then(
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
