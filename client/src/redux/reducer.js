import {
    SET_ERROR, 
    GET_POKEMONS,
    GET_DETAIL,
    GET_DETAIL_FROM_STATE,
    GET_TYPES,
    POST_POKEMON,
    GET_NAME_POKEMON,
    SET_CURRENT_PAGE,
    EDIT_POKEMON
 } from './actions';

 const initialState = {
    pokemons: [],
    allPokemons: [],
    currentPage: 1,
    types: [],
    detail: [],
    error: "",
  };

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case GET_POKEMONS:
            if (!action.payload.includes(null)) {    
                return {
                     ...state, 
                     pokemons: action.payload,
                     allPokemons: action.payload,
                };
            } else {
                return { 
                    ...state,
                     error: action.payload 
                };
            };

        case GET_DETAIL:
            return {
                ...state,
                details: action.payload,
            };

        case GET_DETAIL_FROM_STATE:
            const pokemons = [...state.allPokemons];
            const pokemonDetail = pokemons.filter(
              (poke) => poke.id.toString() === action.payload
            );
            return {
              ...state,
              detail: pokemonDetail,
            };

        case GET_TYPES:
            return {
              ...state,
              types: action.payload,
            };
          
        case GET_NAME_POKEMON:
            return {
              ...state,
              pokemons: action.payload,
              currentPage: 1,
            };
          
        case POST_POKEMON:
            return {
              ...state,
            };

        case SET_CURRENT_PAGE:
            return {
              ...state,
              currentPage: action.payload,
            };

        case EDIT_POKEMON:
            return {
             ...state,
            };
            

        default:
            return { ...state };
    }
};

export default rootReducer;