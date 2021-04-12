<template>
  <ul class="pagination mx-auto" v-show="totalItems">
    <li class="waves-effect" :class="{ disabled: !previous }" @click="movePrev">
      <a>
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
    <li
      :class="{ active: n === active, 'waves-effect': n !== active }"
      v-for="n in limitPages"
      :key="n"
    >
      <a @click="touchedLink(n)">{{ n }}</a>
    </li>
    <li class="waves-effect" :class="{ disabled: !next }" @click="moveNext">
      <a>
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
  </ul>
</template>

<script>
import { range } from "@/utils/arrays/range";

export default {
  name: "GabsPagination",
  data() {
    return {
      active: 1,
    };
  },
  props: {
    totalItems: {
      type: Number,
      default: 10,
    },
    itemsPerPage: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    limitPages() {
      if (this.active >= 3) {
        if (this.pages > this.active) {
          return range(this.active - 1, this.active + 1);
        }
        return range(this.active - 2, this.active);
      } else if (this.pages < 3) {
        return range(1, this.pages);
      }
      return range(1, 3);
    },
    previous() {
      if (this.pages === 1 || this.active === 1) {
        return false;
      }

      return true;
    },
    next() {
      if (this.pages === 1 || this.active === this.pages) {
        return false;
      }

      return true;
    },
  },
  methods: {
    touchedLink(item) {
      this.active = item;
      this.$emit("paginate-item", item);
    },
    movePrev() {
      if (this.previous) {
        this.active -= 1;
        this.$emit("paginate-item", this.active);
      }
    },
    moveNext() {
      if (this.next) {
        this.active += 1;
        this.$emit("paginate-item", this.active);
      }
    },
  },
};
</script>

<style>
.pagination {
  width: auto;
}
</style>