<template>
  <div>
    <div class="text-2xl text-white p-6 bg-red-400" id="nav">PokeList</div>
    <router-view />

    <div
      v-if="$store.state.spinner"
      class="
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
    "
    >
      <div
        style="border-top-color: transparent"
        class="
        w-16
        h-16
        border-4 border-red-400 border-double
        rounded-full
        animate-spin
      "
      ></div>
    </div>
    <div
      v-if="$store.state.error"
      @click="setError"
      class="
      bg-red-100
      border border-red-400
      text-red-700
      px-4
      py-3
      rounded
      relative
    "
      role="alert"
    >
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">Se ha producido un error</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import Table from "@/components/Table.vue"; // @ is an alias to /src
import {useStore} from "vuex";

export default {
  name: "App",
  setup() {
const store = useStore()
    return {
    setError: () => store.dispatch('setError',false)

    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
