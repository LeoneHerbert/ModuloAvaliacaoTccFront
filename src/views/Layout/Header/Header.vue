<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-blue-200">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <router-link to="/">Home</router-link>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <!-- Navbar dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Gêneros
            </a>
            <!-- Dropdown menu -->

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item text-capitalize" href="#"
                  >desenvolvimento</a
                >
              </li>
              <li>
                <a class="dropdown-item text-capitalize" href="#">internet</a>
              </li>
              <li>
                <a class="dropdown-item text-capitalize" href="#"
                  >banco de dados</a
                >
              </li>
              <li>
                <a class="dropdown-item text-capitalize" href="#">redes</a>
              </li>
              <li>
                <a class="dropdown-item text-capitalize" href="#"
                  >sistemas operacionais</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Outros</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="form-students.html" tabindex="-1"
              >Alunos</a
            >
          </li>
        </ul>
        <!-- Left links -->

        <!-- Search form -->
        <form class="d-flex input-group w-auto">
          <input
            type="search"
            class="form-control"
            placeholder="Pesquisar"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            data-mdb-ripple-color="dark"
          >
            Buscar
          </button>
        </form>

        <ul class="navbar-nav ms-2 mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-mdb-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Entrar
            </a>
            <div
              class="dropdown-menu p-3 login-box dropdown-menu-lg-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <form
                class="form-horizontal"
                method="post"
                accept-charset="UTF-8"
              >
                <legend>
                  Login
                  <span class="material-icons float-end mt-2"> login </span>
                </legend>
                <hr />
                <input
                  class="form-control login mb-3"
                  type="email"
                  name="username"
                  placeholder="Email"
                />
                <input
                  class="form-control login mb-3"
                  type="text"
                  name="senha"
                  placeholder="Senha"
                />
                <div class="d-flex justify-content-between">
                  <a href="/cadastrar.html" class="text-uppercase pt-2"
                    >cadastrar</a
                  >
                  <input
                    class="btn btn-primary flex-end"
                    type="button"
                    name="submit"
                    value="Entrar"
                  />
                </div>
              </form>
            </div>
          </li>
        </ul>

        <!-- Right Links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-blue-200 {
  background-color: #90caf9;
}
</style>
