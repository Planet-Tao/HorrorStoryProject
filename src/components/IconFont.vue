<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + iconName"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: ["icon"],
  setup(prop) {
    const iconName = ref();
    onMounted(() => {
      iconName.value = prop.icon;
    });
    return {
      iconName,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
