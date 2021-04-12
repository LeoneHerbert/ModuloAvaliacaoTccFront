<template>
  <MDBNavbar expand="lg" light bg="light" container="md">
    <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
        <MDBNavbarItem href="#"> Link </MDBNavbarItem>
        <header-dropdown />
        <MDBNavbarItem to="#" disabled> Disabled </MDBNavbarItem>
        <template v-slot:contentRight>
          <span class="navbar-text"> Navbar text with an inline element </span>
        </template>
      </MDBNavbarNav>
      <login-box />
    </MDBCollapse>
  </MDBNavbar>
</template>
<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import LoginBox from "./LoginBox.vue";
import HeaderDropdown from "./HeaderDropdown.vue";

export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    LoginBox,
    HeaderDropdown,
  },
  setup() {
    const collapse1 = ref(false);
    return {
      collapse1,
    };
  },
};
</script>

<style></style>
