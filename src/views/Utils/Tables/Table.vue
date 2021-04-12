<template>
  <div class="">
    <table class="responsive-table striped highlight table-class">
      <slot name="head">
        <table-head />
      </slot>
      <slot name="body">
        <table-body />
      </slot>
    </table>
  </div>
</template>

<script>
import TableBody from "./TableBody.vue";
import TableHead from "./TableHead.vue";
export default {
  components: { TableBody, TableHead },
};
</script>

<style lang="scss" scoped></style>
