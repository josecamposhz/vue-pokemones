<template>
  <div class="about">
    <h1>Lista de Pokemones</h1>
    <div v-if="loading" class="text-center my-3 d-flex justify-content-center">
      <b-spinner variant="primary" style="width: 5rem; height: 5rem" />
    </div>
    <div v-else class="row mx-0">
      <div class="col-12">
        <button
          class="btn btn-primary m-2"
          :disabled="offset == 0"
          @click="getPokemons(offset - 20)"
        >
          Anterior
        </button>
        <button class="btn btn-primary m-2" @click="getPokemons(offset + 20)">
          Siguiente
        </button>
      </div>
      <PokemonCard v-for="poke in pokemones" :key="poke.name" :pokemon="poke">
        {{ poke.name }}
      </PokemonCard>
    </div>
  </div>
</template>

<script>
import Pokemon from "@/models/Pokemon";
import PokemonCard from "@/components/PokemonCard";
import api from "@/services/api.service";
export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      offset: 0,
      loading: true,
      pokemones: [],
    };
  },
  mounted() {
    this.getPokemons(0);
  },
  methods: {
    async getPokemons(offset) {
      this.offset = offset;
      this.loading = true;
      const { data } = await api.all(`?limit=20&offset=${this.offset}`);
      this.pokemones = data.results;
      // for (let i = 0; i < this.pokemones.length; i++) {
      //   this.pokemones[i] = await this.getPokemon(this.pokemones[i].name);
      // }
      this.pokemones = await Promise.all(
        data.results.map((poke) => this.getPokemon(poke.name))
      );
      this.loading = false;
    },
    async getPokemon(name) {
      const { data } = await api.findByName(name);
      return new Pokemon(data);
    },
  },
};
</script>