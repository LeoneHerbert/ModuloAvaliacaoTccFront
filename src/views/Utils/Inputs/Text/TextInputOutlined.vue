<template>
  <div class="col input-field input-outlined white" :class="colsFormatted">
    <input
      type="text"
      class="validate"
      :id="hash"
      :value="value"
      :disabled="!enabled"
      v-on:input="updateValue($event.target.value)"
    />
    <label :for="hash"><slot></slot></label>
  </div>
</template>

<script>
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
    enabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.input-field.input-outlined {
  > input {
    border: 2px solid #eee !important;
    padding: 12px 16px 14px;
    width: calc(100% - 2.5rem);
    float: none;
    display: block;
    border-radius: 4px;
    transition: box-shadow, border-color 0.15s;
    &:focus:not([readonly]) {
      border-color: #26a69b !important;
      box-shadow: 0 1px 0 0px #26a69b;
    }
  }
  > label {
    left: 27px;
    display: inline-flex;
    width: auto !important;
    &.active {
      background: white;
      border-left: 4px solid white;
      border-right: 4px solid white;
      transform: translateY(-1.75rem);
      top: 1rem;
    }
  }
}
</style>