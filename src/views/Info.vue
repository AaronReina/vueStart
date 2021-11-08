<template>
  <div
    :v-if="state.pokemon"
    class="w-screen h-screen flex justify-center items-center"
  >
    <div
      class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white p-5"
    >
      <span class="text-2xl capitalize ">{{
        state.pokemon && state.pokemon.name
      }}</span>

      <div class="relative mb-6">
        <img
          class="w-full "
          :src="state.pokemon && state.pokemon.sprites.front_default"
          alt="Pokemon image"
        />
        <div class="text-center absolute w-full" style="bottom: -30px">
          <button
            @click="() => setFavorite(state.pokemon.name)"
            class="buttonPurple p-4 rounded-full transition ease-in duration-200 focus:outline-none"
          >
            <svg
              v-if="$store.state.favorites.includes(state.pokemon.name)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-400 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-if="!$store.state.favorites.includes(state.pokemon.name)"
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
          </button>
        </div>
      </div>
      <div class="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
        <div
          v-for="(item, index) in state.pokemon.stats"
          :key="index"
          class="posts"
        >
          <p class="text-lg">{{ item.base_stat }}</p>
          <p class="text-gray-400 text-sm">
            {{ item.stat.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.buttonPurple {
  background-color: #cb2c17;
  background-image: linear-gradient(315deg, #cb2c17 0%, #cb218e 74%);
  box-shadow: 0 0 0 0 #e400ec, 0.2rem 0.2rem 30px #cb2c17;
}
.buttonPurple:hover {
  box-shadow: 0 0 0 0 #e400ec, 0.2rem 0.2rem 60px #cb2c17;
}
</style>
<script lang="ts">
import { get } from "../services/calls";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";

export default {
  name: "Info",
  setup() {
    const store = useStore();
    const state = ref({ pokemon: null });

    const getPokemon = async () => {
      const route = useRoute();

      try {
        const response = await get(`/pokemon/${route.params.name}`);
        state.value.pokemon = response;
      } catch {
        console.log("error");
      }
    };
    const setFavorite = (data) => {
      store.dispatch("favoriteSelection", data);
    };

    onBeforeMount(() => {
      getPokemon();
    });

    return {
      state,
      getPokemon,
      setFavorite,
    };
  },

  components: {},
};
</script>
