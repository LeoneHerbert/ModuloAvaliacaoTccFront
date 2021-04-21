<template>
  <MDBCard>
    <MDBCardBody>
      <MDBCardTitle class="truncate-text-title"> {{ tcc.nome }} </MDBCardTitle>
      <MDBCardText class="truncate-text small">
        {{ tcc.content }}
      </MDBCardText>
      <div class="my-2">
        <MDBIcon icon="chalkboard-teacher" class="blue-text-dark pr-3 mr-3" />
        <small class="ps-2">
          Professor:
          <span class="bold"> {{ tcc.aluno }} </span>
        </small>
      </div>
      <div class="my-2">
        <MDBIcon icon="user-graduate" class="blue-text pr-3 mr-3" />
        <small class="ps-2">
          Graduando:
          <span class="bold"> {{ tcc.orientador }} </span>
        </small>
      </div>
      <MDBBtn color="primary">
        <router-link to="/avaliar" class="white-text text-white mr-2 pe-2"
          >AVALIAR</router-link
        >
        <MDBIcon icon="external-link-alt"
      /></MDBBtn>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBIcon,
    MDBCardText,
    MDBBtn,
  },
  props: {
    tcc: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-height: 300px;
}

.truncate-text {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.truncate-text-title {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.small {
  font-size: 0.9rem;
  height: 90px;
}
</style>
