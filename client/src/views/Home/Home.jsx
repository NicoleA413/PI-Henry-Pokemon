import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import { Link } from 'react-router-dom';
import SearchBar from "../../components/SearchBar/SearchBar";
import Pages from "../../components/Pages/Pages";


const Home = () => {

    const dispatch = useDispatch();
    const pokemonsCopia = useSelector((state) => state.allPokemons);

    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch]);

    function handleClick() {
        dispatch(getPokemons());
      }

    return (
        <div>
            <Link to="/">
              LANDING
            </Link>
            <h1>Estoy en el Home</h1>
            <SearchBar />
            <button onClick={(e) => {handleClick()}}>refresh</button>
            {/* <br /> */}
            {/* <Cards /> */}
            <Pages />
            
        </div>
    );
};

export default Home;