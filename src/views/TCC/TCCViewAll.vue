<template>
  <div class="content">
    <h1 class="h1 py-2">Processos de TCC</h1>
    <hr />
    <tcc-cards />
    <pre> {{ tccs }} </pre>
  </div>
</template>

<script>
import TccCards from "./TCCCards/PagePanelTCC";

export default {
  components: {
    TccCards,
  },
};
</script>

<style></style>
