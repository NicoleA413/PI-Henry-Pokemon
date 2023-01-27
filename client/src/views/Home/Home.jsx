import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch]);

    return (
        <>
            <h1>Estoy en el Home</h1>
            <Cards />
        </>
    );
};

export default Home;