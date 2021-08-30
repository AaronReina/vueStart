<template>
  <div class="flex items-center justify-center total-container w-full">
    <div class="justify-content-center w-3/4">
      <table
        class="
          w-full
          flex flex-row flex-no-wrap
          sm:bg-white
          rounded-lg
          overflow-hidden
          sm:shadow-lg
          my-5
        "
      >
        <thead class="text-white">
          <tr
            v-bind:key="index"
            v-for="(item, index) in show"
            class="
              bg-red-400
              flex flex-col flex-no
              wrap
              sm:table-row
              rounded-l-lg
              sm:rounded-none
              mb-2
              sm:mb-0
            "
          >
            <th class="p-3 text-left">Nombre</th>
            <th class="p-3 text-left width=110px">Acciones</th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr
            v-bind:key="index"
            v-for="(item, index) in show"
            class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
          >
            <td class="border-grey-light border hover:bg-gray-100 p-3 ">
              {{ item.name }}
            </td>
            <td class="flex p-3 items-center justify-around ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                    h-6
                    w-6
                    text-green-400
                    hover:text-green-600 hover:font-medium
                    cursor-pointer
                  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="action2(item.name)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                v-if="!listFavorite.includes(item.name)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="action1(item.name)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>

              <svg
                v-if="listFavorite.includes(item.name)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-400 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                @click="action1(item.name)"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
        @click="changePage()"
      >
        atras
      </button>
      <button
        class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded ml-2 mb-2"
        @click="changePage('plus')"
      >
        alante
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  props: {
    list: { Array, default: [], required: true },
    listFavorite: { Array, default: [], required: true },
    msg: String,
    action1: { Function, required: false },
    action2: { Function, required: false },
  },
  data: function() {
    return {
      page: 0,
      max: 10,
      show: [],
    };
  },

  methods: {
    changePage(type) {
      if (type === "plus") {
        const start = (this.page + 1) * this.max;
        const end = start + this.max;
        if (end > this.list.length) {
          return;
        }
        this.show = this.list.slice(start, end);
        this.page++;
      } else {
        if (this.page > 0) {
          const start = (this.page - 1) * this.max;
          const end = start + this.max;
          this.show = this.list.slice(start, end);
          this.page--;
        }
      }
    },
  },
  watch: {
    list: function(newVal, oldVal) {
      this.show = newVal.slice(this.page, this.max);
    },
  },
});
</script>

<style scoped>
.total-container {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
