import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";

export const getPokemons = () => {
    return async function(dispatch) {
        const apiList = await axios.get("https://jsonplaceholder.typicode.com/users");
        const pokemons = apiList.data;

        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        });
    };
};

// export const getPokemon = (id) => {
//     return async function(dispatch) {
//         const apiList = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const pokemon = apiList.data;

//         dispatch({
//             type: GET_POKEMON,
//             payload: pokemon
//         });
//     };
// };