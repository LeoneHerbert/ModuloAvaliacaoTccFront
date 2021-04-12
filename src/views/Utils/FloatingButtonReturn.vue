<template>
  <div class="right">
    <a
      class="btn-floating btn-return waves-effect waves-light blue btn-absolute front-z-btn"
      @click="returnFront"
    >
      <i class="material-icons">keyboard_return</i>
    </a>
  </div>
</template>

<script>
export default {
  name: "FloatButtonReturn",
  methods: {
    returnFront() {
      this.$route.query.searchCourseName = null;
      this.$router.push({ name: "front-inner" });
    },
  },
};
</script>

<style lang="scss" scoped>
.front-z-btn {
  z-index: 99;
}

.btn-return {
  margin-right: 15%;
  margin-bottom: 1%;
}

.btn-absolute {
  position: absolute;
  top: 15%;
}

@media only screen and (max-width: 576px) {
  .collection-width-courses {
    width: 100%;
  }

  .btn-absolute {
    right: 0;
  }
}
</style>
