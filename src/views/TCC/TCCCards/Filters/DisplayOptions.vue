<template>
  <MDBCol sm="12" lg="3">
    <div class="d-flex justify-content-around">
      <!-- <MDBCheckbox label="Em progresso" v-model="checkbox1" /> -->
      <div class="pt-1">
        <MDBCheckbox label="Mais recentes" @change="changeCheckBox($event)" />
      </div>
      <div>
        <select
          name="items_number"
          id="items_limit"
          class="form-select"
          aria-label="Number of items to display"
          @change="changeQuantity($event)"
        >
          <option selected>Quantidade</option>
          <option
            v-for="index in displayQuantityRange"
            :key="index"
            :value="index"
          >
            {{ index }}
          </option>
        </select>
      </div>
    </div>
  </MDBCol>
</template>

<script>
import { MDBCol, MDBCheckbox } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCol,
    MDBCheckbox,
  },
  computed: {
    displayQuantityRange() {
      const end = 8;
      const start = 2;
      return new Array(end - start + 1)
        .fill(undefined)
        .map((_, i) => i + start);
    },
  },
  methods: {
    changeCheckBox(event) {
      const { checked } = event.target;
      this.$emit("view-more-recent", checked);
    },
    changeQuantity(e) {
      const { value } = e.target;
      this.$emit("display-quantity", value);
    },
  },
};
</script>

<style></style>
