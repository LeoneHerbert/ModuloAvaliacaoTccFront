<template>
  <div class="input-field col required-field" :class="{ colsFormatted }">
    <the-mask
      type="text"
      class="datepicker"
      :mask="'##/##/####'"
      :masked="true"
      :value="value"
      :id="hash"
      ref="dtpk"
      v-on:input="updateInput($event)"
      required
    />
    <label :for="hash">
      <slot></slot>
    </label>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";
import { TheMask } from "vue-the-mask";
import { dateConverter } from "@/utils/date/date-converter";
import { options } from "./picker-options";

export default {
  name: "DatePickerMaterialize",
  computed: {
    hash() {
      const hashGenerated = simpleHash("DatePickerMaterialize");
      return `input-date-picker-${hashGenerated}`;
    },
    colsFormatted() {
      return this.cols.join(" ");
    },
  },
  components: {
    TheMask,
  },
  mounted() {
    const elem = this.$refs.dtpk;

    options.onSelect = (date) => {
      this.updateValue(dateConverter(date));
    };
    // eslint-disable-next-line no-unused-vars, no-undef
    const instances = M.Datepicker.init(elem.$el, options);
  },
  methods: {
    updateInput(event) {
      if (event) {
        this.updateValue(event);
      }
    },
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
};
</script>

<style>
</style>