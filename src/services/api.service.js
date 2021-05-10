import axios from 'axios';

class ApiPokemonService {
    constructor() {
        this.resource = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/pokemon/'
        })
    }

    all(page) {
        return this.resource.get(`?limit=20&offset=${page * 20}`);
    }

    findByName(name) {
        return this.resource.get(`${name}`);
    }
}

export default new ApiPokemonService();