import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterCreated, filterByType, filterByName, filterByAttack, setCurrentPage } from "../../redux/actions";
import { NavLink } from 'react-router-dom';
import Pages from "../../components/Pages/Pages";

const Home = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const AllPokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);

    const [typeSelect, setTypeSelect] = useState({
         type: [], 
         origin: [], 
    });

    const [order, setOrder] = useState("");

    useEffect(()=>{
        if(!AllPokemons.length){
            dispatch(getPokemons());
            dispatch(getTypes()); 
        }
    },[dispatch, AllPokemons.length]);

//--------------------------------------------------HANDLERS--------------------------------------------

    let disabledSelect = !(!typeSelect.type.length);
    let disabledSelectCreated = !(!typeSelect.origin.length);

    const handleFilterCreated = (event) => {
        event.preventDefault();
        const value = event.target.value;

        dispatch(filterCreated(value));

        setTypeSelect({
            ...typeSelect,
            origin: [value],
        });
    };

    const handleFilterType = (event) => {
        const value = event.target.value

        if (value === "all") {
            dispatch(getPokemons());
        } else {
            event.preventDefault();

            dispatch(filterByType(value));
        };

        setTypeSelect({
            ...typeSelect,
            type: [value],
        });
    };

    const handleDeleteType = (event) => {
        event.preventDefault();

        setTypeSelect({
            type: [],
            origin: [],
        })

        window.location.reload();
        dispatch(getPokemons());
    }

    const handleFilterOrder = (event) => {
        const value = event.target.value

        if (value === "asc" || value === "des") {
            event.preventDefault();

            dispatch(filterByName(value));
            setCurrentPage(1);
            setOrder(`Ordenado por nombre ${value}`)
        }
        if (value === "strongest" || value === "weakest") {
            event.preventDefault();

            dispatch(filterByAttack(value));
            setCurrentPage(1);
            setOrder(`Ordenado por ${value}`)
        }

        if (value === "def") {
            event.preventDefault();

            dispatch(getPokemons());
            setCurrentPage(1);
            setOrder("Sin orden");
        }

        if (order.length < 0) {
            setOrder("")
        }
    }

//----------------------------------------------------VIEW----------------------------------------------

    return (
        <div>
            <NavLink to="/"><button>LANDING</button></NavLink>

            <h1>My Pokedex</h1>

            <div>
                <select onChange={handleFilterOrder} defaultValue="title">
                    <option value="title" disabled>Order</option>
                    <option value="def">Pokedex</option>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                    <option value="strongest">Strongest</option>
                    <option value="weakest">Weakest</option>
                </select>

                <select disabled={disabledSelectCreated} onChange={handleFilterCreated} defaultValue="all">
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="official">Official</option>
                </select>

                {typeSelect.origin?.map((origin, index) => {
                    return (
                        <div>
                            <div key={index}>
                                <button name={origin} key={origin} onClick={handleDeleteType}>{origin[0].toUpperCase() + origin.slice(1)}</button>
                            </div>
                        </div>
                    )
                })}

                <select disabled={disabledSelect} onChange={handleFilterType} defaultValue="all">
                    <option value="all">All Types</option>
                    {types.map(type => {
                        return <option value={type.name} key={type.id}>{type.name.toUpperCase()}</option>
                    })}
                </select>

                {typeSelect.type?.map((type, index) => {
                    return (
                        <div>
                            <div key={index}>
                                <button name={type} key={type} onClick={handleDeleteType}>{type.toUpperCase()}</button>
                            </div>
                        </div>
                    )
                })}

            </div>

            <Pages />        
        </div>
    );
};

export default Home;