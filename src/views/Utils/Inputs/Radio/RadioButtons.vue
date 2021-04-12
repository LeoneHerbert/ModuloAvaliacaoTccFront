<template>
  <div :id="hash" class="col" :class="colsFormatted">
    <h6><slot>Seleções</slot></h6>
    <p v-for="g in computedOptions" :key="g.value">
      <label>
        <input
          class="with-gap"
          :name="hash"
          type="radio"
          v-on:input="updateValue($event.target.value)"
          :value="g.value"
        />
        <span class="black-text">{{ g.label }}</span>
      </label>
    </p>
  </div>
</template>

<script>
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "RadioInputMaterialize",
  computed: {
    hash() {
      const hashGenerated = simpleHash("RadioInputMaterialize");
      return `input-radio-${hashGenerated}`;
    },
    colsFormatted() {
      return this.cols.join(" ");
    },
    computedOptions() {
      return [...this.options];
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
    options: {
      type: Array,
      default: function () {
        return [];
      },
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

<style></style>
