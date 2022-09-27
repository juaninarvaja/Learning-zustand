import React, { useEffect } from 'react';
import usePokemonStore from '../zustand/pokemon';
import shallow from 'zustand/shallow'; //que hace shallow? cuadno paso el argumento al useStore, solo se va a renderizar
//si y solo si, cambia lo que este dentro del state

const Home = () => {

    //en useStore se guardara la sotre creada por create
    //get y set son opcionales

    // const useStore = create((set, get)=>({

    //         data: [],
    //         isLoading: false,
    //         getData: () => {
    //             const isLoading = get().isLoading; //por si necesito usar el valor en otro lado. get().isLoading = equivalente a un this.isLoading que NO se puede hacer
    //             set({data: await fetch() });  // cuanod uso getData seteo la data con lo q devuelva la api
    //         },

    // }));

    //useStore ahora puede ser consumido en forma de hook dentro de cualquier componente funcional.
    const { getPokemons, pokemons, isLoading, hasError, errorMessage } = usePokemonStore(state => ({
         getPokemons: state.getPokemons,
         pokemons: state.pokemons,
         isLoading: state.isLoading,
         hasError: state.hasError,
         errorMessage: state.errorMessage }), shallow); //solo si cambia getPoke.., ..., ..., errorMessage.

         useEffect( () => {
             getPokemons();
         }, []);

         const pokemonInfo = ()  => {
            let response = pokemons.map((poke, key) => {
                return  (
                    <div key={key}>
                <p>{poke.name}</p>
                    <a href={poke.url}> {poke.url }</a>
                    </div>
                 )}
             )
             return response;
         }

 return( <>
 <h1>Hola!</h1>
 {isLoading && 'Loading pokeApi...'}
{pokemonInfo()}
 {console.log(pokemons)}
  </>)
}
export default Home;