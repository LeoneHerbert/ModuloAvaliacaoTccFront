<template>
  <div>
    <h4 class="mt-4">
      <span class="blue-text">#</span> Informações do graduando
    </h4>
    <student-info />

    <h4 class="mt-4"><span class="blue-text">#</span> Avaliação</h4>

    <writing-evaluation class="evaluation-partition" />

    <oral-evaluation class="evaluation-partition" />
  </div>
</template>

<script>
import OralEvaluation from "./Student/Forrm/OralEvaluation.vue";
import WritingEvaluation from "./Student/Forrm/WritingEvaluation.vue";
import StudentInfo from "./Student/StudentInfo.vue";
export default {
  components: {
    StudentInfo,
    WritingEvaluation,
    OralEvaluation,
  },
};
</script>

<style lang="scss">
.compentences .form-outline {
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 350px;
  margin-left: 0px;

  & .form-control ~ .form-label {
    transform: translateY(-1rem) translateY(0.1rem) scale(0.8);
  }
}

.section-bg {
  background-color: #f3b773;
  padding: 3px;
  display: inline-block;
}
</style>
