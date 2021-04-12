<template>
  <ul class="collapsible transparent" ref="collapsible">
    <li>
      <div class="collapsible-header white" @click="eventStop($event)">
        <slot name="header"></slot>
      </div>
      <div class="collapsible-body white">
        <slot name="body"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CollapsibleSearchBox",
  data() {
    return {
      collapsible: null,
      open: false,
    };
  },
  mounted() {
    const elemsCollapsible = this.$refs.collapsible;
    // eslint-disable-next-line no-undef,  no-unused-vars
    this.collapsible = M.Collapsible.init(elemsCollapsible);
  },
  methods: {
    eventStop(event) {
      event.stopPropagation();
    },
    toggleCollapse() {
      this.open ? this.collapsible.close() : this.collapsible.open();
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.collapsible {
  border-radius: 20px;
  border-left: none;
  border-right: none;
  border-radius: 20px;
}

.collapsible-header {
  border-radius: 20px 20px 0px 0px;
  padding: 0.5rem 1rem;
}

.collapsible-body {
  padding: 0px;
  border-radius: 0px 0px 20px 20px;
}
</style>
