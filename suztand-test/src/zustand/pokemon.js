import create from "zustand"

const usePokemonStore = create( (set, get) => ({
    getPokemons: async () => {
        try {
            set({hasError: false, errorMessage: '', isLoading: true})
            await fetch('https://pokeapi.co/api/v2/pokemon/').then((response) => response.json())
            .then((data) => {
              set({pokemons: data.results});
            })
        } catch (error) {
            set({pokemons:[], hasError: true, errorMessage: 'Algo ha pasado'})
        }
        finally {
            set({isLoading: false});
        }
    },
    pokemons: [],
    getPokemonsDetail: async () => {
        //bla
    },
    pokemonDetail: {},
    isLoading: false,
    errorMessage: '',
    hasError: false

}));

export default usePokemonStore;