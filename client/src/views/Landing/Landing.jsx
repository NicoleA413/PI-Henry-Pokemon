import { Link } from 'react-router-dom';
import main from "./pokemon.png";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Landing = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch]);
    
    return (
        <>
            <h1>Pokemon PI</h1>
            <img src={main} alt="pokemon" />
            <button><Link to='/home'>HOME</Link></button>
        </>
    );
};

export default Landing;