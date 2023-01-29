import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getNamePokemon, getPokemons } from '../../redux/actions';

const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    
    const [input, setInput] = useState("");
    
    const changeHandler = (event) => {
        const value = event.target.value;
    
        setInput(value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getNamePokemon(input.toLowerCase()));
        setInput("");
    }
    
    const reloadHandler = (event) => {
        history.push("/pokemons")
        window.location.reload();
        dispatch(getPokemons());
        setInput("");
    }


    return (
        <nav>
            <NavLink to='/pokemons'><button>HOME</button></NavLink>
            <div>
                <input type="text" id="input" autoComplete="off" value={input} onChange={(event) => changeHandler(event)} placeholder="Find your pokemon..." />
                <button onClick={(event) => submitHandler(event)}>SEARCH</button> {/*Puede ser una pokeball */}
            </div>
            <button onClick={(event) => reloadHandler(event)}>Reload</button>
            <NavLink to='/create'><button>CREATE POKEMON</button></NavLink>

        </nav>
    );
};

export default NavBar;