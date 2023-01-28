import axios from "axios";

export const SET_ERROR = "SET_ERROR";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_NAME_POKEMON = "GET_NAME_POKEMON";
export const GET_DETAIL = "GET_DETAIL";
export const GET_DETAIL_FROM_STATE = "GET_DETAIL_FROM_STATE"
export const GET_TYPES = "GET_TYPES";
export const POST_POKEMON = "POST_POKEMON";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function getPokemons() {
    return async function (dispatch) {
      try {
        const apiList = await axios.get("http://localhost:3001/pokemons");
        const pokemons = apiList.data;

        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        });

      } catch (error) {
        return dispatch({
          type: SET_ERROR,
          payload: true,
        });
      }
    };
  }

export function getNamePokemon(namePokemon) {
  return async function (dispatch) {
    try {
      const apiList = await axios.get(`http://localhost:3001/pokemons?name=${namePokemon}`);
      const pokemon = apiList.data;
      return dispatch({
        type: GET_NAME_POKEMON,
        payload: pokemon,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
}

export const getDetail = (id) => {
    return async function(dispatch) {
        const apiList = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = apiList.data;

        dispatch({
            type: GET_DETAIL,
            payload: pokemon,
        });
    };
};

export function getDetailFromState(payload) {
  return {
    type: GET_DETAIL_FROM_STATE,
    payload,
  };
}

export function getTypes() {
    return async function (dispatch) {
      const apiList = await axios.get("http://localhost:3001/types");
      const types = apiList.data;
      return dispatch({
        type: GET_TYPES,
        payload: types,
      });
    };
  }
  
  export function postPokemon(dataPokemon) {
    return async function () {
      const api = await axios.post("/pokemons", dataPokemon);
      return api;
    };
  }

  export function setCurrentPage(payload) {
    return {
      type: SET_CURRENT_PAGE,
      payload,
    };
  }