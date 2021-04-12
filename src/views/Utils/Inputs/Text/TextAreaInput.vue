<template>
  <div class="input-field col" :class="colsFormatted">
    <textarea
      :id="hash"
      :value="value"
      v-on:input="updateValue($event.target.value)"
      class="materialize-textarea validate"
      :data-length="dataLength"
    ></textarea>
    <label :for="hash"><slot></slot></label>
    <small v-if="dataLength > 0">
      <span :class="{ 'red-text': value.length > dataLength }">
        {{ value.length }}/{{ dataLength }}
      </span>
    </small>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "TextInputAreaMaterialize",
  computed: {
    hash() {
      const hashGenerated = simpleHash("TextInputMaterialize");
      return `input-text-area-${hashGenerated}`;
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
    dataLength: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
