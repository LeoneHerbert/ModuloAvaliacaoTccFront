<template>
  <div class="search-component">
    <div class="search w-100">
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        v-on:input="updateValue($event.target.value)"
      />
      <div>
        <svg>
          <use xlink:href="#path"></use>
        </svg>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 28" id="path">
        <path
          d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
          transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
        ></path>
      </symbol>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
$color: black;

.search {
  display: table;
  input {
    background: none;
    border: none !important;
    box-shadow: none !important;
    outline: none;
    width: 100%;
    min-width: 0;
    padding: 0;
    z-index: 1;
    position: relative;
    // box-shadow: 0 1px 0 0 #4caf50;
    font-size: 14px;
    -webkit-appearance: none;
    font-family: "Roboto", sans-serif;
    transition: all 0.6s ease;
    cursor: pointer;
    color: $color;
    & + div {
      position: relative;
      height: 28px;
      width: 100%;
      margin: -35px 0 0 0;
      svg {
        display: block;
        position: absolute;
        height: 28px;
        width: 100%;
        right: 0;
        top: -5px;
        fill: none;
        stroke: $color;
        stroke-width: 1.5px;
        stroke-dashoffset: 212.908 + 59;
        stroke-dasharray: 59 212.908;
        transition: all 0.6s ease;
      }
    }
    &:not(:placeholder-shown),
    &:focus {
      width: 100%;
      padding: 0 4px;
      cursor: text;
      & + div {
        svg {
          stroke-dasharray: 150 212.908;
          stroke-dashoffset: 300;
        }
      }
    }
  }
}

// Center & dribbble
.search-component {
  font-family: "Roboto", sans-serif;
  // background: rgba($color: #f3628d, $alpha: 0.3);
  // background-color: #ff7575;
  background-color: rgba(#050938, 0);
  border-radius: 5px;
  padding: 5px 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  // box-shadow: 0 10px 20px -5px rgba(#050938, 0.7);

  ::selection {
    background: rgba(#000000, 0.3);
  }
  ::-moz-selection {
    background: rgba(#000000, 0.3);
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(#333, 0.9);
    opacity: 1; /* Firefox */
  }
}
</style>