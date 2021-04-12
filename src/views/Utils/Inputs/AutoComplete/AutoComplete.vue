<template>
  <div class="input-field col" :class="colsFormatted">
    <i class="material-icons prefix">class</i>
    <input
      type="text"
      class="autocomplete"
      :id="hash"
      ref="autocomplete"
      :value="value"
    />
    <label :for="hash"><slot></slot></label>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
// This element receives an array of Objects from type {'namedBy': String, 'value': Number, icon: String?}
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "AutoCompleteMaterialize",
  data() {
    return {
      autocompleteElement: null,
    };
  },
  updated() {
    const { autocomplete } = this.$refs;
    // eslint-disable-next-line no-undef
    this.autocompleteElement = M.Autocomplete.init(autocomplete, {
      onAutocomplete: (value) => {
        this.updateValue(value);
      },
      data: this.data,
    });
  },
  computed: {
    hash() {
      const hashGenerated = simpleHash("AutoCompleteMaterialize");
      return `input-${hashGenerated}`;
    },
    colsFormatted() {
      return this.cols.join(" ");
    },
    data() {
      const reduced = this.subjects.reduce(function (
        accumulator,
        currentValue
      ) {
        accumulator[currentValue.text] = currentValue.icon || null;
        return accumulator;
      },
      {});
      return reduced;
    },
  },
  methods: {
    updateValue: function (value) {
      const { value: id } = this.subjects.find((el) => el.text === value);
      this.$emit("selected-value", id);
    },
  },
  props: {
    value: {
      type: Number,
    },
    cols: {
      type: Array,
      default: function () {
        return [];
      },
    },
    subjects: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style></style>
