import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        hp: "",
        attack: "",
        defence: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        image: "",
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        if(property === "types"){
            if(value.includes(" ")){
                const array = value.split(" ");
                setForm({ ...form, [property]:array });
            }else if(value.includes(",")){
                const array = value.split(",");
                setForm({ ...form, [property]:array });                
            }else{
                setForm({ ...form, [property]:value });
            }
        }else{
            setForm({ ...form, [property]:value });
        }
        validate(property, value);

    }

    const [errors, setErrors] = useState({
        name: "",
        hp: "",
        attack: "",
        defence: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        image: "",
    })

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

            case "types":
                let input = value.split(",")
                const types = 
                ["normal", "fighting", "flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"]
                let validType = types.filter((e)=> input.includes(e))

                if(input.length > 2){
                    setErrors({...errors, types: "No se pueden poner más de 2 tipos a un Pokemon"})
                }else if(!validType.length){
                    setErrors({...errors, types: `debe ingresar un tipo válido`})
                }else {
                    setErrors({...errors, types: ""})
                }
                break;
        
            default:
                setErrors({...errors})
                break;
        }
        if(value === ""){
            setErrors({...errors, [property]: ""})
        }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/pokemons", form)
        .then(res=> alert("Pokemon creado con éxito"))
        .catch(err=> alert(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={changeHandler}/>
                <span>{errors.name}</span>
            </div>

            <div>
                <label>HP:</label>
                <input type="number" min="20" max="150" name="hp" value={form.hp} onChange={changeHandler} />
            </div>

            <div>
                <label>Attack:</label>
                <input type="number" min="10" max="150" name="attack" value={form.attack} onChange={changeHandler} />
            </div>

            <div>
                <label>Defence:</label>
                <input type="number" min="10" max="150" name="defence" value={form.defence} onChange={changeHandler} />
            </div>

            <div>
                <label>Speed:</label>
                <input type="number" min="10" max="150" name="speed" value={form.speed} onChange={changeHandler} />
            </div>

            <div>
                <label>Height:</label>
                <input type="number" min="1" max="50" name="height" value={form.height} onChange={changeHandler} />
            </div>
            
            <div>
                <label>Weight:</label>
                <input type="number" min="10" max="1000" name="weight" value={form.weight} onChange={changeHandler} />
            </div>

            <div>
                <label>Types:</label>
                <input type="text" name="types" value={form.types} onChange={changeHandler} />
                <span>{errors.types}</span>
            </div>

            <div>
                <label>Image:</label>
                <input type="text" name="image" value={form.image} onChange={changeHandler} />
            </div>

                <input type="submit" value="CREATE" onChange={changeHandler} />

        </form>
    );
};

export default Form;