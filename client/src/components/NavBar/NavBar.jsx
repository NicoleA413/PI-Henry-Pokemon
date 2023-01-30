import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getNamePokemon, getPokemons } from '../../redux/actions';
import style from './NavBar.module.css'

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
    
    try {
        return (
            <nav className={style.nav}>
                <NavLink to='/pokemons'><button className={style.buttonNav}>HOME</button></NavLink>
                <div className={style.container}>
                    <input type="text" className={style.input} id="input" autoComplete="off" value={input} onChange={(event) => changeHandler(event)} placeholder="Find your pokemon..." />
                    <button className={style.buttonSearch} onClick={submitHandler}>SEARCH</button>
                    <button className={style.buttonReload} onClick={reloadHandler}>Reload</button>
                </div>
            
                <NavLink to='/create'><button className={style.buttonNav}>CREATE POKEMON</button></NavLink>

            </nav>
        );
    } catch (error) {
        return("Oops, algo ha salido mal");
    };
    
};

export default NavBar;