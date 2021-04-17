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

export default {
  components: {
    MDBCol,
  },
  props: ["modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style></style>
