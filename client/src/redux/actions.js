import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";

export const GET_TYPES = "GET_TYPES";
export const POST_POKEMON = "POST_POKEMON";

export function getPokemons() {
    return async function (dispatch) {
    //   try {
        const json = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
          type: GET_POKEMONS,
          payload: json.data,
        });
    //   } catch (error) {
    //     return dispatch({
    //       type: SET_ERROR,
    //       payload: true,
    //     });
    //   }
    };
  }
// export const getPokemons = () => {
//     return async function(dispatch) {
//         const apiList = await axios.get("http://localhost:3001/pokemons");
//         const pokemons = apiList.data;

//         dispatch({
//             type: GET_POKEMONS,
//             payload: pokemons
//         });
//     };
// };

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

export function getTypes() {
    return async function (dispatch) {
      const json = await axios.get("/types");
      return dispatch({
        type: GET_TYPES,
        payload: json.data,
      });
    };
  }
  
  export function postPokemon(dataPokemon) {
    return async function (dispatch) {
      const json = await axios.post("/pokemons", dataPokemon);
      return json;
    };
  }