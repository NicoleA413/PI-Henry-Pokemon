import React, { useEffect } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getDetailFromState, deletePokemon, getPokemons } from "../../redux/actions";

const Detail = () => {
    const dispatch = useDispatch();
    
    const { id } = useParams();
  
    const pokemonDetail = useSelector((state) => state.detail);
  
    const allPokemons = useSelector((state) => state.pokemons);
  
    const history = useHistory();
  
    useEffect(() => {
      if (allPokemons.length) {
        dispatch(getDetailFromState(id));
      } else {
        dispatch(getDetail(id));
      }
    }, [dispatch, id, allPokemons.length]);
  
    const handlerDelete = () => {
      dispatch(deletePokemon(id));
      alert("Pokemon eliminado con éxito");
      history.push("/pokemons");
      dispatch(getPokemons());
    };

    return (
        <div>
            {pokemonDetail.length ? (
                <div>
                    <div>
                        <div>
                            <img src={pokemonDetail[0].image} alt="imagen-del-pokemon"/>
                        </div>

                        <div>
                            {pokemonDetail[0].name[0].toUpperCase() + pokemonDetail[0].name.slice(1)}
                        </div>

                        <div>
                            {pokemonDetail[0].types.map((t) => (
                                <div key={pokemonDetail[0].name + t}>{t.toUpperCase()}</div>
                            ))}
                        </div>

                        <div>ID #{pokemonDetail[0].id}</div>
                    </div>
                    
                    <div>
                        <div>
                            <div>Hp</div>
                            <div>{pokemonDetail[0].hp}</div>

                            <div>
                                <div style={{width: `${(pokemonDetail[0].hp / 150) * 100}%`}}></div>
                             </div>
                        </div>

                        <div>
                            <div>Attack</div>
                            <div>{pokemonDetail[0].attack}</div>

                            <div>
                                <div style={{width: `${(pokemonDetail[0].attack / 150) * 100}%`}}></div>
                            </div>
                        </div>

                        <div>
                            <div>Defence</div>
                            <div>{pokemonDetail[0].defence}</div>

                            <div>
                                <div style={{width: `${(pokemonDetail[0].defense / 150) * 100}%`}}></div>
                            </div>
                        </div>

                        <div>
                            <div>Speed</div>
                            <div>{pokemonDetail[0].speed}</div>

                            <div>
                                <div style={{width: `${(pokemonDetail[0].speed / 150) * 100}%`}}></div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div>Height</div>
                        <div>{pokemonDetail[0].height / 10} m</div>

                        <div>Weight</div>
                        <div>{pokemonDetail[0].weight / 10} kg</div>
                    </div>

                    {pokemonDetail[0].created && (
                        <div>
                            <NavLink to={`/pokemons/edit/${id}`}><button>Edit Pokemon</button></NavLink>

                            <button onClick={(e) => handlerDelete(e)}>Delete Pokemon</button>
                        </div>
                    )}
                </div>
            ) 
            : (
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="pokeball"/>
                </div>
            )}
        </div>
    );
};

export default Detail;