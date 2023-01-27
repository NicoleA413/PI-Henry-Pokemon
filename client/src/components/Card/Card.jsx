import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <img src={props.image} alt="front"></img>
            <p>Name: {props.name}</p>
            <p>Types: {props.types}</p>
        </div>
    );
};

export default Card;