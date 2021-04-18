<template>
  <MDBNavbarNav class="me-0">
    <MDBNavbarItem>
      <!-- Navbar dropdown -->
      <MDBDropdown class="nav-item" v-model="dropdown1">
        <MDBDropdownToggle
          tag="a"
          class="nav-link"
          @click="dropdown1 = !dropdown1"
          >Entrar</MDBDropdownToggle
        >
        <MDBDropdownMenu
          aria-labelledby="navbarDropdownMenuLink"
          class="p-3 login-box dropdown-menu-lg-end"
        >
          <form class="form-horizontal" method="post" accept-charset="UTF-8">
            <legend class="align-end text-end">Login</legend>
            <hr />
            <MDBInput
              label="Usuário"
              type="email"
              name="username"
              class="my-2"
            />
            <MDBInput label="Senha" type="password" class="my-2" />
            <div class="d-flex justify-content-between">
              <a href="#" class="text-uppercase pt-2">cadastrar</a>
              <input
                class="btn btn-primary flex-end"
                type="button"
                name="submit"
                value="Entrar"
                @click="logIn"
              />
            </div>
          </form>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarItem>
  </MDBNavbarNav>
</template>

<script>
import {
  MDBInput,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { mapActions } from "vuex";

export default {
  components: {
    MDBInput,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
  },
  setup() {
    const dropdown1 = ref(false);

    return {
      dropdown1,
    };
  },
  methods: {
    ...mapActions(["logIn"]),
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-bottom: 5px;
}
.dropdown-menu {
  width: 300px !important;
}
.login-box {
  min-width: 300px;
  right: -50px !important;
  margin-top: 0;
  margin-right: 100px;
}
.me-auto {
  margin-right: 5px !important;
}

@media screen and (max-width: 576px) {
  .login-box {
    margin-right: 0px;
  }
}
</style>
