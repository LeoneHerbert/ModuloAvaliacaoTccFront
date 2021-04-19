<template>
  <div>
    <h4 class="mt-4">
      <span class="blue-text">#</span> Informações do graduando
    </h4>
    <student-info />

    <h4 class="mt-4"><span class="blue-text">#</span> Avaliação</h4>

    <writing-evaluation />

    <oral-evaluation />
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

<style></style>
