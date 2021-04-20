<template>
  <MDBNavbar expand="lg" light bg="gabs" container="md">
    <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
        <MDBNavbarItem to="/tcc"> TCCs </MDBNavbarItem>
        <header-dropdown />
        <MDBNavbarItem to="#" disabled> Disabled </MDBNavbarItem>
        <template v-slot:contentRight>
          <span class="navbar-text"> Navbar text with an inline element </span>
        </template>
      </MDBNavbarNav>
      <account-box v-if="loggedIn" />
      <login-box v-else />
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
import { mapState } from "vuex";
import AccountBox from "./AccountBox.vue";

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
    AccountBox,
  },
  setup() {
    const collapse1 = ref(false);
    return {
      collapse1,
    };
  },
  computed: {
    ...mapState({
      loggedIn: (state) => state.loggedIn,
    }),
  },
};
</script>

<style lang="scss">
.bg-gabs {
  background-color: #90caf9;
}
</style>
