import axios from 'axios';

class ApiPokemonService {
    constructor() {
        this.resource = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/pokemon/'
        })
    }

    all(offset) {
        return this.resource.get(`?limit=20&offset=${offset}`);
    }

    findByName(name) {
        return this.resource.get(`${name}`);
    }
}

export default new ApiPokemonService();