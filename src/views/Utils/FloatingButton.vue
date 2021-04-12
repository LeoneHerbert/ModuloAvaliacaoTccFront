<template>
  <div class="right hide-on-small-only">
    <a
      class="btn-floating waves-effect waves-light red btn-absolute front-z-btn"
      @click="displayMenu"
    >
      <i class="material-icons">more_vert</i>
    </a>
    <a
      class="btn-floating waves-effect waves-light blue lighten-1 btn-absolute"
      ref="btn-add"
      @click="$emit('subscribe-me')"
    >
      <i class="material-icons">add</i>
    </a>
    <a
      class="btn-floating waves-effect waves-light red lighten-1 btn-absolute"
      ref="btn-return"
      @click="$router.go(-1)"
    >
      <i class="material-icons">keyboard_return</i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "closed",
      position: 0,
    };
  },
  name: "FloatButton",
  methods: {
    displayMenu() {
      if (this.mode === "closed") {
        Object.entries(this.$refs).forEach((array) => {
          this.position += 50;
          array[1].style.top = `${this.position}px`;
        });
        this.mode = "open";
      } else {
        this.position = 0;
        Object.entries(this.$refs).forEach((array) => {
          array[1].style.top = `${this.position}px`;
        });
        this.mode = "closed";
      }

      // array.forEach(element => {

      // });
    },
  },
};
</script>

<style>
.front-z-btn {
  z-index: 99;
}

.btn-absolute {
  position: absolute;
  right: 5px !important;
}
</style>