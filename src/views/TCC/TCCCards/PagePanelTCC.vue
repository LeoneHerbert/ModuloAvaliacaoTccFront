<template>
  <div>
    <tcc-filters
      v-model:status="filters.status"
      v-model:searchQuery="filters.searchQuery"
      v-model:moreRecent="filters.moreRecent"
      v-model:displayOptions="filters.displayOptions"
    />

    <MDBRow>
      <MDBCol
        sm="12"
        md="6"
        :lg="showInLarge"
        v-for="(item, index) in tccs.splice(
          (currentPage - 1) * perPage,
          (currentPage - 1) * perPage + perPage
        )"
        :key="index"
      >
        <tcc-card class="my-3" :tcc="item" />
      </MDBCol>
    </MDBRow>
    <div class="d-flex my-5">
      <PaginationMDBootstrap
        :total="tccs.length"
        :per-page="perPage"
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
import { mapState } from "vuex";

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
        displayOptions: "8",
      },
      perPage: 5,
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
    ...mapState({
      // arrow functions can make the code very succinct!
      tccs: (state) => state.tccs.data,
    }),
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
