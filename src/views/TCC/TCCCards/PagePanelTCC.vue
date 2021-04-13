<template>
  <div>
    <mdb-icon fab icon="500px" />
    <MDBIcon icon="camera-retro" />
    <pagination-materialized
      total="30"
      per-page="5"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import PaginationMaterialized from "@/views/Utils/Pagination/PaginationMaterialized";
import { MDBIcon } from "mdb-vue-ui-kit";

export default {
  components: {
    PaginationMaterialized,
    MDBIcon,
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
