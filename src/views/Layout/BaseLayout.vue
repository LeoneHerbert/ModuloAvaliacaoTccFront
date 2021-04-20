<template>
  <div class="content-background" :class="{ loaded: !isLoading }">
    <mdb-header />
    <div id="main">
      <div class="wrapper">
        <MDBContainer>
          <main class="container-main mb-5" style="min-height: 700px">
            <router-view />
          </main>
        </MDBContainer>
      </div>
    </div>
    <intern-footer></intern-footer>
  </div>
</template>

<script>
import InternFooter from "./Footer/Footer";
import MdbHeader from "./Header/MDBHeader.vue";
import { MDBContainer } from "mdb-vue-ui-kit";

export default {
  name: "BaseLayout",
  data: () => ({
    drawer: false,
    loading: false,
  }),

  mounted() {
    this.toggleLoading();
  },
  components: {
    InternFooter,
    MdbHeader,
    MDBContainer,
  },
  computed: {
    isLoading() {
      return this.loading;
    },
  },
  methods: {
    toggleLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
  },
  // watch: {
  //   $route: function () {
  //     this.toggleLoading();
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
