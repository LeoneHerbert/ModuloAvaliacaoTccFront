<template>
  <ul :class="{ active: dropdownActive }" class="dropdown-content dropdown-nav">
    <slot>
      <li>Teste</li>
    </slot>
  </ul>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      mayOpen: false,
      recentCall: false,
    };
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dropdownActive() {
      return this.mayOpen;
    },
  },
  methods: {
    close(e) {
      if (!(this.$el.contains(e.target) || this.recentCall)) {
        this.$emit("close-dropdown");
        this.mayOpen = false;
      }
      this.recentCall = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close);
  },
  watch: {
    open(newValue) {
      this.recentCall = newValue;
      this.mayOpen = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-content {
  z-index: 100 !important;
}

.dropdown-nav {
  white-space: nowrap;
  position: absolute;
  top: 59.05px;
  left: 90px;
  display: none;
  opacity: 0.1;

  padding-top: 5px;
  width: 150px;
  overflow: inherit;
  transition: 1s all;
}

.dropdown-nav.active {
  display: block;
  opacity: 1;
}

.dropdown-nav > li {
  height: 20px;
  &.divider {
    height: 3px;
  }
}

.dropdown-nav > li > a {
  padding: 0;
}

.dropdown-nav > li > a > span {
  margin-right: 1rem;
}

.dropdown-nav > li > a > i.material-icons {
}
</style>
