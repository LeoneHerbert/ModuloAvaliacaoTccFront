<template>
  <MDBCol sm="12" md="6" lg="3">
    <select
      name="status"
      id="status"
      class="form-select"
      aria-label="Default select example"
      v-model="value"
    >
      <option value="" selected>Status do Processo</option>
      <option value="ativo">Ativos</option>
      <option value="avaliado">Avaliados</option>
      <option value="reprovado">Reprovados</option>
      <option value="transicao">Em avaliação</option>
    </select>
  </MDBCol>
</template>

<script>
import { MDBCol } from "mdb-vue-ui-kit";
import { useModelWrapper } from "@/components/ModelWrapper/ComputedModelWrapper";

export default {
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit),
    };
  },
  components: {
    MDBCol,
  },
  props: ["modelValue"],
};
</script>

<style></style>
