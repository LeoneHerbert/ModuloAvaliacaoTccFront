<template>
  <div>
    <h4 class="mt-4">
      <span class="blue-text">#</span> Informações do graduando
    </h4>
    <student-info />

    <h4 class="my-4"><span class="blue-text">#</span> Avaliação</h4>
    <MDBRow>
      <MDBCol sm="12" md="6">
        <div class="d-flex justify-content-center">
          <writing-evaluation
            class="evaluation-partition"
            ref="writingEvaluation"
          />
        </div>
      </MDBCol>

      <MDBCol sm="12" md="6">
        <div class="d-flex justify-content-center">
          <oral-evaluation class="evaluation-partition" ref="oralEvaluation" />
        </div>
      </MDBCol>
    </MDBRow>

    <div class="d-flex justify-content-center my-4">
      <MDBBtn color="primary" style="width: 100%" @click="submit">
        Submeter Avaliação
      </MDBBtn>
    </div>
  </div>
</template>

<script>
import OralEvaluation from "./Student/Forrm/OralEvaluation/OralEvaluation.vue";
import WritingEvaluation from "./Student/Forrm/WritingEvaluation/WritingEvaluation.vue";
import StudentInfo from "./Student/StudentInfo.vue";
import { MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

export default {
  components: {
    StudentInfo,
    WritingEvaluation,
    OralEvaluation,
    MDBRow,
    MDBCol,
    MDBBtn,
  },
  data() {
    return {
      evaluations: [],
    };
  },
  mounted() {
    const { writingEvaluation, oralEvaluation } = this.$refs;
    this.evaluations.push(writingEvaluation);
    this.evaluations.push(oralEvaluation);
  },
  methods: {
    submit() {
      this.evaluations.forEach((el) => console.log(el.v$));
    },
  },
};
</script>

<style lang="scss">
.section-bg {
  background-color: #f3b773;
  padding: 3px;
  display: inline-block;
}

.hr-vertical {
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  height: 100vh;
  width: 1px;
}

.evaluation-partition {
  width: 90%;
  .compentences {
    margin: 0 auto;
  }
}
</style>
