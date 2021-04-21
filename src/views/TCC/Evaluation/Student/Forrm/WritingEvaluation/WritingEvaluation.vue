<template>
  <div class="">
    <h5 class="section-bg">Apresentação Escrita</h5>

    <div class="compentences mt-2 mb-3">
      <MDBInput label="Conteúdo" v-model="state.content" type="number" />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="state.contentComment"
      />
      <small class="text-danger" v-if="v$.content.$invalid">
        O conteúdo textual deve ter nota de 0 a 5
      </small>
    </div>
    <div class="compentences mt-2 mb-3">
      <MDBInput label="Redação" v-model="state.essay" type="number" />
      <MDBTextarea label="Comentários" rows="4" v-model="state.essayComment" />
      <small class="text-danger" v-if="v$.essay.$invalid">
        A redação deve ter um valor de 0 a 3
      </small>
    </div>
    <div class="compentences mt-2 mb-3">
      <MDBInput
        label="Normalização"
        v-model="state.normalization"
        type="number"
      />
      <MDBTextarea
        label="Comentários"
        rows="4"
        v-model="state.normalizationComment"
      />
      <small class="text-danger" v-if="v$.normalization.$invalid">
        A qualidade da normalização deve ser um valor de 0 a 2
      </small>
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBTextarea } from "mdb-vue-ui-kit";
import useVuelidate from "@vuelidate/core";
import { computed, reactive } from "vue";
import { submitSubHandler } from "@/components/Behaviour/Methods/submit";
import { data } from "./WritingEvaluationData";
import { rules } from "./WritingEvaluationValidations";

export default {
  setup() {
    const state = reactive(data);

    const v$ = useVuelidate(rules, state);
    const submitChild = submitSubHandler(state, v$);

    const total = computed(() => {
      const { content, essay, normalization } = state;
      return parseInt(content) + parseInt(essay) + parseInt(normalization);
    });

    return { v$, submitChild, state, total };
  },
  components: {
    MDBInput,
    MDBTextarea,
  },
};
</script>

<style lang="scss" scoped></style>
