<template>
  <div>
    <tcc-filters />
    <MDBRow>
      <MDBCol sm="12" md="6" lg="3" v-for="index in 8" :key="index">
        <tcc-card class="my-3" />
      </MDBCol>
    </MDBRow>
    <div class="d-flex my-5">
      <PaginationMDBootstrap
        :total="30"
        :per-page="5"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import PaginationMDBootstrap from "@/views/Utils/Pagination/PaginationBootstrap";
import { MDBCol, MDBRow } from "mdb-vue-ui-kit";
import TccCard from "./TCCCard.vue";
import TccFilters from "./TCCFilters.vue";

export default {
  components: {
    PaginationMDBootstrap,
    MDBCol,
    MDBRow,
    TccCard,
    TccFilters,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style></style>
