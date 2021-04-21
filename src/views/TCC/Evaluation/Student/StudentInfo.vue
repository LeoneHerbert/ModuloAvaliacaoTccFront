<template>
  <div class="p-5 bg-light bg-white z-depth-2 mt-3 student-info">
    <small class="clean-blue float-end">
      Curso:
      <span class="blue-text-dark">
        {{ student.course }}
      </span>
    </small>
    <div class="">
      <div class="base-info">
        <p class="mb-3">
          Aluno: <span>{{ student.studentName }}</span>
        </p>
        <p class="mb-3">
          Código: <span>{{ student.studentCode }}</span>
        </p>
        <p class="mb-3">
          Tema: <span>{{ student.subject }} </span>
        </p>

        <p>Orientador: <span>Daniel da Silva</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      default: () => ({
        id: 0,
        studentName: "Caius Tito",
        studentCode: "201821150SI",
        subject: "Uso de marcadores fiduciais em cenário de museus - MA",
        course: "Sistemas de Informação",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.student-info {
  border-radius: 20px;
}

.base-info > p {
  color: #f3b773;

  & > span {
    color: #333;
    font-weight: bold;
    display: block;
  }
}
</style>
