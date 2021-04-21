<template>
  <!-- Button trigger modal -->
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="errorModal"
  >
    <MDBModalHeader
      bg="danger"
      class="modal-header bg-danger text-white d-flex justify-content-center"
    >
      <MDBModalTitle id="exampleModalLabel"> Erro! </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      O formulário contém erros que necessitam ser verificados</MDBModalBody
    >
    <MDBModalFooter>
      <MDBBtn outline="danger" @click="$emit('close')">entendi</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script>
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { useModelWrapper } from "../ModelWrapper/ComputedModelWrapper";

export default {
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  },
  props: {
    modelValue: Boolean,
  },
  setup(props, { emit }) {
    return {
      errorModal: useModelWrapper(props, emit),
    };
  },
  emits: ["update:modelValue", "close"],
};
</script>
