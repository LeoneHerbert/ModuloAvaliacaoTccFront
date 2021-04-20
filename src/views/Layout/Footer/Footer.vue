<template>
  <MDBFooter :text="['center', 'lg-start']" class="z-depth-2">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="6" md="12" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Footer Content</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
            ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
            repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
            sint!
          </p>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 4</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 4</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->
      </MDBRow>
      <!--Grid row-->
    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3 page-footer btn-info">
      Copyright ©
      {{ new Date().getFullYear() }}
      <a class="text-dark" href="https://github.com/gabrielberthier">
        Me, GABRI
      </a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
  },
};
</script>

<style lang="scss" scoped></style>
