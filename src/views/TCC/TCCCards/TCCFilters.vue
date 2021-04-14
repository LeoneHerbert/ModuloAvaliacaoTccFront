<template>
  <div class="d-flex justify-content-around">
    <MDBCheckbox label="Em progresso" v-model="checkbox1" />
    <MDBCheckbox label="Mais recentes" v-model="checkbox2" />

    <select name="status" id="status">
      <option value="ativo">Ativos</option>
      <option value="avaliado">Avaliados</option>
      <option value="reprovado">Reprovados</option>
      <option value="transicao">Em avaliação</option>
    </select>
  </div>
</template>

<script>
import { MDBCheckbox } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBCheckbox,
  },
  setup() {
    const checkbox1 = ref(false);
    const checkbox2 = ref(true);

    return {
      checkbox1,
      checkbox2,
    };
  },
};
</script>

<style lang="scss" scoped>
.d-flex .form-check {
  margin-right: 5px;
}
</style>
