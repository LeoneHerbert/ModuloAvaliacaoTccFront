<template>
  <div>
    <form>
      <MDBRow class="filters-row">
        <MDBCol sm="12" lg="3">
          <div class="d-flex justify-content-around">
            <!-- <MDBCheckbox label="Em progresso" v-model="checkbox1" /> -->
            <div class="pt-1">
              <MDBCheckbox label="Mais recentes" v-model="checkbox2" />
            </div>
            <div>
              <select
                name="items_number"
                id="items_limit"
                class="form-select"
                aria-label="Number of items to display"
              >
                <option selected>Quantidade</option>
                <option v-for="index in 10" :key="index" :value="index">
                  {{ index }}
                </option>
              </select>
            </div>
          </div>
        </MDBCol>
        <MDBCol sm="12" lg="3">
          <MDBInput label="Pesquisar" v-model="searchQuery" />
        </MDBCol>
        <MDBCol sm="12" md="6" lg="3">
          <select
            name="status"
            id="status"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Status do Processo</option>
            <option value="ativo">Ativos</option>
            <option value="avaliado">Avaliados</option>
            <option value="reprovado">Reprovados</option>
            <option value="transicao">Em avaliação</option>
          </select>
        </MDBCol>
      </MDBRow>
    </form>
  </div>
</template>

<script>
import { MDBCheckbox, MDBCol, MDBRow, MDBInput } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCheckbox,
    MDBCol,
    MDBRow,
    MDBInput,
  },
  data() {
    return {
      checkbox1: false,
      checkbox2: true,
      searchQuery: "",
    };
  },
  // setup() {
  //   const checkbox1 = ref(false);
  //   const checkbox2 = ref(true);

  //   return {
  //     checkbox1,
  //     checkbox2,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.d-flex .form-check {
  margin-right: 5px;
}

.filters-row {
  & > div {
    margin-top: 7px;
  }
}
</style>
