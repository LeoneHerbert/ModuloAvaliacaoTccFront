<template>
  <div class="">
    <h5 class="section-bg">Apresentação Escrita</h5>

    <div class="compentences mt-2 mb-3">
      <MDBInput label="Conteúdo" v-model="content" type="number" />
      <MDBTextarea label="Comentários" rows="4" v-model="contentComment" />
    </div>
    <div class="compentences mt-2 mb-3">
      <MDBInput label="Redação" v-model="essay" type="number" />
      <MDBTextarea label="Comentários" rows="4" v-model="essayComment" />
    </div>
    <div class="compentences mt-2 mb-3">
      <MDBInput label="Normalização" v-model="normalization" type="number" />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="normalizationComment"
      />
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBTextarea } from "mdb-vue-ui-kit";
import useVuelidate from "@vuelidate/core";
import { numeric, required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      content: 0,
      contentComment: "",
      essay: 0,
      essayComment: "",
      normalization: 0,
      normalizationComment: "",
    };
  },
  components: {
    MDBInput,
    MDBTextarea,
  },
  validations() {
    return {
      content: {
        required,
        numeric,
      },
      essay: {
        required,
        numeric,
      },
      normalization: {
        required,
        numeric,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
