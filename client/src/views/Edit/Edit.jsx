import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { editPokemon, getDetail, getNamePokemon, getPokemons, getTypes, setError } from "../../redux/actions";

const Edit = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const allPokemons = useSelector((state) => state.pokemons);
    const pokeDetail = useSelector((state) => state.detail);
    const types = useSelector((state) => state.types);

    const [loading, setLoading] = useState("")

    const [form, setForm] = useState({
        name: pokeDetail[0].name ,
        hp: pokeDetail[0].hp ,
        attack: pokeDetail[0].attack ,
        defence: pokeDetail[0].defence ,
        speed: pokeDetail[0].speed ,
        height: pokeDetail[0].height ,
        weight: pokeDetail[0].weight ,
        image: pokeDetail[0].image ,
        types: pokeDetail[0].types ,
        created: true,
  });

    useEffect(() => {
        dispatch(getTypes());
        dispatch(getPokemons());
    }, [dispatch, allPokemons.length, id]);

  const [errors, setErrors] = useState({});

//-----------------------------------------VALIDATES------------------------------------------------

    let disabledButton =
    !(
        form.name.length &&
        form.hp &&
        form.attack &&
        form.defence &&
        form.speed &&
        form.types.length
    )

    const validate = (property, value) => {
        switch (property) {
            case "name":
                if(value.length >= 2 && value.length <= 20){
                    setErrors({...errors, name: ""})
                }    
                else{  	
                    setErrors({...errors, name: "El nombre debe contener entre 2 y 20 caracteres"});	
                   }  
                break;
            // case "image":
            //     /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/.test(form.image)
            //     ? setErrors({...errors, image: ""})
            //     : setErrors({...errors, image: "El URL de la imágen no es válido"});

            //     break;
            default:
                setErrors({...errors})
                break;
        }
        if(value === ""){
            setErrors({...errors, [property]: "campo necesario"})
        }
    }

//------------------------------------------HANDLERS--------------------------------------------------

const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]:value });
    validate(property, value);

    if(event.target.name === 'name' && event.target.value !== pokeDetail.name){
        setLoading("Loading");
        dispatch(getPokemons());
        dispatch(getDetail(id))
        dispatch(setError(false));
        setLoading("");
    }
}

const handleSelect = (event) => {
    if (!form.types.includes(event.target.value)) {
      setForm({
        ...form,
        types: [...form.types, event.target.value],
      });
    }
  };
  
const handleDeleteType = (event) => {
    setForm({
      ...form,
      types: form.types.filter((t) => t !== event),
    });
};

const submitHandler = (event) =>{
    event.preventDefault();
    dispatch(editPokemon(id, form));
        alert("Pokemon editado con éxito");
        setForm({
            "name": "",
            "hp": "",
            "attack": "",
            "defense": "",
            "speed": "",
            "height": "",
            "weight": "",
            "image": "",
            "types": [],
        });
        history.push(`/pokemons`)
        dispatch(getPokemons())
}

//--------------------------------------------FORM----------------------------------------------------
    return (
        <div>

            <Link to={`/pokemons/${id}`}>
          <button>Return to Pokemon</button>
            </Link>

            <div>
                <h1>EDIT POKEMON</h1>
            </div>
            
            <div>
                <div>
                    <img src={form.image} alt="imagen-del-pokemon"/>                  
                </div>
                
                <div>
                    <label for="image">Update image:</label>
                    <input type="url" id="image" placeholder="http://url.com/image.png" name="image" value={form.image} onChange={changeHandler} />
                    {errors.image && <span>{errors.image}</span>} 
                </div>

                <form onSubmit={submitHandler}>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" placeholder="pikachu" name="name" value={form.name} onChange={changeHandler}/>
                        {errors.name && <span>{errors.name}</span>}
                    </div>

                    <div>
                        <label for="hp">HP:</label>
                        <input type="number" id="hp" placeholder="50" min="20" max="150" name="hp" value={form.hp} onChange={changeHandler} />
                        {errors.hp && <span>{errors.hp}</span>}
                    </div>

                    <div>
                        <label for="attack">Attack:</label>
                        <input type="number" id="attack" placeholder="50" min="10" max="150" name="attack" value={form.attack} onChange={changeHandler} />
                        {errors.attack && <span>{errors.attack}</span>}
                    </div>

                    <div>
                        <label for="defence">Defence:</label>
                        <input type="number" id="defence" placeholder="50" min="10" max="150" name="defence" value={form.defence} onChange={changeHandler} />
                        {errors.defence && <span>{errors.defence}</span>}
                    </div>

                    <div>
                        <label for="speed">Speed:</label>
                        <input type="number" id="speed" placeholder="40" min="10" max="150" name="speed" value={form.speed} onChange={changeHandler} />
                        {errors.speed && <span>{errors.speed}</span>}
                    </div>

                    <div>
                        <label for="height">Height:</label>
                        <input type="number" id="height" placeholder="10" min="1" max="50" name="height" value={form.height} onChange={changeHandler} />
                        {errors.height && <span>{errors.height}</span>}
                    </div>
            
                    <div>
                        <label for="weight">Weight:</label>
                        <input type="number" id="weight" placeholder="100" min="10" max="1000" name="weight" value={form.weight} onChange={changeHandler} />
                        {errors.weight && <span>{errors.weight}</span>}
                    </div>

                    <div>
                        <select onChange={(e) => handleSelect(e)} disabled={form.types.length >= 2} defaultValue="title">
                            <option value="title" disabled name="types">Types</option>

                            {types.map((t) => {
                                return (
                                    <option value={t.name} key={t.name}>{t.name.toUpperCase()}</option>
                                );
                            })}
                
                        </select>

                        <ul>
                            {form.types.map((t) => {
                                return (
                                    <li key={t}>
                                        {t.toUpperCase()}
                                        <button onClick={() => handleDeleteType(t)}>x</button>
                                    </li>
                                );
                            })}
                        </ul>

                        {errors.types && <span>{errors.types}</span>}
                    </div>

                    < input type="submit" disabled={disabledButton} value="UPDATE"/>

                </form>
            </div>
        </div>
    );
};

export default Edit;