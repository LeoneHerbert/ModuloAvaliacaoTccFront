<template>
  <div class="input-field col" :class="colsFormatted">
    <input
      :id="hash"
      class="validate"
      :value="value"
      v-on:input="updateValue($event.target.value)"
      v-money="money"
    />
    <label class="active" :for="hash"><slot></slot></label>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";
import { VMoney } from "v-money";

export default {
  name: "TextInputMoneyMaterialize",
  data() {
    return {
      money: {
        prefix: "R$ ",
        precision: 2,
      },
    };
  },
  computed: {
    hash() {
      const hashGenerated = simpleHash("TextInputMoneyMaterialize");
      return `input-${hashGenerated}`;
    },
    colsFormatted() {
      return this.cols.join(" ");
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
  props: {
    value: {
      type: String,
    },
    cols: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  directives: { money: VMoney },
};
</script>

<style></style>
