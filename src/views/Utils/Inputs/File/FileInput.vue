<template>
  <div class="input-field col file-field" :class="colsFormatted">
    <div class="btn blue">
      <span><slot>File</slot></span>
      <input
        type="file"
        :id="hash"
        :ref="`file-${hash}`"
        accept="image/*"
        @change="updateValue(hash)"
      />
    </div>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text" />
    </div>
  </div>
</template>

<script>
// A tip to the future:
// For this component and all components using v-model externally to work,
// you MUST declare a property called 'value' and bind input's value to it.
import { simpleHash } from "@/utils/hashing/simple-hash";

export default {
  name: "FileInputMaterialize",
  data() {
    return {
      file: "",
    };
  },
  computed: {
    hash() {
      const hashGenerated = simpleHash("FileInputMaterialize");
      return `input-${hashGenerated}`;
    },
    colsFormatted() {
      return this.cols.join(" ");
    },
  },
  methods: {
    updateValue: function (hash) {
      let fileExtension = ["image/jpeg", "image/jpg", "image/png"];

      this.file = this.$refs[`file-${hash}`].files[0];
      if (!fileExtension.includes(this.file.type)) {
        this.raiseToast(
          "Formato de imagem inválido! Por favor, certifique-se que a foto esteja no formato JPG, JPEG ou PNG"
        );
        return false;
      }
      if (this.file.size > 1024 * 1024) {
        this.raiseToast(
          "Tamanho de imagem inválido, por favor insira uma imagem menos de 1mb"
        );
        return false;
      }
      this.$emit("file-changed", this.file);
    },
    raiseToast(content = "") {
      var toastHTML = `<span>${content}</span>`;
      // eslint-disable-next-line no-undef
      M.toast({ html: toastHTML });
    },
    clean() {
      this.file = "";
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

<style></style>
