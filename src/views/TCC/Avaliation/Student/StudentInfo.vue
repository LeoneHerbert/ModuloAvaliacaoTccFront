<template>
  <div class="p-5 bg-light bg-white z-depth-2 mt-3 student-info">
    <div>
      <div class="">
        <p class="mb-3">
          Aluno: <b>{{ studentName }}</b>
        </p>
        <p class="mb-3">
          Código: <b>{{ studentCode }}</b>
        </p>
        <p class="mb-3">Tema:</p>
        <p>
          {{ subject }}
        </p>
        <small>Orientador: <span>Daniel da Silva</span></small>
      </div>
      <small class="clean-blue float-end">
        Curso:
        <span class="blue-text-dark">
          {{ course }}
        </span>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: "Caius Tito",
      studentCode: "201821150SI",
      subject: "Uso de marcadores fiduciais em cenário de museus - MA",
      course: "Sistemas de Informação",
    };
  },
};
</script>

<style lang="scss" scoped>
.student-info {
  border-radius: 20px;
}
</style>
