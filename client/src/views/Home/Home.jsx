import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import { NavLink } from 'react-router-dom';
import Pages from "../../components/Pages/Pages";


const Home = () => {

    const dispatch = useDispatch();
    const pokemonsCopia = useSelector((state) => state.allPokemons);

    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]);

    return (
        <div>
            <NavLink to="/"><button>LANDING</button></NavLink>
            {/* <SearchBar /> */}
            {/* <button onClick={(e) => {handleClick()}}>refresh</button> */}
            {/* {Cards(pokemonsCopia)} */}
            <Pages />
            
        </div>
    );
};

export default Home;