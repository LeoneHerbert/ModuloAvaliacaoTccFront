<template>
  <div class="home py-5">
    <MDBRow>
      <message-notification />
      <techs />
    </MDBRow>
  </div>
</template>

<script>
import MessageNotification from "@/components/Cards/MessageNotification";
import { MDBRow } from "mdb-vue-ui-kit";
import Techs from "@/components/Cards/Techs.vue";

export default {
  name: "Home",
  components: {
    MessageNotification,
    MDBRow,
    Techs,
  },
};
</script>
