<template>
  <div>
    <form>
      <MDBRow class="filters-row">
        <display-options @view-more-recent="changeMoreRecent" />
        <status-tcc v-model="status" />
        <search-tcc v-model="searchQuery" />
      </MDBRow>
    </form>
  </div>
</template>

<script>
import { MDBRow } from "mdb-vue-ui-kit";
import DisplayOptions from "./DisplayOptions";
import SearchTcc from "./SearchTCC";
import StatusTcc from "./StatusTCC";

export default {
  components: {
    MDBRow,
    DisplayOptions,
    SearchTcc,
    StatusTcc,
  },
  data() {
    return {
      moreRecent: false,
      status: "",
      searchQuery: "",
    };
  },
  methods: {
    changeMoreRecent(value) {
      this.moreRecent = value;
    },
  },

  // setup() {
  //   const checkbox1 = ref(false);
  //   const checkbox2 = ref(true);

  //   return {
  //     checkbox1,
  //     checkbox2,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.d-flex .form-check {
  margin-right: 5px;
}

.filters-row {
  & > div {
    margin-top: 7px;
  }
}
</style>
