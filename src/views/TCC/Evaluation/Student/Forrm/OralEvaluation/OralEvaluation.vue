<template>
  <div>
    <h5 class="section-bg">Apresentação Escrita</h5>
    <div class="compentences">
      <MDBInput
        label="Capacidade de Exposição"
        v-model="state.expositionCapability"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="state.expositionCapabilityComment"
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
        v-model="state.responseCapability"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="state.responseCapabilityComment"
      />
      <small class="text-danger" v-if="v$.responseCapability.$invalid">
        O valor das repostas às arguições deve ser uma nota de 0 a 4.
      </small>
    </div>
    <div class="compentences">
      <MDBInput
        label="Previsão do tempo"
        v-model="state.timePrediction"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="state.timePredictionComment"
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
import { computed, reactive } from "vue";
import { submitSubHandler } from "@/components/Behaviour/Methods/submit";
import { data } from "./OralEvaluationData";
import { rules } from "./OralEvoluationValidations";

export default {
  setup() {
    const state = reactive(data);

    const v$ = useVuelidate(rules, state);
    const submitChild = submitSubHandler(state, v$);

    const total = computed(() => {
      const {
        expositionCapability,
        responseCapability,
        timePrediction,
      } = state;
      return (
        parseInt(expositionCapability) +
        parseInt(responseCapability) +
        parseInt(timePrediction)
      );
    });

    return { v$, submitChild, state, total };
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
