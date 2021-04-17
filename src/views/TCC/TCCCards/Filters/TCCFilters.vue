/* eslint-disable vue/no-mutating-props */
<template>
  <div>
    <form>
      <MDBRow class="filters-row">
        <display-options
          @view-more-recent="changeRecent"
          @display-quantity="changeQuantity"
        />
        <status-tcc v-model="statusComputed" />
        <search-tcc v-model="searchQueryComputed" />
      </MDBRow>
    </form>
  </div>
</template>

<script>
import { MDBRow } from "mdb-vue-ui-kit";
import DisplayOptions from "./DisplayOptions";
import SearchTcc from "./SearchTCC";
import StatusTcc from "./StatusTCC";
import { useModelWrapper } from "@/components/ModelWrapper/ComputedModelWrapper";

export default {
  props: {
    status: String,
    searchQuery: String,
    moreRecent: Boolean,
    displayOptions: String,
  },
  setup(props, { emit }) {
    const filters = ["status", "searchQuery", "moreRecent", "displayOptions"];
    const computedFilters = filters.map((el) => {
      const computedPropertyName = `${el}Computed`;
      return [computedPropertyName, useModelWrapper(props, emit, el)];
    });
    const transformed = Object.fromEntries(computedFilters);
    return {
      ...transformed,
    };
  },
  methods: {
    changeRecent(value) {
      this.moreRecentComputed = value;
    },
    changeQuantity(value) {
      this.displayOptionsComputed = value;
    },
  },
  components: {
    MDBRow,
    DisplayOptions,
    SearchTcc,
    StatusTcc,
  },
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
