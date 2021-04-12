<template>
  <div class="col" :class="colsFormatted">
    <label :for="hash">
      <slot name="labeled-by" class="selection-label"></slot>
    </label>
    <v-select
      :options="options"
      :placeholder="placeholder"
      :id="hash"
      :value="value"
      v-on:input="updateValue"
      :append-to-body="appendToBody"
      :multiple="multiple"
    >
      <template v-slot:no-options="{ search, searching }">
        <template v-if="searching">
          <slot name="no-option">
            Não foram encontrados resultados para <em>{{ search }}</em
            >.
          </slot>
        </template>
        <b style="opacity: 0.7" v-else>
          <slot name="default"> Comece a digitar para buscar </slot>
        </b>
      </template>
    </v-select>
  </div>
</template>

<script>
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "SelectInputVue-Select",
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    hash() {
      const hashGenerated = simpleHash("SelectInputVue-Select");
      return `input-${hashGenerated}`;
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
      type: Object,
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
    appendToBody: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Escolha uma opção",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>
