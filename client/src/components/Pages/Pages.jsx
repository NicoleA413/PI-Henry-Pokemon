import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { setCurrentPage } from "../../redux/actions";

const Pages = ()=>{
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.pokemons);

  const currentPage = useSelector((state) => state.currentPage);

  const [pokemonsPerPage] = useState(12);

  const handleClick = (event) => {     
    dispatch(setCurrentPage(Number(event.target.id)));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(allPokemons.length / pokemonsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pageNumbers = pages.map((numbers) => {
    return (
      <li
      key={numbers}
      id={numbers}
      onClick={handleClick}
      >
      {numbers}
      </li>
    );
  });
    
  const handleNext = () => {
    if (currentPage + 1 <= pages.length) {
      dispatch(setCurrentPage(currentPage + 1));
    } else {
      return null;
    }
  };

  const handlePrev = () => {
    if (currentPage - 1 >= 1) {
      dispatch(setCurrentPage(currentPage - 1));
    } else {
      return null;
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={handlePrev}>PREV</button>
          </li>
    
          {pageNumbers}
    
          <li>
            <button onClick={handleNext}>NEXT</button>
          </li>
        </ul>
      </nav>
      
      <div >
        {
          currentPage
          ? Cards(currentPokemons)
          : <img 
            src="https://www.ytgraphics.com/wp-content/uploads/2014/12/pokmeon.jpg" 
            alt="pokemon banner"
            id= "1"
            onClick={handleClick} 
          />
        }
      </div>
    
      <nav>
        <ul>
          <li>
            <button onClick={handlePrev}>PREV</button>
          </li>
    
          {pageNumbers}
    
          <li>
            <button onClick={handleNext}>NEXT</button>
          </li>
        </ul>
      </nav>
    </>
  );
    
}

export default Pages;    