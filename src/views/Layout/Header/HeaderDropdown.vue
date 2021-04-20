<template>
  <MDBNavbarItem>
    <!-- Navbar dropdown -->
    <MDBDropdown class="nav-item" v-model="dropdown1">
      <MDBDropdownToggle
        tag="a"
        class="nav-link"
        @click="dropdown1 = !dropdown1"
        >Dropdown</MDBDropdownToggle
      >
      <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
        <MDBDropdownItem href="#">Action</MDBDropdownItem>
        <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
        <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  </MDBNavbarItem>
</template>

<script>
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBNavbarItem,
  },
  setup() {
    const dropdown1 = ref(false);

    return {
      dropdown1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
