<template>
    <div><icon-font icon="RectangleCopy"/>hello world</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconFont from './IconFont.vue'

export default defineComponent({
  components: { IconFont },
    setup() {
        console.log("hellow")
        return{}
    },
})
</script>

<style lang="scss" scoped>

</style>