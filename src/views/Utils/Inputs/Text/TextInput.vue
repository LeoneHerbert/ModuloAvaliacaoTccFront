<template>
  <div class="input-field col" :class="colsFormatted">
    <input
      type="text"
      class="validate"
      :id="hash"
      :value="value"
      :disabled="!enabled"
      v-on:input="updateValue($event.target.value)"
    />
    <label :for="hash"><slot></slot></label>
    <div v-if="max">
      <span :class="{ 'red-text': value.length > 100 }"
        >({{ value.length }}/{{ max }})</span
      >
    </div>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "TextInputMaterialize",
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
      type: String,
    },
    cols: {
      type: Array,
      default: function () {
        return [];
      },
    },
    max: {
      type: Number,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
