<template>
  <CodeView title="蒙版">
    <MaskDemo />
    <template #code>
      <MaskCode />
    </template>
  </CodeView>
</template>
<script lang="ts" setup>
import MaskDemo from "./mask/index.vue"
import MaskCode from "./mask/Index.md"
</script>