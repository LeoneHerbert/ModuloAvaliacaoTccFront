<template>
  <div class="input-field col" :class="colsFormatted">
    <input
      type="number"
      class="validate"
      :id="hash"
      :value="value"
      v-on:input="updateValue($event.target.value)"
    />
    <label :for="hash"><slot></slot></label>
    <span
      class="helper-text"
      data-error="Um número deve ser provido"
      data-success="OK"
    >
    </span>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";
import { isString } from "lodash";

export default {
  name: "TextInputNumericMaterialize",
  computed: {
    hash() {
      const hashGenerated = simpleHash("TextInputMaterialize");
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
      type: [String, Number],
      default: "",
    },
    cols: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  watch: {
    value(newValue) {
      if (!isString(newValue)) {
        newValue = newValue.toString();
      }
    },
  },
};
</script>

<style></style>
