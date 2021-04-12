<template>
  <div class="row" style="display: flex">
    <div class="col s12 m12 l8" style="margin: 0 auto">
      <div
        class="container-cep z-depth-1"
        style="margin-top: 20px; border-radius: 5px"
      >
        <p
          class="h6 input-area-header"
          style="display: inline; margin-top: 15px"
        >
          <i class="material-icons">outlined_flag</i>
          Pesquisar por CEP:
        </p>
        <div class="valign-wrapper" style="display: inline">
          <input
            id="cep-search"
            type="text"
            v-model="searchCEP"
            v-on:keyup.enter="fetchCEP"
          />
          <a
            class="waves-effect waves-light btn right btn-search-cep"
            @click="fetchCEP"
          >
            <i class="material-icons">search</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { retrieveCep } from "@/services/fetch-cep/fetch-via-cep";

export default {
  name: "CepSearch",
  data() {
    return {
      searchCEP: "",
      address: {},
    };
  },
  methods: {
    fetchCEP() {
      if (this.searchCEP !== null && this.searchCEP !== "") {
        retrieveCep(this.searchCEP)
          .then(({ data }) => {
            this.address = data;
          })
          .catch(() => {
            alert("CEP inválido");
          });
      }
    },
  },
};
</script>

<style>
#cep-search {
  display: inline;
  max-width: 150px;
  margin-left: 7px;
}

.btn-search-cep {
  margin-top: 2%;
}

.container-cep {
  padding: 15px 10px;
}
</style>
