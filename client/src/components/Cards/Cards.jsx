import style from "./Cards.module.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Cards = () => {
    const pokemons = useSelector((state) => state.pokemons);

    return(
        <div className={style.cards}>
            {pokemons.map((poke) => {
                return <Card 
                    image = {poke.image}
                    name = {poke.name}
                    types = {poke.types}
                />
            })}
        </div>
    );
};

export default Cards;