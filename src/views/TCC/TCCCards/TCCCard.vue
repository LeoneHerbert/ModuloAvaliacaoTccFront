<template>
  <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Nome TCC</MDBCardTitle>
      <MDBCardText class="truncate-text small">
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Note the fixed width in use here. The gist is
        that the element needs some kind of determinate width, which you have to
        be particularly careful about with flexbox:
      </MDBCardText>
      <div class="my-2">
        <MDBIcon icon="chalkboard-teacher" class="blue-text-dark pr-3 mr-3" />
        <small class="ps-2">
          Professor:
          <span class="bold"> Orientador </span>
        </small>
      </div>
      <div class="my-2">
        <MDBIcon icon="user-graduate" class="blue-text pr-3 mr-3" />
        <small class="ps-2">
          Graduando:
          <span class="bold"> Aluno </span>
        </small>
      </div>
      <MDBBtn color="primary">
        avaliar <MDBIcon icon="external-link-alt"
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
};
</script>

<style lang="scss" scoped>
.truncate-text {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.small {
  font-size: 0.9rem;
}

.blue-text {
  color: $info-color;
}

.blue-text-dark {
  color: $info-color-dark;
}

.bold {
  font-weight: bold;
  color: #222;
}
</style>
