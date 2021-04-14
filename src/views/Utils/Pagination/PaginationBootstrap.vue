<template>
  <nav class="bg-transparent mx-auto" aria-label="Page navigation">
    <ul class="pagination mx-auto">
      <li
        class="pagination-item"
        :class="isInFirstPage ? 'disabled' : 'waves-effect'"
        aria-label="Go to first page"
      >
        <a @click="onClickFirstPage" class="page-link">
          <i class="fas fa-backward"></i>
        </a>
      </li>

      <li
        class="pagination-item"
        :class="isInFirstPage ? 'disabled' : 'waves-effect'"
      >
        <a
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="page-link"
          aria-label="Go to previous page"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
      </li>

      <li
        v-for="(page, index) in pages"
        class="pagination-item"
        :key="index"
        :class="page.isDisabled ? 'disabled' : 'waves-effect'"
      >
        <a
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          :aria-label="`Go to page number ${page.name}`"
          :title="`${page.name} of ${totalPagesComputed}`"
          class="page-link"
        >
          {{ page.name }}
        </a>
      </li>

      <li
        class="pagination-item"
        :class="isInLastPage ? 'disabled' : 'waves-effect'"
      >
        <a
          @click="onClickNextPage"
          :disabled="isInLastPage"
          aria-label="Go to next page"
          class="page-link"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </li>

      <li
        class="pagination-item"
        :class="isInLastPage ? 'disabled' : 'waves-effect'"
        aria-label="Go to last page"
      >
        <a @click="onClickLastPage" class="page-link">
          <i class="fas fa-forward"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    /**
     * If total pages is set, this component will neither
     * calculate nor use the total and perPage attributes
     */
    totalPages: {
      type: Number,
      required: false,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPagesComputed) {
        const started = this.totalPagesComputed - this.maxVisibleButtons + 1;
        return Math.max(started, 1);
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPagesComputed
      );
    },
    totalPagesComputed() {
      if (!this.totalPages) {
        return Math.ceil(this.total / this.perPage);
      }
      return this.totalPages;
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPagesComputed;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      if (!this.isInFirstPage) {
        this.$emit("pagechanged", this.currentPage - 1);
      }
    },
    onClickPage(page) {
      if (this.currentPage !== page) {
        this.$emit("pagechanged", page);
      }
    },
    onClickNextPage() {
      if (!this.isInLastPage) {
        this.$emit("pagechanged", this.currentPage + 1);
      }
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPagesComputed);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #42a5f5;
  border-radius: 3px;
  color: white !important;
}
</style>
