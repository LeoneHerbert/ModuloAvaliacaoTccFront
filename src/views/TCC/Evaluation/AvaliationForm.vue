<template>
  <div>
    <h4 class="mt-4">
      <span class="blue-text">#</span> Informações do graduando
    </h4>
    <student-info />

    <h4 class="mt-4"><span class="blue-text">#</span> Avaliação</h4>
    <MDBRow>
      <MDBCol sm="12" md="6">
        <div class="d-flex justify-content-center">
          <writing-evaluation class="evaluation-partition" />
        </div>
      </MDBCol>

      <MDBCol sm="12" md="6">
        <div class="d-flex justify-content-center">
          <oral-evaluation class="evaluation-partition" />
        </div>
      </MDBCol>
    </MDBRow>
  </div>
</template>

<script>
import OralEvaluation from "./Student/Forrm/OralEvaluation.vue";
import WritingEvaluation from "./Student/Forrm/WritingEvaluation.vue";
import StudentInfo from "./Student/StudentInfo.vue";
import { MDBRow, MDBCol } from "mdb-vue-ui-kit";

export default {
  components: {
    StudentInfo,
    WritingEvaluation,
    OralEvaluation,
    MDBRow,
    MDBCol,
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
