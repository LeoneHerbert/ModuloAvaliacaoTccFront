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
<style>
.z-depth-1 {
  -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
}
.z-depth-2 {
  -webkit-box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
    0 2px 4px -1px rgb(0 0 0 / 30%);
}
.z-depth-3 {
  -webkit-box-shadow: 0 8px 17px 2px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);
  box-shadow: 0 8px 17px 2px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%),
    0 5px 5px -3px rgb(0 0 0 / 20%);
}
.z-depth-4 {
  -webkit-box-shadow: 0 16px 24px 2px rgb(0 0 0 / 14%),
    0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
  box-shadow: 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%),
    0 8px 10px -7px rgb(0 0 0 / 20%);
}
.z-depth-5 {
  -webkit-box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%),
    0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);
  box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%),
    0 11px 15px -7px rgb(0 0 0 / 20%);
}
</style>
