<template>
  <fieldset>
    <legend><slot name="legend"></slot></legend>
    <slot name="inputs"> </slot>
  </fieldset>
</template>

<script>
export default {
  name: "FieldSetComponent",
};
</script>

<style lang="scss" scoped>
legend {
  // background-color: rgba($color: #000000, $alpha: 0.5);
  background-color: rgba(#050938, 0.7);
  color: #fff;
  padding: 3px 6px;
  border-radius: 3px;
}

.output {
  font: 1rem "Fira Sans", sans-serif;
}
</style>
