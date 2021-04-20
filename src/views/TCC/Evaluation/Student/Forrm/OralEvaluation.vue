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

      <small
        class="text-red text-danger"
        v-if="v$.expositionCapability.$invalid"
      >
        A capacidade de exposição deve ser uma nota de 0 a 5.
      </small>
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
      <small class="text-danger" v-if="v$.responseCapability.$invalid">
        O valor das repostas às arguições deve ser uma nota de 0 a 4.
      </small>
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
      <small class="text-danger" v-if="v$.timePrediction.$invalid">
        A nota de previsão do tempo deve ser uma nota de 0 a 1.
      </small>
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBTextarea } from "mdb-vue-ui-kit";
import useVuelidate from "@vuelidate/core";
import { required, numeric, between } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
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
  validations() {
    return {
      expositionCapability: { required, numeric, between: between(0, 5) }, // Matches this.firstName
      responseCapability: { required, numeric, between: between(0, 4) }, // Matches this.lastName
      timePrediction: { required, numeric, between: between(0, 1) },
    };
  },
};
</script>

<style lang="scss" scoped>
.section-bag {
  background-color: #f3b773;
  display: inline-block;
}
</style>
