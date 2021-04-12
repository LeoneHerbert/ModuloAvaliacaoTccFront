<template>
  <div class="input-field col" :class="colsFormatted">
    <select
      :id="hash"
      :value="value"
      ref="select"
      @change="updateValue($event.target.value)"
    >
      <!-- <option value="" disabled selected>Escolha uma opção</option> -->
      <option
        :selected="option.value === value"
        v-for="option in options"
        v-bind:value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <label :for="hash"><slot></slot></label>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "SelectInputMaterialize",
  data() {
    return {
      loaded: false,
      instance: null,
    };
  },
  computed: {
    hash() {
      const hashGenerated = simpleHash("SelectInputMaterialize");
      return `input-${hashGenerated}`;
    },
    colsFormatted() {
      return this.cols.join(" ");
    },
    computedOptions() {
      return [...this.options];
    },
  },
  mounted() {
    const elem = this.$refs.select;
    // eslint-disable-next-line no-undef
    this.instance = M.FormSelect.init(elem);
  },
  updated() {
    if (this.loaded) return;
    const elem = this.$refs.select;
    // eslint-disable-next-line no-undef
    M.FormSelect.init(elem);
    if (this.options.length > 0) this.loaded = true;
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
  props: {
    value: {
      type: [String, Number],
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
