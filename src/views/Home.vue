<template>
  <div>
    <InputStandar
      idString="filter"
      text="Introduce el nombre"
      :data="state"
      :change="filterPokemons"
    ></InputStandar>
    <Table
      :list="$store.state.filterPokeList"
      :action1="setFavorite"
      :action2="pokeInfo"
      :listFavorite="$store.state.favorites"
    />
  </div>
</template>

<script lang="ts">
import Table from "../components/Table.vue"; // @ is an alias to /src
import InputStandar from "../components/InputStandar.vue"; // @ is an alias to /src

import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();

    let state = {
      filter: "",
    };
    const filterPokemons = () => {
      store.dispatch("getFilterPokeList", state.filter);
    };
    const setFavorite = (data) => {
      store.dispatch("favoriteSelection", data);
    };

    const pokeInfo = (name) => {
      router.push(`/info/${name}`);
    };
    return {
      state,
      filterPokemons,
      setFavorite,
      pokeInfo,
    };
  },
  async beforeMount() {
    const store = useStore();
    await store.dispatch("getPokeList");
  },
  components: {
    Table,
    InputStandar,
  },
};
</script>
