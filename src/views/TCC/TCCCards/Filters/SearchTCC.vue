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
import { useModelWrapper } from "@/components/ModelWrapper/ComputedModelWrapper";

export default {
  setup(props, { emit }) {
    return {
      searchQuery: useModelWrapper(props, emit),
    };
  },
  components: {
    MDBCol,
    MDBInput,
    MDBIcon,
  },
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped>
.icon-study {
  right: 10px;
  top: 10px;
}
</style>
