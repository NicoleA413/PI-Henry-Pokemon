import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"

// const Card = (props) => {
//     return(
//         <div className={style.card}>
//             <img src={props.image} alt="front"></img>
//             <p>Name: {props.name}</p>
//             <p>Types: {props.types}</p>
//         </div>
//     );
// };

const Card = ({ name, image, types, id })=> {
    return (
        <div className={style.card}>
      <Link to={`/pokemons/${id}`} >
        <div >{name[0].toUpperCase() + name.slice(1)}</div>
        <img src={image} alt="imagen card" />
        <div>
          {types.map((type) => (
            <div key={id + type} className={type}>
              {type.toUpperCase()}
            </div>
          ))}
        </div>
      </Link>
    </div>
    );
  }

export default Card;