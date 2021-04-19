<template>
  <div>
    <h5 class="section-bg">Apresentação Escrita</h5>
    <div class="compentences">
      <MDBInput
        label="Capacidade de Exposição"
        v-model="expositionCapability"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="expositionCapabilityComment"
      />
    </div>
    <div class="compentences">
      <MDBInput
        label="Respostas às arguições"
        v-model="responseCapability"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="responseCapabilityComment"
      />
    </div>
    <div class="compentences">
      <MDBInput
        label="Previsão do tempo"
        v-model="timePrediction"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="timePredictionComment"
      />
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBTextarea } from "mdb-vue-ui-kit";

export default {
  data() {
    return {
      expositionCapability: 0,
      responseCapability: 0,
      timePrediction: 0,
      expositionCapabilityComment: "",
      responseCapabilityComment: "",
      timePredictionComment: "",
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
