<template>
  <MDBNavbarNav class="me-0">
    <MDBNavbarItem>
      <!-- Navbar dropdown -->
      <MDBDropdown class="nav-item" v-model="dropdown1">
        <MDBDropdownToggle
          tag="a"
          class="nav-link"
          @click="dropdown1 = !dropdown1"
        >
          <MDBIcon icon="user-circle" />
          <span class="ms-3">
            <strong>Professor Jorge</strong>
          </span>
        </MDBDropdownToggle>
        <MDBDropdownMenu
          aria-labelledby="navbarDropdownMenuLink"
          class="p-3 account-box dropdown-menu-lg-end"
        >
          <MDBDropdownItem href="#">
            <span class="bold">Perfil</span>
            <MDBIcon class="float-end pt-1 blue-text" icon="id-badge" />
          </MDBDropdownItem>
          <MDBDropdownItem href="#">
            <span class="bold">Notificações</span>
            <MDBIcon class="float-end pt-1 blue-text" icon="bell" />
          </MDBDropdownItem>
          <MDBDropdownItem href="#">
            <span class="bold">Processos</span>
            <MDBIcon class="float-end pt-1 blue-text" icon="file-signature" />
          </MDBDropdownItem>

          <MDBDropdownItem href="#">
            <span class="bold">Sair</span>
            <MDBIcon class="float-end pt-1 blue-text" icon="sign-out-alt" />
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarItem>
  </MDBNavbarNav>
</template>

<script>
import {
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBIcon,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBIcon,
    MDBDropdownItem,
  },
  setup() {
    const dropdown1 = ref(false);

    return {
      dropdown1,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-bottom: 5px;
}

.account-box {
  right: -50px !important;
  margin-top: 0;
  margin-right: 90px;
  width: 200px;
}
.me-auto {
  margin-right: 5px !important;
}

.bold {
  font-weight: 600;
}

.blue-text {
  color: $info-color;
}

@media screen and (max-width: 576px) {
  .account-box {
    margin-right: 0px;
  }
}
</style>
