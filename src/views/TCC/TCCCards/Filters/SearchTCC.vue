<template>
  <MDBCol sm="12" lg="3">
    <div class="position-relative">
      <MDBInput label="Pesquisar" v-model="searchQuery" />
      <MDBIcon icon="search" class="position-absolute icon-study" />
    </div>
  </MDBCol>
</template>

<script>
import { MDBCol, MDBInput, MDBIcon } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCol,
    MDBInput,
    MDBIcon,
  },
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    // `v-model` works by binding a `value` and then
    // listening for "input" events. When layering
    // multiple `v-model` components, you need to emit
    // those "input" events back up the chain.
    searchQuery: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", v);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-study {
  right: 10px;
  top: 10px;
}
</style>
