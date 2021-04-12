<template>
  <div :class="{ loaded: !loading }" class="wrapper-container">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isLoading } from "@/store/helpers";

export default {
  name: "CircularLoader",
  computed: {
    ...isLoading,
  },
};
</script>

<style lang="scss" scoped>
@keyframes myAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
    transform: rotateY(0deg);
  }
  100% {
    display: none;
    opacity: 0;
    transform: rotateY(90deg);
  }
}

.wrapper-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(#000000, 0.2);
  transition: visibility 2s, opacity 1s linear;
  visibility: visible;

  &.loaded {
    animation-name: myAnimation;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
  }
}

.loaded > div {
  visibility: visible;
  opacity: 1;
}
</style>
