<template>
  <div>
    <h4 class="mt-4">
      <span class="blue-text">#</span> Informações do graduando
    </h4>
    <student-info :student="student" />

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

    <div class="d-flex justify-content-center my-3">
      <p>
        <b>Média do aluno: </b> <span>{{ average }} pontos</span>
      </p>
    </div>

    <div class="d-flex justify-content-center my-4">
      <MDBBtn color="primary" style="width: 100%" @click="submit">
        Submeter Avaliação
      </MDBBtn>
    </div>
    <error-modal v-model="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import OralEvaluation from "./Student/Forrm/OralEvaluation/OralEvaluation.vue";
import WritingEvaluation from "./Student/Forrm/WritingEvaluation/WritingEvaluation.vue";
import StudentInfo from "./Student/StudentInfo.vue";
import { MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";
import ErrorModal from "@/components/Modal/ErrorModal.vue";
import { getStudent } from "@/services/student";

export default {
  components: {
    StudentInfo,
    WritingEvaluation,
    OralEvaluation,
    MDBRow,
    MDBCol,
    ErrorModal,
    MDBBtn,
  },
  data() {
    return {
      evaluations: [],
      average: 0,
      showModal: false,
      student: {},
    };
  },
  beforeMount() {
    getStudent(1).then(({ data }) => {
      const { email, id, matricula, nome } = data.dados;
      const payload = {
        studentName: nome,
        studentCode: matricula,
        course: "Sistemas de informação",
        id,
        subject: "Análise de Software no Mercado Moderno",
        email,
      };
      Object.assign(this.student, payload);
    });
  },
  mounted() {
    const { writingEvaluation, oralEvaluation } = this.$refs;
    this.evaluations.push(writingEvaluation);
    this.evaluations.push(oralEvaluation);
  },
  methods: {
    submit() {
      const evaluations = this.evaluations
        .map((el) => el.submitChild())
        .filter((el) => !!el);
      if (evaluations.length === this.evaluations.length) {
        const data = evaluations.reduce(
          (prev, current) => Object.assign(prev, current),
          {}
        );
        let total = 0;
        this.evaluations.forEach((el) => {
          total += el.total;
        });
        this.average = total / evaluations.length;
        console.log(data);
        console.log("Enviando requisição");
        alert("AVALIAÇÃO REALIZADA");
        this.$router.go(-1);
        return;
      }
      this.showModal = true;
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
