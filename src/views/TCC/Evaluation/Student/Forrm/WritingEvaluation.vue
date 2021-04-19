<template>
  <div>
    <h5 class="section-bg">Apresentação Escrita</h5>
    <div class="compentences">
      <MDBInput label="Conteúdo" v-model="content" type="number" />
      <MDBTextarea label="Comentários" rows="4" v-model="contentComment" />
    </div>
    <div class="compentences">
      <MDBInput label="Redação" v-model="essay" type="number" />
      <MDBTextarea label="Comentários" rows="4" v-model="essayComment" />
    </div>
    <div class="compentences">
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

export default {
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
};
</script>

<style lang="scss" scoped>
.section-bag {
  background-color: #f3b773;
  display: inline-block;
}
</style>
