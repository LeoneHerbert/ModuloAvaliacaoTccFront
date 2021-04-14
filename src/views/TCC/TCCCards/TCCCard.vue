<template>
  <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText class="truncate-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Note the fixed width in use here. The gist is
        that the element needs some kind of determinate width, which you have to
        be particularly careful about with flexbox:
      </MDBCardText>
      <MDBBtn color="primary">Button</MDBBtn>
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
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
  },
};
</script>

<style lang="scss" scoped>
.truncate-text {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
