<template>
  <div class="col-md-4">
    <div :class="`pokemon-card ${pokemon.types[0].name}`">
      <div class="pokemon-card__left">
        <span>{{ pokemon.name }}</span>
        <div class="pokemon-types">
          <span
            class="pokemon-type"
            v-for="type in pokemon.types"
            :key="type.name"
          >
            {{ type.name }}
          </span>
        </div>
      </div>
      <div class="pokemon-card__right">
        <span> #{{ pokemonId }} </span>
        <img
          class="card-img-top"
          style="max-height: 100px; max-width: 100px"
          :src="pokemon.image"
          :alt="pokemon.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Pokemon from "@/models/Pokemon";
export default {
  props: {
    pokemon: {
      required: true,
      type: Pokemon,
    },
  },
  computed: {
    pokemonId() {
      if (this.pokemon.id >= 100) return this.pokemon.id;
      if (this.pokemon.id >= 10) return `0${this.pokemon.id}`;
      return `00${this.pokemon.id}`;
    },
  },
};
</script>

<style>
</style>