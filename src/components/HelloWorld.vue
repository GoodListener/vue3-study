<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0)

    return {
      count,
    }
  },
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>
