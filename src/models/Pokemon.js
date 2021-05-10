export default class Pokemon {
    constructor(pokemon) {
        this.id = pokemon.id;
        this.name = pokemon.name;
        this.image = pokemon.sprites.other["official-artwork"].front_default;
        this.types = pokemon.types.map(({ type }) => type);
    }
}