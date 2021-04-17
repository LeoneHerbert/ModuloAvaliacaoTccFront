<template>
  <div>
    <tcc-filters
      v-model:status="filters.status"
      v-model:searchQuery="filters.searchQuery"
      v-model:moreRecent="filters.moreRecent"
      v-model:displayOptions="filters.displayOptions"
    />
    <pre>
      {{ filters.displayOptionsInput }}
    </pre>
    <MDBRow>
      <MDBCol sm="12" md="6" :lg="showInLarge" v-for="index in 8" :key="index">
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
import TccFilters from "./Filters/TCCFilters.vue";

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
      filters: {
        status: "",
        searchQuery: "",
        moreRecent: "",
        displayOptions: 8,
      },
    };
  },
  computed: {
    displayOptionsInput() {
      return this.filters.displayOptions;
    },
    showInLarge() {
      if (this.displayOptionsInput == 2) {
        return "6";
      }
      if (this.displayOptionsInput % 3 === 0) {
        return "4";
      }
      return "3";
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  watch: {
    filters: {
      deep: true,
      handler(n) {
        console.log(n);
      },
    },
  },
};
</script>

<style></style>
