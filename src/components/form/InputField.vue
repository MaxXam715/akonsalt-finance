<script setup>
defineProps({
  type: String,
  name: String,
  placeholder: String
})
</script>

<template>
  <div class="field-container" type="input-text">
    <input :type="type" :name="name" :placeholder="placeholder" class="field-input">
  </div>
</template>

<style scoped lang="scss">

</style>